import React, { Component } from 'react';
import {NavLink as Link} from 'react-router-dom';

/**
 * 公共头部
 *
 * @export
 * @class Header
 * @extends {Component}
 */
export class Header extends Component {
    render() {
        let {title,showBack = true,leftTo} = this.props;
        let back = null
        
        if(showBack){
            back = (
                <Link to={leftTo} className="iconfont nav-back">&#xe60c;</Link>
            )
        }
        return (
            <header className="index-bar">
                {back}
                <span className="title">{title}</span>
                <a className="iconfont question"></a>
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
        let arr = [];
        arr[this.props.index] = 'active';        
        return (
            <footer className="footer">
                <div className="box">
                    <div className={'item flex-1 '+arr[0]}>
                        <Link to="/" className="react">
                            <i className="iconfont">&#xe60b;</i>
                            <p>首页</p>
                        </Link>
                    </div>
                    <div className={'item flex-1 '+arr[1]}>
                        <Link to="/product" className="react">
                            <i className="iconfont">&#xe6ae;</i>
                            <p>发表</p>
                        </Link>
                    </div>
                    <div className={'item flex-1 '+arr[2]}>
                        <Link to="/product" className="react">
                            <i className="iconfont">&#xe745;</i>
                            <p>消息</p>
                        </Link>
                    </div>
                    <div className={'item flex-1 '+arr[3]}>
                        <a href="#" className="react">
                            <i className="iconfont">&#xe60f;</i>
                            <p>我的</p>
                        </a>
                    </div>
                </div>
            </footer>
        );
    }
}