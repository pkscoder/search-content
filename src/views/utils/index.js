function checkInArray(array, value, key) {
    var index;
    if (typeof(value) == 'object') {
        var indexes = array.map(function(obj, i) {
            if (obj[key] === value[key]) {
                return i;
            }
        }).filter(isFinite);

        index = (typeof(indexes[0]) != 'undefined') ? indexes[0] : -1;

    } else {
        index = array.indexOf(value);
    }

    return index;
}

module.exports = {
    toggleArray: function(array, value, key) {
        var index = checkInArray(array, value, key);

        if (index === -1) {
            array.push(value);
        } else {
            array.splice(index, 1);
        }

        return array;
    },

    isValidValueInArray: function(entity, value, key) {
        return (entity != null && typeof entity != 'undefined' && entity instanceof Array && entity.length > 0 && (checkInArray(entity, value, key) >= 0))
    }
};
