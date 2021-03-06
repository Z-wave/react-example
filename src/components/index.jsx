import React, { Component } from 'react';
import {NavLink} from 'react-router-dom';

/**
 * 公共头部
 *
 * @export
 * @class Header
 * @extends {Component}
 */
export class Header extends Component {
    signOut (){
        this.props.signOut()
    }
    render() {
        let {title,leftTo,showBack = true,showSignOut = false} = this.props;
        let back = null;
        let signOut = null
        
        if(showBack){
            back = (
                <NavLink to={leftTo} className="iconfont nav-back">&#xe60c;</NavLink>
            )
        }
        if(showSignOut){
            signOut = (
                <a className="iconfont signout" onClick={() => this.signOut()}>&#xe66d;</a>
            )
        }
        return (
            <header className="index-bar">
                {back}
                <span className="title">{title}</span>
                {signOut}
            </header>
        );
    }
}

/**
 * 底部导航菜单
 *
 * @export
 * @class Footer
 * @extends {Component}
 */
export class Footer extends Component {
    render() {    
        return (
            <footer className="footer">
                <div className="box">
                    <div className={'item flex-1'}>
                        <NavLink to="/index/all" className="react">
                            <i className="iconfont">&#xe60b;</i>
                            <p>首页</p>
                        </NavLink>
                    </div>
                    <div className={'item flex-1'}>
                        <NavLink to="/create" className="react">
                            <i className="iconfont">&#xe6ae;</i>
                            <p>发表</p>
                        </NavLink>
                    </div>
                    <div className={'item flex-1'}>
                        <NavLink to="/messages" className="react">
                            <i className="iconfont">&#xe745;</i>
                            <p>消息</p>
                        </NavLink>
                    </div>
                    <div className={'item flex-1'}>
                        <NavLink to={`/user/${localStorage.getItem('user')}`} className="react">
                            <i className="iconfont">&#xe60f;</i>
                            <p>我的</p>
                        </NavLink>
                    </div>
                </div>
            </footer>
        );
    }
}

/**
 * 公共的用户信息
 *
 * @export
 * @class Profile
 * @extends {Component}
 */
export class Profile extends Component {
    render() {
        let {author,create_at,reply_count,visit_count,last_reply_at} = this.props
        return (
            <div className="box box-items profile">
                <div className="pic">
                    <img src={author.avatar_url} alt="" />
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
        );
    }
}