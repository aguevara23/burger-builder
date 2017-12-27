import React, { Component } from 'react';

import Button from '../../../components/UI/Button/Button';
import classes from './ContactData.css';

class ContactData extends Component {
  state = {
    name: '',
    email: '',
    address: {
      street: '',
      postalCode: ''
    }
  }

  render() {
    return (
      <div className={classes.ContactData}>
        <h4>Enter Your Contact Info</h4>
        <form>
          <input className={classes.Input} type='text' value="name" placeholder="Your Name" />
          <input className={classes.Input} type='email' value="email" placeholder="Your Email" />
          <input className={classes.Input} type='text' value="street" placeholder="Your Street" />
          <input className={classes.Input} type='text' value="postal" placeholder="Your Postal Code" />
          <Button btnType='Success'>ORDER</Button>
        </form>
      </div>
    )
  }
}

export default ContactData;