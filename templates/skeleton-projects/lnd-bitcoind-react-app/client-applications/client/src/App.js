import React, { Component } from 'react';
import './App.css';
import { addressesService } from './services/index';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import Home from './routes/Home';
import Send from './routes/Send';
import Receive from './routes/Receive';
import Channels from './routes/Channels';
import Invoices from './routes/Invoices';
import Peers from './routes/Peers';

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
  componentWillMount() {
    addressesService.createAddress().then(result => {
      this.setState({ address: result.address });
    });
  }
  render() {
    return (
      <Router>
        <div style={{ display: "flex" }}>
          <div
            style={{
              padding: "10px",
              width: "40%",
              background: "#f0f0f0"
            }}>

            <h1>{this.state.address}</h1>
            <ul style={{ listStyleType: "none", padding: 0 }}>
              {
                routes.map((route, index) => (
                  <li key={index}>
                    <Link to={route.path}>{route.name}</Link>
                  </li>
                ))
              }
            </ul>

            {routes.map((route, index) => (
              <Route
                key={index}
                path={route.path}
                exact={route.exact}
                component={route.component}
              />
            ))}
          </div>
        </div>
      </Router>
    );
  }
}

export default App;

