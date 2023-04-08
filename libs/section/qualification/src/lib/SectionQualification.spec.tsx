import { render } from '@testing-library/react';

import SectionQualification from './SectionQualification';

describe('SectionQualification', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<SectionQualification />);
    expect(baseElement).toBeTruthy();
  });
});
