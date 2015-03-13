//TODO: Should go into a resources folder

export class JsonFormatValueConverter {
    toView(value) {
        return JSON.stringify(value, null, '\t');
    }
}