// @flow
import * as React from "react";
import { Graphic } from "../Statistics/Graphic";
import {TodoItemService} from '../../api/TodoItemService';
import { Loader } from "../Loader";

type StatisticsLayoutProps = {
    todoItemService: TodoItemService
}

type StatisticsLayoutState = {
    isLoading: boolean,
    todoItems: TodoItemRef[]
}

export class StatisticsLayout extends React.Component<StatisticsLayoutProps, StatisticsLayoutState>{
    state = {
        isLoading: true,
        todoItems: []
    }
    async componentDidMount() {
        const data = await this.props.todoItemService.getAll();
        this.setState({isLoading: false, todoItems: data});
    }
    render(){
        return this.state.isLoading
            ? <Loader />
            : <Graphic todoItemRefs={this.state.todoItems} />;
    }
}