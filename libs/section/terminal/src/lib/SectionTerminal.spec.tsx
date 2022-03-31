import { render } from '@testing-library/react';

import SectionTerminal from './SectionTerminal';

describe('SectionTerminal', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<SectionTerminal />);
    expect(baseElement).toBeTruthy();
  });
});
