import { createSlice } from '@reduxjs/toolkit';

const tabOneSlice = createSlice({
  name: 'tabOne',
  initialState: {
    data:{},
    // collectionType: '',
    // caseFileId: '',
    // lpaId: '',
    // pdSubmitter: '',
    // phoneFields: [{ id: 1, value: '' }],
    // emailFields: [{ id: 1, value: '' }],
  },
  reducers: {

    allData:(state,action)=>{
        state.data=action.payload
    }
    // setCollectionType: (state, action) => {
    //   state.collectionType = action.payload;
    // },
    // setCaseFileId: (state, action) => {
    //   state.caseFileId = action.payload;
    // },
    // setLpaId: (state, action) => {
    //   state.lpaId = action.payload;
    // },
    // setPdSubmitter: (state, action) => {
    //   state.pdSubmitter = action.payload;
    // },
    // setPhoneFieldValue: (state, action) => {
    //     const { index, value } = action.payload;
    //     const updatedPhoneFields = [...state.phoneFields];
    //     updatedPhoneFields[index] = { ...updatedPhoneFields[index], value };
    //     state.phoneFields = updatedPhoneFields;
    //   },
    //   setEmailFieldValue: (state, action) => {
    //     const { index, value } = action.payload;
    //     const updateEmailFields = [...state.emailFields];
    //     updateEmailFields[index] = { ...updateEmailFields[index], value };
    //     state.emailFields = updateEmailFields;
    //   },
    // addPhoneField: (state) => {
    //   const newId = state.phoneFields.length + 1;
    //   state.phoneFields.push({ id: newId, value: '' });
    // },
    // addEmailField: (state) => {
    //   const newId = state.emailFields.length + 1;
    //   state.emailFields.push({ id: newId, value: '' });
    // },
    // removePhoneField: (state, action) => {
    //   const idToRemove = action.payload;
    //   state.phoneFields = state.phoneFields.filter(field => field.id !== idToRemove);
    // },
    // removeEmailField: (state, action) => {
    //   const idToRemove = action.payload;
    //   state.emailFields = state.emailFields.filter(field => field.id !== idToRemove);
    // },
  },
});

export const {
 
  allData
} = tabOneSlice.actions;

export default tabOneSlice.reducer;
