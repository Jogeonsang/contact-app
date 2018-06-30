import React, { Component } from 'react';
import PhoneForm from './components/PhoneForm';
import './App.css';
import PhoneInfoList from './components/PhoneInfoList';

class App extends Component {

  id = 0;

  state = {
    information: [
      { id : 0,
        name : '조건상',
        phone : '010-0000-0000'
      },
      {
        id : 1,
        name : '최유정',
        phone : '010-0001-0001'
      },
      {
        id : 2,
        name : '이지은',
        phone : '010-1000-1000'
      }
    ],
    keyword : '',
  }
  handleChange = (e) => {
    this.setState ({
      keyword : e.target.value
    })
  }
  handleCreate = (data) => {
    const { information } = this.state;
    this.setState({
      information : information.concat({
        ...data,
        id : this.id++
      })
    })
  }

  handleRemove = (id) => {
    const { information } = this.state;
    this.setState({
      information: information.filter(info => info.id !== id)
    });
  }

  handleUpdate = (id, data) => {
    const { information } = this.state;
    this.setState({
      information: information.map (
        info => {
          if (info.id === id) {
            return {
              id,
              ...data,
            };
          }
          return info;
        }
      )
    });
  }
  render() {
    return (
      <div>
      <input
        value = {this.state.value}
        onChange = {this.handleChange}
        placeholder = "검색"
      />
        <PhoneForm onCreate={this.handleCreate}/>
        <PhoneInfoList
        data = {this.state.information.filter(
          info => info.name.indexOf(this.state.keyword) > -1
        )}
        onRemove = {this.handleRemove}
        onUpdate = {this.handleUpdate}

        />
      </div>
    );
  }
}

export default App;
