<template>
  <div id="login" class="body-login">
    <div class="container">
        <h1 style="font-size: 2rem;">Bem-vindo(a) à <span style="font-weight: 700;">Contacts</span></h1>
        <p>Faça login para acessar seus contatos.</p>
        <!-- <img src="./assets/login.svg" alt="login"> -->
        <form class="needs-validation" novalidate>
            <div class="form-group form-edit">
                    
                <!-- email -->
                <input type="email" class="form-input-1 shadow-none form-control" id="emailInput" placeholder="email" value="" required>
                <div class="valid-feedback">
                    Parece bom!
                </div>
                <div class="invalid-feedback">
                    Digite o email corretamente.
                </div>
            
                <!-- senha -->
                <input type="password" class="form-input-1 shadow-none form-control" id="passwordInput" placeholder="senha" value="" required>
                <div class="valid-feedback">
                    Parece bom!
                </div>
                <div class="invalid-feedback">
                    Digite uma senha!
                </div>
                <small><a href="#">Esqueceu a senha?</a></small>
            </div>  
            <button class="btn btn-primary btn-edit shadow-none" type="submit">Entrar</button>
        </form>
    </div>
</div>
</template>

<script>
export default {

}
</script>

<style scoped src="./style.css" \>

</style>