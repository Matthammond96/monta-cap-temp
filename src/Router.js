import React, { Component } from 'react'
import { withRouter, Route, Switch } from 'react-router-dom';
import  SelfCertification from './SelfCertification'
import Maintance from './Maintance'

class Router extends Component {
  constructor(props) {
    super(props);

    this.state = {}
  }

  render() {
    return (
      <>
      <Switch>
        <Route path="/self-certification" component={SelfCertification}></Route>
        <Route path="*" component={Maintance}></Route>
      </Switch>
      </>
    )
  }
}

export default withRouter(Router)