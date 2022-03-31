import { render } from '@testing-library/react';

import SectionFooter from './SectionFooter';

describe('SectionFooter', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<SectionFooter />);
    expect(baseElement).toBeTruthy();
  });
});
