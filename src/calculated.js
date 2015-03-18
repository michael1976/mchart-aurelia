import {staticMChart} from './util';

export class Calculated {

    // inject static data for now
    static inject() {return [staticMChart];}

    constructor(mchart) {
        this.heading = 'Calculated';

        this.mchartId = mchart.mchartId;
        this.name = mchart.name;
        this.state = mchart.state;
        this.blockMchart = mchart.blockMchart;
        this.hasEditAccessBasedOnRole = mchart.hasEditAccessBasedOnRole;
        this.hasQualityControlEditAccessBasedOnRole = mchart.hasQualityControlEditAccessBasedOnRole;
        this.copyable = mchart.copyable;
        this.dimensions = mchart.dimensions;
    }

    activate(params, queryString, routeConfig) {
        console.log('activating calculated view: ' +routeConfig);
    }
}