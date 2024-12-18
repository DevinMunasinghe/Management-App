export interface CreateTaskPayload {
    title: string;
    description: string;
}

export interface TaskResponse {
    id: string;
    title: string;
    description: string;
    status: string;
    createdAt: string;
    updatedAt: string;
}

export interface CreateTaskApiResponse {
    success: boolean;
    data?: TaskResponse;
    message?: string;
}

export interface Task {
    id: string;
    title: string;
    description: string;
    status: string;
    createdAt: string;
    updatedAt: string;
}


export interface GetAllTasksApiResponse {
    success: boolean;
    data?: Task[];
    message?: string;
}

export interface ViewTasksProps {
    tasks: Task[];
    refetchTasks: () => void;
}

export interface UpdateTaskRequest {
    id: string,
    status: string
}


export interface UpdateTaskResponse {
    success: boolean;
    data?: {
        id: string;
        title: string;
        status: string;
    };
    message?: string;

}

export interface updateTaskPaylod {
    status: string
}

export interface DeleteTaskRequest {
    id: string
}

export interface DeleteTaskApiResponse {
    success: boolean;
    message: string;
}