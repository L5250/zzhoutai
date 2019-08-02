const defaultState = {
    id:null
}

export default (state=defaultState,action)=>{
    if(action.type === "see"){
        let newState = JSON.parse(JSON.stringify(state))
        newState.id = action.idc
        return newState
    }
    return state
}
// export default fn1()