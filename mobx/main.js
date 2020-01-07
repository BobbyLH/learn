import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import TodoList from './src/components/TodoList'
import ObservableTodoStore from './src/store/todo'
import peopleStore from './src/store/peopleStore'
import { Provider } from 'mobx-react'

const store = {
  ObservableTodoStore,
  peopleStore
}
// const observableTodoStore = new ObservableTodoStore()
// observableTodoStore.initialData()
// observableTodoStore.addTodo('read MobX tutorial')
// observableTodoStore.addTodo('try MobX')
// observableTodoStore.todos[0].completed = true
// observableTodoStore.todos[1].task = 'try MobX in own project'
// observableTodoStore.todos[0].task = 'grok MobX tutorial'
// observableTodoStore.todos[0].completed = !observableTodoStore.todos[0].completed;
// observableTodoStore.todos[1].task = 'Random todo ' + Math.random()
// observableTodoStore.todos.push({ task: 'Find a fine cheese', completed: true })

// var peopleStore = observable([
//   { name: 'Michel' },
//   { name: 'Me' }
// ])
// observableTodoStore.todos[0].assignee = peopleStore[0]
// observableTodoStore.todos[1].assignee = peopleStore[1]
// peopleStore[0].name = 'Michel Weststrate'

ReactDOM.render(
  <Provider {...store}>
    <TodoList />
  </Provider>, document.getElementById('app'))
// ReactDOM.render(<TodoList store={store} />, document.getElementById('app'))
