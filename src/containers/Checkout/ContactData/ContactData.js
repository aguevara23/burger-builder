import React, { Component } from 'react';

import Button from '../../../components/UI/Button/Button';
import classes from './ContactData.css';
import axios from '../../../axios-orders';
import Spinner from '../../../components/UI/Spinner/Spinner';

class ContactData extends Component {
  state = {
    name: '',
    email: '',
    address: {
      street: '',
      postalCode: ''
    },
    loading: false
  }

  orderHandler = (event) => {
    event.preventDefault();
    console.log(this.props.ingredients)
    this.setState({loading: true});

    const order = {
      ingredients: this.props.ingredients,
      price: this.props.totalPrice,
      customer: {
        name: 'Alex G',
        addres: {
          street: 'My Street',
          zipcode: '12344',
          country: 'USA'
        },
        email: 'test@test.com'
      },
      deliveryMethod: 'fastest'
    }

    axios.post('/orders.json', order)
      .then(response => {
        this.setState({loading: false})
        this.props.history.push('/')
      })
      .catch(error => {
        this.setState({loading: false})
      })
  }

  render() {
    let form = (
      <form>
        <input className={classes.Input} type='text' value="name" placeholder="Your Name" />
        <input className={classes.Input} type='email' value="email" placeholder="Your Email" />
        <input className={classes.Input} type='text' value="street" placeholder="Your Street" />
        <input className={classes.Input} type='text' value="postal" placeholder="Your Postal Code" />
        <Button clicked={this.orderHandler} btnType='Success'>ORDER</Button>
      </form>
    )
    if (this.state.loading) {
      form = <Spinner />
    }
    return (
      <div className={classes.ContactData}>
        <h4>Enter Your Contact Info</h4>
        {form}
      </div>
    )
  }
}

export default ContactData;
