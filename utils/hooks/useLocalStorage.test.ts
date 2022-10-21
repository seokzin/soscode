import { renderHook, act } from '@testing-library/react-hooks';

import { useLocalStorage } from '../hooks';

describe('useLocalStorage >', () => {
  it('should return the initial value', () => {
    renderHook(() => useLocalStorage('key', ''));

    expect(localStorage.getItem('key')).toBe(`""`);
  });

  it('should change the value', () => {
    const { result } = renderHook(() => useLocalStorage('key', ''));
    const [, setValue] = result.current;

    act(() => {
      setValue('change');
    });

    expect(localStorage.getItem('key')).toBe(`"change"`);
  });
});
