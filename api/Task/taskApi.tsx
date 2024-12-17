import { CreateTaskApiResponse, CreateTaskPayload } from "../../interfaces/task";
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
