import { storiesOf } from '@storybook/react';
import * as React from 'react';
import ReactiveContainer from "./ReactiveContainer";

// const allTasks = [
// 	{
// 		"status": true,
// 	    "taskName": "Task 1",
// 	    "responsibleUser": "Name Surname",
// 	    "userType": 1
// 	},
// 	{
// 		"status": false,
// 	    "taskName": "Task 2",
// 	    "responsibleUser": "Name Surname",
// 	    "userType": 2
// 	},
// 	{
// 		"status": false,
// 	    "taskName": "Task 3",
// 	    "responsibleUser": "Name Surname",
// 	    "userType": 3
// 	},
// 	{
// 		"status": false,
// 	    "taskName": "Task 4",
// 	    "responsibleUser": "Name Surname",
// 	    "userType": 4
// 	},
// 	{
// 		"status": false,
// 	    "taskName": "Task 5",
// 	    "responsibleUser": "Name Surname",
// 	    "userType": 5
// 	},
// 	{
// 		"status": false,
// 	    "taskName": "Task 6",
// 	    "responsibleUser": "Name Surname",
// 	    "userType": 6
// 	}
// ];

storiesOf("ReactiveContainer", module)
  .add("with one, closed", () => (
    <ReactiveContainer />
  ))
  .add("with many, true", () => (
    <ReactiveContainer />
  ));