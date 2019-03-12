import React, { Component } from "react";
import { BootstrapTable, TableHeaderColumn } from "react-bootstrap-table";
import "./Table.css";

// import Table9 from './Table9'

import "../node_modules/react-bootstrap-table/dist/react-bootstrap-table-all.min.css";

class Table8 extends Component {
  state = {
    data: "",
    currentPage: ""
  };

  showTotal = currPage => {
    console.log(currPage);

    return <p>There are 100 items total </p>;
  };

  // onPageChange=(page, sizePerPage)=> {
  //   const currentIndex = (page - 1) * sizePerPage;
  //   this.setState({
  //     // data: this.products.slice(currentIndex, currentIndex + sizePerPage),
  //     currentPage: page
  //   });
  // }

  onAfterSaveCell = row => {
    let obj = {};
    for (const prop in row) {
      obj = { ...row };
    }
    this.props.setChange(obj);
  };
  setPagin = currPage => {
    console.log(currPage);
  };
  onBeforeSaveCell = (row, cellName, cellValue) => {
    // You can do any validation on here for editing value,
    // return false for reject the editing
    return true;
  };

  render() {
    const cellEditProp = {
      mode: "click", // 'dbclick' for trigger by double-click
      blurToSave: true,
      beforeSaveCell: this.onBeforeSaveCell, // a hook for before saving cell
      afterSaveCell: this.onAfterSaveCell // a hook for after saving cell
    };
    console.log(cellEditProp);
    console.log(this.props);

    const options = {
      page: 1,
      prePage: "⟵",
      nextPage: "⟶",
      firstPage: "⟸",
      lastPage: "⟹",
      paginationShowsTotal: this.showTotal
      // onPageChange: this.onPageChange
    };

    return (
      <div>
        <BootstrapTable
          data={this.props.data}
          pagination={true}
          options={options}
          cellEdit={cellEditProp}
        >
          <TableHeaderColumn isKey dataField="id" width="60">
            №
          </TableHeaderColumn>
          <TableHeaderColumn dataField="name">
            Name
            <input
              className="filter text-filter form-control"
              name="name"
              onChange={this.props.change}
              type="text"
              placeholder="Enter Name..."
            />
          </TableHeaderColumn>
          <TableHeaderColumn dataField="email">
            Email
            <input
              className="filter text-filter form-control"
              name="email"
              onChange={this.props.change}
              type="text"
              placeholder="Enter Email..."
            />
          </TableHeaderColumn>
          <TableHeaderColumn dataField="funds">
            Funds
            <input
              className="filter text-filter form-control"
              name="funds"
              onChange={this.props.change}
              type="text"
              placeholder="Enter Funds..."
            />
          </TableHeaderColumn>
          <TableHeaderColumn dataField="phone">
            Phone
            <input
              className="filter text-filter form-control"
              name="phone"
              onClick={this.compeaDate}
              onChange={this.props.change}
              type="text"
              placeholder="Enter Phone..."
            />
          </TableHeaderColumn>
          <TableHeaderColumn dataField="city">
            City
            <input
              className="filter text-filter form-control"
              name="city"
              onChange={this.props.change}
              type="text"
              placeholder="Enter City..."
            />
          </TableHeaderColumn>
        </BootstrapTable>
        {/* <Table9/> */}
      </div>
    );
  }
}

export default Table8;
