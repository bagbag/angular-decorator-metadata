import 'reflect-metadata/lite';

import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

function Property(): PropertyDecorator {
  return function (_target: Object, _propertyKey: string | symbol): void { /* noop */ }
}

class Model {
  @Property()
  name!: string;
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  template: `
  @if (designType) {
    <div>Design type: {{ designType.name }}</div>
  }
  @else {
    <div>Could not get design type</div>
  }
  `,
  styles: [],
})
export class AppComponent {
  readonly designType = Reflect.getMetadata('design:type', Model.prototype, 'name');
}
