import {Router} from 'aurelia-router';
import bootstrap from 'bootstrap';

export class App {
    static inject() { return [Router]; }
    constructor(router) {
        this.router = router;
        this.router.configure(config => {
            config.title = 'MCharts';
            config.map([
                { route: ['','calculated'], moduleId: 'calculated', nav: true },
                { route: 'graded', moduleId: 'graded', nav: true },
                { route: 'edit', moduleId: 'edit', nav: true }
            ]);
        });
    }
}
