import React from 'react';
import { BrowserRouter as Router, Route, Redirect, Switch, NavLink} from 'react-router-dom';
import AllCommentsPage from './components/AllCommentsPage';
import AddCommentPage from './components/AddCommentPage';
import CommentDetailPage from './components/CommentDetailPage';
import NotFoundPage from './components/NotFoundPage';

class Links extends React.Component {
  render() {
    return (
      <nav>
        <NavLink exact activeClassName="active" to="/">Comments</NavLink>
        <NavLink activeClassName="active" to="/about">About</NavLink>
      </nav>
    );
  }
}

export default class App extends React.Component {
  render() {
      return (
        <Router>
          <div>
            <Links/>
            <Switch>
              <Route exact path="/" component={AllCommentsPage} />
              <Route path="/addComment" component={AddCommentPage} />
              <Route path="/comment/:id" component={CommentDetailPage} />
              <Route path="/about" render={() => <h1>About Page</h1> } />
              <Redirect from="/about-us" to="/about" />
              <Redirect from="/about-wipro" to="/about" />
              <Route component={NotFoundPage} />
            </Switch>
          </div>
        </Router>
      );
  }
}
