import React from "react";
import { Field, reduxForm, Values } from "redux-form";
import validate from "./../validate";
import secondForm from "./secondForm";
import DatePicker, {
  FieldDatePicker,
  formatDates,
  normalizeDates,
} from "../datepicker";

const firstForm = (props) => {
  const { handleSubmit } = props;
  return (
    <div className="booking-form">
      <form onSubmit={handleSubmit}>
        <div className="row">
          <div className="col-sm-6">
            <FieldDatePicker name="checkIn" placeholder="Check-in" />
          </div>
          <div className="col-sm-6">
            <Field
              name={"checkOut"}
              component={DatePicker}
              placeholder="Check-out"
              parse={normalizeDates}
              format={formatDates}
            />
          </div>
        </div>

        {/* <Field
        name="firstName"
        type="text"
        component={renderField}
        label="First Name"
      />
      <Field
        name="lastName"
        type="text"
        component={renderField}
        label="Last Name"
      /> */}
        <div className="form-btn mt-3 row ">
          <div className="col">
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
})(firstForm);

