import React, { Component, Fragment } from 'react';
import { Route, Redirect, Switch, withRouter } from 'react-router-dom';
import Form from './components/Form/Form';
import Table from './components/Table/Table';
import Navigation from './components/Navigation/Navigation';
import './App.css';

class App extends Component {
  state = {
    users: []
  }

  submitHandler = (event, form, index) => {
    event.preventDefault();

    const users = [ ...this.state.users ];
    const user = { name: form.fields.name, email: form.fields.email };

    if (index) {
      users[index] = user;
    } else {
      users.push(user);
    }

    this.setState({ users });

    this.props.history.push('/user/list');
  }

  removeHandler = (index) => {
    const users = [ ...this.state.users ];

    users.splice(index, 1);

    this.setState({ users });
  }

  render() {
    return (
      <Fragment>
        <Navigation/>
        <Switch>
          <Route exact path="/user/create" render={() => <Form submit={this.submitHandler}/>}/>
          <Route exact path="/user/edit/:index" render={(props) => <Form user={this.state.users[props.match.params.index]} submit={this.submitHandler}/>}/>
          <Route exact path="/user/list" render={() => <Table rows={this.state.users} remove={this.removeHandler}/>}/>
          <Redirect to="/user/list"/>
        </Switch>
      </Fragment>
    );
  }
}

export default withRouter(App);
