import React from "react";
import { Field, reduxForm } from "redux-form";
import validate from "./../validate";
import renderField from "./../renderField";

const renderError = ({ meta: { touched, error } }) =>
  touched && error ? <span>{error}</span> : false;

const secondForm = (props) => {
    console.log(props)
  const { handleSubmit, previousPage } = props;
  console.log(handleSubmit)
  return (
    <div className="booking-form">
      <form onSubmit={handleSubmit}>
        <div class="form-group">
          <span class="form-label font-weight-bold">Oda Tipi</span>
          <div className="row">
            <div className="col-sm-4">
              <label>
                <Field
                  name="roomType"
                  component="input"
                  type="radio"
                  value="standart"
                />{" "}
                Standart
              </label>
            </div>
            <div className="col-sm-4">
              <label>
                <Field
                  name="roomType"
                  component="input"
                  type="radio"
                  value="deluxe"
                />{" "}
                Deluxe
              </label>
            </div>
            <div className="col-sm-4">
              <label>
                <Field
                  name="roomType"
                  component="input"
                  type="radio"
                  value="suit"
                />{" "}
                Suit
              </label>
              <Field name="roomType" component={renderError} />
            </div>
          </div>
        </div>
        <div class="form-group">
          <span class="form-label font-weight-bold">Manzara Seçimi</span>
          <div className="row">
            <div className="col-sm-4">
              <label>
                <Field
                  name="screen"
                  component="input"
                  type="radio"
                  value="sea"
                />{" "}
                Deniz
              </label>
            </div>
            <div className="col-sm-4">
              <label>
                <Field
                  name="screen"
                  component="input"
                  type="radio"
                  value="land"
                />{" "}
                Kara
              </label>
              <Field name="screen" component={renderError} />
            </div>
            <div className="col-sm-4"></div>
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
            <button type="submit" className="submit-btn float-right">
              İleri
            </button>
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
})(secondForm);
