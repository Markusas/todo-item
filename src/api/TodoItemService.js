// @flow

export interface TodoItemService {
    getAll(): Promise<TodoItemRef[]>;
    getSingle(ref: TodoItemRef): Promise<TodoItem>;
    add(item: AddTodoItemRequest): Promise<AddTodoItemResponse>;
    update(id: TodoItemId, payload: UpdateTodoItemRequest): Promise<void>;
    remove(id: TodoItemId): Promise<void>;
    updateStatus(id: TodoItemId, status: TodoItemStatus): Promise<void>;
}