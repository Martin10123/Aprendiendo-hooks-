import { shallow } from "enzyme";
import TodoAdd from "../../../../components/08-useReducer/TodoAdd";

describe("Pruebas en el componente TodoAdd", () => {
  const handleAddTodo = jest.fn();

  const wrapper = shallow(<TodoAdd handleAddTodo={handleAddTodo} />);

  test("Debe de mostrarse correctamente", () => {
    expect(wrapper).toMatchSnapshot();
  });

  test("No debe de llamar el handleAddTodo", () => {
    const formSubmit = wrapper.find("form").prop("onSubmit");

    formSubmit({ preventDefault() {} });

    expect(handleAddTodo).toHaveBeenCalledTimes(0);
  });

  test("Debe de llamar la función handleAddTodo", () => {
    const value1 = "Apender a jugar";

    wrapper
      .find("input")
      .simulate("change", { target: { name: "description", value: value1 } });
    const formSubmit = wrapper.find("form").prop("onSubmit");

    formSubmit({ preventDefault() {} });

    expect(handleAddTodo).toHaveBeenCalledTimes(1);
    expect(handleAddTodo).toHaveBeenCalledWith(expect.any(Object));
    expect(handleAddTodo).toHaveBeenCalledWith({
      id: expect.any(Number),
      desc: value1,
      done: false,
    });

    expect(wrapper.find("input").prop("value")).toBe("");
  });
});
