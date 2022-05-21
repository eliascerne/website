import { render } from '@testing-library/react';

import CardsUi from './CardsUi';

describe('CardsUi', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<CardsUi />);
    expect(baseElement).toBeTruthy();
  });
});
