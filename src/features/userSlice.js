import { createSlice } from "@reduxjs/toolkit"
const initialState = {
    state:"",
    error:"",
    user:{
        id:"",
        name:"",
        email:"",
        picture:"",
        status:"",
        tokens:"",
    },

}
export const userSlice= createSlice({
    name: "user",
    initialState,
    reducers:{
        logout:(state)=>{
           state.status="";
           state.error="";
           state.user={
            id:"",
            name:"",
            email:"",
            picture:"",
            status:"",
            tokens:"",
           };

        },
    }
});
export const {logout}= userSlice.actions;
export default userSlice.reducer;