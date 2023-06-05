import {useDispatch} from "react-redux";
import {useState} from "react";

import {GrClose} from "react-icons/gr";
import {closeModal} from "../../redux/slices/modalSlice";

import {sendNewRequest} from '../../redux/slices/requestSlice'

import styles from './NewRequestForm.module.css';

const reasons = [
    {
        id: 1,
        nameReason: "Не работает лояльность"
    },
    {
        id: 2,
        nameReason: "Проблема с кассой"
    },
    {
        id: 3,
        nameReason: "Проблема с акцией"
    },
    {
        id: 4,
        nameReason: "Не начисляются бонусы"
    },
    {
        id: 5,
        nameReason: "Не предоставляется скидка"
    },
    {
        id: 6,
        nameReason: "Необходимость отчёта"
    },
    {
        id: 7,
        nameReason: "Другое"
    }
]

export function NewRequestForm() {
    const dispatch = useDispatch();

    const [phone, setPhone] = useState("");
    const [title, setTitle] = useState("");
    const [reasonId, setReasonId] = useState("");
    const [email, setEmail] = useState("");
    const [companyName, setCompanyName] = useState("");
    const [description, setDescription] = useState("");

    const handlePhone = (event) => {
        setPhone(event.target.value);
    }
    const handleTitle = (event) => {
        setTitle(event.target.value);
    }
    const handleReasonId = (event) => {
        setReasonId(event.target.value);
    }
    const handleEmail = (event) => {
        setEmail(event.target.value);
    }
    const handleCompanyName = (event) => {
        setCompanyName(event.target.value);
    }

    const handeDescription = (event) => {
        setDescription(event.target.value);
    }

    const handleSubmit = (event) => {
        event.preventDefault();


        dispatch(sendNewRequest({
            phone: phone,
            title: title,
            reasonId: reasonId,
            email: email,
            companyName: companyName,
        }))
    }

    return (
        <form className={styles.form}>
            <header>
                <h2>Оформить заявку</h2>
                <GrClose
                    className={styles.closeButton}
                    onClick={() => {
                        dispatch(closeModal());
                    }}
                />
            </header>
            <input
                type='text'
                id=''
                placeholder='Ваше имя'
                required
                onChange={handleTitle}
            />
            <input
                type='tel'
                value={phone}
                placeholder='+7 (123) 123-12-12'
                // pattern="\+?[0-9\-\(\)]+"
                required
                onChange={handlePhone}
            />
            <input
                type='email'
                placeholder='mail@mail.ru'
                // pattern="([A-z0-9_.-]{1,})@([A-z0-9_.-]{1,}).([A-z]{2,8})"
                required
                onChange={handleEmail}
            />
            <select
                required
                name='reason'
                value={reasonId}
                onChange={handleReasonId}
            >
                <option value="" disabled>Выберите причину</option>
                {
                    reasons.map((item) => {
                        return (
                            <option
                                key={item.id}
                                value={item.id}
                            >
                                {item.nameReason}
                            </option>
                        )
                    })
                }
            </select>
            <textarea
                name='description'
                placeholder='Описание проблемы'
                onChange={handeDescription}
                value={description}
                style={{
                    height: '100px',
                }}
            />
            <input
                type='text'
                placeholder='Название компании'
                required
                onChange={handleCompanyName}
            />
            <input
                type='submit'
                value='Оставить заявку'
                onClick={handleSubmit}
            />
        </form>
    )
}