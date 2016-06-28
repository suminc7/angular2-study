import {Component} from 'angular2/core';

@Component({
    selector: 'my-app',
    template: `
        <ul>
            <li *ngFor="#course of courses, #i = index">
                {{ i + 1 }} - {{ course }}
            </li>
            
            <template ngFor [ngForOf]="courses" #course #i=index>
                <li> {{ i + 1 }} - {{ course }}</li>
            </template>
        </ul>
    `
})
export class AppComponent {

    courses = ['Course 1', 'Course 2', 'Course 3'];
}