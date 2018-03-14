import React, { Component } from 'react';
import {Route,BrowserRouter, Switch,Link} from 'react-router-dom';
import axios from 'axios';
import { connect } from 'react-redux'
import {Header,Footer,Profile} from '../../components/common/index';
import ReplyList from "./replies";

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data:{
                author:{},
                replies:[]
            }
        };
    }
    
    componentDidMount() {
        let id = this.props.match.params.id

        this.updata(id)
    }

    componentWillReceiveProps(nextProps){
        this.setState({
            data: nextProps.data.data
        });
    }

    updata(id){
        this.props.dispatch((dispatch,getState) => {
            axios.get('/v1/topic/'+id)
                .then(function(res){
                    dispatch({
                        type: "DETAILLIST_SUCC",
                        data: res
                    });
                })
        });
    }

    render() {
        let {data} = this.state
        let {author,replies} = data

        return (
            <div id="wrapper" className="spacing">
            <Header title="主题详情" leftTo="/" />
            <div className="artcle p10">
                <Profile 
                    author={author} 
                    create_at={data.create_at}
                    reply_count={data.reply_count}
                    visit_count={data.visit_count}
                    last_reply_at={data.last_reply_at}
                />
            </div>
            <h1 className="fs20 bg-gray p10">{data.title}</h1>
            <div className="p10" dangerouslySetInnerHTML={{__html:data.content}}></div>
            <div className="box box-items reply_count">
                <div className="color-block"></div>
                <div className="flex-1 ml10">
                    共<b className="ml5 mr5 color">{data.reply_count}</b>条回复
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

export default connect((state)=>(state.detailList))(App);
