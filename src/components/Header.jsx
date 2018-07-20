import * as React from "react";
import "../styles/header.css";
import { Link } from "react-router-dom";

export class Header extends React.Component {
    render() {
        return(
            <div className="todo-header">
                <h1>TODO APP</h1>
                <Link to="/statistics"><button>Statistics</button></Link>
            </div>
        );
    }
}