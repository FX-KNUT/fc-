import Icon_search from "../../../../../public/ic_search.svg";
import styles from "../../../../../styles/header/main/search/_header_main_search.module.scss";

const search = () => {
  return (
    <div className={styles.search_wrapper}>
      <input type="text" placeholder="search" autoComplete="false" />
      <div className={styles.ic_search}>
        <Icon_search />
      </div>
    </div>
  );
};

export default search;
