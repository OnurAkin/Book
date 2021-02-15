import React, { Component } from "react";
import PropTypes from "prop-types";
import FirstWizard from "./firstForm";
import SecondWizard from "./secondForm";
import ThirdWizard from "./thirdForm";
import "./../../assets/styles/main.css";

class main extends Component {
  constructor(props) {
    super(props);
    this.nextPage = this.nextPage.bind(this);
    this.previousPage = this.previousPage.bind(this);
    this.state = {
      page: 1,
    };
  }
  nextPage() {
    this.setState({ page: this.state.page + 1 });
  }

  previousPage() {
    this.setState({ page: this.state.page - 1 });
  }

  render() {
    const { onSubmit } = this.props;
    console.log(this.props);
    const { page } = this.state;
    return (

        <div className="container">
          <div className="row">
            <div className="col-md-2">
     
            </div>
            <div className="col-md-6 col-md-pull-7">
            {page === 1 && <FirstWizard onSubmit={this.nextPage} />}
            {page === 2 &&    <SecondWizard
                    previousPage={this.previousPage}
                    onSubmit={this.nextPage}
                  />}
        
            {page === 3 && (
              <ThirdWizard
                previousPage={this.previousPage}
                onSubmit={onSubmit}
              />
            )}
             
            </div>
          </div>
        </div>

    );
  }
}

main.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default main;
