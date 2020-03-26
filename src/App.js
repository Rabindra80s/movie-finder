import React, { Suspense } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import Layout from './hoc/Layout/Layout';
import Movies from './container/Movies/Movies';
import Favorites from './container/Favorites';
import Contact from './container/Contact';

const App = () => {

  let routes = (
    <Switch>
      <Route path="/" exact component={Movies} />
      <Route path="/favorites" component={Favorites} />
      <Route path="/contact" component={Contact} />
      <Redirect to="/" />
    </Switch>
  );

  return (
    <div>
      <Layout>
        <Suspense fallback={<p>Loading...</p>}>
          {routes}
        </Suspense>
      </Layout>
    </div>
  );
}

export default App;
