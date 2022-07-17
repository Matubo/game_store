import React from 'react';

interface PropTypes {
  children?: React.ReactNode | React.ReactNode[];
}

export default function MineTemplate({ children }: PropTypes) {
  return (
    <div>
      <p>Header</p>
      {children}
      <p>Footer</p>
    </div>
  );
}
