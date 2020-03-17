import React from "react";
import "./App.css";

import UserCard from './components/UserCard'
import FormSearch from './components/FormSearch'




class App extends React.Component {
  state = {
    user: [],
    followers: [],
    repos: [],
    search: ''

  };

  handleQuery = user => {

    this.setState({ ...this.state, search: user });

  };

  // withAxios = () => {
  //   axios
  //     .get(`https://api.github.com/users/${this.state.search}`)
  //     .then(response => {
  //       console.log('DATA:', response.data);
  //       this.setState({ user: response.data });
  //       console.log(this.state.user);
  //       return axios.get(`https://api.github.com/users/${this.state.search}/followers`)
  //     })
  //     .then(response => {
       
  //       console.log('followers:', response.data)
  //       this.setState({ followers: response.data });
            
  //       })
  //     .catch(err => console.log("Error: ", err))
       
      
  //     };

  onSearch = () => {
    fetch(`https://api.github.com/users/${this.state.search}`)
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
      // fetch(`https://api.github.com/users/${this.state.search}/repos`)
      // .then(res => res.json())
      // .then(re => {
      //   console.log('repos:', re)
      //   this.setState({ repos: re });
      // })
      .catch(err => console.error(err));
  }

      componentDidUpdate(prevProps, prevState) {
        if (this.state.search !== prevState.search) {
          this.setState({
            user: [],
            followers: [],
            repos: [],
            search: ''
        
          });
          this.onSearch();
        }
      }

    render() {
      return (
        <div className="App">
          <h1>Get Github User Card</h1>
          <FormSearch handleQuery={this.handleQuery} onSearch={this.onSearch} />
          {this.state.user.length !== 0 && (<UserCard user={this.state.user} followers={this.state.followers} repos={this.state.repos} />)}

        </div>
      );
    }
  }

  export default App;
