import { render } from '@testing-library/react';

import UtilsDatabaseConnect from './UtilsDatabaseConnect';

describe('UtilsDatabaseConnect', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<UtilsDatabaseConnect />);
    expect(baseElement).toBeTruthy();
  });
});
