<template>
  <div id="login" class="body-login">
    <div class="container">
        <h1 style="font-size: 2rem;">Bem-vindo(a) à <span style="font-weight: 700;">Contacts</span></h1>
        <p>Faça login para acessar seus contatos.</p>
        <!-- <img src="./assets/login.svg" alt="login"> -->
        <form>
            <div class="form-group">
                    
                
                <input type="email" v-regex="/\S+@\S+\.\S+/" v-model="loginData.email" @change="emailValidation(loginData.email)" class="form-input-1 shadow-none form-control" id="emailInput" placeholder="email" value="" required autofocus>
                <div v-if="emailError" class="invalid-feedback">
                    Digite o email corretamente.
                </div>
            
                <!-- senha -->
                <input type="password" v-model="loginData.password" @change="passwordValidation(loginData.password)" class="form-input-1 shadow-none form-control" id="passwordInput" placeholder="senha" value="" required>
                <div v-if="passwordError" class="invalid-feedback">
                    Digite uma senha acima de 6 caracteres.
                </div>
                <small><a href="#">Esqueceu a senha?</a></small>
            </div>  
            <button class="btn btn-primary btn-edit shadow-none" @click="login()" type="button">Entrar</button>
        </form>
    </div>
</div>
</template>

<script>
import { mapActions } from 'vuex'
// import Employer from '@/services/axios/employer.js'


export default {
    name: 'LoginComponent',
    data(){
        return {
            emailError: false,
            passwordError: false,
            loginData:{
                email: '',
                password: ''
            }
        }
    },
    methods: {
        ...mapActions('auth', ['ActionLogin']),

        emailValidation(email){
            if(!email){
                this.emailError = true;
                return false
            }

            if(/\S+@\S+\.\S+/.test(email)){
                this.emailError = false;
                return true
            }
            this.emailError = true;
            return false
        },

        passwordValidation(password){
            
            if(!password){
                this.passwordError = true;
                return false 
            }
            if(password.length <7){
                this.passwordError = true;
                return false
            }
            this.passwordError = false;
            return true
        },

        async login(){
            if(!(this.emailValidation(this.loginData.email))){
                return
            }
            this.emailError = false;
            
            if(!(this.passwordValidation(this.loginData.password))){
                return
            }
            this.passwordError = false;

            try {
                await this.ActionLogin(this.loginData)
                this.$router.push({ name: 'home' })
            } catch (err) {
                alert(err.response.data ? err.response.data.message: 'Não foi possivel fazer login')
            }
        }
    }

}
</script>

<style scoped src="../style.css" \>
    
</style>