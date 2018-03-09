import React, { Component } from 'react';
import {Route,BrowserRouter, Switch,Link} from 'react-router-dom';
import axios from 'axios';
import { connect } from 'react-redux'
import { setPageTitle, setIndexList } from '../store/actions'
import {Header,Footer} from '../components/common/index';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            tab:'all',
            page:1,
            limit:7
        };
    }
    
    componentDidMount() {
        let { setPageTitle, setIndexList } = this.props

        setPageTitle('新的标题')

        setIndexList(this.state)

        setInterval(this.handleScroll, 200);
    }

    setTab = (type) => {
        let { setPageTitle, setIndexList } = this.props

        this.setState({
            tab:type,
            page:1
        },() => {
            setIndexList(this.state)
        })
    }
    isScrolling = () => {
        const { scrollTop } = document.documentElement || document.body
        const { clientHeight, scrollHeight } = document.documentElement;
        
        return scrollTop + clientHeight + 40 >= scrollHeight;
    
    }
    
    
    handleScroll = () => {
        let { setPageTitle, setIndexList } = this.props
        var timer = null

        clearTimeout(timer);

        if(this.isScrolling() && global.isLoad) {
            //console.log('到底部了');
            timer = setTimeout(() => {
                this.setState({
                    page:this.state.page + 1
                },() => {
                    global.isLoad = false
                    //console.log(this.state);
                    //setIndexList(this.state)
                })
            },400)
    
        }
    
    }
    
    render() {
        let { pageTitle, indexList } = this.props
        return (
            <div id="wrapper" className="spacing">
                <IndexHeader setTab = {type => this.setTab(type)} type = {this.state.tab} />
                <div className="artcle">
                    <IndexList indexList = {indexList} />
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
                    <Link to={'/detail/' + item.id} className="item react" key={id}>
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
                    </Link>
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
                <div className="box box-items">
                    <div className={this.props.type =='all' ? 'flex-1 active' : 'flex-1'} onClick={() => this.switchMenu('all')}>全部</div>
                    <div className={this.props.type =='ask' ? 'flex-1 active' : 'flex-1'} onClick={() => this.switchMenu('ask')}>精华</div>
                    <div className={this.props.type =='share' ? 'flex-1 active' : 'flex-1'} onClick={() => this.switchMenu('share')}>分享</div>
                    <div className={this.props.type =='good' ? 'flex-1 active' : 'flex-1'} onClick={() => this.switchMenu('good')}>问答</div>
                    <div className={this.props.type =='dev' ? 'flex-1 active' : 'flex-1'} onClick={() => this.switchMenu('dev')}>灌水</div>
                </div>
            </div>
        );
    }
}

// mapStateToProps：将state映射到组件的props中
const mapStateToProps = (state) => {
    return {
      pageTitle: state.pageTitle,
      indexList: state.indexList
    }
  }
  
  // mapDispatchToProps：将dispatch映射到组件的props中
  const mapDispatchToProps = (dispatch, ownProps) => {
    return {
      setPageTitle (data) {
          // 如果不懂这里的逻辑可查看前面对redux-thunk的介绍
          dispatch(setPageTitle(data))
          // 执行setPageTitle会返回一个函数
          // 这正是redux-thunk的所用之处:异步action
          // 上行代码相当于
          /*dispatch((dispatch, getState) => {
              dispatch({ type: 'SET_PAGE_TITLE', data: data })
          )*/
      },
      setIndexList (data) {
          dispatch(setIndexList(data))
      }
    }
  }
  
  export default connect(mapStateToProps, mapDispatchToProps)(App)
