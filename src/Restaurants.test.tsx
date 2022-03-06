import { MockedProvider } from '@apollo/client/testing';
import { render } from '@testing-library/react';

import Restaurants from './Restaurants';

describe('Restaurants', () => {
  it('renders without crashing', () => {
    render(
      <MockedProvider>
        <Restaurants />
      </MockedProvider>,
    );
  });
});
