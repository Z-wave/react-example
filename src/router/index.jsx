import React from 'react';
import { BrowserRouter, HashRouter, Switch, Route, Redirect} from 'react-router-dom';

import home from '../views/index/index';
import topic from '../views/topic';
import signin from '../views/user/signin';
import user from '../views/user/index';
import create from '../views/topic/create';
import messages from '../views/user/messages';


const routes = [
	{ 
        path: '/index/:type',
		exact: false,
		component: home
	},
	{ 
        path: '/topic/:id',
		exact: false,
		component: topic
	},
	{ 
        path: '/signin',
		exact: false,
		component: signin
	}
];

const Root = (props) => {
  return (
    <HashRouter>
        <Switch>
        <Route path="/" exact render={()=>(<Redirect to="/index/all" />)}/>
		<Route path='/index/:type' component={home} />
		<Route path='/topic/:id' component={topic} />
		<Route path='/signin' component={signin} />
		<LoginRoute path='/user/:name' component={user} />
		<LoginRoute path='/create' component={create} />
		<LoginRoute path='/messages' component={messages} />
        </Switch>
    </HashRouter>
  );
}

const LoginRoute = ({ component:Component, ...data }) => (
	<Route {...data} render={props => (
	  !window.localStorage.getItem('accessToken') 
		? <Redirect to={{
		  pathname: '/signin',
		  state: { from: props.location }
		}} />
		: <Component {...props} />
	)} />
)

export default Root;
