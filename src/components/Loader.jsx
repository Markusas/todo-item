// @flow
import * as React from "react";

type LoaderState = {
    currentFrame: number
};

const frames = ["-", "/", "|", "\\"];

export class Loader extends React.Component<{}, LoaderState> {
    state = {
        currentFrame: 0
    };
    intervalId: IntervalId;

    componentDidMount() {
        this.intervalId = setInterval(() => this.setState({currentFrame: (this.state.currentFrame+1)%frames.length}), 50);
    }
    componentWillUnmount() {
        clearInterval(this.intervalId);
    }

    render() {
        return (
            <span style={{fontSize: 40}}>{frames[this.state.currentFrame]}</span>
        );
    }
}