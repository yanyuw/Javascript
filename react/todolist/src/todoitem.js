import React from 'react';
import './index.css';

export default class Todoitem extends React.Component {
    constructor(props){
        super(props);
        this.check = this.check.bind(this);
        this.del = this.del.bind(this);
        this.edit = this.edit.bind(this);
        this.enter = this.enter.bind(this);
        this.finishEdit = this.finishEdit.bind(this);
    }
    
    check(){
        this.props.CompleteTask(this.props.todo.id);
    }

    del(){
        this.props.DeleteTask(this.props.todo.id);
        
    }
    edit(){
        this.props.Edit(this.props.todo.id);
    }

    finishEdit(){
        var value = this.refs.new.value;
        if(value !== ''){
            this.refs.new.value = '';//清空input
            this.props.EditTask(this.props.todo.id, value);
            
        }
    }
    enter(e){
        if(e.keyCode === 13){//回车
            this.finishEdit();
        }
    }
    
    render(){
        var item = this.props.todo;
        var text = item.complete ? "finished" : "";
        var edit = "";
        if(item.editing){
            text += "view";
        }else{
            edit += "view";
        }

        return (
            <li className="list">
                <input type="checkbox" onClick= {this.check} checked={item.complete}/>
                <span className={text} onClick= {this.edit}>{item.text}</span>
                <input type="text" ref="new" className={edit} placeholder={item.text} onKeyUp = {this.enter} />
                <button className="delbut" onClick = {this.del}>x</button>
            </li>
        )
    }
}