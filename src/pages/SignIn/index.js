import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import styles from './index.module.scss';

export default function SignIn() {
  const { register, handleSubmit, errors } = useForm();

  // Handle Login using Email and Password
  const onSubmit = (data) => {
    fetch('http://localhost:8000/api/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log('Success:', data);
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  };

  return (
    <div className={styles.Container}>
      <form className={styles.Form} onSubmit={handleSubmit(onSubmit)}>
        <p className={styles.Title}>Sign in</p>
        <label className={styles.InputLabel} htmlFor="email">
          Email
        </label>
        <input
          className={styles.InputBox}
          type="email"
          id="email"
          name="email"
          ref={register({ required: true })}
          autoFocus
        />
        <span className={styles.InputError}>
          {errors.email ? 'Email is required' : ''}
        </span>
        <label className={styles.InputLabel} htmlFor="password">
          Password
        </label>
        <input
          className={styles.InputBox}
          type="password"
          id="password"
          name="password"
          ref={register({ required: true })}
        />
        <span className={styles.InputError}>
          {errors.password ? 'Password is required' : ''}
        </span>
        <div className={styles.CheckBoxGroup}>
          <input
            className={styles.CheckBox}
            type="checkbox"
            id="remember"
            name="remember"
          />
          <label className={styles.CheckBoxLabel} htmlFor="remember">
            {' '}
            Remember me?
          </label>
        </div>
        <button className={styles.Button} type="submit">
          Sign in
        </button>
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
      </form>
    </div>
  );
}
