import React from 'react';

import { render } from '@testing-library/react';

import { FellList } from '@/components/FellList';

describe('FellList', () => {
  it('should render the FellList Component', () => {
    const { getByText } = render(
      <FellList
        fells={[
          {
            id: '34535345',
            name: 'Skiddaw',
            region: 'TNF',
            metres: '931',
            feet: '3054',
            latitude: '54.651408',
            longitude: '-3.147798',
            climbed: false,
            date: new Date(),
            notes: '',
          },
        ]}
      />
    );

    const fell = getByText(/Skiddaw/i);

    expect(fell).toBeInTheDocument();
  });
});
