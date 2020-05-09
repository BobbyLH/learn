import * as mobx from 'mobx'
import {observable, computed, action, autorun} from 'mobx'

class ObservableTodoStore {
	@observable todos = [];
	@observable pendingRequests = 0;
  constructor() {
		// mobx.autorun(() => console.log(this.completedTodosCount))
    // autorun(() => console.log(this.report, 33333));
  }

	@computed get completedTodosCount() {
    return this.todos.filter(
      todo => todo.completed === true
    ).length;
  }

	@computed get report() {
		if (this.todos.length === 0)
			return "<none>";
		return `Next todo: "${this.todos[0].task}". ` +
			`Progress: ${this.completedTodosCount}/${this.todos.length}`;
	}

	@action addTodo(task) {
		this.todos.push({
			task: task,
			completed: false,
			assignee: null
		});
	}
	@action initialData () {
		this.addTodo('task1')
        this.addTodo('task2')
        this.addTodo('task3')
		this.todos[0].completed = true
		this.todos[2].task = 'task3 Random todo ' + Math.random()
		this.todos.push({ task: 'Find a fine cheese', completed: true })
    }
    @action addAssignee (key, value) {
        this.todos[key].assignee = value
    }
}
export default new ObservableTodoStore()