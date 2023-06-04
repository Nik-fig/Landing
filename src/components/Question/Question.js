import {useState} from "react";
import {GrClose} from 'react-icons/gr';

import styles from './Question.module.css'

export function Question({question, answer}) {
    let [isCollapse, setIsCollapse] = useState(false);

    function changeStatus() {
        setIsCollapse(!isCollapse);
    }

    return (
        <div
            onClick={changeStatus}
            className={[
                styles.question,
                isCollapse ? null : styles.uncollapsed
            ].join(' ')}
        >
            <div className={styles.header}>
                <h3 className={styles.questionText}>
                    {question}
                </h3>
                <GrClose className={styles.collapseButton}/>
            </div>
            <div className={styles.answer}>
                {answer}
            </div>
        </div>
    )
}