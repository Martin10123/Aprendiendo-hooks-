import React from "react";

import { shallow } from "enzyme";
import TodoListItem from "../../../../../components/08-useReducer/TodoList/todoListItem";
import { demoTodos } from "../../../fixtures/demoTodos";

describe("Pruebas en el componente TodoListItem", () => {
  const indixe = 0;
  const handleToggle = jest.fn();
  const handleDelete = jest.fn();

  const wrapper = shallow(
    <TodoListItem
      todo={demoTodos[indixe]}
      i={indixe}
      handleToggle={handleToggle}
      handleDelete={handleDelete}
    />
  );

  test("Debe de mostrar el componente correctamente", () => {
    expect(wrapper).toMatchSnapshot();
  });

  test("Debe de llamar la función handleToggle", () => {
    wrapper.find("p").simulate("click");

    expect(handleToggle).toHaveBeenCalledWith(demoTodos[indixe].id);
  });

  test("Debe de llamar la función handleDelete", () => {
    wrapper.find("button").simulate("click");

    expect(handleDelete).toHaveBeenCalledWith(demoTodos[indixe].id);
  });

  test("Debe de mostrar el texto correctamente", () => {
    const texto = wrapper.find("p").text().trim();

    expect(texto).toBe(`${indixe + 1}. ${demoTodos[indixe].desc}`);
  });

  test("Debe de mostrar la clase como completada", () => {
    const todo = demoTodos[0];
    todo.done = true;

    const wrapper = shallow(
      <TodoListItem
        todo={todo}
        i={indixe}
        handleToggle={handleToggle}
        handleDelete={handleDelete}
      />
    );

    expect(wrapper.find("p").hasClass("complete")).toBe(true);
  });
});
