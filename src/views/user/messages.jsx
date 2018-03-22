import React, { Component } from 'react';
import {NavLink} from 'react-router-dom';
import axios from 'axios';
import { connect } from 'react-redux'
import {Header,Footer} from '../../components';

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
                <Header title="消息" leftTo="/" />
                <div className="box box-items profile p10 border-bottom">
                    <div className="pic">
                        <img src="https://avatars1.githubusercontent.com/u/22312483?v=4&amp;s=120" alt="" />
                    </div>
                    <div className="flex-1 ml5">
                        <p><span className="fs16">xxx</span> <span className="color-9">1天前</span></p>
                        <p>回复了你的话题<span className="color">这个新话题</span></p>
                    </div>
                </div>
                <div className="box box-items profile p10 border-bottom">
                    <div className="pic">
                        <img src="https://avatars1.githubusercontent.com/u/22312483?v=4&amp;s=120" alt="" />
                    </div>
                    <div className="flex-1 ml5">
                        <p><span className="fs16">xxx</span> <span className="color-9">1天前</span></p>
                        <p>在话题<span className="color">这个新话幽幽幽幽经理人题</span>@了你</p>
                    </div>
                </div>
                <Footer />
            </div>
        );
    }
}

 
export default App
