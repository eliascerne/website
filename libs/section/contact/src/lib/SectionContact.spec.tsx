import { render } from '@testing-library/react';

import SectionContact from './SectionContact';

describe('SectionContact', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<SectionContact />);
    expect(baseElement).toBeTruthy();
  });
});
