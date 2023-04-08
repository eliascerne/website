import { render } from '@testing-library/react';

import SectionHome from './SectionHome';

describe('SectionHome', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<SectionHome />);
    expect(baseElement).toBeTruthy();
  });
});
