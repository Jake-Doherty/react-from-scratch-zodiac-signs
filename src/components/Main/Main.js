import React from 'react';
import Zodiac from '../Zodiac/Zodiac';
import { zodiacs } from '../../data';
import './Main.css';
import background from '../../../src/background.jpg';

export default function Main() {
  return (
    <main style={{ backgroundImage: `url(${background})` }}>
      {zodiacs.map((zodiac) => (
        <Zodiac key={zodiac.id} name={zodiac.name} dates={zodiac.dates} symbol={zodiac.symbol} />
      ))}
    </main>
  );
}
