import React, { Component } from 'react';
import './App.css';
import TodoTable from './TodoTable';
import Button from '@material-ui/core/Button';
import SaveIcon from '@material-ui/icons/Save';
import TextField from '@material-ui/core/TextField';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {description: '', date:'', todos: []}
  }

  inputChanged = (event) => {
    this.setState({[event.target.name]: event.target.value});
  }

  addTodo = (event) => {
  const annoying={
    description:this.state.description,
    date:this.state.date
  }
    event.preventDefault();
    
    this.setState({
      todos: [...this.state.todos, annoying]
    });
  }
  deleteTodo = (row) => {
    //const index = parseInt(event.target.id);
    this.setState({
      todos: this.state.todos.filter((todo, i) => i != row.index)
    });
    }
  

  render() {
    return (
      <div className="App">
        <AppBar position="static">
        <Toolbar>
         TODO LIST
        </Toolbar>
        </AppBar>

        <div className="Apptodo">
        <div className="apptodop">
        <p>Add to do</p>
        </div>
        <div className="apptodo2">
          <form onSubmit={this.addTodo}>
          Description:
            <TextField type="text" label="Description" name="description" onChange={this.inputChanged} value={this.state.description}/>
            Date:
            <TextField type="date" label="Date"name="date" InputLabelProps={{
          shrink: true,
        }}onChange={this.inputChanged} value={this.state.date}/>
            <Button size="small" variant="contained" color="primary" onClick={this.addTodo}>
            <SaveIcon />
            Save
          </Button>
          </form>
        </div> 
        </div>

      
        <TodoTable todos={this.state.todos} deleteTodo = {this.deleteTodo}/>
       
      </div>
    );
  }
}

export default App;
