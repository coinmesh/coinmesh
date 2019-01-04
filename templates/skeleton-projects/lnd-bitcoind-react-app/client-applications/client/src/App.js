import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import Home from './routes/Home';
import Send from './routes/Send';
import Receive from './routes/Receive';
import Channels from './routes/Channels';
import Invoices from './routes/Invoices';
import Peers from './routes/Peers';

import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    Container,
    Row,
    Col,
    Jumbotron,
    Button
} from 'reactstrap';

const routes = [
  {
    path: '/',
    exact: true,
    component: Home,
    name: 'Home'
  },
  {
    path: '/send',
    component: Send,
    name: 'Send'
  },
  {
    path: '/receive',
    component: Receive,
    name: 'Receive'
  },
  {
    path: '/channels',
    component: Channels,
    name: 'Channels'
  },
  {
    path: '/invoices',
    component: Invoices,
    name: 'Invoices'
  },
  {
    path: '/peers',
    component: Peers,
    name: 'Peers'
  }
];

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      filter: '',
      documents: [],
      displayDocuments: [],
      errors: []
    };
  }
  render() {
    return (
      <Router>
        <div>
          <Navbar color="inverse" light expand="md">
            <NavbarBrand href="/">React LND Bitcoind</NavbarBrand>
            <NavbarToggler onClick={this.toggle} />
            <Collapse isOpen={this.state.isOpen} navbar>
              <Nav className="ml-auto" navbar>
                {
                  routes.map((route, index) => (
                    <NavItem key={index}>
                      <NavLink tag={Link} to={route.path}>{route.name}</NavLink>
                    </NavItem>
                  ))
                }
              </Nav>
            </Collapse>
          </Navbar>
          <Jumbotron>
            <Container>
              <Row>
                <Col>
                  {routes.map((route, index) => (
                    <Route
                      key={index}
                      path={route.path}
                      exact={route.exact}
                      component={route.component}
                    />
                  ))}
                </Col>
              </Row>
            </Container>
          </Jumbotron>
        </div>
      </Router>
    );
  }
}

export default App;

