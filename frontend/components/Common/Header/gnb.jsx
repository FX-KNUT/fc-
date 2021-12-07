import Link from "next/link";
import { useRecoilValue } from "recoil";
import { curr_language } from "../../../recoil/selectors/selector";
import styles from "../../../styles/_header.module.scss";

const Gnb = () => {
  const gnb_contents = useRecoilValue(curr_language);

  return (
    <div className={styles.gnb_wrapper}>
      {gnb_contents.map((content) => (
        <Link href={content.href} key={content.item}>
          <a>
            <span>{content.item}</span>
          </a>
        </Link>
      ))}
    </div>
  );
};

export default Gnb;
