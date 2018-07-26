import React from 'react';
import {
  BrowserRouter,
  Link,
  NavLink,
  Route,
  Switch
} from 'react-router-dom';
import AddExpensePage from '../components/AddExpensePage.jsx';
import EditExpensePage from '../components/EditExpensePage.jsx';
import ExpenseDashboardPage from '../components/ExpenseDashboardPage.jsx';
import Header from '../components/Header.jsx';
import HelpPage from '../components/HelpPage.jsx';
import NotFoundPage from '../components/NotFoundPage.jsx';

const AppRouter = () => (
  <BrowserRouter>
    <div>
      <Header />
      <Switch>
        <Route path="/" component={ExpenseDashboardPage} exact={true} />
        <Route path="/create" component={AddExpensePage} />
        <Route path="/edit/:id" component={EditExpensePage} />
        <Route path="/help" component={HelpPage} />
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  </BrowserRouter>
);

export default AppRouter;
