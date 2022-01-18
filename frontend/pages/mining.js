import axios from "axios";
import styles from "../styles/main/mining/_mining.module.scss";

const mining = () => {

    let expired__time = 0;

    const getBlock = async () => {
        const endpoint = "mineInfo";
        const URI = `${process.env.NEXT_PUBLIC_IP}/${endpoint}`;

        const result = await axios.get(URI);

        console.log(result);
    }

    getBlock();

    return (
        <div className={styles.mining_wrapper}>
            <div className={styles.mining_container}>
                <div className={styles.mining_left}>
                    <div className={styles.mining_left_title}>
                        채굴을 경험해보세요!
                    </div>
                    <div className={styles.mining_left_description}>
                        하단의 버튼을 눌러, 채굴을 시작하세요.
                    </div>
                    <div className={styles.mining_left_input_container}>
                        <select name="nonce_mode" id={styles.mining_left_nonce_mode}>
                            <option value="incrementing" defaultChecked>증분수</option>
                            <option value="alphabetical">알파벳 순서</option>
                        </select>
                        <button>시작</button>
                        <button>일시 정지</button>
                        <button>중지</button>
                    </div>
                </div>
                <div className={styles.mining_right}>
                    <div>
                        <div>채굴 가능한 블록의 정보</div>
                        <div>블록 넘버: 0번</div>
                        <div>채굴 보상: 40,000 G</div>
                        <div>타겟 해쉬값: testingtesting</div>
                        <div>난이도: 8</div>
                    </div>
                    <div>
                        <div>현재 시도 중인 논스값: 0</div>
                        <div></div>
                        <div>채굴 진행 경과 시간: 0시간 0분 0초</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default mining;