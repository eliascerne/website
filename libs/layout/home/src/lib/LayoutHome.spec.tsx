import { render } from '@testing-library/react';

import LayoutHome from './LayoutHome';

describe('LayoutHome', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<LayoutHome />);
    expect(baseElement).toBeTruthy();
  });
});
