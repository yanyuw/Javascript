import React from 'react';
import './index.css';

export default class Addnew extends React.Component {
    constructor(props){
        super(props);
        this.additem = this.additem.bind(this);
        this.enteradd = this.enteradd.bind(this);
    }
    additem(){
        var value = this.refs.text.value;
        var newid = this.props.count+1;
        if(value !== ''){
            var item = {
                id: newid,
                text: value,
                complete: false,
                editing: false
            }
            this.refs.text.value = '';//清空input
            this.props.AddTask(item);
            
        }
    }
    enteradd(e){
        if(e.keyCode === 13){//回车
            this.additem();
        }
    }
    render() {
        return (
        <div>
            <input className="Addinput" ref="text" onKeyUp = {this.enteradd} placeholder = "add a new thing to do" />
            <button className="Add" onClick = {this.additem}>Add</button>
        </div>
        );
    }
}