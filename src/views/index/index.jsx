import React, { Component } from 'react';
import {NavLink} from 'react-router-dom';
import { connect } from 'react-redux'
import {Header,Footer} from '../../components';
import actionCreator from '../../redux/actionCreator'
import IndexList from "./indexList";


class App extends React.Component {
    constructor(props) {
        super(props);
        this.isLoad = false
        this.params = {
            tab:props.match.params.type,
            page:1,
            limit:10,
            more:false
        }
    }
    
    componentDidMount() {
        let { dispatch,match } = this.props

        dispatch(actionCreator.testData(this.params));
        setInterval(()=>{
            this.halderScroll()
        },1000)
    }

    componentWillReceiveProps(nextProps){
        let { dispatch } = this.props
        let tab = nextProps.match.params.type

        if(tab !== this.params.tab){
            this.params.tab = tab
            this.params.page = 1
            this.params.more = false
            dispatch(actionCreator.testData(this.params));
        }else{
            setTimeout(() => {
                this.isLoad = true
            }, 2000);
        }

    }

    
    halderScroll(){
        let { dispatch } = this.props
        let timer = null

        
        if(isBottom() && this.isLoad){
            console.log(1111);
            this.params.more = true
            this.params.page++
            dispatch(actionCreator.testData(this.params));
            this.isLoad = false
        }

    }

    render() {
        let {indexList = []} = this.props
        
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
  
export default connect(state => state || {})(App);
