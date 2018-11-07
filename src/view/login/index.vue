<template>
    <div>
        <div>
            <van-cell-group>
                <van-field v-model="username" required clearable  label="用户名" icon="question" placeholder="请输入用户名" @click-icon="$toast('question')"/>
                <van-field v-model="password" type="password" label="密码" placeholder="请输入密码" required/>
                <van-field v-model="sms" center clearable label="短信验证码" placeholder="请输入短信验证码">
                    <van-button slot="button" size="small" type="primary">发送验证码</van-button>
                </van-field>
            </van-cell-group>
        </div>
        <div style='padding:20px;'>
            <van-button type="danger" @click='login' size='large'>登录</van-button>
        </div>
    </div>   
</template>
<script>
    import {LoginFn} from '@/utils/auth'
    import { getData } from '@/api/index';
    export default{
        data(){
            return{
                username:'',
                password:'',
                sms:''
            }
        },
        methods:{
            login(){   //模仿登录
                if(this.username==''){
                    return alert('用户名不能为空');
                }
                if(this.password==''){
                    return alert('密码不能为空');
                }
                this.$store.dispatch('LoginB',{'username':this.username,'password':this.password}).then((res) => {
                  if(res=='login'){
                    alert('登录成功');
                    this.$router.push({path:'/'})
                  }else{
                     this.alert('err');
                  }
                }).catch((err)=>{
                    console.log(err)
                })
            },
            goCenter(){
                this.$router.go(-1)
            },
            // toFixed(num, s) {
            //     var times = Math.pow(10, s)
            //     var des = num * times + 0.5
            //     des = parseInt(des, 10) / times
            //     return des + ''
            // },
        },
        created() {
            getData('206104').then(res => {
            
            }).catch(err => {
                console.log(err)
            });
        },
    }
</script>