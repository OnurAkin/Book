import React from "react";
import { Field, reduxForm } from "redux-form";
import validate from "./../validate";
import renderField from "./../renderField";
import Card from "react-credit-cards";
import "./../../assets/styles/card.css";
const WizardFormFirstPage = (props) => {
  const { handleSubmit, previousPage, submitting, pristine} = props;
  return (
    <div className="booking-form">
      <Card
        name="John Smith"
        number="4111 1111 1111 1111"
        expiry="10/20"
        cvc="737"
      />
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <div className="row">
            <div className="col-sm-12">
              <Field
                name="number"
                type="tel"
                component={renderField}
                label="Kart Numarası"
              />
            </div>
          </div>

          <div className="row">
            <div className="col-sm-6">
              <Field
                name="name"
                type="text"
                component={renderField}
                label="İsim"
              />
            </div>
            <div className="col-sm-3">
              <Field
                name="expire"
                type="number"
                placeholder="AA/YY"
                component={renderField}
                label="Son Kul. Tarihi"
              />
            </div>
            <div className="col-sm-3">
              <Field
                name="cvc"
                type="number"
                placeholder="12*"
                component={renderField}
                label="CVC"
              />
            </div>
          </div>
        </div>
        <div className="form-btn mt-3 row">
          <div className="col">
            <button
              type="button"
              className="pre-btn float-left"
              onClick={previousPage}
            >
              Geri
            </button>
            <button className="submit-btn float-right" type="submit" disabled={pristine || submitting}>Gönder</button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default reduxForm({
  form: "wizard", //                 <------ same form name
  destroyOnUnmount: false, //        <------ preserve form data
  forceUnregisterOnUnmount: true, // <------ unregister fields on unmount
  validate,
})(WizardFormFirstPage);
