import instance from "./instance";

export const signup = user => {
    const url = `/register`;
    return instance.post(url, user);
};
export const signin = user => {
    const url = `/signin`;
    return instance.post(url, user);
};
export const changePassword = user =>{
    const url = `/users/${user.id}`;
    return instance.put(url, user);
}