import { extendObservable, computed } from 'mobx';

export default class ObservableTodoStore {
	todos = [];
  pendingRequests = 0;

  constructor() {
    extendObservable(this, {
      todos: this.todos,
      pendingRequests: this.pendingRequests,
      completedTodosCount: computed(this.completedTodosCount),
      report: computed(this.report),
    });
  }

	completedTodosCount() {
    	return this.todos.filter(
			todo => todo.completed === true
		).length;
    }

	report() {
		if (this.todos.length === 0)
			return "<none>";
		return `Next todo: "${this.todos[0].task}". ` +
			`Progress: ${this.completedTodosCount}/${this.todos.length}`;
	}

	addTodo(task) {
		this.todos.push({
			task: task,
			completed: false,
			assignee: null
		});
	}
}
