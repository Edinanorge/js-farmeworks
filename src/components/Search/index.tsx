import { ChangeEvent } from "react";
import styles from "./style.module.css";

interface SearchProps {
  placeholder: string;
  handleChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

function Search({ placeholder, handleChange }: SearchProps) {
  return (
    <section>
      <form className={styles.form}>
        <label>Search : </label>
        <input type="search" className="search" placeholder={placeholder} onChange={handleChange} />
      </form>
    </section>
  );
}

export default Search;
