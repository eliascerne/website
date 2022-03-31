import { render } from '@testing-library/react';

import SectionHeader from './SectionHeader';

describe('SectionHeader', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<SectionHeader />);
    expect(baseElement).toBeTruthy();
  });
});
