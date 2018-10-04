import React from "react";
import FontAwesome from "react-fontawesome";
import DatetimeRangePicker from "react-bootstrap-daterangepicker";
import "bootstrap-daterangepicker/daterangepicker.css";
import moment from "moment";
import { Button } from "react-bootstrap";

export default class QueryFilter extends React.Component {
  constructor(props) {
    // Pass props to parent class
    super(props);
    //http://luqin.xyz/react-bootstrap-datetimerangepicker/#/
    //this.handleEvent = this.handleEvent.bind(this);

    this.state = {
      startDate: moment().subtract(30, "days"),
      endDate: moment(),
      ranges: {
        //'Today': [moment(), moment()],
        //'Yesterday': [moment().subtract(1, 'days'), moment().subtract(1, 'days')],
        "Last 7 Days": [moment().subtract(6, "days"), moment()],
        "Last 30 Days": [moment().subtract(29, "days"), moment()],
        "This Month": [moment().startOf("month"), moment().endOf("month")],
        "Last Month": [
          moment()
            .subtract(1, "month")
            .startOf("month"),
          moment()
            .subtract(1, "month")
            .endOf("month")
        ]
      },
      type: "organization",
      report_type: "new",
      value:"none"
    };
    this.apiUrl = "//57b1924b46b57d1100a3c3f8.mockapi.io/api/todos";
  }

  handleEvent = (event, picker) => {
    this.setState({
      startDate: picker.startDate,
      endDate: picker.endDate
    });
  }

  handleSelect(ranges) {
    console.log(ranges);
  }

  handleChange = (event) => {
    this.setState({ [event.target.name] : event.target.value });
  };

  getType =(type) => {
    return(

      (type == "organization") && <div className="col-md-2">
     
      <div className="form-group">
        <label for="report_type" className="font-weight-bold">
          Update Type :
        </label>
        <select className="form-control" name="report_type" onChange={this.handleChange} size="0">
          <option value="new">New</option>
          <option value="adhoc">Adhoc</option>
          <option value="annual">Annual</option>
        </select>
      </div> 
    </div> 

    )
  }


  render() {
    let start = this.state.startDate.format("MMMM D, YYYY");
    let end = this.state.endDate.format("MMMM D, YYYY");
    let label = start + " - " + end;
    if (start === end) {
      label = start;
    }


    let istate = this.state;
    let buttonStyle = { width: "100%" };

    return (
      <div className="row filter-container">
        <div className="col-md-12">
          <h1>CDC Reporting</h1>
          <hr />
          <br />
        </div>

        <div className="col-md-2">
          <div className="form-group">
            <label for="record_type" className="font-weight-bold">
              Record Type :
            </label>
            <select className="form-control" name="type" onChange={this.handleChange} size="0">
              <option value="organization">Organization</option>
              <option value="funding">Funding</option>
              <option value="material">Material</option>
            </select>
          </div>
        </div>

        {this.getType(istate.type)}

        <div className="col-md-5">
          <div className="form-group">
            <label for="record_type" className="font-weight-bold">
              Select Dates :
            </label>
            <br />
            <DatetimeRangePicker
              startDate={this.state.startDate}
              endDate={this.state.endDate}
              ranges={this.state.ranges}
              onEvent={this.handleEvent}>
              <Button className="selected-date-range-btn" style={buttonStyle}>
                <div className="pull-left">
                  <i className="fa fa-calendar" />
                  &nbsp;
                  <span>{label}</span>
                </div>
                <div className="pull-right">
                  <i className="fa fa-angle-down" />
                </div>
              </Button>
            </DatetimeRangePicker>
          </div>
        </div>

        <div className="col-md-2">
          <div className="form-group">
            <div className="col-md-12  pull-right">
              <label for="report_type">&nbsp;</label>
              <button type="submit" class="btn btn-success btn-md btn-block">
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
