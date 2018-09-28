import React from "react";

export default class Nav extends React.Component {
    constructor() {
        super(props);
    }

    render() {
        const { data } = this.state;
        return (
            <div>
                <nav aria-label="breadcrumb">
                    <ol className="breadcrumb">
                        <li className="breadcrumb-item"><a href="#">Home</a></li>
                        <li className="breadcrumb-item"><a href="#">Library</a></li>
                        <li className="breadcrumb-item active" aria-current="page">Data</li>
                    </ol>
                </nav>
                <div className="row">
                    {/* <div className="col-sm border-bold">
            One of three columns
          </div>
          <div className="col-sm  border-bold">
            One of three columns
          </div>
          <div className="col-sm  border-bold">
            One of three columns
          </div> */}
                </div>
            </div>
        )

    }
}