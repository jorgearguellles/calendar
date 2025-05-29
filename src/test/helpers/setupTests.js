import '@testing-library/jest-dom';
import { vi } from 'vitest';

// Mock del localStorage
const mockLocalStorage = {
  getItem: vi.fn(),
  setItem: vi.fn(),
  removeItem: vi.fn(),
  clear: vi.fn(),
  length: 0,
  key: vi.fn(),
};

// Mock del localStorage en el objeto window
Object.defineProperty(window, 'localStorage', {
  value: mockLocalStorage,
  writable: true
});

// Limpiar todos los mocks antes de cada test
beforeEach(() => {
  vi.clearAllMocks();
  mockLocalStorage.getItem.mockClear();
  mockLocalStorage.setItem.mockClear();
  mockLocalStorage.removeItem.mockClear();
  mockLocalStorage.clear.mockClear();
});
