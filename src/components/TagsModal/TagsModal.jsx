import { useState } from "react";
import "./TagsModal.css";

export default function TagsModal({ isOpen, modalControl, addTag, tagsList }) {
  const [tag, setTag] = useState("");


  function clearInputs() {
    setTag('');
  }

  return (
    <div className={isOpen ? "modal__container open" : "modal__container"}>
      <div className="modal">
        <button onClick={() => modalControl(false)} className="modal__close">
          х
        </button>
        <form onSubmit={(event) => {
            event.preventDefault();
            const newId = tagsList.length > 0 ? tagsList[tagsList.length - 1].index + 1 : 0;
            const currentTag = {text: tag, index: newId};
            addTag(currentTag);
            clearInputs();
            
        }}
          style={{ display: "flex", flexDirection: "column", gap: "5px" }}
        >
          <input
            value={tag}
            onChange={(value) => setTag(value.target.value)}
            placeholder="tag.."
            type="text"
          />
          <button className="btn btn-reset" type="submit">Add tag</button>
        </form>
      </div>
    </div>
  );
}