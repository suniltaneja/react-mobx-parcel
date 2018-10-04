import React from "react";
import 'react-dates/initialize';
import 'react-dates/lib/css/_datepicker.css';
//import { DateRangePicker1 } from 'react-dates';

import DatetimeRangePicker from 'react-bootstrap-daterangepicker';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-daterangepicker/daterangepicker.css';
import moment from 'moment';
import {
  Button,
} from 'react-bootstrap';

export default class QueryFilter extends React.Component {
  constructor(props) {
    // Pass props to parent class
    super(props);

    //http://luqin.xyz/react-bootstrap-datetimerangepicker/#/
    this.handleEvent = this.handleEvent.bind(this);

    this.state = {
      startDate: moment().subtract(29, 'days'),
      endDate: moment(),
      ranges: {
        //'Today': [moment(), moment()],
        'Yesterday': [moment().subtract(1, 'days'), moment().subtract(1, 'days')],
        'Last 7 Days': [moment().subtract(6, 'days'), moment()],
        'Last 30 Days': [moment().subtract(29, 'days'), moment()],
        'This Month': [moment().startOf('month'), moment().endOf('month')],
        'Last Month': [moment().subtract(1, 'month').startOf('month'), moment().subtract(1, 'month').endOf('month')],
      },
    };
    this.apiUrl = '//57b1924b46b57d1100a3c3f8.mockapi.io/api/todos'
  }

  handleEvent(event, picker) {
    this.setState({
      startDate: picker.startDate,
      endDate: picker.endDate,
    })
  }

  handleSelect(ranges) {
    console.log(ranges);
  }

  render() {

    let start = this.state.startDate.format('MMMM D, YYYY');
    let end = this.state.endDate.format('MMMM D, YYYY');
    let label = start + ' - ' + end;
    if (start === end) {
      label = start;
    }

    let buttonStyle = { width: '100%' };

    return (
      <div className="row filter-container">

      <div className="col-md-12">
        <h1>CDC Reporting</h1>
        <hr></hr>
        <br></br>
      </div>

        <div className="col-md-2">
          <div className="form-group">
            <label for="record_type" className="font-weight-bold">Record Type :</label>
            <select className="form-control" name="record_type" size="0">
              <option value="organization">Organization</option>
              <option value="funding">Funding</option>
              <option value="material">Material</option>
            </select>
          </div>
        </div>

        <div className="col-md-4">
          <div className="form-group">
            <label for="record_type" className="font-weight-bold">Select Dates :</label>

        <DatetimeRangePicker
            startDate={this.state.startDate}
            endDate={this.state.endDate}
                ranges={this.state.ranges}
                onEvent={this.handleEvent}
              >
                <Button className="selected-date-range-btn" style={buttonStyle}>
                  <div className="pull-left">
                    <i className="fa fa-calendar"/>
                    &nbsp;
                    <span>
                      {label}
                    </span>
                  </div>
                  <div className="pull-right">
                    <i className="fa fa-angle-down"/>
                  </div>
                </Button>
        </DatetimeRangePicker>
          </div>
        </div>

        {/* <div className="col-md-3">
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
        </div> */}

        <div className="col-md-2">
          <div className="form-group">
            <label for="report_type" className="font-weight-bold">Update Type :</label>
            <select className="form-control" name="report_type" size="0">
              <option value="new">New</option>
              <option value="adhoc">Adhoc</option>
              <option value="annual">Annual</option>
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