import {Dimension} from '../../src/dimension';
import {staticMChart} from '../../src/util';

var dimension = {
    "enoviaId": "48352.32064.7728.43634",
    "baseDimension": true,
    "sortOrder": 0,
    "referenceDimensionId": null,
    "poms": [
        {
            "enoviaId": "48352.32064.62888.30433",
            "relId": "48352.32064.13440.37299",
            "name": "POM10022",
            "sortOrder": 0,
            "description": "Back length",
            "grading": "",
            "comment": "",
            "qualityControl": false,
            "libPOM": true,
            "diagPOM": false,
            "edited": false,
            "calculable": true,
            "sizes": [
                {
                    "enoviaId": "48352.32064.51728.28093",
                    "gradeRelId": "48352.32064.13440.38105",
                    "sizeName": "S",
                    "measurementValue": "68",
                    "gradeValue": "-2",
                    "dimension": "",
                    "sortOrder": 0,
                    "baseSize": false,
                    "sizeSortOrder": 300
                },
                {
                    "enoviaId": "48352.32064.51728.43846",
                    "gradeRelId": "48352.32064.13440.39389",
                    "sizeName": "M",
                    "measurementValue": "70",
                    "gradeValue": "0",
                    "dimension": "",
                    "sortOrder": 1,
                    "baseSize": true,
                    "sizeSortOrder": 295
                },
                {
                    "enoviaId": "48352.32064.51728.34050",
                    "gradeRelId": "48352.32064.13440.42619",
                    "sizeName": "L",
                    "measurementValue": "72",
                    "gradeValue": "2",
                    "dimension": "",
                    "sortOrder": 2,
                    "baseSize": false,
                    "sizeSortOrder": 291
                }
            ]
        },
        {
            "enoviaId": "48352.32064.62888.61366",
            "relId": "48352.32064.28520.48267",
            "name": "POM10016",
            "sortOrder": 1,
            "description": "Back rise",
            "grading": "",
            "comment": "",
            "qualityControl": false,
            "libPOM": true,
            "diagPOM": false,
            "edited": false,
            "calculable": true,
            "sizes": [
                {
                    "enoviaId": "48352.32064.51728.28093",
                    "gradeRelId": "48352.32064.28520.51353",
                    "sizeName": "S",
                    "measurementValue": "36",
                    "gradeValue": "-4",
                    "dimension": "",
                    "sortOrder": 0,
                    "baseSize": false,
                    "sizeSortOrder": 300
                },
                {
                    "enoviaId": "48352.32064.51728.43846",
                    "gradeRelId": "48352.32064.28520.53195",
                    "sizeName": "M",
                    "measurementValue": "40",
                    "gradeValue": "0",
                    "dimension": "",
                    "sortOrder": 1,
                    "baseSize": true,
                    "sizeSortOrder": 295
                },
                {
                    "enoviaId": "48352.32064.51728.34050",
                    "gradeRelId": "48352.32064.28520.53915",
                    "sizeName": "L",
                    "measurementValue": "44",
                    "gradeValue": "4",
                    "dimension": "",
                    "sortOrder": 2,
                    "baseSize": false,
                    "sizeSortOrder": 291
                }
            ]
        },
        {
            "enoviaId": "48352.32064.62888.29325",
            "relId": "48352.32064.28520.54239",
            "name": "POM10009",
            "sortOrder": 2,
            "description": "Bottom back",
            "grading": "",
            "comment": "",
            "qualityControl": false,
            "libPOM": true,
            "diagPOM": false,
            "edited": false,
            "calculable": true,
            "sizes": [
                {
                    "enoviaId": "48352.32064.51728.28093",
                    "gradeRelId": "48352.32064.28520.58061",
                    "sizeName": "S",
                    "measurementValue": "44",
                    "gradeValue": "-1",
                    "dimension": "",
                    "sortOrder": 0,
                    "baseSize": false,
                    "sizeSortOrder": 300
                },
                {
                    "enoviaId": "48352.32064.51728.43846",
                    "gradeRelId": "48352.32064.28520.59044",
                    "sizeName": "M",
                    "measurementValue": "45",
                    "gradeValue": "0",
                    "dimension": "",
                    "sortOrder": 1,
                    "baseSize": true,
                    "sizeSortOrder": 295
                },
                {
                    "enoviaId": "48352.32064.51728.34050",
                    "gradeRelId": "48352.32064.28520.61811",
                    "sizeName": "L",
                    "measurementValue": "46",
                    "gradeValue": "1",
                    "dimension": "",
                    "sortOrder": 2,
                    "baseSize": false,
                    "sizeSortOrder": 291
                }
            ]
        }
    ]
}

describe('the Dimension module', () => {

    var sut;
    beforeEach(() => {
        // given
        sut = new Dimension();
        sut.activate(dimension);
    });

    it('returns an array of unique sizes for a specific dimension', () => {
        // when
        var sizes = sut.allSizes();
        // then
        expect(sizes).toContain('S', 'M', 'L');
    });

    it('applies a baseSize to a size in all poms for a dimension', () => {
        // when
        sut.toggleBaseSize('S');
        // then
        for (let pom of sut.poms) {
            for (let size of pom.sizes) {
                if (size.sizeName === 'S') {
                    expect(size.baseSize).toBe(true);
                }
            }
        }
    })

});