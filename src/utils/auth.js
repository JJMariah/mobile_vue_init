//验证权限


//登录
export function setSession(){
   sessionStorage.setItem('testKey','true');
}
//获取登录信息
export function getSession(){
    return sessionStorage.getItem('testKey')
}
//保存用户信息
export function setUserInfo(obj){
    return sessionStorage.setItem('userinfo',JSON.stringify(obj))
}
//获取用户信息
export function getUserInfo(){
    return sessionStorage.getItem('userinfo')
}