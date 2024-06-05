import { useState } from 'react';
import './MessageBox.css';

export default function MessageBox({hidden, setHidden}) {

  return (
    <div className={hidden ? "message hidden" : "message"}>
      <div className='container message__container'>
      <a target='_blank'
        className="message__link"
        href="https://www.figma.com/community/file/1117107472413961732"
      >
        Design Link
      </a>
      <button onClick={() => setHidden(true)} className="message__close">х</button>
      </div>
    </div>
  );
}
