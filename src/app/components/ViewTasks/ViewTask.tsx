"use client";
import React from "react";
import { DeleteTaskRequest, UpdateTaskRequest, ViewTasksProps } from "../../../../interfaces/task";
import { deleteTaskApi, updateTaskApi } from "../../../../api/Task/taskApi";




const ViewTasks = ({ tasks, refetchTasks }: ViewTasksProps) => {


    const handleMarkAsComplete = async (taskId: string) => {
        const request: UpdateTaskRequest = { id: taskId, status: 'completed' };

        try {
            const response = await updateTaskApi(request);
            if (response.success && response.data) {
                alert(`Task  marked as completed!`);
                refetchTasks();
            } else {
                alert('Failed to mark task as completed');
            }
        } catch (error) {
            console.error("Error updating task:", error);
            alert('Failed to mark task as completed');
        }
    };

    const handleDeleteTask = async (taskId: string) => {
        const request: DeleteTaskRequest = { id: taskId };

        try {
            const response = await deleteTaskApi(request);
            if (response.success) {
                alert(`Task  deleted successfully!`);
                refetchTasks();
            } else {
                alert('Failed to delete task');
            }
        } catch (error) {
            console.error("Error deleting task:", error);
            alert('Failed to delete task');
        }
    };

    return (
        <div>
            <div className="overflow-x-auto mt-10">
                <div className="min-w-full text-white">
                    <div className="flex flex-col">
                        {/* Table Header */}
                        <div className="flex flex-row justify-between font-bold mb-5 text-slate-400">
                            <div className="px-4 py-2 w-[175px]">Title</div>
                            <div className="px-4 py-2 w-[175px]">Description</div>
                            <div className="px-4 py-2 w-[175px]">Status</div>
                            <div className="px-4 py-2 w-[175px]">Mark As Completed</div>
                            <div className="px-4 py-2 w-[175px]">Delete</div>
                        </div>

                        {/* Task Rows */}
                        {tasks.map((task) => (
                            <div
                                key={task.id}
                                className="flex flex-row justify-between items-center rounded-[15px] border-[1px] border-slate-700 py-[3px] mb-3"
                            >
                                <div className="px-4 py-2 w-[175px]">{task.title}</div>
                                <div className="px-4 py-2 w-[175px]">{task.description}</div>
                                <div className="px-4 py-2 w-[175px]">
                                    {task.status === 'pending' ? (
                                        <span className="bg-[#F49300] px-3 py-[2.5px] rounded-full">pending</span>
                                    ) : (
                                        <span className="bg-[#038927] px-3 py-[2.5px] rounded-full">completed</span>
                                    )}
                                </div>
                                <div className="px-4 py-2 w-[175px]">
                                    <button
                                        onClick={() => handleMarkAsComplete(task.id)}
                                        className="text-white ring-1 bg-[#2c2c2c3e] hover:bg-primary-800 focus:ring-2 focus:ring-primary-300 font-medium rounded-full text-sm py-2 px-3 text-center"
                                    >
                                        Mark As Complete
                                    </button>
                                </div>
                                <div className="px-4 py-2 w-[175px]">
                                    <button
                                        onClick={() => handleDeleteTask(task.id)}
                                        className="text-white ring-1 bg-[#2c2c2c3e] hover:bg-red-600 focus:ring-2 focus:ring-red-300 font-medium rounded-full text-sm py-2 px-3 text-center"
                                    >
                                        Delete
                                    </button>
                                </div>
                            </div>
                        ))}


                        {tasks.length === 0 && (
                            <div className="text-center text-gray-400 py-5">
                                No tasks available.
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div >
    );
};

export default ViewTasks;
