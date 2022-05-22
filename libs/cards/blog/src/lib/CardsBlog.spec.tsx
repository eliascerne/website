import { render } from '@testing-library/react';

import CardsBlog from './CardsBlog';

describe('CardsBlog', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<CardsBlog />);
    expect(baseElement).toBeTruthy();
  });
});
