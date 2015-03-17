import {staticMChart} from './util';

export class MChart {
    // inject static data for now
    static inject() {return [staticMChart];}

    // props
    constructor(mchart) {
        this.mchartId = mchart.mchartId;
        this.name = mchart.name;
        this.state = mchart.state;
        this.blockMchart = mchart.blockMchart;
        this.hasEditAccessBasedOnRole = mchart.hasEditAccessBasedOnRole;
        this.hasQualityControlEditAccessBasedOnRole = mchart.hasQualityControlEditAccessBasedOnRole;
        this.copyable = mchart.copyable;
        this.dimensions = mchart.dimensions;
    }

    // called by framework just before view-model is displayed
    activate() {
        //TODO:  initialize MChart
        //this.http.json(url).then(response => {
        //  this.mchart
        //})
    }

    //TODO: For now hardcoded to first dimension
    addRow() {
        this.dimensions[0].poms.push({enoviaId: 'xyz'});
    }

}