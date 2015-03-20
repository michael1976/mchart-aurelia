import {staticMChart} from './util';

export class Calculated {

    // inject static data for now
    static inject() {return [staticMChart];}

    constructor(mchart) {
        this.heading = 'Calculated';

        this.mchart = {};
        this.mchart.mchartId = mchart.mchartId;
        this.mchart.name = mchart.name;
        this.mchart.state = mchart.state;
        this.mchart.blockMchart = mchart.blockMchart;
        this.mchart.hasEditAccessBasedOnRole = mchart.hasEditAccessBasedOnRole;
        this.mchart.hasQualityControlEditAccessBasedOnRole = mchart.hasQualityControlEditAccessBasedOnRole;
        this.mchart.copyable = mchart.copyable;
        this.mchart.dimensions = mchart.dimensions;
    }

    activate(params, queryString, routeConfig) {
        console.log('activating calculated view: ' +routeConfig);
    }
}