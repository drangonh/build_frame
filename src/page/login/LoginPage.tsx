import cn from 'classnames';
import { HeaderSecond } from '@/components';


import styles from './LoginPage.module.less';


export interface ExampleProps {
  className?: string;
  title?: string;
}

export const LoginPage:React.FC<ExampleProps>=({ className, title = 'Example' }:ExampleProps)=>{
  return  (
    <div className={cn(styles.container, className)}>
      <HeaderSecond />
      <header className={styles.header}>
        <h1 className={styles.title}>{title}</h1>
        <svg
          className={styles.waves}
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          viewBox="0 24 150 28"
          preserveAspectRatio="none"
          shapeRendering="auto"
        >
          <defs>
            <path
              id="gentle-wave"
              d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z"
            />
          </defs>
          <g className={styles.parallax}>
            <use
              className={styles.wave1}
              xlinkHref="#gentle-wave"
              x="48"
              y="0"
            />
            <use
              className={styles.wave2}
              xlinkHref="#gentle-wave"
              x="48"
              y="3"
            />
            <use
              className={styles.wave3}
              xlinkHref="#gentle-wave"
              x="48"
              y="5"
            />
            <use
              className={styles.wave4}
              xlinkHref="#gentle-wave"
              x="48"
              y="7"
            />
          </g>
        </svg>
      </header>
      <main className={styles.main} />
      <footer className={styles.footer}>
        <a href="https://github.com/MagicCube" target="_blank" rel="noreferrer">
          Created by Henry Li.
        </a>
      </footer>
    </div>
  );
}
