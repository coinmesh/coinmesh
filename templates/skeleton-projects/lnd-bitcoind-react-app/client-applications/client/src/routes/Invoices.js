import React, { Component } from 'react';
import { invoicesService } from '../services/index';
import {
  Table,
  Input,
  Label,
  FormGroup,
  Form,
  Button
} from 'reactstrap';

class Invoices extends Component {
  constructor(props) {
    super(props);
    this.state = {
      invoices: []
    }
  }
  componentWillMount() {
    invoicesService.getInvoices().then(invoices => {
      this.setState({ invoices: invoices });
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
  //   invoicesService.connectChannel(invoice).then(result => {
  //     console.log('-'.repeat(100))
  //     console.log(result)
  //     console.log(result.invoice)
  //     console.log('need to add to the data store')
  //     // this.setState({ invoices: result.invoice });
  //   });
  // }
  render() {
    return (
      <div>
        <h1>Invoices</h1>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>chain_address</th>
              <th>confirmed_at</th>
              <th>created_at</th>
              <th>description</th>
              <th>description_hash</th>
              <th>expires_at</th>
              <th>id</th>
              <th>invoice</th>
              <th>is_confirmed</th>
              <th>is_outgoing</th>
              <th>tokens</th>
              <th>type</th>
            </tr>
          </thead>
          <tbody>
            {this.state.invoices.map((invoice, index) => (
              <tr key={index}>
                <td>{invoice.chain_address}</td>
                <td>{invoice.confirmed_at}</td>
                <td>{invoice.created_at}</td>
                <td>{invoice.description}</td>
                <td>{invoice.description_hash}</td>
                <td>{invoice.expires_at}</td>
                <td>{invoice.id}</td>
                <td>{invoice.invoice}</td>
                <td>{invoice.is_confirmed}</td>
                <td>{invoice.is_outgoing}</td>
                <td>{invoice.tokens}</td>
                <td>{invoice.type}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    );
  }
}

export default Invoices;
