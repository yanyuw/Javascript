import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class Addnew extends React.Component {
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
class Todoitem extends React.Component {
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
                {/* <Input text={item.text} css={edit}/> */}
                <button className="delbut" onClick = {this.del}>x</button>
            </li>
        )
    }
    count
}
class Todolist extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            todos:[
            //     {
            //     id: 1,
            //     text: 1,
            //     complete: false,
            //     eidting: false
            // },{
            //     id: 2,
            //     text: "你好",
            //     complete: false,
            //     editing: true           }
        ],
            finish:0,
        }
        
    }
    AddTask (newitem){
        let todos = this.state.todos;
        todos = todos.concat([newitem]);
        this.setState({todos})
    }
    CompleteTask (id){
        let todos = this.state.todos;
        let num = this.state.finish;
        for(let todo of todos){
            if(todo.id === id){
                todo.complete = !todo.complete;
                if(todo.complete == true){
                    num++;
                }else{
                    num--;
                }
                break;
            }
        }
        this.setState({
            todos: todos,
            finish: num
        });
    }
        
    DeleteTask(id){
        let todos = this.state.todos;
        todos = todos.filter((todo) => {
            return todo.id !== id;
        })
        this.setState({todos});
    }
    CompleteAll(){
        let todos = this.state.todos;
        let num = this.state.finish;
        for(let todo of todos){
            if(todo.complete == false){
                todo.complete = true;
                num++;
            }
        }
        this.setState({
            todos: todos,
            finish: num
        });
    }
    IncompleteAll(){
        let todos = this.state.todos;
        let num = this.state.finish;
        for(let todo of todos){
            if(todo.complete == true){
                todo.complete = false;
                num--;
            }
        }
        this.setState({
            todos: todos,
            finish: num
        });
    }
    DelAll(){
        let todos = [];
        this.setState({
            todos: todos,
            finish: 0
        })
    }
    Edit(id){
        let todos = this.state.todos;
        for(let todo of todos){
            if(todo.id === id){
                todo.editing = !todo.editing;
                break;
            }
        }
        this.setState({todos});
    }
    EditTask(id, text){
        let todos = this.state.todos;
        for(let todo of todos){
            if(todo.id === id){
                todo.text = text;
                todo.editing = !todo.editing;
                break; 
            }
        }
        this.setState({todos});
    }
    
    render() {
      return (
          <div>
              <h1 className="title"> To Do List</h1>
              <Addnew AddTask = {this.AddTask.bind(this)} count={this.state.todos.length}/>
              <ul>
                { this.state.todos.map((item, i) => {
                    return <Todoitem todo={item}  CompleteTask = {this.CompleteTask.bind(this)} 
                            DeleteTask = {this.DeleteTask.bind(this)} Edit = {this.Edit.bind(this)} EditTask = {this.EditTask.bind(this)}/>
                })}
              </ul>
              <button onClick={this.CompleteAll.bind(this)}>complete all</button>
              <button onClick={this.IncompleteAll.bind(this)}>incomplete all</button>
              <span>{this.state.finish}已完成 {this.state.todos.length-this.state.finish}未完成</span>
              <button onClick={this.DelAll.bind(this)}>clear</button>
          </div>
      );
    }
  }
  
  ReactDOM.render(
      <Todolist className="todolist"/>,
      document.getElementById('root')
  )