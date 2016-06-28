import {Component} from 'angular2/core';
import {NgClass} from 'angular2/common';
@Component({
    selector: 'toggle-button',
    inputs: ['isDisabled'],
    template: `
     <div class="button" [ngClass]="{active: isOn, disabled: isDisabled}"
         (click)="toggle(!isOn)">
         Click me!
     </div>`,
    styles: [`
    .button {
      width: 120px;
      border: medium solid black;
    }
    .active {
      background-color: red;
   }
    .disabled {
      color: gray;
      border: medium solid gray;
    }
  `],
    directives: [NgClass]
})
export class ToggleButton {
    isOn = false;
    isDisabled = false;
    toggle(newState) {
        if (!this.isDisabled) {
            this.isOn = newState;
        }
    }
}
