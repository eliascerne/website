import { render } from '@testing-library/react';

import SectionBinaryClock from './SectionBinaryClock';

describe('SectionBinaryClock', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<SectionBinaryClock />);
    expect(baseElement).toBeTruthy();
  });
});
