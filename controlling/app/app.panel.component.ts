import {Component} from 'angular2/core';
import {BootstrapPanel} from './bootstrap.panel.component';

@Component({
    selector: 'my-app',
    template: `
        <bs-panel>
            <div class="heading">This is the Heading!</div>
            <div class="body">This is the body!</div>
            <div class="body">This is the another body!</div>
        </bs-panel>
    `,
    directives: [BootstrapPanel]
})
export class AppComponent {

}