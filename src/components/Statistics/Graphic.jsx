// @flow
import * as React from "react";
import {Pie} from 'react-chartjs-2';
import { createDataset } from "../../utils/graphicUtil";

type GraphicProps = {
    todoItemRefs: TodoItemRef[]
}

export class Graphic extends React.Component<GraphicProps>{
    render() {
        return (
        <div>
            <h2>Todo items by status</h2>
            <Pie data={createDataset(this.props.todoItemRefs)} />
        </div>
        );
    }
}