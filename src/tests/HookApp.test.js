import React from "react";
import { shallow } from "enzyme";
import { HookApp } from "../HookApp";

describe("Pruebas en el componente <HookApp/>", () => {
  test("Debe funcionar correctamente", () => {
    const wrapper = shallow(<HookApp />);

    expect(wrapper).toMatchSnapshot();
  });
});
