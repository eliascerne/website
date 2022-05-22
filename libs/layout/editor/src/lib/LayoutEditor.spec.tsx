import { render } from '@testing-library/react';

import LayoutEditor from './LayoutEditor';

describe('LayoutEditor', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<LayoutEditor />);
    expect(baseElement).toBeTruthy();
  });
});
