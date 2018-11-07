import {setSession,getSession,setUserInfo} from '@/utils/auth'
//用户中心

const center = {
  state:{
    username:'',
    isLogin:'',
    userinfo:{}
  },
  mutations:{
    setLoginVal:(state,val)=>{
      state.isLogin=val
    },
    setUserInfoData:(state,obj)=>{
      state.userinfo=obj;
    }
  },
  actions: {
    LoginB:({commit,state },data)=>{
      return new Promise((resolve, reject) => {
        setSession()  //调用登录的方法
        if(getSession()){
          state.isLogin=true;
          setUserInfo(data)
          resolve('login')   //存在返回登录
        }else{
          state.isLogin=false;
          resolve('NoLogin')    //不存在返回未登录
        }
      }).catch(error => {
        console.log(error)
        reject('NoLogin') //不存在返回未登录
      })
    },
  },
}
export default center