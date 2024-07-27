// Context
import { useCities } from "../contexts/CitiesContext";

import styles from "./CountryItem.module.css";

function CountryItem({ country }) {
  // Context
  const { flagemojiToPNG } = useCities();

  return (
    <li className={styles.countryItem}>
      <span>{flagemojiToPNG(country.emoji)}</span>
      <span>{country.country}</span>
    </li>
  );
}

export default CountryItem;
