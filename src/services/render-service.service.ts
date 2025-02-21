import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RenderServiceService {

  constructor() { }

  public extractDependencies = (code: string) => {
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


  public removeImportStatements(code: string) {
    return code.split('\n').filter(line => !line.trim().startsWith('import')).join('\n');
  }

  public removeExportStatements(code: string) {
    return code.split('\n').filter(line => !line.trim().startsWith('export')).join('\n');
  }

  
}
