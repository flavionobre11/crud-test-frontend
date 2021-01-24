<template>
    <div id="auth" class="body-login">
        <LoginComponent />
    </div>
</template>

<script>
import LoginComponent from './login/LoginComponent.vue';


export default {
  components: { LoginComponent },
    name: 'AuthComponent',
    mounted(){
        let now = new Date();
        now = now.getHours();

        if((0<=now && now<=6) || (17<now && now<=24)){
            return document.body.className = "dark-mode";
        }else{
            return document.body.classList.value = "";
        }
    },
    beforeDestroy(){  
        document.body.classList.value = "";
    },
    methods:{
        
    },
}
</script>

<style scoped src="./style.css" \>

</style>