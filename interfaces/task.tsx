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
