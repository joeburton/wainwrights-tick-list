import { FellInterface } from '../../pages/api/models/Fell';

import styles from './Fellist.module.css';

const FellList = ({ fells }: { fells: [FellInterface] }) => {
  return (
    <ol className={styles.fellList}>
      {fells.map((fell: FellInterface) => (
        <li key={fell.id}>
          {fell.name}, m: {fell.metres}, ft: {fell.feet}
        </li>
      ))}
    </ol>
  );
};

export default FellList;
