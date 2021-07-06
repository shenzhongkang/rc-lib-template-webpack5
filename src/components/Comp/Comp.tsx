import React, { FC } from 'react';

export interface CompProps {
  /** Title */
  title?: string;
  /** Text */
  text?: string;
}

export const Comp: FC<CompProps> = ({ title, text = 'Component' }) => {
  return <div title={title}>{text}</div>;
};
