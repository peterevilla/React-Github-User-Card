import React from "react";
import "./App.css";
import UserCard from './components/UserCard'
import FormSearch from './components/FormSearch'




class App extends React.Component {
  state = {
    user: [],
    followers: [],
    repos: [],

  }

      onSearch = (search) => {
        
         

          fetch(`https://api.github.com/users/${search}`)
            .then(res => res.json())
            .then(userItem => {
              console.log('user',userItem);
              this.setState({ user: userItem });
              return fetch(userItem.followers_url)
            })
            .then(res => res.json())
            .then(follow => {
              console.log('followers:', follow)
              this.setState({ followers: follow });
            
            })
            fetch(`https://api.github.com/users/${search}/repos`)
            .then(res => res.json())
            .then(re => {
              console.log('repos:', re)
              this.setState({ repos: re });
            })
            .catch(err => console.error(err));

            this.setState({ search: ''})
        
        
      }

    render() {
      return (
        <div className="App">
          <h1>Get Github User Card</h1>
          <FormSearch onSearch={this.onSearch}/>
          {this.state.user.length !== 0 && (<UserCard user={this.state.user} followers={this.state.followers} repos={this.state.repos} />)}

        </div>
      );
    }
  }

  export default App;
