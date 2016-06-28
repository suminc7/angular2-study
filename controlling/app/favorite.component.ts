import {Component} from 'angular2/core';

@Component({
    selector: 'my-app',
    template: `
        <i
            class="glyphicon"
            [ngClass]="{
                'glyphicon-star-empty': !isFavorite,
                'glyphicon-star': isFavorite
            }"
            (click)="onClick()"
        ></i>
        
    `
})
export class AppComponent {

    isFavorite = false;

    onClick(){
        this.isFavorite = !this.isFavorite;
    }
}