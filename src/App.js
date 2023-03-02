import React, {useEffect} from 'react';
import { Switch } from 'react-router-dom';
import AppRoute from './utils/AppRoute';
import ReactGA from 'react-ga';

// Layouts
import LayoutDefault from './layouts/LayoutDefault';

// Views 
import Home from './views/home/Home';
import DashboardMain from './views/dashboard/DashboardMain';
import APICallExample from './APICallExample';

// Initialize Google Analytics
ReactGA.initialize(process.env.REACT_APP_GA_CODE);

const trackPage = page => {
  ReactGA.set({ page });
  ReactGA.pageview(page);
};

const App = () => {
  useEffect(() => {
    fetch("https://clinicaltrials.gov/api/query/full_studies?expr=prostate&min_rnk=1&max_rnk=10&fmt=JSON")
        .then(response => console.log('aa'))
        .then(data => console.log(data))
        .catch(error => console.error(error));
    }, []);


  return (
    <Switch>
      <AppRoute exact path="/" component={Home} layout={LayoutDefault} />
      <AppRoute exact path="/dashboard" component={DashboardMain} layout={LayoutDefault} />
      <AppRoute exact path="/api" component={APICallExample}/>
    </Switch>
  );
}

export default App;