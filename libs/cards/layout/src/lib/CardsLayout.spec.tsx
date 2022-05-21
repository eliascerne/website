import { render } from '@testing-library/react';

import CardsLayout from './CardsLayout';

describe('CardsLayout', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<CardsLayout />);
    expect(baseElement).toBeTruthy();
  });
});
