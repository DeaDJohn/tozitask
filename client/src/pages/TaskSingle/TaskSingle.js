import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './TaskSingle.scss';

async function SaveTask(credentials) {
	var taskString = JSON.stringify(credentials);
	console.log(credentials);
	return fetch(`//localhost:8080/api/task/${credentials.id}`, {
	  method: 'POST',
	  headers: {
		'Content-Type': 'application/json; charset=utf-8'
	  },
	  body: JSON.stringify(credentials)
	})
	.then(data => data.json())
	.then(data => console.log(data))  
}

export default function TaskSingle() {
	const { taskId } = useParams();

	const [title, setTitle] = useState();
    const [description, setDescription] = useState();
    const [author, setAuthor] = useState();

	const [taskItem, setTaskItem] = useState([])

	

	// TODO: Change this url for the definitive.
	const url = 'https://jsonplaceholder.typicode.com/posts/';

	// Hook for get the data from API.
	useEffect(() => {
		
		fetch(`${url + taskId}`)
        .then(response => response.json())
        .then(data => setTaskItem(data))
		.catch(error => {
            console.error('There was an error!', error);
        });

	}, [])

	// Function to save/update proyect
	async function handleSubmit(e) {
		e.preventDefault();
		console.log(taskItem);
		const response = await SaveTask({
			id: taskItem.id,
			title: title == undefined ? taskItem.title : title,
			description: description == undefined ? taskItem.body : description,
			author: author == undefined ? taskItem.userId : author
		});
	}

	return (
		<div className="container-fluid">
			<div className="row pageHeader">
				<h1 className="pageHeader__title">Nombre Tablón</h1>
			</div>
			<div className="row pageContent">
				<form className="form-group" onSubmit={handleSubmit} >
					<div className="TaskSingle__content d-flex flex-column">
						<div className="TaskSingle__header d-flex align-items-center justify-content-between">
							<h2 className="TaskSingle__title" >{ taskItem && taskItem.title }</h2>
							<span className="TaskSingle__created ms-auto">Created: 19/03/2022</span>
						</div>
						<div className="TaskSingle__content mt-5">
							<div className="TaskSingle__group">
								<label className="TaskSingle__group__title">Task name</label>
								<input name="taskName" type="text" className="TaskSingle__group__input form-control" placeholder="Task name" value={ taskItem.title ?  taskItem.title : undefined }  onChange={e => setTitle(e.target.value)}/>
							</div>
							<div className="TaskSingle__group">
								<label className="TaskSingle__group__title">Task description</label>
								<textarea name="taskDescription" value={ taskItem.body ?  taskItem.body : undefined }  className="TaskSingle__group__input form-control" onChange={e => setDescription(e.target.value)}/>
							</div>
							<div className="TaskSingle__group">
								<label className="TaskSingle__group__title">Asignar a</label>
								<input name="taskName" type="text" className="TaskSingle__group__input form-control" placeholder="Asignar a" value={ taskItem.author ?  taskItem.author : undefined } onChange={e => setAuthor(e.target.value)}/>
							</div>
							<div className="TaskSingle__group align-item-end my-5">	
								<input type="submit" value="Save" className="btn btn-primary" />
							</div>
						</div>
					</div>
				</form>
			</div>
		</div>
	)
}
