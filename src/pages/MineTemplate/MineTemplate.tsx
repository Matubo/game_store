import React from 'react';
import Header from 'src/components/Header/Header';

interface PropTypes {
  children?: React.ReactNode | React.ReactNode[];
}

export default function MineTemplate({ children }: PropTypes) {
  return (
    <div>
      <Header></Header>
      {children}
      <p>Footer</p>
    </div>
  );
}
