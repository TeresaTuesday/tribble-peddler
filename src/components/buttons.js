import React, {Component} from 'react'

import RaisedButton from 'material-ui/RaisedButton'
import Dialog from 'material-ui/Dialog'

export class ModalButton extends Component {
  constructor(props) {
    super(props)
    this.state = {
      open: false
    }
  }
  render() {
    const {label, display} = this.props
    return (
      <div>
        <RaisedButton secondary={true} label={label} onClick={e => this.setState({ open: !this.state.open })} />
        <Dialog
          actions={<RaisedButton label='Close' onClick={e => this.setState({open: !this.state.open})}/>}
          open={this.state.open}
          onRequestClose={e => this.setState({open: !this.state.open})}>
          <div>{display}</div>
        </Dialog>
      </div>
    )
  }
}
