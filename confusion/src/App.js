import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom'
import './App.css';
import Main from './components/MainComponent';
import { Provider } from 'react-redux';
import { ConfigureStore } from './redux/configureStore';
class App extends Component {

  render() {
    const store = ConfigureStore();
    return (
      <Provider store={store}>
        <Router>
          <div className="App">
            <Main />
          </div>
        </Router>
      </Provider>
    );
  }

}


export default App;
