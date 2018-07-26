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
                complete: false
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
    }
    
    check(){
        this.props.CompleteTask(this.props.todo.id);
    }

    del(){
        this.props.DeleteTask(this.props.todo.id);
        
    }
    render(){
        var item = this.props.todo;
        var text = item.complete ? "finished" : "";
        return (
            <li className="list">
                <input type="checkbox" onClick= {this.check} checked={item.complete}/>
                <span className={text}>{item.text}</span>
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
            //     complete: false
            // },{
            //     id: 2,
            //     text: "你好",
            //     complete: false           }
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
                    num--;
                }else{
                    num++;
                }
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
    
    render() {
      return (
          <div>
              <h1 className="title"> To Do List</h1>
              <Addnew AddTask = {this.AddTask.bind(this)} count={this.state.todos.length}/>
              <ul>
                { this.state.todos.map((item, i) => {
                    return <Todoitem todo={item}  CompleteTask = {this.CompleteTask.bind(this)} DeleteTask = {this.DeleteTask.bind(this)}/>
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