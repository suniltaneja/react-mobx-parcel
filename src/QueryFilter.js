import React from "react";
import 'react-dates/initialize';
import 'react-dates/lib/css/_datepicker.css';
import { DateRangePicker } from 'react-dates';

export default class QueryFilter extends React.Component {
  constructor(props) {
    // Pass props to parent class
    super(props);
    this.state = {
      startDate: null,
      endDate: null,
      focusedInput: null,
    };
    this.apiUrl = '//57b1924b46b57d1100a3c3f8.mockapi.io/api/todos'
  }

  handleSelect(ranges) {
    console.log(ranges);
  }

  render() {

    return (
      <div className="row filter-container">

      <div className="col-md-12">
        <h1>CDC Organization Reporting</h1>
        <hr></hr>
        <br></br>
      </div>

        <div className="col-md-4">


          <div className="form-group">
            <label for="report_type" className="font-weight-bold">Select Dates :</label>
            <br></br>
            <DateRangePicker className="form-control"
              startDateId="startDate"
              endDateId="endDate"
              startDate={this.state.startDate}
              endDate={this.state.endDate}
              onDatesChange={({ startDate, endDate }) => { this.setState({ startDate, endDate }) }}
              focusedInput={this.state.focusedInput}
              onFocusChange={(focusedInput) => { this.setState({ focusedInput }) }}
            />

          </div>

        </div>

        <div className="col-md-3">
          <div className="form-group">
            <label for="report_type" className="font-weight-bold">Report Type :</label>
            <select className="form-control" name="report_type" size="0">
              <option value="01">01</option>
              <option value="02">02</option>
              <option value="03">03</option>
              <option value="04">04</option>
            </select>
          </div>
        </div>

          <div className="col-md-3">
          <div className="form-group">
          <div class="col-md-6">
          <label for="report_type">&nbsp;</label>
                <button type="submit" class="btn btn-success btn-md btn-block">Submit</button>
          </div>
          </div>
        </div>


      </div>
    );
  }



}