import { render } from '@testing-library/react';

import SectionAboutMe from './SectionAboutMe';

describe('SectionAboutMe', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<SectionAboutMe />);
    expect(baseElement).toBeTruthy();
  });
});
