import { useState } from 'react';
import ApiTest from './ApiTest';
import StoreTest from './StoreTest';

export default function TestBlock() {
  const [testActive, setTestActive] = useState(false);
  return (
    <div style={{ position: 'absolute', top: 0, left: 0, zIndex: 10001 }}>
      <button
        onClick={() => {
          setTestActive(!testActive);
        }}
      >
        Test
      </button>
      {testActive ? (
        <div className="test_block" style={{ backgroundColor: 'black' }}>
          <StoreTest></StoreTest>
          <ApiTest></ApiTest>
        </div>
      ) : (
        <></>
      )}
    </div>
  );
}
