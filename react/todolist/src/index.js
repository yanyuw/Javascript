import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Addnew from './addnew';
import Todoitem from './todoitem';

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