import React from "react";
import { user } from "../fixtures/userContext";
const { mount } = require("enzyme");
const {
  default: HomeScreen,
} = require("../../../components/09-useContext/HomeScreen");
const {
  UserContext,
} = require("../../../components/09-useContext/UserContext");

describe("Pruebas en el componente HomeScreen", () => {
  const wrapper = mount(
    <UserContext.Provider value={{ user }}>
      <HomeScreen />
    </UserContext.Provider>
  );
  test("Debe mostrarse correctamente", () => {
    expect(wrapper).toMatchSnapshot();
  });
});
