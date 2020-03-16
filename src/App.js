import React from "react";
import "./App.css";

import UserCard from './components/UserCard'
import Form from './components/Form'




class App extends React.Component {
  state = {
    user: [],
    followers:[],
    repos:[],
    
  };


  componentDidMount() {
    fetch("https://api.github.com/users/peterevilla")
      .then(res => res.json())
      .then(users => {
        console.log(users);
        this.setState({ user: users });
        console.log(this.state.user);
        return fetch('https://api.github.com/users/peterevilla/followers')
      })
      .then(res => res.json())
      .then(follow => {
        console.log('followers:', follow)
        this.setState({ followers: follow });
        return fetch('https://api.github.com/users/peterevilla/repos')
      })
      .then(res => res.json())
      .then(re => {
        console.log('repos:', re)
        this.setState({ repos: re });
      })
      .catch(err => console.error(err));
  }


  render() {
    return (
      <div className="App">
        <h1>Get Github User Card</h1>
        <Form handleQuery={this.handleQuery}/>
        <UserCard user={this.state.user} followers={this.state.followers} repos={this.state.repos} />
        
      </div>
    );
  }
}

export default App;
