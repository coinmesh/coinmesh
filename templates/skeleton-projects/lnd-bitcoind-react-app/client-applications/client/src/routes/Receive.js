import React, { Component } from 'react';
import { addressesService } from '../services/index';
import {
  Input, InputGroup
} from 'reactstrap';

class Receive extends Component {
  constructor(props) {
    super(props);

    this.state = {
      address: ''
    }
  }
  componentWillMount() {
    addressesService.createAddress().then(result => {
      this.setState({ address: result.address });
    });
  }
  render() {
    return (
      <div>
        <h1>
          Receive Address -
        </h1>
        <InputGroup>
          <Input disabled="disabled" value={this.state.address} />
        </InputGroup>
      </div>
    );
  }
}

export default Receive;
