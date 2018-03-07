import React, {Component} from 'react';
import axios from 'axios';
import { connect } from 'react-redux'
import { setPageTitle, setInfoList } from '../../store/actions.jsx'
import {Header,Footer} from '../../components/common/index';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            colorIndex:0,
            memory:[],
            selectedGoods:{},
            memoryName:'',
            goods:{},
            sku:{
                color_all:[]
            }
        };
  
    }
    
    componentDidMount() {
        let id = getQueryString('id')
        let { setPageTitle } = this.props
    
        // 触发setPageTitle action
        setPageTitle('新的标题')
        
        
        // 触发setInfoList action
        //setInfoList()
        
        // axios.get(ROOT_URL+'/goods/space/'+id).then(res => {
        //     var datas = res.data.data
        //     var index = datas.sku.color_all[0].color_id

        //     this.setState({
        //         colorIndex:index,
        //         memory:datas.sku.color[index],
        //         selectedGoods:datas.sku.color[index][0],
        //         memoryName:datas.sku.color[index][0].memory_name,
        //         goods:datas,
        //         sku:datas.sku
        //     })
        // })
    }

    colorChecked(id){

        this.setState({
            colorIndex:id,
            memory:this.state.sku.color[id]
        },() => {
            if (this.state.memory.length > 1) {
                for (var i = 0; i < this.state.memory.length; i++) {
                    if (this.state.memory[i].memory_name == this.state.memoryName) {
                        this.setState({
                            selectedGoods:this.state.memory[i]
                        })
                    }
                }
            } else {
                this.setState({
                    selectedGoods:this.state.memory[0],
                    memoryName:this.state.memory[0].memory_name
                })
            }
        })

    }

    memoryChecked(index) {

        this.setState({
            memoryIndex:index,
            selectedGoods:this.state.sku.color[this.state.colorIndex][index],
            memoryName:this.state.sku.color[this.state.colorIndex][index].memory_name
        })

    }

    render() {   
        // 从props中解构store
        let { pageTitle } = this.props


        return (
            <div id="wrapper">
                <Header title="选择属性" leftTo="/" />
                <div className="product-wrap spacing">
                    <div className="product">
                        <h2 className="pro-head text-left">{pageTitle}</h2>
                        <h2 className="pro-head text-left">{this.state.goods.goods_name}</h2>
                        <div className="pl10 pr10">
                            <div className="hp-num">
                                <div className="item">
                                    <div className="left">总金额</div>
                                    <div className="right mr15">一年返还</div>
                                </div>
                                <div className="item">
                                    <div className="left">
                                        <span className="fs16 red">&yen;{this.state.selectedGoods.total_fee}</span>
                                    </div>
                                    <div className="right mr15">
                                        <span className="fs16 red">&yen;{this.state.selectedGoods.total_yj}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="product">
                        <h2 className="pro-head">请选择颜色</h2>
                        <div className="pro-box sku-color">
                            {
                                this.state.sku.color_all.map(item => {
                                    const active = this.state.colorIndex == item.color_id ? 'active': '';

                                    return <label className={'pro-item '+ active} key={item.color_id} onClick={() => this.colorChecked(item.color_id)}>
                                        <div className="pro-sku" style={{backgroundColor:item.color_value}}></div>
                                        <p>{item.color_name}</p>
                                    </label>
                                }
                            
                            )}
                        </div>
                    </div>
                    <div className="product">
                        <h2 className="pro-head">然后选择存储容量</h2>
                        <div className="pro-box">
                            {this.state.memory.map((item,index) => {
                                const active = this.state.memoryName == item.memory_name ? 'active': '';

                                return <label className="pro-item" key={item.sku_id} style={{width: '50%'}} onClick={() => this.memoryChecked(index)}>
                                    <div className={'pro-sku '+ active}>
                                        <span className="fs18">{item.memory_name}</span>
                                    </div>
                                </label>
                            }
                            )}
                        </div>
                    </div>
                    <div className="mp-server p10">
                        <div className="box box-items">
                            <input type="checkbox" id="mp" className="input-checkbox-arr mr10"/>
                            <label className="flex-1">
                                <p className="fs16">免赔服务(可选)</p>
                                <span className="col-9">查看</span>
                                <span className="color">《免赔服务》</span>
                                <p className="fs12 col-9">享受一年内一次免费碎屏服务</p>
                            </label>
                            <div className="red fs16">&yen;{this.state.selectedGoods.insurance_fee}</div>
                        </div>
                    </div>
                </div>
                <div className="bottom-fixed">
                    <a className="btn bor-rad">选好了</a>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        pageTitle: state.pageTitle
    }
}
  
const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        setPageTitle (data) {
            dispatch(setPageTitle(data))
            // 执行setPageTitle会返回一个函数
            // 这正是redux-thunk的所用之处:异步action
            // 上行代码相当于
            /*dispatch((dispatch, getState) => {
                dispatch({ type: 'SET_PAGE_TITLE', data: data })
            )*/
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
