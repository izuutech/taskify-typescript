import { AiFillEdit, AiFillDelete } from "react-icons/ai";
import { MdDone } from "react-icons/md";
import { Todo } from "../model";

type Props = {
  todo: Todo;
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
};
const SingleTodo = ({ todo, todos, setTodos }: Props) => {
  return (
    <form className="todos_single">
      <span className="todos_single--text">{todo.todo}</span>
      <div className="">
        <span className="icon">
          <AiFillEdit />
          <AiFillDelete />
          <MdDone />
        </span>
      </div>
    </form>
  );
};

export default SingleTodo;
