import styles from '../styles/layout.module.css';
import Header from './Header';

export default function Layout({ children }) {
  return (
    <div>
      <div>{children}</div>
    </div>
  );
}
