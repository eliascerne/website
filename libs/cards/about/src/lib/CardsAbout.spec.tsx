import { render } from '@testing-library/react';

import CardsAbout from './CardsAbout';

describe('CardsAbout', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<CardsAbout />);
    expect(baseElement).toBeTruthy();
  });
});
