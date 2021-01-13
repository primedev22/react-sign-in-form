import { Link } from 'react-router-dom';
import styles from './index.module.scss';

export default function SignIn() {
  return (
    <div className={styles.Container}>
      <div className={styles.Form}>
        <p className={styles.Title}>Sign in</p>
        <label className={styles.InputLabel} for="email">
          Email
        </label>
        <input
          className={styles.InputBox}
          type="email"
          id="email"
          name="email"
          required
        />
        <label className={styles.InputLabel} for="password">
          Password
        </label>
        <input
          className={styles.InputBox}
          type="password"
          id="password"
          name="password"
          required
        />
        <div className={styles.CheckBoxGroup}>
          <input
            className={styles.CheckBox}
            type="checkbox"
            id="remember"
            name="remember"
            value="Bike"
          />
          <label className={styles.CheckBoxLabel} for="remember">
            {' '}
            Remember me?
          </label>
        </div>
        <button className={styles.Button}>Sign in</button>
        <p className={styles.LinkBox}>
          <Link className={styles.Link} to="/forgot-password">
            Forgot your password
          </Link>
        </p>
        <p className={styles.LinkBox}>
          Don't have an account?{' '}
          <Link className={styles.Link} to="/sign-up">
            Sign up
          </Link>
        </p>
        <p className={styles.LinkBox}>
          <Link className={styles.Link} to="/confirm-email">
            Resend email confirmation
          </Link>
        </p>
      </div>
    </div>
  );
}
