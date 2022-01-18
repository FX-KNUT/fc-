import axios from "axios";
import styles from "../styles/main/mining/_mining.module.scss";
import sha256 from "sha256"
import { useState, useEffect } from "react";

const mining = () => {

    const [unminedBlock, setUnminedBlock] = useState({});

    const parsingBinToHex = (_hex_str_message) => {

        let message = _hex_str_message;
        
        for(let i = 0; i < 64; i++) {
            const sliced = message.substring(i, i + 4);
            const parsed = parseInt(sliced, 2).toString(16);
            message = message.substring(0, i) + parsed + message.substring(i + 4, message.length);
        }
    
        return message;
    }

    const getBlock = async () => {
        const endpoint = "mineInfo";
        const URI = `${process.env.NEXT_PUBLIC_IP}/${endpoint}`;

        const result = await axios.get(URI);

        setUnminedBlock(result.data.data);
    }

    const { Block_index: block_index, Block_hash: block_hash, Block_difficulty: block_difficulty } = unminedBlock;

    const bin_hash = block_hash;
    let hex_hash;

    if(block_hash)
        hex_hash = parsingBinToHex(block_hash);

    useEffect(() => {
        getBlock();
    }, []);

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
                        <div>채굴 대상 블록의 정보</div>
                        <div>블록 인덱스: {block_index}</div>
                        <div>타겟 해쉬값: {hex_hash}</div>
                        <div>난이도: {block_difficulty}</div>
                        <div>채굴 보상: {(block_difficulty * 8000) + 4000} G</div>
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