/* eslint-disable @typescript-eslint/no-unsafe-call */
import cn from 'classnames';
import React from 'react';
import styles from './index.module.less';


export interface HelloProps {
  className?: string;
  name: string;
}

export function Hello({ className, name }: HelloProps) {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  return <div className={cn(styles.container, className)}>Hello {name}</div>;
}