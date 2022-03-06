import { MockedProvider } from '@apollo/client/testing';

import { render } from '@testing-library/react';

import MainPage from './MainPage';

describe('MainPage', () => {
  it('renders title', () => {
    const { container } = render(
      <MockedProvider>
        <MainPage />
      </MockedProvider>,
    );

    expect(container).toHaveTextContent('고래밥집');
  });
});
