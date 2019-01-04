import React, { Component } from 'react';
import { peersService } from '../services/index';
import {
  Table,
  Input,
  Label,
  FormGroup,
  Form,
  Button
} from 'reactstrap';

class Peers extends Component {
  constructor(props) {
    super(props);
    this.state = {
      peers: []
    }
  }
  componentWillMount() {
    peersService.getPeers().then(peers => {
      this.setState({ peers: peers });
    });
  }
  // setFundingAmount(event) {
  //   this.setState({fundingAmount: event.target.value});
  // }
  // setPublicKey(event) {
  //   this.setState({publicKey: event.target.value});
  // }
  // connectChannel() {
  //   const invoice = {
  //     fundingAmount: this.state.fundingAmount,
  //     publicKey: this.state.publicKey
  //   }
  //   peersService.connectChannel(invoice).then(result => {
  //     console.log('-'.repeat(100))
  //     console.log(result)
  //     console.log(result.invoice)
  //     console.log('need to add to the data store')
  //     // this.setState({ peers: result.invoice });
  //   });
  // }
  render() {
    return (
      <div>
        <h1>Peers</h1>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>bytes_sent</th>
              <th>is_inbound</th>
              <th>network_address</th>
              <th>ping_time</th>
              <th>tokens_received</th>
              <th>tokens_sent</th>
              <th>type</th>
            </tr>
          </thead>
          <tbody>
            {this.state.peers.map((peer, index) => (
              <tr key={index}>
                <td>{peer.bytes_sent}</td>
                <td>{peer.is_inbound}</td>
                <td>{peer.network_address}</td>
                <td>{peer.ping_time}</td>
                <td>{peer.tokens_received}</td>
                <td>{peer.tokens_sent}</td>
                <td>{peer.type}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    );
  }
}

export default Peers;
