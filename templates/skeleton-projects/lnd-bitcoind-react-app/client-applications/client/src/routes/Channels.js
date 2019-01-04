import React, { Component } from 'react';
import { channelsService } from '../services/index';
import {
  Table,
  Input,
  Label,
  FormGroup,
  Form,
  Button
} from 'reactstrap';

class Channels extends Component {
  constructor(props) {
    super(props);
    this.state = {
      channels: []
    }
  }
  componentWillMount() {
    channelsService.getChannels().then(channels => {
      this.setState({ channels: channels });
    });
  }
  setFundingAmount(event) {
    this.setState({fundingAmount: event.target.value});
  }
  setPublicKey(event) {
    this.setState({publicKey: event.target.value});
  }
  connectChannel() {
    const channel = {
      fundingAmount: this.state.fundingAmount,
      publicKey: this.state.publicKey
    }
    channelsService.connectChannel(channel).then(result => {
      console.log('-'.repeat(100))
      console.log(result)
      console.log(result.channel)
      console.log('need to add to the data store')
      // this.setState({ channels: result.channel });
    });
  }
  render() {
    return (
      <div>
        <h1>Channels</h1>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>capacity</th>
              <th>commit_transaction_fee</th>
              <th>commit_transaction_weight</th>
              <th>id</th>
              <th>is_active</th>
              <th>is_closing</th>
              <th>is_opening</th>
              <th>local_balance</th>
              <th>partner_public_key</th>
              <th>received</th>
              <th>remote_balance</th>
              <th>sent</th>
              <th>transaction_id</th>
              <th>transaction_vout</th>
              <th>transfers_count</th>
              <th>unsettled_balance</th>
              <th>type</th>
            </tr>
          </thead>
          <tbody>
            {this.state.channels.map((channel, index) => (
              <tr key={index}>
                <td>{channel.capacity}</td>
                <td>{channel.commit_transaction_fee}</td>
                <td>{channel.commit_transaction_weight}</td>
                <td>{channel.id}</td>
                <td>{channel.is_active}</td>
                <td>{channel.is_closing}</td>
                <td>{channel.is_opening}</td>
                <td>{channel.local_balance}</td>
                <td>{channel.partner_public_key}</td>
                <td>{channel.received}</td>
                <td>{channel.remote_balance}</td>
                <td>{channel.sent}</td>
                <td>{channel.transaction_id}</td>
                <td>{channel.transaction_vout}</td>
                <td>{channel.transfers_count}</td>
                <td>{channel.unsettled_balance}</td>
                <td>{channel.type}</td>
              </tr>
            ))}
          </tbody>
        </Table>
        <form>
          <FormGroup>
            <Label>Amount to Fund (in Satoshis)</Label>
            <Input placeholder="Enter Amount" onChange={this.setFundingAmount.bind(this)} />
          </FormGroup>

          <FormGroup>
            <Label>Public Key</Label>
            <Input placeholder="Public Key" onChange={this.setPublicKey.bind(this)} />
          </FormGroup>

          <Button onClick={this.connectChannel.bind(this)}>
            Connect Channel
          </Button>
        </form>
      </div>
    );
  }
}

export default Channels;
