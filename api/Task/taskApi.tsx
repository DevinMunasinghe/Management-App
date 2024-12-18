import { CreateTaskApiResponse, CreateTaskPayload, DeleteTaskApiResponse, DeleteTaskRequest, GetAllTasksApiResponse, Task, updateTaskPaylod, UpdateTaskRequest, UpdateTaskResponse } from "../../interfaces/task";
import { JsonAxios } from "../apiConfig";

export const createTaskApi = async (taskData: CreateTaskPayload): Promise<CreateTaskApiResponse> => {
    try {

        console.log("task>>", taskData)
        // Sending POST request to create a new task
        const response = await JsonAxios().post(`/task`, taskData);

        console.log("create task response", response);

        // Check if request was successful
        if (response.status === 201 || response.status === 200) {
            const { _id, title, description, status, createdAt, updatedAt } = response.data;

            // Returning structured response
            return {
                success: true,
                data: {
                    id: _id,
                    title,
                    description,
                    status,
                    createdAt,
                    updatedAt,
                },
            };
        }

        // Return failure if status is not 201/200
        return {
            success: false,
            message: "Failed to create task",
        };
    } catch (error: any) {
        console.log("error creating task", error);

        // Throwing a descriptive error
        throw new Error("Failed to create task: " + (error.response?.data?.message || error.message));
    }
};


export const getAllTasksApi = async (): Promise<GetAllTasksApiResponse> => {
    try {

        const response = await JsonAxios().get(`/task`);

        console.log("get all tasks response", response);

        if (response.status === 200) {

            const tasks: Task[] = response.data.map((task: any) => ({
                id: task._id,
                title: task.title,
                description: task.description,
                status: task.status,
                createdAt: task.createdAt,
                updatedAt: task.updatedAt,
            }));

            return {
                success: true,
                data: tasks,
            };
        }


        return {
            success: false,
            message: "Failed to fetch tasks",
        };
    } catch (error: any) {
        console.log("error fetching tasks", error);


        throw new Error("Failed to fetch tasks: " + (error.response?.data?.message || error.message));
    }
};


export const updateTaskApi = async (taskData: UpdateTaskRequest): Promise<UpdateTaskResponse> => {
    try {
        const response = await JsonAxios().put(`/task/${taskData.id}`, { status: taskData.status });

        if (response.status === 200) {
            const { _id, title, status } = response.data;

            return {
                success: true,
                data: {
                    id: _id,
                    title,
                    status,
                },
            };
        }

        return {
            success: false,
            message: "Failed to update task",
        };
    } catch (error: any) {
        console.error("Error updating task", error);
        throw new Error("Failed to update task: " + (error.response?.data?.message || error.message));
    }
};

export const deleteTaskApi = async (taskData: DeleteTaskRequest): Promise<DeleteTaskApiResponse> => {
    try {
        const response = await JsonAxios().delete(`/task/${taskData.id}`);

        if (response.status === 200) {
            return {
                success: true,
                message: "Task deleted successfully",
            };
        }

        return {
            success: false,
            message: "Failed to delete task",
        };
    } catch (error: any) {
        console.error("Error deleting task", error);
        throw new Error("Failed to delete task: " + (error.response?.data?.message || error.message));
    }
};