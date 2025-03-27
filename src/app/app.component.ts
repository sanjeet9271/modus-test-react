import { Component,ViewChildren, QueryList, ElementRef} from '@angular/core';
import {CodeStrings } from './code-snippets';
import { CommonModule } from '@angular/common'
import { RenderComponent } from './render/render.component';
import Complete_Prompts from "./Complete_Prompts.json";
import { CountService } from '../services/count-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  imports: [CommonModule, RenderComponent]
})
export class AppComponent{
  codeStrings: any[] = [];
  currentIndex: number = 0;
  constructor(private countservice: CountService) {}

  ngOnInit() {
    this.codeStrings = Complete_Prompts;
  }

  get containers() {
    return Array.from({ length: this.codeStrings.length }, (_, i) => i);
  }

  get totalComponents() {
    return this.countservice.getTotal();
  }

  get successfulRenders() {
    return this.countservice.getSuccess();
  }

  get failedRenders() {
    return this.countservice.getFailure();
  }

  get successPercentage() {
    return this.countservice.getSuccessPercentage();
  }

  nextComponent(): void {
    if (this.currentIndex < this.codeStrings.length - 1) {
      this.currentIndex++;
    }
  }

  prevComponent(): void {
    if (this.currentIndex > 0) {
      this.currentIndex--;
    }
  }
  
}




/* --------------Backup here---------

export class AppComponent implements OnInit, AfterViewInit {
  
  @ViewChildren('renderContainer') renderContainers!: QueryList<ElementRef>;
  codeStrings: string[] = CodeStrings;

  // sessionId: string = uuidv4();

  // constructor(private AgentService: AgentServiceService) {}

  // public agent__name = "morphea2r";

  // removeImportStatements(code: string) {
  //   return code.split('\n').filter(line => !line.trim().startsWith('import')).join('\n');
  // }

  // private extractCodeBlocks(input: string): { code: string, language: string }[] {
  //   const codeBlockPattern = /```(\w+)\n([\s\S]*?)```/g;
  //   const matches: { language: string, code: string }[] = [];
  //   let match;

  //   while ((match = codeBlockPattern.exec(input)) !== null) {
  //     const language = match[1];
  //     const code = match[2].trim();
  //     matches.push({ language, code });
  //   }

  //   return matches;
  // }

  get containers() {
    return Array.from({ length: this.codeStrings.length }, (_, i) => i);
  }

  // async renderReactComponents() {
  //   console.log(this.renderContainers)
  //   this.renderContainers.forEach((containerRef, index) => {
  //     const codeString = this.codeStrings[index];
  //     console.log(`${index}: ${codeString}`);
  //     this.renderReactComponent(containerRef.nativeElement, codeString);
  //   });
  // }

  // extractDependencies = (code: string) => {
  //   const lines = code.split('\n');
  //   const dependenciesLineIndex = lines.findIndex(line => line.trim().startsWith('// Dependencies:'));

  //   let dependencies: string[] = [];
  //   if (dependenciesLineIndex !== -1) {
  //     const dependenciesLine = lines[dependenciesLineIndex];
  //     const dependenciesString = dependenciesLine.split(':')[1].trim();

  //     dependencies = dependenciesString
  //       .slice(1, -1)
  //       .split(/',\s*'/)
  //       .map(dep => dep.replace(/'/g, ''));

  //     lines.splice(dependenciesLineIndex, 1);
  //   }

  //   const updatedCode = lines.join('\n');
  //   return { dependencies, updatedCode };
  // };

  // async getCode(): Promise<string> {
  //   let message_string = `1. \`\`\`html\n${html_code}\n\`\`\` 2. \`\`\`typescript\n${typescript_code}\n\`\`\` Convert the above into Modus React Component`;

  //   const response = await this.AgentService.GetGeneralAssistantResponse(this.agent__name, message_string, this.sessionId) as string;
  //   return response;
  // }

  ngOnInit() {}

  ngAfterViewInit() {
  }

  // async renderReactComponent(container: HTMLElement, codeString: string) {
  //   let mycode = this.removeImportStatements(codeString);
  //   const { dependencies, updatedCode } = this.extractDependencies(mycode);
  //   const transpiledCode = Babel.transform(updatedCode, {
  //     presets: ['react', 'env', 'typescript'],
  //     filename: 'file.tsx'
  //   }).code;

  //   if (transpiledCode) {
  //     try {
  //       const dependenciesList = dependencies.map(dep => {
  //         const dependency = ComptDict[dep as keyof typeof ComptDict];
  //         return dependency;
  //       });

  //       const functionArgs = dependencies.join(', ');

  //       const MyComponent = new Function(functionArgs, `${transpiledCode};return MyComponent;`)(...dependenciesList);

  //       if (MyComponent) {
  //         const root = createRoot(container);
  //         root.render(React.createElement(MyComponent));
  //       } else {
  //         console.error('MyComponent is not defined.');
  //       }
  //     } catch (error) {
  //       console.error('Error executing transpiled code:', error);
  //     }
  //   } else {
  //     console.error('Transpilation failed.');
  //   }
  // }
}

 */