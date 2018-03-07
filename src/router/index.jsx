import React from 'react';
import { BrowserRouter, HashRouter, Switch, Route, Redirect} from 'react-router-dom';

import home from '../views/index';
import product from '../views/order/product';


const routes = [
	{ path: '/',
		exact: true,
		component: home
	},
	{ path: '/order/product',
		exact: false,
		component: product
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
