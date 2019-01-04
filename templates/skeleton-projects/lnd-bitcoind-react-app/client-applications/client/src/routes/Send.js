import React, { Component } from 'react';
import { addressesService } from '../services/index';

import {
  Input, InputGroup, Button
} from 'reactstrap';

class Send extends Component {
  constructor(props) {
    super(props);

    this.state = {
      address: '',
      amount: 0
    }
  }
  setAddress(event) {
    this.setState({ address: event.target.value });
  }
  setAmount(event) {
    this.setState({ amount: event.target.value });
  }
  submit() {
    let payment = {
      address: this.state.address,
      tokens: this.state.address
    };
    this.transactionsService.sendPayment(payment);
  }
  render() {
    return (
      <div>
        <h1>
          Send to Address -
        </h1>
        <InputGroup>
          <Input
            onChange={this.setAddress.bind(this)}
            placeholder="address" />
        </InputGroup>
        <InputGroup>
          <Input onChange={this.setAmount.bind(this)}
            placeholder="amount (in satoshis)" />
        </InputGroup>
        <Button onClick={this.submit.bind(this)}>Submit</Button>
      </div>
    );
  }
}

export default Send;
