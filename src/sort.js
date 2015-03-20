export class SortValueConverter {
    toView(array, propertyName) {
        return array
            .slice(0)
            .sort((a, b) => {
                return a[propertyName] - b[propertyName];
            })
    }
}