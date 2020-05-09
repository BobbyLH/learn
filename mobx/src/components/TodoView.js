import React, {Component} from 'react';
import {observer} from 'mobx-react';

@observer
export default class TodoView extends React.Component {
  constructor (props) {
    super(props)
  }
  render() {
    const todo = this.props.todo
    return (
      <li onDoubleClick={ this.onRename }>
        <input
          type='checkbox'
          checked={ todo.completed }
          onChange={ this.onToggleCompleted }
        />
        { `task: ${todo.task} ` }
        { todo.assignee
          ? <small>{ `assignee: ${todo.assignee}` }</small>
          : null
        }
      </li>
    );
  }

  onToggleCompleted = () => {
    const todo = this.props.todo;
    todo.completed = !todo.completed;
  }

  onRename = () => {
    const todo = this.props.todo;
    todo.task = prompt('Task name', todo.task) || todo.task;
  }
}