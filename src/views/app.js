var React = require('react'),
    ReactRouter = require("react-router"),
    DefaultRoute = ReactRouter.DefaultRoute,
    Route = ReactRouter.Route,
    ReactDOM = require('react-dom'),
    FluxStores = require("./flux");

var Page = require('./routes/page'),
	Home = require('./routes/home'),
    Fav = require('./routes/fav');

var flux = FluxStores.initializeStore('store');

var RoutesNavigation = [
    <ReactRouter handler={Page}>
        <DefaultRoute handler={Home} />
        <Route path="/home" handler={Home} />
        <Route path="/fav" handler={Fav} />
    </ReactRouter>
];

ReactRouter.run(RoutesNavigation, function (Handler, state) {
	ReactDOM.render(<Handler flux={flux} />, document.getElementById('reactContainer'));
});