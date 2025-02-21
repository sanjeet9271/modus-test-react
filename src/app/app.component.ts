import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import * as React from 'react';
import { createRoot } from 'react-dom/client';
import * as Babel from '@babel/standalone';
import { AgentServiceService } from '../services/agent-service.service';
import ComptDict from "./comp-dict"
import { html_code, typescript_code,code_string } from './code-snippets';
import { v4 as uuidv4 } from 'uuid'; 

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  @ViewChild('renderContainer', { static: false }) renderContainer!: ElementRef;
  codeString: string = "";
  sessionId: string = uuidv4();

  constructor(private AgentService: AgentServiceService) {
  }

  public agent__name = "morphea2r";

  removeImportStatements(code: string) {
    return code.split('\n').filter(line => !line.trim().startsWith('import')).join('\n');
  }

  private extractCodeBlocks(input: string): {code: string, language: string }[] {
    const codeBlockPattern = /```(\w+)\n([\s\S]*?)```/g;
    const matches: { language: string, code: string }[] = [];
    let match;
  
    while ((match = codeBlockPattern.exec(input)) !== null) {
      const language = match[1];
      const code = match[2].trim();
      matches.push({ language, code });
    }
  
    return matches;
  }
  

  extractDependencies = (code: string) => {
    const lines = code.split('\n');
    const dependenciesLineIndex = lines.findIndex(line => line.trim().startsWith('// Dependencies:'));

    let dependencies: string[] = [];
    if (dependenciesLineIndex !== -1) {
      const dependenciesLine = lines[dependenciesLineIndex];
      const dependenciesString = dependenciesLine.split(':')[1].trim();

      dependencies = dependenciesString
        .slice(1, -1)
        .split(/',\s*'/) 
        .map(dep => dep.replace(/'/g, '')); 

      lines.splice(dependenciesLineIndex, 1);
    }

    const updatedCode = lines.join('\n');
    return { dependencies, updatedCode };
  };

  async getCode(): Promise<string> {
    let message_string = `1. \`\`\`html\n${html_code}\n\`\`\` 2. \`\`\`typescript\n${typescript_code}\n\`\`\` Convert the above into Modus React Component`;

    const response = await this.AgentService.GetGeneralAssistantResponse(this.agent__name, message_string,this.sessionId) as string;
    return response;
  }

  ngOnInit() {}

  async renderReactComponent() {
    // this.codeString = await this.getCode();
    // console.log("The code strinsfsdfg is:\n ",this.codeString)
    // this.codeString = this.extractCodeBlocks(this.codeString)[0].code
    this.codeString = code_string;
    console.log("The code string is:\n ",this.codeString)
    let mycode = this.removeImportStatements(this.codeString);
    const { dependencies, updatedCode } = this.extractDependencies(mycode);
    const transpiledCode = Babel.transform(updatedCode, {
      presets: ['react', 'env', 'typescript'],
      filename: 'file.tsx'
    }).code;

    if (transpiledCode) {
      try {
        // Extract the dependencies from ComptDict based on dependencies_list
        const dependenciesList = dependencies.map(dep => {
          const dependency = ComptDict[dep as keyof typeof ComptDict];
          return dependency;
        });

        const functionArgs = dependencies.join(', ');

        const MyComponent = new Function(functionArgs, `${transpiledCode};return MyComponent;`)(...dependenciesList);

        if (MyComponent) {
          const container = this.renderContainer.nativeElement;
          const root = createRoot(container);
          root.render(React.createElement(MyComponent));
        } else {
          console.error('MyComponent is not defined.');
        }
      } catch (error) {
        console.error('Error executing transpiled code:', error);
      }
    } else {
      console.error('Transpilation failed.');
    }
  }
}

