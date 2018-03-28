import React,{Component} from "react";
import {NavLink as Link} from "react-router-dom";
import axios from 'axios';

export default class ReplyList extends Component{
    constructor(props){
        super(props)
    }
    ups = (item) => {
        let {dispatch} = this.props
        let accesstoken = localStorage.getItem('accessToken')

        if(!accesstoken) return alert('未登录，不能点赞')
        if(item.author.loginname === localStorage.getItem('user')) return alert('不能给自己点赞哦~')
        
        axios.post(`/v1/reply/${item.id}/ups`,{
            accesstoken: accesstoken
        }).then((res) => {
            dispatch({type:'SET_UPS',params:{item:item,action:res.data.action}})
        })
    }
    render(){
        let {replies} = this.props
        return (
            replies.map((item,index) => {
                let active = false;
                
                item.ups.map((i) => {
                    if(i == localStorage.getItem('userId')){
                        active = true;
                        return false;
                    }
                })
                                
                return(
                    <li key={item.id}>
                        <div className="box">
                            <div className="pic">
                                <img src={item.author.avatar_url} alt="" />
                            </div>
                            <div className="flex-1 ml10">
                                <b className="color mr5">{item.author.loginname}</b>
                                <span>{formatDate(item.create_at)}</span>
                                <div className="right color-9">#{index+1}</div>
                                <p className="content mt5" dangerouslySetInnerHTML={{__html:item.content}}></p>
                            </div>
                        </div>
                        <div className="overhide">
                            <div className="right">
                                <span className={`mr10 ${active ? 'color' : ''}`} onClick={() => this.ups(item)}>
                                    <i className="iconfont">&#xe643;</i>{item.ups.length}
                                </span>
                                <span>
                                    <i className="iconfont">&#xe62f;</i>
                                </span>
                            </div>
                        </div>
                    </li>
                )
            })
        )
    }
}