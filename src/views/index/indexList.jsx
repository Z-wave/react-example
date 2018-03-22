import React,{Component} from "react";
import {NavLink} from "react-router-dom";
import {Profile} from '../../components';

export default class ReplyList extends Component{
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
                        <Profile 
                            author={author} 
                            create_at={create_at}
                            reply_count={reply_count}
                            visit_count={visit_count}
                            last_reply_at={last_reply_at}
                        />
                    </NavLink>
                )
            })
        )
    }
}