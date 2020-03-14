import React from "react";
import "./App.css";
import { Card, Icon, Image } from 'semantic-ui-react'




class App extends React.Component {
  state = {
    user: [],
    followers:[]
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
      })
      .catch(err => console.error(err));
  }

  // componentDidMount() {
  //   fetch("https://api.github.com/users/peterevilla/followers")
  //     .then(res => res.json())
  //     .then(follows => {
  //       console.log(follows);
  //       this.setState({ followers: follows });
  //       console.log(this.state.followers);
  //     })
  //     .catch(err => console.error(err));
  // }



  render() {
    return (
      <div className="App">
        <h1>Get Github User Card</h1>
        <Card>
        <Image src={this.state.user.avatar_url} />
        <Card.Content>
        <Card.Header>{this.state.user.name}</Card.Header>
        <Card.Meta><a href={this.state.user.html_url}><Icon name='github'/> {this.state.user.login}</a></Card.Meta>
        {this.state.followers.map(ele => (
          <ul>
            <li>{ele.login}</li>
          </ul>
        ))}
        </Card.Content>
        </Card>
        
      </div>
    );
  }
}

export default App;
