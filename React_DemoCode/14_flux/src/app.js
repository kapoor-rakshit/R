import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import AllCommentsPage from './components/AllCommentsPage';
import AddCommentPage from './components/AddCommentPage';

export default class App extends React.Component {
  render() {
      return (
        <Router>
          <div>
            <Switch>
              <Route exact path="/" component={AllCommentsPage} />
              <Route path="/addComment" component={AddCommentPage} />
            </Switch>
          </div>
        </Router>
      );
  }
}
