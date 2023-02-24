import React from 'react';
import { Switch } from 'react-router-dom';
import AppRoute from './utils/AppRoute';
import ReactGA from 'react-ga';

// Layouts
import LayoutDefault from './layouts/LayoutDefault';

// Views 
import Home from './views/home/Home';
import DashboardMain from './views/dashboard/DashboardMain';

// Initialize Google Analytics
ReactGA.initialize(process.env.REACT_APP_GA_CODE);

const trackPage = page => {
  ReactGA.set({ page });
  ReactGA.pageview(page);
};

const App = () => {


  return (
    <Switch>
      <AppRoute exact path="/" component={Home} layout={LayoutDefault} />
      <AppRoute exact path="/dashboard" component={DashboardMain} layout={LayoutDefault} />
    </Switch>
  );
}

export default App;