'use client'
import React from "react";
import { useState } from "react";
const page = () => {
  const [task, settask] = useState('')
  const [desc, setdesc] = useState('')
  const [mainTask, setMainTask] = useState([])
  const submitHandler = (e) => {
    e.preventDefault()
    setMainTask([...mainTask, { task, desc }])
    // console.log(task)
    // console.log(desc)
    settask('');
    setdesc('');
    console.log(mainTask)
  }
  const delteHandler = (i) => {
    let copyTask = [...mainTask];
    copyTask.splice(i, 1);
    setMainTask(copyTask);
  }
  let renderTask = <h2>No Task Available</h2>
  if (mainTask.length > 0) {
    renderTask = mainTask.map((t, i) => {
      return (
        <li>
          <div className=" flex justify-between w-2/3 p-2 m-3">
            <h4>
              {t.task}
            </h4>
            <h5>
              {t.desc}
            </h5>
            <button className=" bg-red-700 b-4 text-white border-teal-300 rounded p-1"
              onClick={() => {
                delteHandler(i)
              }}>
              Delete</button>
          </div>
        </li>
      )
    })
  }

  return (<>
    <h2 className="bg-black text-white p-5 m-2 text-6xl font-bold text-center">ToDo List</h2>
    <form onSubmit={submitHandler}>
      <input placeholder="Enter Task Here"
        value={task}
        onChange={(e) => {
          settask(
            e.target.value
          )

        }}
        className="border-4 border-rose-400 rounded p-4 m-3 font-semibold" />
      <input placeholder="Enter Description Here"
        value={desc}
        onChange={(e) => {
          setdesc(
            e.target.value
          )
        }}
        className="border-4 border-rose-400 rounded p-4 m-5 ml-10 font-semibold" />
      <button className=" bg-lime-400 p-4 m-5 rounded-2xl border-4 border-purple-400">Add Task</button>
    </form>
    <hr />
    <div className="bg-slate-400 m-4 p-4"><ul>{renderTask}
    </ul>
    </div>

  </>)
}
export default page