import React,{Component} from "react";
import {NavLink as Link} from "react-router-dom";

export default class ReplyList extends Component{
    render(){
        let {replies} = this.props
        return (
            replies.map((item,index) => {
                return(
                    <li key={item.id}>
                        <div className="box">
                            <div className="pic">
                                <img src={item.author.avatar_url} alt="" />
                            </div>
                            <div className="flex-1 ml10">
                                <b className="color mr5">{item.author.loginname}</b><span>{formatDate(item.create_at)}</span><div className="right color-9">#{index+1}</div>
                                <p className="content mt5" dangerouslySetInnerHTML={{__html:item.content}}></p>
                            </div>
                        </div>
                        <div className="overhide">
                            <div className="right">
                                <span className="mr10">
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