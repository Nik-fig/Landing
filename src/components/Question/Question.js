import {useState} from "react";
import {GrClose} from 'react-icons/gr';

import styles from './Question.module.css'

export function Question({question, answer}) {
    let [isOpen, setIsOpen] = useState(false);

    function changeStatus() {
        setIsOpen(!isOpen);
    }

    return (
        <div
            onClick={changeStatus}
        >
            <div>
                <span>
                    {question}
                </span>
                <GrClose/>
            </div>
            <div>
                {answer}
            </div>
        </div>
    )
}