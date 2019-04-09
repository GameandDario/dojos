import React from 'react';
import './Wilder.scss';
export default function Wilder({firstname="David", email="email@domain.com"}) {
  return (
    <div>
      {firstname}
      -
      {email}

    </div>
  );
}
