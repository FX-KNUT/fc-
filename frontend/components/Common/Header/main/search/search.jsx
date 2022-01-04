import Icon_search from "../../../../../public/ic_search.svg";
import styles from "../../../../../styles/header/main/search/_header_main_search.module.scss";

const search = () => {
  return (
    <form className={styles.search_wrapper}>
      <input type="text" placeholder="코인 검색" autoComplete="false" />
      <button type="submit" className={styles.ic_search}>
        <i className="fas fa-search"></i>
      </button>
    </form>
  );
};

export default search;
