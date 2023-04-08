import { render } from '@testing-library/react';

import SectionScrollUp from './SectionScrollUp';

describe('SectionScrollUp', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<SectionScrollUp />);
    expect(baseElement).toBeTruthy();
  });
});
