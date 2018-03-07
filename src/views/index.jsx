import React, { Component } from 'react';
import {Route,BrowserRouter, Switch,Link} from 'react-router-dom';
import axios from 'axios';
import {Header,Footer} from '../components/common/index';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            list:[]
        };
    }
    
    componentDidMount() {
        axios({
            method:"get",
            url:"/v1/topics"
        }).then((res)=>{
            this.setState({
                list:res.data.data
            })
        })
    }
    render() {
        return (
            <div id="wrapper" className="spacing">
                <IndexHeader tab={'all'} />
                <div className="artcle">
                {
                    this.state.list.map(item => {
                        let {id, title, author, visit_count, reply_count, create_at, last_reply_at} = item

                        return(
                            <div className="item" key={id}>
                                <div className="pt10 pb10">
                                    {title}
                                </div>
                                <div className="box box-items">
                                    <div className="pic">
                                        <img src={author.avatar_url} alt=""/>
                                    </div>
                                    <div className="flex-1 ml5">
                                        <p>{author.loginname}</p>
                                        <p>{formatDate(create_at)}</p>
                                    </div>
                                    <div className="flex-1 text-right">
                                        <p>{reply_count}/{visit_count}</p>
                                        <p>{formatDate(last_reply_at)}</p>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
                </div>
            <Footer />
            </div>
        );
    }
}

class IndexHeader extends Component {
    switchMenu(type){
        console.log(this.props);
        console.log(type);
    }
    render() {
        return (
            <div className="index-header">
                <div className="box box-items">
                    <div className="flex-1 active" onClick={() => this.switchMenu('all')}>全部</div>
                    <div className="flex-1" onClick={() => this.switchMenu('ask')}>精华</div>
                    <div className="flex-1" onClick={() => this.switchMenu('share')}>分享</div>
                    <div className="flex-1" onClick={() => this.switchMenu('good')}>问答</div>
                    <div className="flex-1" onClick={() => this.switchMenu('job')}>招聘</div>
                </div>
            </div>
        );
    }
}

export default App;
