import React, {Component} from 'react'
import {inject, observer} from 'mobx-react'
import TodoView from './TodoView'


@inject('ObservableTodoStore', 'peopleStore')
@observer
export default class TodoList extends React.Component {
  constructor (props) {
    super(props)
    const {ObservableTodoStore, peopleStore} = this.props
    ObservableTodoStore.initialData()
    ObservableTodoStore.addAssignee(0, peopleStore.name[0])
    ObservableTodoStore.addAssignee(1, peopleStore.name[1])
    ObservableTodoStore.addAssignee(3, peopleStore.name[2] || 'doris')
  }
  render() {
    const {ObservableTodoStore, peopleStore} = this.props
    // ObservableTodoStore.initialData()
    // ObservableTodoStore.addAssignee(0, peopleStore.name[0])
    // ObservableTodoStore.addAssignee(1, peopleStore.name[1])
    return (
      <div>
        { ObservableTodoStore.report }
        <ul>
        { ObservableTodoStore.todos.map(
          (todo, idx) => <TodoView todo={ todo } key={ idx } />
        ) }
        </ul>
        { ObservableTodoStore.pendingRequests > 0 ? <marquee>Loading...</marquee> : null }
        <button onClick={ this.onNewTodo }>New Todo</button>
        <small> (double-click a todo to edit)</small>
        <input onKeyUp={(e) => this._changeName(e)} />
        <button onClick={() => this._marquee()}>点我啊</button>
      </div>
    );
  }
  _changeName (event) {
    this.props.ObservableTodoStore.addAssignee(1, event.target.value)
    // this.props.peopleStore.name[1] = event.target.value
  }
  _marquee () {
    this.props.ObservableTodoStore.pendingRequests++;
    setTimeout(() => {
      this.props.ObservableTodoStore.addTodo('Random Todo ' + Math.random());
      this.props.ObservableTodoStore.pendingRequests--;
    }, 2000);
  }
  onNewTodo = () => {
    this.props.ObservableTodoStore.addTodo(prompt('Enter a new todo:','coffee plz'));
  }
}