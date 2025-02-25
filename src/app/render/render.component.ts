import { AfterViewInit, Component, Input, ViewChild,ElementRef } from '@angular/core';
import ComptDict from '../comp-dict';
import * as React from 'react';
import * as Babel from '@babel/standalone';
import { createRoot } from 'react-dom/client';
import { RenderServiceService } from '../../services/render-service.service';

@Component({
  selector: 'app-render',
  imports: [],
  templateUrl: './render.component.html',
  styleUrl: './render.component.css'
})
export class RenderComponent implements AfterViewInit {
  //This will take an codestring as input and render it within itself which will be passed fromt it's parent component app.component
  constructor (private renderservice : RenderServiceService) {}

  @Input() codeString: string = '';

  @ViewChild('container', { static: true }) containerRef!: ElementRef;

  ngAfterViewInit(): void {
    this.renderReactComponent(this.containerRef.nativeElement, this.codeString);
  }

  //Function for rendering React components
  async renderReactComponent(container: HTMLElement, codeString: string) {
    let mycode = this.renderservice.removeImportStatements(codeString);
    mycode = this.renderservice.removeExportStatements(mycode);
    const { dependencies, updatedCode } = this.renderservice.extractDependencies(mycode);
    const transpiledCode = Babel.transform(updatedCode, {
      presets: ['react', 'env', 'typescript'],
      filename: 'file.tsx'
    }).code;

    if (transpiledCode) {
      try {

        const dependenciesList = dependencies.map(dep => {
          const dependency = ComptDict[dep as keyof typeof ComptDict];
          return dependency;
        });

        const functionArgs = dependencies.join(', ');

        const MyComponent = new Function(functionArgs, `${transpiledCode};return MyComponent;`)(...dependenciesList);

        if (MyComponent) {
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
