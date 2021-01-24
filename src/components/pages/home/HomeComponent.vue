<template>
  <div id="home" class="container-fluid">
    <div class="row row-md">
      <nav class="navbar">
        <div class="col col-md">
          <a class="navbar-brand">Contacts</a>
          <div class="btn-group">
            <button class="btn btn-sm dropdown-toggle shadow-none" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              Olá, {{ employerName }}
            </button>
            <div class="dropdown-menu dropdown-content">
              <h6 class="dropdown-header">Que opção deseja ver?</h6>
              <a class="dropdown-item" href="#">Perfil</a>
              <a class="dropdown-item" href="#">Sobre</a>
              <div class="dropdown-divider"></div>
              <a class="dropdown-item" href="#">Sair</a>
            </div>
          </div>
        </div>
      </nav>
    </div>
  </div>
</template>

<script>

export default {
  data(){
    return {
      employerName: this.$store.state.auth.employer.name
    }
  },
}
</script>

<style scoped src="./style.css">

</style>