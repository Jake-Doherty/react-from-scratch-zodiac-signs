import React from 'react';
import Zodiac from '../Zodiac/Zodiac';
import { zodiacs } from '../../data';
import './Main.css';

export default function Main() {
  return (
    <main>
      {zodiacs.map((zodiac) => (
        <Zodiac key={zodiac.id} name={zodiac.name} type={zodiac.dates} symbol={zodiac.symbol} />
      ))}
    </main>
  );
}
