import React, { Component } from 'react'
import { Button, Header, Icon, Modal } from 'semantic-ui-react'

export default class FollowersModal extends Component {
    constructor(props) {
      super(props)
     this.state = { modalOpen: false }

    }

    handleOpen = () => this.setState({ modalOpen: true })

   handleClose = () => this.setState({ modalOpen: false })
  render() {
    return (
      <Modal
        trigger={<Button onClick={this.handleOpen}>followers</Button>}
        open={this.state.modalOpen}
        onClose={this.handleClose}
        basic
        size='small'
      >
        <Header icon='github' content={`${this.props.user} followers`} />
        <Modal.Content>
        {this.props.followers.map(ele => (
          <div key={ele.id}>
            <a href={ele.html_url}><img className='avatar' src={ele.avatar_url} />{ele.login}</a>
          </div>
        ))}
        </Modal.Content>
        <Modal.Actions>
          <Button color='green' onClick={this.handleClose} inverted>
            <Icon name='checkmark' /> Got it
          </Button>
        </Modal.Actions>
      </Modal>
    )
  }
}