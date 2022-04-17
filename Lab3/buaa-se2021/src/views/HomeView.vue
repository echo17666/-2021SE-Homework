<template>

  <div class="home">
    <h1 v-if="this.$store.state.isLogin">{{msg1}}</h1>
    <h1 v-else>{{msg2}}<a href = "./login">{{loginRouter}}</a></h1>
  </div>
  
</template>

<script>

export default {
data(){
  return{
    msg1:"已经登陆",
    msg2:"尚未登陆，请前往登录",
    loginRouter:"Login"
  }
},
methods(){
}
}
</script>
