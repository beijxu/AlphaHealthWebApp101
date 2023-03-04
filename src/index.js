import { createRoot } from 'react-dom/client';
import { Router } from "react-router-dom";
import { createBrowserHistory } from "history";

import App from './App';

//import './App.css';
import './assets/scss/style.scss';

const history = createBrowserHistory();

const domNode = document.getElementById('root');
const root = createRoot(domNode);

root.render(
  <Router history={history}>
    <App />
  </Router>
);

