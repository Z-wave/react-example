import React, { Component } from 'react';
import {Route,BrowserRouter, Switch,Link} from 'react-router-dom';
import axios from 'axios';
import { connect } from 'react-redux'
import {Header,Footer,Profile} from '../../components/common/index';
import ReplyList from "./replies";
import actionCreator from '../../redux/actionCreator'

class App extends React.Component {
    constructor(props) {
        super(props);
    }
    
    componentDidMount() {
        let { dispatch,match } = this.props

        dispatch(actionCreator.getDetailData(match.params.id));
    }
    
    render() {
        let {detail} = this.props
        let {author = {},replies = []} = detail

        return (
            <div id="wrapper" className="spacing">
            <Header title="主题详情" leftTo="/" />
            <div className="artcle p10">
                <Profile 
                    author={author} 
                    create_at={detail.create_at}
                    reply_count={detail.reply_count}
                    visit_count={detail.visit_count}
                    last_reply_at={detail.last_reply_at}
                />
            </div>
            <h1 className="fs20 bg-gray p10">{detail.title}</h1>
            <div className="p10" dangerouslySetInnerHTML={{__html:detail.content}}></div>
            <div className="box box-items reply_count">
                <div className="color-block"></div>
                <div className="flex-1 ml10">
                    共<b className="ml5 mr5 color">{detail.reply_count}</b>条回复
                </div>
            </div>
            <ul className="re-list">
                <ReplyList replies = {replies}></ReplyList>
            </ul>
            <Footer />
            </div>
        )
    }
}

export default connect(state => state)(App);
