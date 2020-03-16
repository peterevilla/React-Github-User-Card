import React, { Component } from 'react'
import { Button, Header, Icon, Modal } from 'semantic-ui-react'

export default class ReposModal extends Component {
    constructor(props) {
      super(props)
     this.state = { modalOpen: false }

    }

    handleOpen = () => this.setState({ modalOpen: true })

   handleClose = () => this.setState({ modalOpen: false })
  render() {
    return (
      <Modal
        trigger={<Button onClick={this.handleOpen}>Repositories</Button>}
        open={this.state.modalOpen}
        onClose={this.handleClose}
        basic
        size='small'
      >
        <Header icon='github' content={`${this.props.user} Repo`} />
        <Modal.Content>
        {this.props.repos.map(ele => (
          <div key={ele.id}>
            <a href={ele.html_url}>{ele.name}</a>
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