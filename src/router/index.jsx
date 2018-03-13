import React from 'react';
import { BrowserRouter, HashRouter, Switch, Route, Redirect} from 'react-router-dom';

import home from '../views/index/index';
import detail from '../views/detail/detail';


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
	}
];

const Root = (props) => {
  return (
    <HashRouter>
        <Switch>
        <Route path="/" exact render={()=>(<Redirect to="/index/all" />)}/>
        {
            routes.map((route, index) => (
                <Route
                    key={index}
                    path={route.path}
                    exact={route.exact}
                    component={route.component}
                />
            ))
        }
        </Switch>
    </HashRouter>
  );
}

export default Root;
