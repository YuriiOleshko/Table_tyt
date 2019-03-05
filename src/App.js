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
    rowStr: {}

  }

  componentDidMount() {
    axios('http://localhost:8080/')
      .then(data => {
        console.log(data.data);
        this.getDate(data.data)

      })

  }

  getAxios = () => {
    axios(`http://localhost:8080/?${this.state.name}=${this.state.value}`)
      .then(data => {
        console.log(data.data);

        this.getDate(data.data)
      })
   
  }

  objUpdate = () => {
    console.log(this.state.rowStr.id);
    axios.put(`http://localhost:8080/update/${this.state.rowStr.id}`, this.state.rowStr).then(data =>
      console.log(data))
  }
  handelChange = (ev) => {
    let vale = ev.target.value
    let nam = ev.target.name
    this.setState({
      value: vale,
      name: nam
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
      name
    } = this.state
    return ( <
      div className = "App" > {
        isLoading ? < p > Loading... < /p> :<Table8  data={dataPersons} val={value} change={this.handelChange} nam={name} setChange={this.setColum} / >
      }

      <
      /div>
    );
  }
}


export default App;