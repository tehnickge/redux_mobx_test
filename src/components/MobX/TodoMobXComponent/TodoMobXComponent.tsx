import { observer } from "mobx-react-lite";
import todoMobx from "../../../store/mobx/todo";

const TodoMobXComponent = observer(() => {
  return (
    <div>
      <div>
        <button onClick={() => todoMobx.fetchTodos()}>fetch</button>
      </div>
      {todoMobx.todos.map((todo) => (
        <div className="todo" key={todo.id}>
          <input
            type="checkbox"
            checked={todo.completed}
            onChange={() => todoMobx.completeTodo(todo.id)}
          />
          {todo.title}
          <button onClick={() => todoMobx.removeToDo(todo.id)}>X</button>
        </div>
      ))}
      <div className="todo_new">
        <div>
          <label htmlFor="title">title</label>
          <input
            id="title"
            type="text"
            onChange={(e) => (todoMobx.title = e.target.value)}
          />
        </div>
        <div>
          <button
            onClick={() => {
              todoMobx.addTodo({
                id:
                  todoMobx.todos.length > 0
                    ? todoMobx.todos[todoMobx.todos.length - 1].id + 1
                    : 0,
                title: todoMobx.title,
                completed: false,
              });
            }}
          >
            add
          </button>
        </div>
      </div>
    </div>
  );
});

export default TodoMobXComponent;
