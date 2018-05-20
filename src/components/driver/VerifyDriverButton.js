import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { observer } from 'mobx-react'
import { Button } from 'react-bootstrap'


@observer
class VerifyDriverButton extends Component {
  constructor(props) {
    super(props)
    this.onClick = this.onClick.bind(this)
  }

  onClick(e) {
    e.preventDefault()
    this.props.verifyDriver()
  }

  render() {
    return (
      <div>
        <Button bsStyle="info" onClick={this.onClick}>验证</Button>
      </div>
    )
  }
}

VerifyDriverButton.propTypes = {
  verifyDriver: PropTypes.func.isRequired,
}

export default VerifyDriverButton