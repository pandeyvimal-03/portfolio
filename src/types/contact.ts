export type userField = {
    name : string,
    value : string,
    error : string,
    isRequired : boolean
    
}
export type user = {
    name : userField,
    email : userField,
    desc : userField
}