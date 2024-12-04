import { Form } from "../components/Form/Form";
import { Header } from "../components/Header/Header";
import { TodoList } from "../components/TodoList/TodoList";

export const TodoListPage = () => {
  return (
    <>
      <Header />
      <Form />
      <TodoList />
    </>
  );
};