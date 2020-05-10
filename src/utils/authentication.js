const TOKEN_KEY = 'mxg-msm-token';
const USER_KEY = 'mxg-msm-user';
export default {
    getToken(){
        return localStorage.getItem(TOKEN_KEY);
    },
    setToken(token){
        return localStorage.setItem(TOKEN_KEY, token);
    },
    getUser(){
        return JSON.parse(localStorage.getItem(USER_KEY));
    },
    setUser (user){
        return localStorage.setItem(USER_KEY, JSON.stringify(user));
    },
    removeToken(){
        localStorage.removeItem(TOKEN_KEY);
        localStorage.removeItem(USER_KEY);
    }
}
// export function getToken(){
//     return localStorage.getItem(TOKEN_KEY);
// }

// export function setToken(token){
//     return localStorage.setItem(TOKEN_KEY, token);
// }

// export function getUser(){
//     return JSON.parse(localStorage.getItem(USER_KEY));
// }

// export function setUser (user){
//     return localStorage.setItem(USER_KEY, JSON.stringify(user));
// }

// export function removeToken(){
//     localStorage.removeItem(TOKEN_KEY);
//     localStorage.removeItem(USER_KEY);
// }