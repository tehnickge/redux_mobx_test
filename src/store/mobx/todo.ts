import { makeAutoObservable } from "mobx";
interface Todo {
  id: number;
  title: string;
  completed: boolean;
}

class TodoMobx {
  title: string = "";
  todos: Todo[] = [
    { id: 1, title: "poestb", completed: false },
    { id: 2, title: "test2", completed: false },
    { id: 3, title: "drink wather", completed: false },
  ];
  constructor() {
    makeAutoObservable(this);
  }

  addTodo(todo: Todo) {
    this.todos.push(todo);
  }
  removeToDo(id: number) {
    this.todos = this.todos.filter((todo) => todo.id !== id);
  }
  completeTodo(id: number) {
    this.todos = this.todos.map((todo) =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    );
  }
  fetchTodos() {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((response) => response.json())
      .then((json) => (this.todos = [...json, ...this.todos]));
  }
}

const todoMobx = new TodoMobx();

export default todoMobx;
