import {Component} from 'angular2/core';
import {SummaryPipe} from "./summary.pipe";

@Component({
    selector: 'my-app',
    template: `
        {{ post.title }}
        <br/>
        {{ post.body | summary:20 }}
    `,
    pipes: [SummaryPipe]
})
export class AppComponent {

    post = {
        title: 'Angular Tutorial for Beginners',
        body: `Lorem ipsum dolor sit amet, consectetur adpiscing elit. Aliquam 
            interdum ut ex. Sed ullamcorper, leo nec maximus vestibulum, aug
            pretium et vitae est.
        `
    }
}