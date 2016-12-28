import React, { PropTypes } from 'react';
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Capabilities.css';
import todoApp from '../../redux/reducers'
import App from '../../redux/components/App'

let store = createStore(todoApp)

class Capabilities extends React.Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
  };

  render() {
    return (
      <div className={s.root}>
        <div className={s.container}>
          <Provider store={store}>
            <App />
          </Provider>
        </div>
      </div>
    );
  }
}

export default withStyles(s)(Capabilities);
