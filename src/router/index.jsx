import React from 'react';
import { BrowserRouter, HashRouter, Switch, Route, Redirect} from 'react-router-dom';

import home from '../views/index/index';
import detail from '../views/detail';
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
        path: '/detail/:id',
		exact: false,
		component: detail
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
		<Route path='/detail/:id' component={detail} />
		<Route path='/signin' component={signin} />
		<LoginComponent path='/user/:name' component={user} />
		<LoginComponent path='/create' component={create} />
		<LoginComponent path='/messages' component={messages} />
        </Switch>
    </HashRouter>
  );
}

const LoginComponent = ({ component:Component, ...data }) => (
	<Route {...data} render={props => (
	  !JSON.parse(window.localStorage.getItem('user')) 
		? <Redirect to={{
		  pathname: '/signin',
		  state: { from: props.location }
		}} />
		: <Component {...props} />
	)} />
)

export default Root;
