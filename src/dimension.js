import {Behavior} from 'aurelia-framework';

import _ from 'lodash'

//import {LogManager} from 'aurelia-logging';

//var logger = LogManager.getLogger("dimension");

export class Dimension {

    // the compose element will call this and pass in each dimension
    activate(dimension) {
        this.enoviaId = dimension.enoviaId;
        this.baseDimension = dimension.baseDimension;
        this.sortOrder = dimension.sortOrder;
        this.referenceDimensionId = dimension.referenceDimensionId;
        this.poms = dimension.poms;
    }

    /**
     * flatten array ->
     * get value sizeName from all elements ->
     * filter down to unique values
     */
    sizeNames() {
        return _.chain(this.poms)
            .pluck('sizes')
            .flatten()
            .pluck('sizeName')
            .uniq()
            .value();
    }

    /**
     * update all sizes on this dimension
     */
    toggleBaseSize(sizeName) {
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