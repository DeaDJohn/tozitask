import './TaskSingle.scss';

export default function TaskSingle() {
  return (
    <div className="container-fluid">
        <div className="row pageHeader">
            <h1 className="pageHeader__title">TaskSingle</h1>
        </div>
        <div className="row pageContent">
            <div className="TaskSingle__content d-flex flex-column">
                <div className="TaskSingle__header d-flex align-items-center justify-content-between">
                    <h2 className="TaskSingle__title" >Task name</h2>
                    <span className="TaskSingle__created ms-auto">Created: 19/03/2022</span>
                </div>
                <div className="TaskSingle__content mt-5">
                    <div className="TaskSingle__group">
                        <label className="TaskSingle__group__title">Task name</label>
                        <input name="taskName" type="text" className="TaskSingle__group__input form-control" placeholder="Task name" value="Task name"/>
                    </div>
                    <div className="TaskSingle__group">
                        <label className="TaskSingle__group__title">Task name</label>
                        <textarea name="taskDescription" value="Task description" className="TaskSingle__group__input form-control" />
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
