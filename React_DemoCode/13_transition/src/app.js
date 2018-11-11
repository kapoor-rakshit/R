import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import AllCommentsPage from './components/AllCommentsPage';
import CommentDetailPage from './components/CommentDetailPage';

export default class App extends React.Component {
  render() {
      return (
        <Router>
          <div>
            <Switch>
              <Route exact path="/" component={AllCommentsPage} />
              <Route path="/comment/:id" component={CommentDetailPage} />
            </Switch>
          </div>
        </Router>
      );
  }
}
