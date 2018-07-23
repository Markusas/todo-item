// @flow
import { TodoItemService } from "./TodoItemService";
import { fetchData } from "../utils/apiUtils";

const API_URL = "http://localhost:55430/api";

const buildUrl = (path: string) => API_URL + path;

export class RestTodoItemService implements TodoItemService {
    async getAll(): Promise<TodoItemRef[]> {
        const data: ApiResponse<TodoItemRef[]> = await fetchData("GET", buildUrl("/tasks"));
        if (data.isError) {
            throw new Error(); // TODO: better error handling
        }
        return data.value;
    }

    async getSingle(ref: TodoItemRef): Promise<TodoItem> {
        const data: ApiResponse<TodoItem> = await fetchData("GET", ref.href);
        if (data.isError) {
            throw new Error();
        }
        return data.value;
    }

    async update(id: TodoItemId, payload: UpdateTodoItemRequest): Promise<void> {
        const data: ApiResponse<void> = await fetchData("PUT", buildUrl(`/tasks/${id}`), payload);
        if (data.isError) {
            throw new Error();
        }
        return data.value;
    }
}