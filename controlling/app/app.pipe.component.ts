import {Component} from 'angular2/core';

@Component({
    selector: 'my-app',
    template: `
        {{ course.title | uppercase | lowercase }}
        <br/>
        {{ course.students | number }}
        <br/>
        {{ course.rating | number:'2.2-2' }}
        <br/>
        {{ course.price | currency:'AUD':true:'2.2-2' }}
        <br/>
        {{ course.releaseDate | date:'MMM yyyy' }}
        <br/>
        {{ course | json }}
    `
})
export class AppComponent {

    course = {
        title: 'Angular 2 for Beginners',
        rating: 4.9745,
        students: 5981,
        price: 99.95,
        releaseDate: new Date(2016, 3, 1)
    }
}