import { render } from '@testing-library/react';

import SectionProjectInMind from './SectionProjectInMind';

describe('SectionProjectInMind', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<SectionProjectInMind />);
    expect(baseElement).toBeTruthy();
  });
});
