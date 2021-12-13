import Link from 'next/link';
import style from '../styles/social.module.css';

const Social = ({ svg, title,url }) => {
  return (
    <Link href={url}>
    <a className={style.socialContainer}>
      <div>
        {svg}
      </div>
    </a>
    </Link>
  );
};

export default Social;
