// @flow

type AddTodoItemRequest = {
    title: string,
    description: string,
    status?: TodoItemStatus,
    priority?: TodoItemPriority
};

type AddTodoItemResponse = {
    id: TodoItemId,
    href: TodoItemHref
};

type UpdateTodoItemRequest = {
    title: string,
    description: string,
    status: TodoItemStatus,
    priority: TodoItemPriority
};