import React from 'react';
import { Route, Switch } from 'react-router';

function App() {
  return (
    <>
    <NavBar />
    <Header />
    <div className="container">
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/about" component={About} />
        <Route path="/contactus" component={ContactUs} />
        <Route component={NotFound} />
      </Switch>
    </div>
    <Footer />
    </>
  );
}

export default App;


