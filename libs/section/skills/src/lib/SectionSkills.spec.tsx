import { render } from '@testing-library/react';

import SectionSkills from './SectionSkills';

describe('SectionSkills', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<SectionSkills />);
    expect(baseElement).toBeTruthy();
  });
});
