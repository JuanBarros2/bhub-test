import { renderHook } from "@testing-library/react-hooks";
import useCliente from "./useCliente";
import "@testing-library/jest-dom";

jest.mock("../../factory/InterfaceFactory");

describe("useCliente", () => {
  it("should run 'getCliente' when hook be created", async () => {
    const { result, waitForNextUpdate } = renderHook(() => useCliente());
    expect(result.current.isLoading).toBeTruthy();
    await waitForNextUpdate();
    expect(result.current.clientes).toHaveLength(0);
    expect(result.current.isLoading).toBeFalsy();
  });
});
