import {useSelector, useDispatch} from 'react-redux'

import styles from './ModalLaout.module.css'

import {NEW_REQUEST_MODAL_ID, NewRequestModal} from '../NewRequestModal/NewRequestModal'

import {closeModal} from '../../redux/slices/modalSlice'

export function ModalLayout() {
    const {modal} = useSelector(state => state.modal);
    const dispatch = useDispatch();

    let template;

    switch (modal) {
        case NEW_REQUEST_MODAL_ID:
            template = <NewRequestModal/>
            break;
        default:
            template = null;
            break;
    }

    return (
        template
            ? (
                <div
                    className={styles.modalLayout}
                    onClick={(event) => {
                        if (event.target.className !== styles.modalLayout)
                            return;
                        dispatch(closeModal());
                    }}
                >
                    {template}
                </div>
            )
            : template
    );
}