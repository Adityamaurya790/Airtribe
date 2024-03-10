import React from 'react'
import { GoPlus } from "react-icons/go";
import { HiOutlineDotsHorizontal } from "react-icons/hi";

export const Dashboard = () => {


    document.addEventListener("DOMContentLoaded", function() {
        const todoTasksContainer = document.getElementById("todo-tasks");
        const todoCountElement = document.getElementById("todo-count");
        const taskModal = document.getElementById("task-modal");
    
        let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    
        function saveTasks() {
            localStorage.setItem("tasks", JSON.stringify(tasks));
        }
    
        function renderTasks() {
            todoTasksContainer.innerHTML = "";
            tasks.forEach(function(task, index) {
                const taskElement = document.createElement("div");
                taskElement.classList.add("task");
                taskElement.textContent = task.title;
                taskElement.addEventListener("click", function() {
                    openTaskDetails(index);
                });
                todoTasksContainer.appendChild(taskElement);
            });
            updateTaskCount();
        }
    
        function updateTaskCount() {
            const todoCount = tasks.filter(task => task.status === "todo").length;
            todoCountElement.textContent = ` (${todoCount})`;
        }
    
        function openTaskDetails(index) {
            const task = tasks[index];
            taskModal.innerHTML = `
                <h2>${task.title}</h2>
                <p>Status: ${task.status}</p>
                <p>${task.description}</p>
                <button id="delete-task">Delete</button>
            `;
            taskModal.style.display = "block";
            document.getElementById("delete-task").addEventListener("click", function() {
                tasks.splice(index, 1);
                saveTasks();
                renderTasks();
                taskModal.style.display = "none";
            });
        }
    
        renderTasks();
    
        document.querySelectorAll(".new-task").forEach(function(button) {
            button.addEventListener("click", function() {
                const title = prompt("Enter task title:");
                if (title) {
                    const newTask = {
                        title: title,
                        status: button.parentElement.id,
                        description: ""
                    };
                    tasks.push(newTask);
                    saveTasks();
                    renderTasks();
                }
            });
        });
    
    });
    



  return (
    <div className="p-10 flex relative w-screen items-center justify-center">
        <div className="flex w-11/12 p-10 items-between justify-center" >
        <div className="flex-col w-4/12 bg-cyan-100 mr-2 p-4 mt-7 border-2 border-rounded border-black">
                    <div className="flex ">
                        <h1 className=" mb-4 text-2xl font-bold">
                        Not Started
                        </h1>
                        <div className="flex items-center">
                        <HiOutlineDotsHorizontal />
                        </div>
                    </div>
                    <div className=" p-1 bg-white text-center m-1">Card-1</div>
                    <div className=" p-1 bg-white text-center m-1">Card-4</div>
                    <div className=" p-1 bg-white text-center m-1">Card-3</div>
                    {/* <div className=" p-1 bg-white text-center m-1">Card-4</div> */}
                    <div className="flex items-center justify-center  bg-cyan-300 p-1 mt-2">
                        <button className=" mt-2 p-1 text-center">New</button>
                        <div className="flex items-center mt-2">
                            <GoPlus />
                        </div>
                    </div>
                </div>
                 <div className="flex-col w-4/12 bg-cyan-100 mr-2 p-4 mt-7 border-2 border-rounded border-black">
                    <div className="flex ">
                        <h1 className=" mb-4 text-2xl font-bold">
                        In Progress
                        </h1>
                        <div className="flex items-center">
                        <HiOutlineDotsHorizontal />
                        </div>
                    </div>
                    <div className=" p-1 bg-white text-center m-1">Card-2</div>
                    <div className=" p-1 bg-white text-center m-1">Card-7</div>
                    {/* <div className=" p-1 bg-white text-center m-1">Card-3</div> */}
                    {/* <div className=" p-1 bg-white text-center m-1">Card-4</div> */}
                    <div className="flex items-center justify-center  bg-cyan-300 p-1 mt-2">
                        <button className=" mt-2 p-1 text-center" >New</button>
                        <div className="flex items-center mt-2">
                            <GoPlus />
                        </div>
                    </div>
                </div>

                <div className="flex-col w-4/12 bg-cyan-100 mr-2 p-4 mt-7 border-2 border-rounded border-black">
                    <div className="flex ">
                        <h1 className=" mb-4 text-2xl font-bold">
                        Complited
                        </h1>
                        <div className="flex items-center">
                        <HiOutlineDotsHorizontal />
                        </div>
                    </div>
                    <div className=" p-1 bg-white text-center m-1">Card-5</div>
                    <div className=" p-1 bg-white text-center m-1">Card-6</div>
                    <div className=" p-1 bg-white text-center m-1">Card-8</div>
                    <div className=" p-1 bg-white text-center m-1">Card-9</div>
                    <div className="flex items-center justify-center  bg-cyan-300 p-1 mt-2">
                        <button className=" mt-2 p-1 text-center">New</button>
                        <div className="flex items-center mt-2">
                            <GoPlus />
                        </div>
                    </div>
                </div>
            </div>
    </div>
  )
}
