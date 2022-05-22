import { render } from '@testing-library/react';

import EditorUi from './EditorUi';

describe('EditorUi', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<EditorUi />);
    expect(baseElement).toBeTruthy();
  });
});
