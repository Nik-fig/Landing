import {useState} from 'react'
import {useDispatch} from 'react-redux'
import {closeModal} from '../../redux/slices/modalSlice'

import {GrClose} from 'react-icons/gr';

import './NewRequestModal.module.css';

export const NEW_REQUEST_MODAL_ID = 'NewRequestModal';

export function NewRequestModal() {
    const dispatch = useDispatch();

    const [inputs, setInputs] = useState({
        phone: null,
        title: null,
        reasonId: null,
        email: null,
        companyName: null
    })

    const handlePhone = () => {

    }
    const handleTitle = () => {

    }
    const handleReasonId = () => {

    }
    const handleEmail = () => {

    }
    const handleCompanyName = () => {

    }

    return (
        <form>
            <header>
                <span>Оформить заявку</span>
                <GrClose
                    onClick={() => {
                        dispatch(closeModal());
                    }}
                />
            </header>

            <input
                type='text'
                placeholder='Ваше имя'
                required
                onChange={handleTitle}
            />
            <input
                type='tel'
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
            <input
                type='text'
                placeholder='Название компании'
                required
                onChange={handleCompanyName}
            />
            <input
                type='text'
                placeholder='Причина обращения'
                required
            />
            <input
                type='submit'
                value='Оставить заявку'
            />
        </form>
    )
}