import { render } from '@testing-library/react';

import Restaurants from './Restaurants';

describe('Restaurants', () => {
  it('renders restaurants', () => {
    const { container } = render(<Restaurants />);

    expect(container).toHaveTextContent('고래식당');
    expect(container).toHaveTextContent('순살돈가스');
  });
});
