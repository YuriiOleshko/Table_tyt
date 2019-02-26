import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import  styles from './Task.module.css'
import axios from 'axios';
import NewTable from './NewTable'

class App extends Component {

  state={
    dataPersons:[],
    isLoading:true,
    data:[],
    
  }

  componentDidMount(){
    axios('http://localhost:8080/')
    .then(data=>{console.log(data.data);
      this.getDate(data.data)
  
      })
    
  }

  // componentDidUpdate(){

  //   axios.put(`http://localhost:8080/update/:${10}`,this.state.dataPersons.find(el=>el.id===10)).then(data=>console.log(data) )
  //   console.log(this.state.dataPersons)
  // }

  updateDate=()=>{

  }

  getDate=(data)=>{
    this.setState({
      dataPersons:[...data.data],
      isLoading:false
    })
  }

  setColum=()=>{
    
  }
  

      
  render() {
   
    const {isLoading,dataPersons}=this.state
    return (
       <div className="App">
          { isLoading ? <p>Loading...</p> :<NewTable data={this.state.dataVer} dataTwo={dataPersons}/>}
         
      </div>
    );
  }
}


export default App;
