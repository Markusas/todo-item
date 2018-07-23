// @flow
import * as React from "react";
import { Header } from "../Header";
import { NewTodoItem } from "../NewTodoItem/NewTodoItem";
import { todoItems } from "../../data/todoItems";
import { TodoItemContainer } from "../TodoItem/TodoItemContainer";
import { TodoItemService } from "../../api/TodoItemService";
import { Loader } from "../Loader";

type MainLayoutProps = {
    todoItemService: TodoItemService
};

type MainLayoutState = {
    isLoading: boolean,
    todoItems: TodoItemRef[]
}

export class MainLayout extends React.Component<MainLayoutProps, MainLayoutState>{
    state = {
        isLoading: true,
        todoItems: []
    };

    async componentDidMount() {
        const data = await this.props.todoItemService.getAll();
        await new Promise(resolve => setTimeout(resolve, 1000)); //sleep 1000ms
        this.setState({isLoading: false, todoItems: data});
    }
    async handleUpdate(id: TodoItemId, newData: TodoItem) {
        const payload = {
            title: newData.title,
            description: newData.description,
            status: newData.status,
            priority: newData.priority
        };
        const response = await this.props.todoItemService.update(id, payload);
    }
    render(){
        if (this.state.isLoading) {
            return (
                <Loader/>
            );
        }
        return(
            <div>
                <Header />
                <NewTodoItem todoItem={{}}/>
                {
                this.state.todoItems.map((x,i) => 
                    <div key={i}>
                    <TodoItemContainer
                        onFullDataRequest={() => this.props.todoItemService.getSingle(x)}
                        todoItem={x}
                        onItemUpdate={newData => this.handleUpdate(x.id, newData)}
                    />
                    </div>)
                }
            </div>
        );
    }
}