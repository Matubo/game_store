import React, { useEffect } from 'react';
import { useParams } from 'react-router';

export default function ProguctsPage() {
  const param = useParams();
  useEffect(() => {
    console.log(param);
  });
  return <div>ProguctsPage</div>;
}
