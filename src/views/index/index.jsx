import React, { Component } from 'react';
import {Route,BrowserRouter, Switch,NavLink} from 'react-router-dom';
import axios from 'axios';
import { connect } from 'react-redux'
import {Header,Footer} from '../../components/common/index';
import IndexList from "./indexList";

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            tab:'all',
            data:[]
        };
    }
    
    componentDidMount() {
        const {tab} = this.state;

        this.updata(tab)
    }

    updata(tab){
        this.props.dispatch((dispatch,getState) => {
            axios.get('/v1/topics?tab='+tab+'&limit=10&page=1')
                .then(function(res){
                    dispatch({
                        type: "TOPLIST_SUCC",
                        data: res
                    });
                })
        });
    }

    componentWillReceiveProps(nextProps){
        let tab = nextProps.match.params.type

        if(tab !== this.state.tab){
            this.setState({
                tab:tab
            });

            this.updata(tab)
            return false
        }
        this.setState({
            data: nextProps.data.data
        });
    }

    render() {
        let {data} = this.state
        return (
            <div id="wrapper" className="spacing">
                <IndexHeader setTab = {type => this.setTab(type)} type = {this.state.tab} />
                <div className="artcle">
                    <IndexList indexList = {data}></IndexList>
                </div>
                <Footer />
            </div>
        );
    }
}


class IndexHeader extends Component {
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
  
export default connect((state)=>(state.indexList))(App);
