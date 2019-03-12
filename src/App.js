import React, {
  Component
} from 'react';

import './App.css';
import axios from 'axios';
import Table8 from './Table8'

class App extends Component {

  state = {
    dataPersons: [],
    isLoading: true,

    value: '',
    name: '',
    rowStr: {},
    funds: '',
    email: '',
    city: '',
    phone: '',
    currentPage: ''

  }

  componentDidMount() {
    axios(`http://localhost:8080/?limit=50&offset=0`)
      .then(data => {
        console.log(data.data);
        this.getDate(data.data)

      })

  }

  getAxios = () => {
    const {
      email,
      funds,
      phone,
      name,
      city
    } = this.state
    console.log(`http://localhost:8080/?email=${email}&city=${city}&funds=${funds}&phone=${phone}&name=${name}`);
    axios(`http://localhost:8080?name=${name}&city=${city}&funds=${funds}&phone=${phone}&email=${email}&limit=5&offset=0`)
      .then(data => {
        console.log(data.data);

        this.getDate(data.data)
      })

  }

  // onPageChange=(page, sizePerPage)=> {
  //   const currentIndex = (page - 1) * sizePerPage;
  //   this.setState({
  //     // data: sizePerPage,
  //     currentPage: page
  //   });
  // }

  objUpdate = () => {
    console.log(this.state.rowStr.id);
    axios.put(`http://localhost:8080/update/${this.state.rowStr.id}`, this.state.rowStr).then(data =>
      console.log(data))
  }
  handelChange = (ev) => {
    let vale = ev.target.value
    let nam = ev.target.name
    console.log(nam);
    this.setState({

      [nam]: vale
    })
    this.getAxios();

  }
  getDate = (data) => {
    this.setState({
      dataPersons: [...data.data],
      isLoading: false,

    })
  }

  setColum = (data) => {
    this.setState({
      rowStr: {
        ...data
      }
    })

    let timerId = setTimeout(this.objUpdate, 400)
  }



  render() {

    const {
      isLoading,
      dataPersons,
      value,
      name,
      onPageChange
    } = this.state
    return ( <
      div className = "App" > {
        isLoading ? < p > Loading... < /p> :<Table8  data={dataPersons} val={value} change={this.handelChange} nam={name} onPageChange={this.onPageChange} setChange={this.setColum} / >
      }

      <
      /div>
    );
  }
}


export default App;