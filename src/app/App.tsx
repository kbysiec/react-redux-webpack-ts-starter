import React, { Suspense } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom';
import { Provider } from 'react-redux';
import { Store } from 'redux';
import { hot } from 'react-hot-loader';
import HeaderComponent from './common/header/HeaderComponent';
import FooterComponent from './common/footer/FooterComponent';
import LoaderComponent from './common/loader/LoaderComponent';
import routes, { DEFAULT_ROUTE } from './routes';
import './common/common.scss';

interface AppProps {
  store: Store;
}

const App: React.SFC<AppProps> = ({ store }) => (
  <Provider store={store}>
    <Router>
      <>
        <div className="container">
          <HeaderComponent />
          <div className="content">
            <Suspense fallback={<LoaderComponent />}>
              <Switch>
                {routes.map(route => (
                  <Route exact key={`route${route.path}`} {...route} />
                ))}
                <Redirect to={DEFAULT_ROUTE} />
              </Switch>
            </Suspense>
          </div>
        </div>
        <FooterComponent />
      </>
    </Router>
  </Provider>
);

export default hot(module)(App);
// export default App;
