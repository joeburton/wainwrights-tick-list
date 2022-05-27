import React from 'react';

import { render } from '@testing-library/react';
import { LogInForm } from '@/components/index';

describe('LogInForm', () => {
  it('should render the LogInForm Component', () => {
    const { getByText } = render(<LogInForm />);

    const logInFormWelcomeText = getByText(/Please Log In/i);

    expect(logInFormWelcomeText).toBeInTheDocument();
  });
});
