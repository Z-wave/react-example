import React, { Component } from 'react';
import {Route,BrowserRouter, Switch,NavLink} from 'react-router-dom';
import axios from 'axios';
import { connect } from 'react-redux'
import {Header,Footer} from '../components/common/index';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            tab:'all',
            data:[]
        };
    }
    
    componentDidMount() {
        this.updata()
    }

    updata(tab,page){
        this.props.dispatch(function(dispatch,getState){
            axios.get('/v1/topics?tab=all&limit=10&page=1')
                .then(function(res){
                    dispatch({
                        type: "TOPLIST_SUCC",
                        data: res
                    });
                })
        });
    }

    componentWillReceiveProps(nextProps){
        this.setState({
            data: nextProps.data.data
        });
    }
    
    setTab (type) {

        this.setState({
            tab:type
        })
    }

    render() {
        let {data} = this.state
        return (
            <div id="wrapper" className="spacing">
                <IndexHeader setTab = {type => this.setTab(type)} type = {this.state.tab} />
                <div className="artcle">
                    <IndexList indexList = {data} />
                </div>
                <Footer />
            </div>
        );
    }
}

class IndexList extends Component {
    render() {
        return (
            this.props.indexList.map(item => {
                let {id, title, author, visit_count, reply_count, create_at, last_reply_at} = item

                return(
                    <NavLink to={'/detail/' + item.id} className="item react" key={id}>
                        <div className="pt10 pb10">
                            {
                                item.top && <i className="iconfont green fs14 mr5 middle">&#xe64e;</i>
                            }
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
                    </NavLink>
                )
            })
        )
    }
}

class IndexHeader extends Component {
    switchMenu(type){
        this.props.setTab(type)
    }
    render() {
        return (
            <div className="index-header">
                    {
                    <div className="box box-items">
                        <NavLink to="/index/all" className="flex-1" activeClassName="active">全部</NavLink>
                        <NavLink to="/index/ask" className="flex-1" activeClassName="active">精华</NavLink>
                        <NavLink to="/index/share" className="flex-1" activeClassName="active">分享</NavLink>
                        <NavLink to="/index/good" className="flex-1" activeClassName="active">问答</NavLink>
                        <NavLink to="/index/dev" className="flex-1" activeClassName="active">灌水</NavLink>
                    </div>
                    }
            </div>
        );
    }
}
/* <div className={this.props.type =='all' ? 'flex-1 active' : 'flex-1'} onClick={() => this.switchMenu('all')}>全部</div>
<div className={this.props.type =='ask' ? 'flex-1 active' : 'flex-1'} onClick={() => this.switchMenu('ask')}>精华</div>
<div className={this.props.type =='share' ? 'flex-1 active' : 'flex-1'} onClick={() => this.switchMenu('share')}>分享</div>
<div className={this.props.type =='good' ? 'flex-1 active' : 'flex-1'} onClick={() => this.switchMenu('good')}>问答</div>
<div className={this.props.type =='dev' ? 'flex-1 active' : 'flex-1'} onClick={() => this.switchMenu('dev')}>灌水</div> */
  
export default connect((state)=>(state.indexList))(App);
