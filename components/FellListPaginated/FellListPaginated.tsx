import { useState } from 'react';

import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import Divider from '@mui/material/Divider';

import { FellInterface } from '../../pages/api/models/Fell';

import styles from './FellListPaginated.module.css';

const FellListPaginated = ({
  fells,
  itemsPerPage = 20,
}: {
  fells: FellInterface[];
  itemsPerPage: number;
}) => {
  const [page, setPage] = useState(1);
  const [noOfPages] = useState(Math.ceil(fells.length / itemsPerPage));

  const handleChange = (_event: any, value: React.SetStateAction<number>) => {
    setPage(value);
  };

  return (
    <Stack spacing={2}>
      <ul className={styles.fellListPaginated}>
        {fells
          .slice((page - 1) * itemsPerPage, page * itemsPerPage)
          .map((fell) => {
            return (
              <li key={fell.id}>
                {fell.name}, m: {fell.metres}, ft: {fell.feet}
              </li>
            );
          })}
      </ul>
      <Divider />
      <Pagination
        count={noOfPages}
        page={page}
        onChange={handleChange}
        defaultPage={1}
        color="primary"
        size="large"
        showFirstButton
        showLastButton
      />
    </Stack>
  );
};

export default FellListPaginated;
