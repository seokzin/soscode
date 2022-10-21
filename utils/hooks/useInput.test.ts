import { renderHook, act } from '@testing-library/react-hooks';

import { useInput } from '../hooks';

describe('useInput >', () => {
  it('should return the initial value', () => {
    const { result } = renderHook(() => useInput(''));

    expect(result.current[0]).toBe('');
  });

  it('should change the value', () => {
    const { result } = renderHook(() => useInput(''));
    const [, onChange] = result.current;

    act(() => {
      onChange({
        target: {
          value: 'change',
        },
      } as React.ChangeEvent<HTMLInputElement>);
    });

    expect(result.current[0]).toBe('change');
  });
});
