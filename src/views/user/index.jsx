import React, { Component } from 'react';
import {Route,BrowserRouter, Switch,NavLink} from 'react-router-dom';
import axios from 'axios';
import { connect } from 'react-redux'
import {Header,Footer} from '../../components/common/index';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data:[]
        };
    }
    render() {
        return (
            <div id="wrapper" className="spacing">
                <Header title="个人中心" leftTo="/" showSignOut={true} />
                
                <Footer />
            </div>
        );
    }
}

 
export default App
