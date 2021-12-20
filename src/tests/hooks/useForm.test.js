import { act, renderHook } from "@testing-library/react-hooks";
import { useForm } from "../../hooks/useForm";

describe("Pruebas en el hook useForm", () => {
  const initialForm = {
    name: "Martin",
    email: "martin@gmail.com",
  };

  test("Debe de regresar un formaulario por defecto", () => {
    const { result } = renderHook(() => useForm(initialForm));

    const [values, handleInputChange, reset] = result.current;

    expect(values).toEqual(initialForm);
    expect(typeof handleInputChange).toBe("function");
    expect(typeof reset).toBe("function");
  });

  test("Debe de cambiar el formulario por defecto (cambiar name)", () => {
    const value = "Martin Elias Simarra";
    const name = "name";

    const { result } = renderHook(() => useForm(initialForm));
    const [, handleInputChange] = result.current;

    act(() => {
      handleInputChange({
        target: { name: name, value: value },
      });
    });
    const [values] = result.current;
    expect(values.name).toBe(value);
  });

  test("Debe de hacerle un reset al formulario", () => {
    const value = "Martin Elias Simarra";
    const name = "name";

    const { result } = renderHook(() => useForm(initialForm));
    const [, handleInputChange, reset] = result.current;

    act(() => {
      handleInputChange({
        target: { name: name, value: value },
      });
      reset();
    });
    const [values] = result.current;
    expect(values).toEqual(initialForm);
  });
});
