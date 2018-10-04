import React from "react";
import ReactTable from "react-table";
import "react-table/react-table.css";
import { makeData, Logo, Tips } from "./Utils";

//https://react-table.js.org/#/story/simple-table

export default class ResultsTable extends React.Component {
    constructor() {
      super();
      this.state = {
        data: makeData()
      };
    }

    render() {
      const { data } = this.state;
      return (
        <div>
          <ReactTable
            data={data} 
            filterable={true}
            columns={[
              {
                Header: "Name",
                columns: [
                  {
                    Header: "First Name",
                    accessor: "firstName"
                  },
                  {
                    Header: "Last Name",
                    id: "lastName",
                    accessor: d => d.lastName
                  }
                ]
              },
              {
                Header: "Info",
                columns: [
                  {
                    Header: "Age",
                    accessor: "age"
                  },
                  {
                    Header: "Status",
                    accessor: "status"
                  }
                ]
              },
              {
                Header: 'Stats',
                columns: [
                  {
                    Header: "Visits",
                    accessor: "visits"
                  }
                ]
              }
            ]}
            defaultPageSize={25}
            className="-highlight"
          />
          <br />
          {/* <Tips />
          <Logo /> */}
        </div>
      );
    }
  }