<template>
<div>
    <el-button type="info" v-if="this.$store.state.isLogin" @click = "Logout">{{msg1}}</el-button>
    <el-button type="primary" v-else @click = "Login" >{{msg2}}</el-button>
</div>
</template>

<script>
export default {
data(){
  return{
     msg1:"退出登陆",
     msg2:"登录",
  }
},
methods:{
Login(){
   this.$store.commit('Login')
},
Logout(){
   this.$store.commit('Logout')
} 
}
}
</script>

