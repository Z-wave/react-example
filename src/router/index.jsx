import React from 'react';
import { BrowserRouter, HashRouter, Switch, Route, Redirect} from 'react-router-dom';

import home from '../views/index';
import detail from '../views/detail';


const routes = [
	{ path: '/',
		exact: true,
		component: home
	},
	{ path: '/detail/:id',
		exact: false,
		component: detail
	}
];

const Root = (props) => {
  return (
    <HashRouter>
        <Switch>
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
        <Redirect from='' to="/" />
        </Switch>
    </HashRouter>
  );
}

export default Root;
