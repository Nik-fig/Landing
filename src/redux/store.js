import {configureStore} from '@reduxjs/toolkit'

import {ModalReducer} from './slices/modalSlice'

export const store = configureStore({
    reducer: {
        modal: ModalReducer
    }
})