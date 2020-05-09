exports.getObject = function (data) {
    return {
        data: data,
        getParsedData: function() {
            return this.data;
        },
        findByName: function (name) {
            name = name.toLowerCase();
            let _c;
            return (_c = this.data.find(function (tag) {
                return tag.title.toLowerCase() === name;
            })) === null || _c === void 0 ? void 0 : _c.description;
        }
    };
}