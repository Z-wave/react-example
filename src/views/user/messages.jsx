import React, { Component } from 'react';
import {NavLink} from 'react-router-dom';
import axios from 'axios';
import { connect } from 'react-redux'
import {Header,Footer} from '../../components';

class App extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount(){
        let {dispatch} = this.props

        dispatch({type:'GET_MESSAGES_START'})
    }

    render() {
        let {has_read_messages = []} = this.props.messages

        return (
            <div id="wrapper" className="spacing">
                <Header title="消息" leftTo="/" />
                {
                    has_read_messages.map((item) => {
                        return(
                            <div className="box box-items profile p10 border-bottom" key={item.id}>
                                <div className="pic">
                                    <img src={item.author.avatar_url} alt="" />
                                </div>
                                <div className="flex-1 ml5">
                                    <p><span className="fs16">{item.author.loginname}</span> <span className="color-9">{formatDate(item.reply.create_at)}</span></p>
                                    {
                                        item.type == 'reply' ?
                                        <p>回复了你的话题<span className="color">{item.topic.title}</span></p> :
                                        <p>在话题<span className="color">{item.topic.title}</span>@了你</p>
                                    }
                                </div>
                            </div>
                        )
                    })
                }
                <Footer />
            </div>
        );
    }
}

 
export default connect(state => state)(App)
