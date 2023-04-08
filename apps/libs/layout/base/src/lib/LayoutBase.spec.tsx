import { render } from '@testing-library/react';

import LayoutBase from './LayoutBase';

describe('LayoutBase', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<LayoutBase />);
    expect(baseElement).toBeTruthy();
  });
});
