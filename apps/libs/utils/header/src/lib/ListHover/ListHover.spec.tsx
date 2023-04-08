import { render } from '@testing-library/react';

import ListHover from './ListHover';

describe('Menuhover', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ListHover />);
    expect(baseElement).toBeTruthy();
  });
});
