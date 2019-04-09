import React from 'react';
import './Wilder.scss';
export default function Wilder({email, firstname}) {
  return (
    <div>
      <p>{email} - {firstname}</p>
    </div>
  );
}
