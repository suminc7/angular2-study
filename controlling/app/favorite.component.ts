import {Component} from 'angular2/core';
import {ToggleButton} from './toggle.button';

@Component({
    selector: 'my-app',
    template: `
        <toggle-button></toggle-button>
        <i
            class="glyphicon"
            [ngClass]="{
                'glyphicon-star-empty': !isFavorite,
                'glyphicon-star': isFavorite
            }"
            (click)="onClick()"
        ></i>
        
    `,
    directives: [ToggleButton]
})
export class AppComponent {

    isFavorite = false;

    onClick(){
        this.isFavorite = !this.isFavorite;
    }
}