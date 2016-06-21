import {Component} from 'angular2/core';

@Component({
    selector: 'my-app',
    template: `
        <div (click)="onDivClick()">
            <button (click)="onClick($event)">Submit</button>
        </div>
    `
})
export class AppComponent {
    isActive = true;

    onDivClick(){
        console.log("Handled by Div");
    }

    onClick($event){
      $event.stopPropagation();
        console.log("Clicked", $event);
    }
}
