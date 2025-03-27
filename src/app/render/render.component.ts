import { AfterViewInit, Component, Input, ViewChild, ElementRef,SimpleChanges } from '@angular/core';
import ComptDict from '../comp-dict';
import * as React from 'react';
import * as Babel from '@babel/standalone';
import { createRoot } from 'react-dom/client';
import { RenderServiceService } from '../../services/render-service.service';
import { MarkdownPipe } from '../markdown.pipe';
import { CountService } from '../../services/count-service.service';

@Component({
  selector: 'app-render',
  templateUrl: './render.component.html',
  styleUrls: ['./render.component.css'],
  standalone: true,
  imports: [MarkdownPipe]
})
export class RenderComponent implements AfterViewInit {

  constructor(private renderservice: RenderServiceService,private countservice: CountService) {}

  @Input() data: any = {};

  @ViewChild('container', { static: true }) containerRef!: ElementRef;

  ngAfterViewInit(): void {
    this.renderReactComponent(this.containerRef.nativeElement, this.data.response);
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['data'] && !changes['data'].isFirstChange()) {
      this.renderReactComponent(this.containerRef.nativeElement, this.data.response);
    }
  }

  private extractCodeBlocks(input: string): string {
    const startMarker = '```';
    const endMarker = '```';
    const markerIndex = input.indexOf(startMarker);
    if (markerIndex === -1) {
      return '';
    }
    const startIndex = markerIndex + startMarker.length;
    const endOfFirstLineIndex = input.indexOf('\n', startIndex);
    if (endOfFirstLineIndex === -1) {
      return '';
    }
    const endIndex = input.indexOf(endMarker, endOfFirstLineIndex);
    if (endIndex === -1) {
      return '';
    }
    return input.substring(endOfFirstLineIndex + 1, endIndex).trim();
  }

  // Function for rendering React components
  async renderReactComponent(container: HTMLElement, codeString: string) {
    this.countservice.incrementTotal();
    let varcode = this.extractCodeBlocks(codeString);
    console.log(varcode);
    let mycode = this.renderservice.removeImportStatements(varcode);
    mycode = this.renderservice.removeExportStatements(mycode);
    const transpiledCode = Babel.transform(mycode, {
      presets: ['react', 'env', 'typescript'],
      filename: 'file.tsx'
    }).code;

    if (transpiledCode) {
      try {
        const functionArgs = Object.keys(ComptDict).join(', ');
        const dependenciesList = Object.keys(ComptDict).map(key => (ComptDict as any)[key]);
        const MyComponent = new Function(functionArgs, `${transpiledCode};return MyComponent;`)(...dependenciesList);

        if (MyComponent) {
          const root = createRoot(container);
          root.render(React.createElement(MyComponent));
          this.countservice.incrementSuccess();
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
