var Services = require('./../services'),
    Utils = require('./../utils');

function getFreshState() {
    return {
        'imagesData': [],
        'favImages': []
    };
}

var state = getFreshState();

module.exports = {
    getState: state,

    getImages: function() {
        var _self = this;

        Services.image.getImages(function(err, result) {
            if (err) {
                return alert("something went wrong");
            }

            _self.getState.imagesData = result;

            _self.emit('change');
        });
    },

    cardSelection: function(obj) {
        var data = obj.data,
            favImages = this.getState.favImages;

        this.getState.favImages = Utils.toggleArray(favImages, data, 'imageUrl');
        this.emit('change');
    }
};
