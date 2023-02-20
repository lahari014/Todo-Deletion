// Write your code here
import './index.css'

const Item = props => {
  const {todos, deleteTodo, uniqueKey} = props
  const {id, title} = todos

  const onDelete = () => {
    deleteTodo(uniqueKey)
  }

  return (
    <li className="list-item">
      <p>{title}</p>
      <button type="button" className="but" onClick={onDelete}>
        Delete
      </button>
    </li>
  )
}

export default Item
