import { Component } from '@angular/core';

/**
 * Generated class for the CreateComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'create',
  templateUrl: 'create.html'
})
export class CreateComponent {

  text: string;

  constructor() {
    console.log('Hello CreateComponent Component');
    this.text = 'Hello World';
  }

}
