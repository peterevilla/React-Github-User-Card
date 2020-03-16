import React from "react";
import { Card, Icon, Image} from 'semantic-ui-react'
import FollowersModal from './FollowersModal'
import ReposModal from './ReposModal'






class UserCard extends React.Component {

    constructor(props) {
        super(props)
    }

    render() {

        return(
            <div className='card'> 
            <Card >
            <Image src={this.props.user.avatar_url} />
            <Card.Content>
            <Card.Header>{this.props.user.name}</Card.Header>
            <Card.Meta><a href={this.props.user.html_url}><Icon name='github'/> {this.props.user.login}</a></Card.Meta>
            <Card.Description>
            <p>Location: {this.props.user.location}</p>
            <p>Bio: {this.props.user.bio}</p>
            </Card.Description>
            <FollowersModal user={this.props.user.login} followers={this.props.followers} />
            <ReposModal user={this.props.user.login} repos={this.props.repos} />
            </Card.Content>
            </Card>
            </div>
        )
    }


}

export default UserCard;