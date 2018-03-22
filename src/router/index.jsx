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
	},
	{ 
        path: '/user/:name',
		exact: false,
		component: user
	},
	{ 
        path: '/create',
		exact: false,
		component: create
	},
	{ 
        path: '/messages',
		exact: false,
		component: messages
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
