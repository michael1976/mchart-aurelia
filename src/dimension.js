import {Behavior} from 'aurelia-framework';

//import {LogManager} from 'aurelia-logging';

//var logger = LogManager.getLogger("dimension");

export class Dimension {

    // telling the framework which properties are available on custom element
    static metadata() {
        return Behavior.withProperty('item');
    }

    // the compose element will call this and pass in each dimension
    //activate(dimension) {
    //    this.enoviaId = dimension.enoviaId;
    //    this.baseDimension = dimension.baseDimension;
    //    this.sortOrder = dimension.sortOrder;
    //    this.referenceDimensionId = dimension.referenceDimensionId;
    //    this.poms = dimension.poms;
    //}

    sizeNames() {
        //TODO: do I need to filter out dupliates? then use Set.add()
        var sizeNames = new Set()
        for (let pom of this.item.poms) {
            for (let size of pom.sizes) {
                sizeNames.add(size.sizeName);
            }
        }
        return Array.from(sizeNames)
    }

    toggleBaseSize(size) {
        console.log('setting ' + size.enoviaId+ ' to baseSize');
        // TODO: find size under poms
        // TODO: toggle it as baseSize and deactivate the others
    }

    addSize() {
        for (var pom of this.item.poms) {
            pom.sizes.push({});
            console.log('adding size to pom '+pom.enoviaId);
        }
    }

}