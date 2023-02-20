import {Component} from 'react'

import Item from '../TodoItem/index'

import './index.css'

const initialTodosList = [
  {
    id: 1,
    title: 'Book the ticket for today evening',
  },
  {
    id: 2,
    title: 'Rent the movie for tomorrow movie night',
  },
  {
    id: 3,
    title: 'Confirm the slot for the yoga session tomorrow morning',
  },
  {
    id: 4,
    title: 'Drop the parcel at Bloomingdale',
  },
  {
    id: 5,
    title: 'Order fruits on Big Basket',
  },
  {
    id: 6,
    title: 'Fix the production issue',
  },
  {
    id: 7,
    title: 'Confirm my slot for Saturday Night',
  },
  {
    id: 8,
    title: 'Get essentials for Sunday car wash',
  },
]

// Write your code here
class SimpleTodos extends Component {
  state = {userTodosList: initialTodosList}

  deleteTodo = uniqueKey => {
    const {userTodosList} = this.state
    const filteredList = userTodosList.filter(each => each.id !== uniqueKey)
    this.setState({userTodosList: filteredList})
    console.log(filteredList)
  }

  render() {
    const {userTodosList} = this.state
    return (
      <div className="container">
        <h1 className="text">Simple Todos</h1>
        <ul className="list-container">
          {userTodosList.map(eachUser => (
            <Item
              todos={eachUser}
              uniqueKey={eachUser.id}
              deleteTodo={this.deleteTodo}
            />
          ))}
        </ul>
      </div>
    )
  }
}

export default SimpleTodos
