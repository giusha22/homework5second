import React, { Component } from 'react'

export default class App extends Component {
  constructor(){
    super();
    this.state = {users: [] };

  }
    onAddUser = ()=>{
    const newUser = {
      name: "giorgi",
      age: Math.floor(Math.random() * (60 - 10 + 1) + 10),
      id: new Date().toString(),
    };
    this.setState((prevState)=> ({
      users:[...prevState.users, newUser]
    }) )
  } 
  onDeleteUser = (id)=>{
    console.log("id",id);
    this.setState((prevState)=>({
      users: prevState.users.filter((user)=> user.id  !== id)
    }));
  };
  onUpdateUser = (id)=>{
    this.setState((prevState)=>{
        const newUsersList = prevState.users.reduce((acc,current)=>{
          if(current.id === id){
            current.age = 50;
            current.name = "vaskaa";
            }
            return [...acc, current]
        },[]);
        return {
          users: newUsersList
        };
    })
  };

  render() {
    return (
      <div>
        <button onClick={this.onAddUser}>Add user</button>
        {this.state.users.map((user)=>{
          return <div key={user.id} style={{display: "flex", justifyContent: "space-between"}}>
            <h1>{user.name}</h1>
            <h2>{user.age } </h2>
            <button onClick={ ()=> this.onUpdateUser(user.id)}>Update</button>
            <button onClick={()=> this.onDeleteUser(user.id)}>Delete</button>


          </div>
        })}
      </div>
    )
  }
}
 