import { render } from '@testing-library/react';

import MenuHover from './MenuHover';

describe('Menuhover', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<MenuHover />);
    expect(baseElement).toBeTruthy();
  });
});
