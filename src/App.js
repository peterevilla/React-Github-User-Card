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

  setSearchTerm = user => {

    this.setState({ search: user });
    console.log(this.search)

  };



  // componentDidMount() {
  //   console.log('Did Mount')
  //   fetch(`https://api.github.com/users/${this.state.search}`)
  //     .then(res => res.json())
  //     .then(userItem => {
  //       console.log('user',userItem);
  //       this.setState({ user: userItem });
  //       return fetch(userItem.followers_url)
  //     })
  //     .then(res => res.json())
  //     .then(follow => {
  //       console.log('followers:', follow)
  //       this.setState({ followers: follow });
      
  //     })
  //     fetch(`https://api.github.com/users/${this.state.search}/repos`)
  //     .then(res => res.json())
  //     .then(re => {
  //       console.log('repos:', re)
  //       this.setState({ repos: re });
  //     })
  //     .catch(err => console.error(err));
  // }

      componentDidUpdate(prevProps, prevState) {
        if (this.state.search !== prevState.search) {
          this.setState({
            user: [],
            followers: [],
            repos: [],
            search: ''
        
          });

          console.log('Did Mount')
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
            fetch(`https://api.github.com/users/${this.state.search}/repos`)
            .then(res => res.json())
            .then(re => {
              console.log('repos:', re)
              this.setState({ repos: re });
            })
            .catch(err => console.error(err));
        
        }
      }

    render() {
      return (
        <div className="App">
          <h1>Get Github User Card</h1>
          <FormSearch setSearchTerm={this.setSearchTerm} onSearch={this.onSearch} search={this.state.search} />
          {this.state.user.length !== 0 && (<UserCard user={this.state.user} followers={this.state.followers} repos={this.state.repos} />)}

        </div>
      );
    }
  }

  export default App;
