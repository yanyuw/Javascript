<template>
 <div class = "parent">
    <div id = "todolist">
        <input v-model = "newtodo" v-on:keyup.enter = "addnew" style ="width:400px">
        <button v-on:click = "addnew" style="float:right">Add</button>

        <ul class = "todolist">
            <li class = "list" v-for = "todo in todos" :key="todo.id">
                <input type="checkbox" v-on:click = "done(todo)" v-model = "todo.isFinish" >
                <!-- <input v-model = "todo.text" class = "todo" v-bind:class = "{finished: todo.isFinish}"> -->
                <span class = "todo" v-bind:class= "{finished: todo.isFinish, edit: todo.editing}" v-on:click = "editTodo(todo)">{{todo.text}}</span>
                <input 
                    v-model = "edit" 
                    v-on:keyup.enter = "editdone(todo)" 
                    v-bind:class = "{edit: !todo.editing}" 
                    style ="width:50%">
                <button class ="delbut" v-on:click = "deltodo(todo)">x</button>
            </li>
        </ul>
        <button v-on:click = "completeall">complete all</button>
        <button v-on:click = "inco">incomplete all</button>
        <span>{{remain}} things to do, {{completed}} things completed</span>
        <button v-on:click = "delall">clear</button>
        
    </div>
    </div>
</template>

<script>
export default {
  name: 'todolist',
  // data () {
  //   return {
  //     msg: 'Welcome to Your Vue.js App'
  //   }
  // }
              data (){
                  return{
                  todos: []
                  }
              },
            computed:{
                remain: function(){
                    return this.todos.filter(function(todo){
                        return !todo.isFinish;
                    }).length;
                },
                completed: function(){
                    return this.todos.filter(function(todo){
                        return todo.isFinish;
                    }).length;
                },
            },
            methods:{
                addnew(){
                    this.todos.push({
                        text:this.newtodo,
                        isFinish:false,
                        editing:false
                    })
                    this.newtodo = ''
                },
                deltodo(todo){
                    var index = this.todos.indexOf(todo);
                    this.todos.splice(index,1);
                },
                done(todo){
                    todo.isFinish = !todo.isFinish;
                },
                editTodo(todo){
                    todo.editing = !todo.editing;
                },
                editdone(todo){
                    todo.text = this.edit;
                    todo.editing = !todo.editing;
                    this.edit = '';
                },
                completeall(){
                    for(let i = 0; i < this.todos.length; i++){
                        this.todos[i].isFinish = true;

                    }
                },
                inco(){
                    for(let i = 0; i < this.todos.length; i++){
                        this.todos[i].isFinish = false;
                    }
                },
                delall(){
                    this.todos = [];
                }
                
            },
            watch:{
                "todo.isFinish": function(){
                    if(todo.isFinish){
                        this.checked = true;
                    }
                    else{
                        this.checked = false;
                    }
                }
            }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
      li{
          list-style:none;  
      }
      ul{
          padding: 0;
      }
      .head{
          text-align: center;
      }
      .parent{
          position:relative;
      }
      #todolist{
          position: absolute;
          left: 50%;
          transform: translateX(-50%);
      }
      .finished{
          text-decoration: line-through;
          color: grey;
      }
      .todo{
          outline: none;
          width:25%;
      }
      .delbut{
          color:red;
          float: right;
      }
      .list{
          margin: 5px;
      }
      .edit{
          display:none;
      }
</style>
