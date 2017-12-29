import React, { Component } from 'react';

import Button from '../../../components/UI/Button/Button';
import classes from './ContactData.css';
import axios from '../../../axios-orders';
import Spinner from '../../../components/UI/Spinner/Spinner';
import Input from '../../../components/UI/Input/Input';

class ContactData extends Component {
  state = {
    orderForm: {
      name: {
        elementType: 'input',
        elementConfig: {
          type: 'name',
          placeholder: 'Your Name'
        },
        value: ''
      },
        street: {
          elementType: 'input',
          elementConfig: {
            type: 'name',
            placeholder: 'Street'
          },
          value: ''
        },
        zipcode: {
          elementType: 'input',
          elementConfig: {
            type: 'name',
            placeholder: 'ZIP code'
          },
          value: ''
        },
        country: {
          elementType: 'input',
          elementConfig: {
            type: 'name',
            placeholder: 'Country'
          },
          value: ''
        },
      email: {
        elementType: 'input',
        elementConfig: {
          type: 'name',
          placeholder: 'Email'
        },
        value: ''
      },
      deliveryMethod: {
        elementType: 'select',
        elementConfig: {
          type: 'name',
          options: [
            {value: 'fastest', displayValue: 'Fastest'},
            {value: 'cheapest', displayValue: 'Cheapest'}
          ]
        },
        value: ''
    }
  },
  loading: false
}

  orderHandler = (event) => {
    event.preventDefault();
    console.log(this.props.ingredients)
    this.setState({loading: true});
    const formData = {};
    for ( let formElementIdentifier in this.state.orderForm) {
      formData[formElementIdentifier] = this.state.orderForm[formElementIdentifier].value
    }
    const order = {
      ingredients: this.props.ingredients,
      price: this.props.price,
      orderData: formData
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

  inputChangedHandler = (event, inputIdentifier ) => {
    const updatedOrderForm = {
      ...this.state.orderForm
    }
    const updatedFormElement = {
      ...updatedOrderForm[inputIdentifier]
    }
    updatedFormElement.value = event.target.value;
    updatedOrderForm[inputIdentifier] = updatedFormElement;
    this.setState({orderForm: updatedOrderForm})
  }

  render() {
    let formElementsArray = [];
    for (let key in this.state.orderForm) {
      formElementsArray.push({
        id: key,
        config: this.state.orderForm[key]
      });
    }

    let form = (
      <form onSubmit={this.orderHandler}>
        {formElementsArray.map(formElement => (
          <Input
            key={formElement.id}
            elementType={formElement.config.elementType}
            elementConfig={formElement.config.elementConfig}
            value={formElement.config.value}
            changed={(event) => this.inputChangedHandler(event, formElement.id)}/>
        ))}
        <Button btnType='Success'>ORDER</Button>
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
