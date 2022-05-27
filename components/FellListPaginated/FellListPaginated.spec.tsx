import React from 'react';

import { render } from '@testing-library/react';

import { FellListPaginated } from '@/components/index';

describe('FellListPaginated', () => {
  it('should render the FellListPaginated Component', () => {
    const { getByText, getByLabelText, queryByLabelText, debug } = render(
      <FellListPaginated
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
          {
            id: '38375345',
            name: 'Blencathra',
            region: 'TNF',
            metres: '868',
            feet: '2848',
            latitude: '',
            longitude: '',
            climbed: false,
            date: new Date(),
            notes: '',
          },
        ]}
        itemsPerPage={20}
      />
    );

    const fell = getByText(/Skiddaw/i);

    const page1Button = getByLabelText('page 1');
    const page2Button = queryByLabelText('page 2');

    expect(fell).toBeInTheDocument();
    expect(page1Button).toBeInTheDocument();
    expect(page2Button).toBeNull();
  });
});
