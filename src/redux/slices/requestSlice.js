import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';

import axios from "axios";

export const sendNewRequest = createAsyncThunk(
    'sendNewRequest',
    async ({
               phone,
               title,
               reasonId,
               email,
               companyName,
               description,
           }) => {
        const response = await axios.post(
            'https://help-maxbonus.ru/api/task/add', {
                phone: phone,
                title: title,
                reasonId: +reasonId,
                email: email,
                companyName: companyName,
                description: description
            })

        console.log(response);

        return response;
    }
)

const initState = {
    id: null,
    fetchStatus: {
        loadingStatus: 'idle',
        error: null,
    }
}

const requestSlice = createSlice({
    name: 'request',
    initialState: initState,
    reducers: {},
    extraReducers: builder => {
        builder
            .addCase(
                sendNewRequest.pending,
                (state) => {
                    state.fetchStatus.loadingStatus = 'loading';
                    state.fetchStatus.error = null;
                }
            )
            .addCase(
                sendNewRequest.fulfilled,
                (state, action) => {
                    state.fetchStatus.loadingStatus = 'success';
                    state.fetchStatus.error = null;
                }
            )
            .addCase(
                sendNewRequest.rejected,
                (state, action) => {
                    state.fetchStatus.loadingStatus = 'failed'
                    state.fetchStatus.email = action.error;
                }
            )
    }
})

const {actions, reducer} = requestSlice;

export {reducer as requestReducer};
