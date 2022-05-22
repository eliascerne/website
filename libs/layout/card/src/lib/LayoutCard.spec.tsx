import { render } from '@testing-library/react';

import LayoutCard from './LayoutCard';

describe('LayoutCard', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<LayoutCard />);
    expect(baseElement).toBeTruthy();
  });
});
