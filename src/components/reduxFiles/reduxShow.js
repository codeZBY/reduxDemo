import React, { Component } from 'react'
import './reduxShow.css'
import Mydata from '../data'
export default class ReduxShow extends Component {
    constructor(props) {
        super(props);

        this.state = {
            newArr: []
        }
    }
    componentWillMount() {
        let newArr1 = [];
        for (var i = 0; i < Mydata.length; i++) {
            newArr1.push(Mydata[i])
        }
        for (var i = 0; i < 6; i++) {
            let count = Math.floor(Math.random() * newArr1.length)
            newArr1.splice(count, 1)
        }
        for (var j = 0; j < newArr1.length; j++) {
            this.state.newArr.push(newArr1[j])
        }
    }
    onChangeGroup(event) {
        let initArr = [];

        for (var i = 0; i < Mydata.length; i++) {
            initArr.push(Mydata[i])
        }
        for (var i = 0; i < 6; i++) {
            let count = Math.floor(Math.random() * initArr.length)
            initArr.splice(count, 1)
        }
        this.setState({
            newArr: initArr
        })
    }


    render() {
        return (
            <div>
  <label>选择分类</label>
  <p className="change" onClick={this.onChangeGroup.bind(this)}>换一换</p>
  <div className="spanArr">
    {this.state.newArr.map((val, index) => {
                return <span key={index} onClick={this.props.onAddItem.bind(this)}>{val.item}</span>
            })}
   
  </div>
</div>
        )
    }
}