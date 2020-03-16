import React from "react";
import { Card, Icon, Image} from 'semantic-ui-react'
import FollowersModal from './FollowersModal'
import ReposModal from './ReposModal'






const UserCard = props => {

    

        return(
            <div className='card'> 
            <Card >
            <Image src={props.user.avatar_url} />
            <Card.Content>
            <Card.Header>{props.user.name}</Card.Header>
            <Card.Meta><a href={props.user.html_url}><Icon name='github'/> {props.user.login}</a></Card.Meta>
            <Card.Description>
            <p>Location: {props.user.location}</p>
            <p>Bio: {props.user.bio}</p>
            </Card.Description>
            <FollowersModal user={props.user.login} followers={props.followers} />
            {/* <ReposModal user={props.user.login} repos={props.repos} /> */}
            </Card.Content>
            </Card>
            </div>
        )


}

export default UserCard;