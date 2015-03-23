export class JsonFormatValueConverter {
    toView(value) {
        return JSON.stringify(value, null, '\t');
    }
}