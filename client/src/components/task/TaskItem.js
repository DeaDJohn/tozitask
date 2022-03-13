import { Link } from "react-router-dom"


export default function TaskItem({item}) {

  console.log(item);

  return (
    <Link to={"./" + item.id} className="Task" >
        <div className="Task__header d-flex">
            <span className="Task__id">{item.id}</span>
            <span className="Task__nameAssigned">{item.author}</span>
        </div>
        <div className="Task__content d-flex">
            <span className="Task__title">{item.name}</span>
        </div>
        <div className="Task__footer">
            <span className="Task__modified">Created: {item.created_at}</span>
        </div>
    </Link>
  )
}
