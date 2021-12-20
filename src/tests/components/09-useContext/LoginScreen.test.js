import { mount } from "enzyme";
import LoginScreen from "../../../components/09-useContext/LoginScreen";
import { UserContext } from "../../../components/09-useContext/UserContext";

describe("Pruebas en el componente LoginScreen", () => {
  const setUser = jest.fn();

  const wrapper = mount(
    <UserContext.Provider value={{ setUser }}>
      <LoginScreen />
    </UserContext.Provider>
  );

  test("Debe de mostrarse el componente correctamente", () => {
    expect(wrapper).toMatchSnapshot();
  });

  test("Debe de ejecutar el setUser con el argumento esperado", () => {
    // wrapper.find("button").simulate("click");
    wrapper.find("button").prop("onClick")();
    const className = wrapper.find("button").prop("className");

    expect(setUser).toHaveBeenCalledWith({ id: 123, name: "ola" });
    expect(className).toBe("btn btn-primary");
  });
});
