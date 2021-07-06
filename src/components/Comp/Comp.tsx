import React, { FC } from 'react';

export interface CompProps {
  title?: string;
  text?: string;
}

export const Comp: FC<CompProps> = ({ title, text = 'Component' }) => {
  return <div title={title}>{text}</div>;
};
