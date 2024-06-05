import { useState } from "react";
import arrow from "../../assets/arrow.svg"
import './CustomSelect.css';

export default function CustomSelect({items, setSelectValue, selectValue}) {
    
    const [open, setOpen] = useState(false);
  return (
    <div className={open ? "custom-select open" : "custom-select"}>
      <div className="custom-select__chapter" onClick={() => setOpen((prev) => !prev)}>
        <span>{selectValue}</span>
        <img src={arrow} alt="arrow" />
      </div>
      <ul className="custom-select__list list-reset">
        {items.map(oneItem => <li key={oneItem} className="custom-select__item" onClick={() => {
          setSelectValue(oneItem);
          setOpen(false);
          }}>{oneItem}</li>)}
      </ul>
    </div>
  );
}
