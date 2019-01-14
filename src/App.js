import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Appbar from './shared-components/navbar';
import Appbody from './pages/body';
import CreatePost from './pages/creat-post';
import ViewPost from './pages/post';

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Appbar/>
        <CreatePost/>
        <Appbody/>
        <ViewPost/>
      </React.Fragment>
      
    );
  }
}

export default App;
