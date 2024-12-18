"use client";
import React, { useEffect, useState } from "react";
import ViewTasks from "../components/ViewTasks/ViewTask";
import { Task } from "../../../interfaces/task";
import { getAllTasksApi } from "../../../api/Task/taskApi";

const TasksPage: React.FC = () => {
    const [tasks, setTasks] = useState<Task[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    const fetchTasks = async () => {
        try {
            const response = await getAllTasksApi();
            if (response.success && response.data) {
                setTasks(response.data);
            } else {
                setError("Failed to fetch tasks");
            }
        } catch (err) {
            console.error("Error fetching tasks:", err);
            setError("Error fetching tasks");
        } finally {
            setIsLoading(false);
        }
    };
    useEffect(() => {


        fetchTasks();
    }, []);

    if (isLoading) {
        return <div className="text-center text-gray-400 py-5">Loading tasks...</div>;
    }

    if (error) {
        return <div className="text-center text-red-500 py-5">{error}</div>;
    }

    return (
        <div className="container mx-auto px-4">
            <h1 className="text-2xl font-bold text-white mb-5">Tasks</h1>
            <ViewTasks tasks={tasks} refetchTasks={fetchTasks} />
        </div>
    );
};

export default TasksPage;
