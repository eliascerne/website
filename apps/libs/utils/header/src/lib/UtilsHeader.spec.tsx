import { render } from '@testing-library/react';

import UtilsHeader from './UtilsHeader';

describe('UtilsHeader', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<UtilsHeader />);
    expect(baseElement).toBeTruthy();
  });
});
