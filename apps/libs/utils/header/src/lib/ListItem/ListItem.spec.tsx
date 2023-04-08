import { render } from '@testing-library/react';

import ListItem from './ListItem';

describe('MenuItem', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ListItem />);
    expect(baseElement).toBeTruthy();
  });
});
