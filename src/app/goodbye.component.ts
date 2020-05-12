import { Component, Input } from '@angular/core';

@Component({
  selector: 'goodbye',
  template: `<h1>Bye {{name}}!</h1>`,
  styles: [`h1 { font-family: Lato; }`]
})
export class GoodbyeComponent  {
  @Input() name: string;
}
