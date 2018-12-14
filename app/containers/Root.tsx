import { ConnectedRouter } from 'connected-react-router';
import { History } from 'history';
import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { Store } from 'redux';
import Routes from '../Routes';

interface IRootProps {
  store: Store;
  history: History;
}

export default class Root extends Component<IRootProps> {
  public render() {
    const { store, history } = this.props;
    return (
      <Provider store={store}>
        <ConnectedRouter history={history}>
          <Routes />
        </ConnectedRouter>
      </Provider>
    );
  }
}
