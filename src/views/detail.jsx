import React, { Component } from 'react';
import {Route,BrowserRouter, Switch,Link} from 'react-router-dom';
import axios from 'axios';
import {Header,Footer} from '../components/common/index';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data:{
                author:{}
            }
        };
    }
    
    componentDidMount() {
        let id = this.props.match.params.id

        axios.get('/v1/topic/'+id).then((res)=>{
            this.setState({
                data:res.data.data
            })
        })
    }


    render() {
        let {author} = this.state.data
        console.log(author);
        return (
            <div id="wrapper" className="spacing">
            <Header title="主题详情" leftTo="/" />
            <div className="box box-items">
                <div className="pic">
                    <img src={author.avatar_url} alt="" />
                </div>
                <div className="flex-1 ml5">
                    <p>{author.loginname}</p>
                    <p>1天前</p>
                </div>
                <div className="flex-1 text-right">
                    <p>7/849</p>
                    <p>2小时前</p>
                </div>
            </div>
            <Footer />
            </div>
        );
    }
}


export default App;
