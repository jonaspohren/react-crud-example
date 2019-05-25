import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import Button from '../Button/Button';
import { capitalize } from '../../utils/string';
import styles from './Form.module.css';

class Form extends Component {
  state = {
    fields: {
      name: '',
      email: ''
    }
  }

  componentDidMount() {
    const user = this.props.user;

    if (user) {
      const fields = { ...this.state.fields };

      fields.name = user.name;
      fields.email = user.email;

      this.setState({ fields });
    }
  }

  changeHandler = (event) => {
    const fields = { ...this.state.fields };

    fields[event.target.name] = event.target.value;

    this.setState({ fields });
  }

  render() {
    return (
      <form className={styles.Form} onSubmit={(event) => this.props.submit(event, this.state, this.props.match.params.index)}>
        {Object.keys(this.state.fields).map(key =>
          <input key={key} type="text" name={key} value={this.state.fields[key]} placeholder={capitalize(key)} onChange={this.changeHandler}/>
        )}
        <Button type="submit" value="Save" className={styles.submit}/>
      </form>
    )
  }
}

export default withRouter(Form);