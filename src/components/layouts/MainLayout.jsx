// @flow
import * as React from "react";
import { Header } from "../Header";
import { NewTodoItem } from "../NewTodoItem/NewTodoItem";
import { todoItems } from "../../data/todoItems";
import { TodoItemContainer } from "../TodoItem/TodoItemContainer";

export class MainLayout extends React.Component<{}>{
    render(){
        return(
            <div>
                <Header />
                <NewTodoItem todoItem={{}}/>
                {
                todoItems.map((x,i) => 
                    <div key={i}>
                    <TodoItemContainer todoItem={x}/>
                    </div>)
                }
            </div>
        );
    }
}