import React from 'react';

import { render } from '@testing-library/react';
import { Header } from '@/components/index';

describe('Header', () => {
  it('should render the Header Component', () => {
    const { getByText } = render(<Header />);

    const headerText = getByText(/Log in/i);

    expect(headerText).toBeInTheDocument();
  });
});
