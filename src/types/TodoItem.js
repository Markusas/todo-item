// @flow
import {StatusValues, PriorityValues} from "../utils/constants";

type TodoItemStatus = $Keys<typeof StatusValues>;
type TodoItemPriority = $Keys<typeof PriorityValues>;
type TodoItemId = number;
type TodoItemHref = string;

type TodoItemBase = {
    id: TodoItemId,
    title: string,
    status: TodoItemStatus,
    priority: TodoItemPriority
}

type TodoItem = TodoItemBase & {description: string};
type TodoItemRef = TodoItemBase & {href: TodoItemHref};
