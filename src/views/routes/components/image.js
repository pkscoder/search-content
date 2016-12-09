var React = require("react"),
    FluxMixin = require('fluxxor').FluxMixin(React),
    ReactBootstrap = require("react-bootstrap");

var Home = React.createClass({

    mixins: [FluxMixin],

    _handleClick: function(data) {
        this.getFlux().actions.store.cardSelection({data: data});
    },

    render: function() {
        var obj = this.props.obj || {},
            isSelected = this.props.isSelected;

        return (
            <div className={ isSelected ? "card selected" : "card"}> 
                <img className="cardImage" src={obj.imageUrl} />
                <i className="glyphicon glyphicon-heart fav-icon" onClick={ this._handleClick.bind(null, obj) } />
            </div>
        );
    }
});

module.exports = Home;
