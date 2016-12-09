var FluxStores = require('./../flux'),
    ReactRouter = require('react-router'),
    RouteHandler = ReactRouter.RouteHandler,
    React = require("react"),
    ReactBootstrap = require("react-bootstrap");

var Navbar = require('react-bootstrap').Navbar,
    Nav = require('react-bootstrap').Nav,
    NavItem = require('react-bootstrap').NavItem;

var Page = React.createClass({

    mixins: FluxStores.getMixins('store'),

    componentWillMount: function() {
        this.getFlux().actions.store.getImages();
    },

    render: function() {
        return (
            <div className="container">
                <Navbar inverse fixedTop className="navbar-mainContainer">
                    <Navbar.Header>
                        <Navbar.Brand>
                            <a href="#/">
                                <span>
                                    Sample
                                </span>
                            </a>
                        </Navbar.Brand>
                        <Navbar.Toggle />
                    </Navbar.Header>
                    <Navbar.Collapse>
                        <Nav>
                            <NavItem eventKey={1}  href="#/fav">Fav</NavItem>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
                <div className="ground_MainContainer">
                    <RouteHandler stateData={this.state} />
                </div>
            </div>
        );
    }
});

module.exports = Page;
