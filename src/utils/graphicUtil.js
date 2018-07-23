// @flow

import { StatusValues } from "./constants";

export const createDataset = (refs: TodoItemRef[]) => {
    const labels = Object.keys(StatusValues);
    const data = labels.map(x => refs.filter(y => x === y.status).length);
    return {
        labels,
        datasets: [{
            data,
            backgroundColor: [
                '#FF6384',
                '#36A2EB',
                '#FFCE56',
                '#123456'
            ]
        }]
    }
};
