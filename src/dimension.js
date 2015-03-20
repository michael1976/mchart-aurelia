import {Behavior} from 'aurelia-framework';

import _ from 'lodash'
import sortable from 'sortable';

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
     * get all sizes objects from first pom
     */
    allSizes() {
        return _.chain(this.poms).pluck('sizes').first().value();
    }

    toggleBaseSize(sizeName) {
        _.chain(this.poms)
        .pluck('sizes')
        .flatten()
        .map(size => {
                // if size with sizeName found then set baseSize to true
                size.baseSize = sizeName === size.sizeName;
            })
        .value();
    }

    addSize() {
        for (var pom of this.poms) {
            pom.sizes.push({});
            console.log('adding size to pom '+pom.enoviaId);
        }
    }

    removeSize(size) {
        //TODO:
    }

    attached() {
        if (this.el) {
            sortable.create(this.el, {
                handle: '.dynamicTableMoveRowButton',
                animation: 200,
                ghostClass: 'ghost'
            })
        }
    }

}