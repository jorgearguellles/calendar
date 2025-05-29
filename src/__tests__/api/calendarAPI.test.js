import { describe, expect, test, vi, beforeEach } from "vitest";
import calendarAPI from "../../api/calendarAPI";
import axios from "axios";

// Mock de axios
const mockAxiosInstance = {
  get: vi.fn(),
  post: vi.fn(),
  put: vi.fn(),
  delete: vi.fn(),
  interceptors: {
    request: {
      use: vi.fn(),
    },
  },
};

vi.mock("axios", () => ({
  create: vi.fn(() => mockAxiosInstance),
}));

// Mock de getENVVariables
vi.mock("../../helpers/getENVVariables", () => ({
  default: () => ({
    VITE_API_URL: "http://test-api.com",
  }),
}));

describe("calendarAPI", () => {
  beforeEach(() => {
    vi.clearAllMocks();
    // Asegurarnos de que localStorage está mockeado
    expect(window.localStorage).toBeDefined();
  });

  describe("Configuración", () => {
    test("debe crear una instancia de axios con la URL base correcta", () => {
      expect(axios.create).toHaveBeenCalledWith({
        baseURL: "http://test-api.com",
      });
    });
  });

  describe("Interceptor de Request", () => {
    let interceptorCallback;

    beforeEach(() => {
      interceptorCallback =
        mockAxiosInstance.interceptors.request.use.mock.calls[0][0];
    });

    test("debe agregar el token al header cuando existe", () => {
      const mockToken = "test-token";
      window.localStorage.getItem.mockReturnValue(mockToken);

      const config = { headers: {} };
      const result = interceptorCallback(config);

      expect(result.headers["x-token"]).toBe(mockToken);
      expect(window.localStorage.getItem).toHaveBeenCalledWith("token");
    });

    test("debe mantener headers existentes", () => {
      const mockToken = "test-token";
      window.localStorage.getItem.mockReturnValue(mockToken);

      const config = {
        headers: { "Content-Type": "application/json" },
      };
      const result = interceptorCallback(config);

      expect(result.headers["Content-Type"]).toBe("application/json");
      expect(result.headers["x-token"]).toBe(mockToken);
    });

    test("debe manejar caso sin token", () => {
      window.localStorage.getItem.mockReturnValue(null);

      const config = { headers: {} };
      const result = interceptorCallback(config);

      expect(result.headers["x-token"]).toBeUndefined();
    });
  });
});
