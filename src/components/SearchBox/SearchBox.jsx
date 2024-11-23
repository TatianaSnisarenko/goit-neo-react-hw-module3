import { useId } from "react";

import css from "./SearchBox.module.css";

export default function SearchBox({ filter, setFilter }) {
  const inputId = useId();

  return (
    <div className={css.search}>
      <label className={css.label} htmlFor={inputId}>
        Find contacts by name
        <input
          id={inputId}
          className={css.input}
          type="text"
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
        />
      </label>
    </div>
  );
}
