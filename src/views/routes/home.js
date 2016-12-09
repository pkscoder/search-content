var React = require("react"),
    FluxMixin = require('fluxxor').FluxMixin(React),
    Utils = require('./../utils');

var Masonry     = require('react-masonry-component'),
    Card = require('./components/image');

const MASONRY_OPTIONS = {
    transitionDuration: 0
};

var Home = React.createClass({

    mixins: [FluxMixin],

    getImageCards: function(imageArr, favImages) {
        return(
            imageArr.map(function(obj, key) {
                var isSelected = Utils.isValidValueInArray(favImages, obj, 'imageUrl');
                return (
                    <div className="cardDiv" key={key}>
                        <Card obj={obj} isSelected={isSelected} />
                    </div>
                )
            })
        );
    },

    render: function() {
        var stateData = this.props.stateData,
            imageArr = stateData.imagesData || [],
            favImages = stateData.favImages || [];

        return (
            <Masonry className="cardsGrid" elementType={'div'} options={MASONRY_OPTIONS} disableImagesLoaded={false}>
                { this.getImageCards(imageArr, favImages) }
            </Masonry>
        );
    }
});

module.exports = Home;
