import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './TaskSingle.scss';


export default function TaskSingle() {
	const { taskId } = useParams();

	const [taskItem, setTaskItem] = useState([])

	// TODO: Change this url for the definitive.
	const url = 'https://jsonplaceholder.typicode.com/posts/';

	// Hook for get the data from API.
	useEffect(() => {
		
		fetch(`${url + taskId}`)
        .then(response => response.json())
        .then(data => setTaskItem(data));

	}, [])

	// Function to save/update proyect
	
	

	return (
		<div className="container-fluid">
			<div className="row pageHeader">
				<h1 className="pageHeader__title">Nombre Tablón</h1>
			</div>
			<div className="row pageContent">
				<div className="TaskSingle__content d-flex flex-column">
					<div className="TaskSingle__header d-flex align-items-center justify-content-between">
						<h2 className="TaskSingle__title" >{ taskItem && taskItem.title }</h2>
						<span className="TaskSingle__created ms-auto">Created: 19/03/2022</span>
					</div>
					<div className="TaskSingle__content mt-5">
						<div className="TaskSingle__group">
							<label className="TaskSingle__group__title">Task name</label>
							<input name="taskName" type="text" className="TaskSingle__group__input form-control" placeholder="Task name" value={ taskItem ?  taskItem.title : null } />
						</div>
						<div className="TaskSingle__group">
							<label className="TaskSingle__group__title">Task description</label>
							<textarea name="taskDescription" value={ taskItem ?  taskItem.body : null }  className="TaskSingle__group__input form-control" />
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}
