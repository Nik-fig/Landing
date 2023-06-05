import {useSelector} from 'react-redux'


import './NewRequestModal.module.css';

import {NewRequestForm} from '../../containers/NewRequestForm/NewRequestForm'

export const NEW_REQUEST_MODAL_ID = 'NewRequestModal';


export function NewRequestModal() {
    const {fetchStatus} = useSelector(state => state.request);

    const {
        loadingStatus,
        error
    } = fetchStatus;

    let template;

    switch (loadingStatus) {
        case 'idle':
            template = <NewRequestForm/>
            break;
    }

    return template;

}