const validate = values => {
    const errors = {};
    if (!values.checkIn) {
        errors.checkIn = 'Required';
      }
      if (!values.checkOut) {
        errors.checkOut = 'Required';
      }
    // if (!values.firstName) {
    //   errors.firstName = 'Required';
    // }
    // if (!values.lastName) {
    //   errors.lastName = 'Required';
    // }
    if (!values.number) {
      errors.number = 'Required';
    } else if (!/^(?:3[47][0-9]{13})$/i.test(values.number)) {
      errors.number = 'Invalid credit number';
    }
    if (!values.roomType) {
      errors.roomType = 'Required';
    }
    if (!values.cvc) {
      errors.cvc = 'Required';
    }
    if (!values.expire) {
      errors.expire = 'Required';
    }
    if (!values.screen) {
        errors.screen = 'Required';
      }
    if (!values.favoriteColor) {
      errors.favoriteColor = 'Required';
    }
    return errors;
  };
  
  export default validate;
  