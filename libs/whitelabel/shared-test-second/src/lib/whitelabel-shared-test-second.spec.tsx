import { render } from '@testing-library/react';

import WhitelabelSharedTestSecond from './whitelabel-shared-test-second';

describe('WhitelabelSharedTestSecond', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<WhitelabelSharedTestSecond />);
    expect(baseElement).toBeTruthy();
  });
});
