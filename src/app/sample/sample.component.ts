import { Component } from '@angular/core';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

@Component({
  selector: 'app-sample',
  templateUrl: './sample.component.html',
  styleUrl: './sample.component.css',
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class SampleComponent {
  ngOnInit() {
    const phoneButton: HTMLElement | null = document.querySelector('#phoneButton');

    if (phoneButton) {
      phoneButton.addEventListener('buttonClick', () => {
        console.log('Button clicked!');
      });
    }

  }
}
