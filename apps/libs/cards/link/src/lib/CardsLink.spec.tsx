import { render } from '@testing-library/react';

import CardsLink from './CardsLink';

describe('CardsLink', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<CardsLink />);
    expect(baseElement).toBeTruthy();
  });
});
