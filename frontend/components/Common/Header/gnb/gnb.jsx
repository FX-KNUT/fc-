import Link from "next/link";
import { useRecoilValue } from "recoil";
import { curr_language } from "../../../../recoil/selectors/selector";
import styles from "../../../../styles/header/gnb/_header_gnb.module.scss";

const Gnb = () => {
  // global state
  const gnb_contents = useRecoilValue(curr_language);

  return (
    <nav className={styles.gnb_wrapper}>
      <div className={styles.gnb_contents}>
        {gnb_contents.map((content) => (
          <Link href={content.href} key={content.span}>
            <a>
              <span>{content.span}</span>
            </a>
          </Link>
        ))}
      </div>
    </nav>
  );
};

export default Gnb;
