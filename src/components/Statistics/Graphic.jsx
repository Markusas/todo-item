// @flow
import * as React from "react";
import {Pie} from 'react-chartjs-2';
import { data } from "../../utils/graphicUtil";

export class Graphic extends React.Component<{}>{
  render() {
    return (
      <div>
        <h2>Pie Example</h2>
        <Pie data={data} />
      </div>
    );
  }
}