import React, { Component } from 'react';

import '../node_modules/react-bootstrap-table/css/react-bootstrap-table.css'

 import Table8 from './Table8'
 
class Table1 extends Component {
  render() {
    return (
      <div>
       
        <Table8 data={this.props.dataTwo} />

      </div>
    );
  }
}
 
export default Table1;