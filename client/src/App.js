import { useState } from 'react';
import './App.scss';

import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Sidebar from './components/sidebar/Sidebar';
import TaskArchive from './pages/TaskArchive/TaskArchive';
import TaskSingle from './pages/TaskSingle/TaskSingle';
import Home from './pages/Home/Home';
import Login from './components/login/Login';
import { useDataLayerValue } from "./DataLayer";

function App() {
  const [{  login }, dispatch] = useDataLayerValue();
  return (
    <div className="App d-flex">
      <Sidebar />
      <div className="content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="task" element={<TaskArchive />} />
          <Route path="task/:taskId" element={<TaskSingle />} />
        </Routes>
        </div>
    </div>
  );
}

export default App;
