import { render } from '@testing-library/react';

import SectionPortfolio from './SectionPortfolio';

describe('SectionPortfolio', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<SectionPortfolio />);
    expect(baseElement).toBeTruthy();
  });
});
