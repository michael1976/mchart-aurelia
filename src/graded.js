import {staticMChart} from './util';

export class Graded {

    // inject static data for now
    static inject() {return [staticMChart];}

    constructor(mchart) {
        this.heading = 'Graded';

        this.mchartId = mchart.mchartId;
        this.name = mchart.name;
        this.state = mchart.state;
        this.blockMchart = mchart.blockMchart;
        this.hasEditAccessBasedOnRole = mchart.hasEditAccessBasedOnRole;
        this.hasQualityControlEditAccessBasedOnRole = mchart.hasQualityControlEditAccessBasedOnRole;
        this.copyable = mchart.copyable;
        this.dimensions = mchart.dimensions;
    }

    activate() {
        console.log('activating graded view');
    }
}