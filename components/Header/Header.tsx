import { useUser } from '@auth0/nextjs-auth0';

import styles from './Header.module.css';

const Header = () => {
  // @todo > gets called when logged out so throws silent error.
  const { user, error, isLoading } = useUser();

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>{error.message}</div>;

  return (
    <div className={styles.header}>
      <section className={styles.siteTitle}>
        <h1>Wainwrights Tick List</h1>
      </section>
      <ul className={styles.login}>
        <li>
          <img
            src={user?.picture || '/profile.jpeg'}
            alt={`Profile image: ${user?.name || `missing`}`}
            width="30px"
          />
        </li>
        <li>{user?.name}</li>
        <li>{user?.email && <a href="/api/auth/logout">Log out</a>}</li>
        <li>{!user?.email && <a href="/api/auth/login">Log in</a>}</li>
      </ul>
    </div>
  );
};

export default Header;
