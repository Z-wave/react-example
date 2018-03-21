import React, { Component } from 'react';
import {NavLink} from 'react-router-dom';
import { connect } from 'react-redux'
import {Header,Footer} from '../../components/common/index';
import actionCreator from '../../redux/actionCreator'
import IndexList from "./indexList";

class App extends React.Component {
    constructor(props) {
        super(props);
        this.params = {
            tab:props.match.params.type,
            page:1,
            limit:10
        }
    }
    
    componentDidMount() {
        let { dispatch,match } = this.props

        dispatch(actionCreator.getIndexData(this.params));
    }

    componentWillReceiveProps(nextProps){
        let { dispatch } = this.props
        let tab = nextProps.match.params.type

        if(tab !== this.params.tab){
            this.params.tab = tab
            dispatch(actionCreator.getIndexData(this.params));
        }

    }

    render() {
        let {indexList} = this.props
        
        return (
            <div id="wrapper" className="spacing">
                <IndexHeader />
                <div className="artcle">
                    <IndexList indexList = {indexList}></IndexList>
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
                        <NavLink to="/index/all" className="flex-1">全部</NavLink>
                        <NavLink to="/index/ask" className="flex-1">精华</NavLink>
                        <NavLink to="/index/share" className="flex-1">分享</NavLink>
                        <NavLink to="/index/good" className="flex-1">问答</NavLink>
                        <NavLink to="/index/dev" className="flex-1">灌水</NavLink>
                    </div>
                }
            </div>
        );
    }
}
  
export default connect(state => state)(App);
