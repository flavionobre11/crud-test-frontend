<template>
  <div id="login" class="body-login">
    <div class="container">
        <h1 style="font-size: 2rem;">Bem-vindo(a) à <span style="font-weight: 700;">Contacts</span></h1>
        <p>Faça login para acessar seus contatos.</p>
        <!-- <img src="./assets/login.svg" alt="login"> -->
        <form class="needs-validation" novalidate>
            <div class="form-group form-edit">
                    
                
                <input type="email" v-model="loginData.email" class="form-input-1 shadow-none form-control" id="emailInput" placeholder="email" value="" required autofocus>
                <div class="valid-feedback">
                    Parece bom!
                </div>
                <div class="invalid-feedback">
                    Digite o email corretamente.
                </div>
            
                <!-- senha -->
                <input type="password" v-model="loginData.password" class="form-input-1 shadow-none form-control" id="passwordInput" placeholder="senha" value="" required>
                <div class="valid-feedback">
                    Parece bom!
                </div>
                <div class="invalid-feedback">
                    Digite uma senha!
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
            loginData:{
                email: '',
                password: ''
            }
        }
    },
    methods: {
        ...mapActions('auth', ['ActionLogin']),
        async login(){
            try {
                await this.ActionLogin(this.loginData)
                alert('login efetuado')
                this.$router.push({ name: 'home' })
            } catch (err) {
                alert(err.response.data ? err.response.data.message: 'Não foi possivel fazer login')
            }
        }

        // async login(){
        //     try{

        //         if(!this.loginData.email)
        //            return alert('digite um email valido');
    
        //         await Employer.login(this.loginData)
        //         .then(response =>{
        //             console.log(response.data)
        //         }).catch(err => {
        //             console.log("metodo login() "+err.response.data.message)
        //         })
        //     } catch(err){
        //         console.log("error " + err)
        //     }
        // }
    }

}
</script>

<style scoped src="./style.css" \>

</style>