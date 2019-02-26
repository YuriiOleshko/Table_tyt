import React, {Component} from 'react'
import {BootstrapTable, TableHeaderColumn} 
        from 'react-bootstrap-table'
import './Table.css'
import axios from 'axios';

// import '../node_modules/react-bootstrap-table/dist/react-bootstrap-table-all.min.css'
 
 
class Table8 extends Component {

  // componentDidUpdate(){
  //   axios.post('http://localhost:8080',this.props.data).then(data=>console.log(data) )
  //   console.log(this.props.data)
  // }
showTotal=() =>{
    return <p>There are 100 items total</p>
  }
  render() {
    const cellEditProp = {
      mode: 'click', // 'dbclick' for trigger by double-click
      nonEditableRows: function() {
        return [3];
      }
      
    }
  
    const options = {
      page: 1,
      prePage:  '⟵',
      nextPage: '⟶',
      firstPage: '⟸',
      lastPage: '⟹',
      paginationShowsTotal: this.showTotal
    }
    return (
      <div>
        <BootstrapTable data={this.props.data}
        pagination={true}
        options={options}                
        cellEdit={cellEditProp}
        >
        <TableHeaderColumn isKey dataField='id'
        width="60"
        >
          №
        </TableHeaderColumn>
        <TableHeaderColumn  dataField='name'
        filter={ { type: 'TextFilter', delay: 1000 } }>
          Name
        </TableHeaderColumn>
          <TableHeaderColumn dataField='email'filter={ { type: 'TextFilter', delay: 1000 } }
          >
            Email
          </TableHeaderColumn>
          <TableHeaderColumn dataField='funds'
          filter={ { type: 'TextFilter', delay: 1000 } }
          >
            Funds
          </TableHeaderColumn>
          <TableHeaderColumn dataField='phone'
          filter={ { type: 'TextFilter', delay: 1000 } }
          >
            Phone
          </TableHeaderColumn>
          <TableHeaderColumn dataField='city'
          filter={ { type: 'TextFilter', delay: 1000 } }
          >
            City
          </TableHeaderColumn>
       
       
        </BootstrapTable>
      </div>
    )
  }
}
 
export default Table8