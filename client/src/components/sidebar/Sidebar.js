import React from 'react'
import { Link } from 'react-router-dom';
import User from '../user/User';
import './Sidebar.scss';


export default function Sidebar() {
	const user = {
		id: 1,
		name: "Acerbi",
		img: "//img.uefa.com/imgml/TP/players/3/2020/324x324/250052957.jpg"
	}
	return (
		<div className="sidebar">
			<div className="sidebar__header mb-5">
				<img className="w-100" src="//images.vexels.com/media/users/3/213584/isolated/preview/675578f563d891666409fcb819334bb1-tocino-cara-amigable-dibujado-a-mano.png" />
			</div>
			<div className="sidebar__menu my-5">
				<ul className="list-group">
					<li className="list-group-item active" aria-current="true">
						<Link to="/">Home</Link>
					</li>
					<li className="list-group-item">
						<Link to="/task">Task</Link>
					</li>
					<li className="list-group-item">
						<Link to="/task/id">Task single</Link>
					</li>
				</ul>
			</div>
			<div>
				<User user={user}  width="55" />
			</div>
		</div>
	)
}
