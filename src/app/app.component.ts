import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { NgRedux, select } from 'ng2-redux';

import { IAppState, CounterAction } from './store';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {

    //listening to store member 'select'
    @select() counter$: Observable<number>;

    constructor(
        private counterAction: CounterAction,
        private ngRedux: NgRedux<IAppState>
    ) {

        this.counter$.subscribe(val => {
            console.log(val);
        })
    }

    ngOnInit() {
    }

    increment(): void {
        this.counterAction.increment();
    }

    decrement(): void {
        this.counterAction.decrement();
    }
    double(): void {
        this.counterAction.double();
    }

}
