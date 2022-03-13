import './TaskArchive.scss';
import { Link } from 'react-router-dom';
import { jsonData } from '../../data/task';
import { useEffect, useState } from 'react';
import TaskItem from '../../components/task/TaskItem';

export default function TaskArchive() {

    function getTaskByState(tasks , state) {
        return tasks.filter(
            function(tasks){ return tasks.state == state }
        );
      }
    const [columnState, setcolumnState] = useState(['todo','progress','finished']);
    const [todo, setTodo] = useState([]);
    const [progress, setProgress] = useState([]);
    const [finished, setFinished] = useState([]);

     let addMoreColumn = () => {
        console.log('Añadir otra columna')
    }
    useEffect(() => {
        setTodo(getTaskByState(jsonData, 'todo'));
        setProgress(getTaskByState(jsonData, 'progress'));
        setFinished(getTaskByState(jsonData, 'finished'));
        console.log(finished);
    }, [])
  return (
    <div className="container-fluid">
        <div className="row pageHeader">
            <h1 className="pageHeader__title">Project Name</h1>
        </div>
        <div className="row pageContent">
            <div id="board" className="TaskArchive__content d-flex">
                <div className="TaskArchive__content--column d-flex flex-direction-column">
                    <div className="TaskArchive__content--columnHeader text-center">
                        <h3> To do </h3>
                    </div>
                    <div className="TaskArchive__content--columnContent">
                        {
                            todo && todo?.map((item, i) => <TaskItem item={item} key={item.id} />)
                        }
                    </div>
                </div>
                <div className="TaskArchive__content--column d-flex flex-direction-column">
                    <div className="TaskArchive__content--columnHeader text-center">
                        <h3> In progress </h3>
                    </div>
                    <div className="TaskArchive__content--columnContent">

                        {
                            progress && progress.map((item, i) => <TaskItem item={item} key={item.id} />)
                        }

                    </div>
                </div>
                <div className="TaskArchive__content--column d-flex flex-direction-column">
                    <div className="TaskArchive__content--columnHeader text-center">
                        <h3> Finished </h3>
                    </div>
                    <div className="TaskArchive__content--columnContent">

                        {
                            finished && finished.map((item, i) => <TaskItem item={item} key={item.id} />)
                        }

                    </div>
                </div>
                <div className="TaskArchive__content--column d-flex flex-direction-column addMore">
                    <button onClick={() => addMoreColumn()}>Add more..</button>
                </div>
            </div>
        </div>
    </div>
  )
}
