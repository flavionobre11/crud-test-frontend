<template>
  <div id="home" class="container-fluid">
    <!-- header -->
    <div class="header">
      <h3> Olá, {{ firstName }} :)</h3>
      <p>o que vamos fazer hoje?</p>
    </div>

    <!-- menu -->
    <div class="menu">
      <Buttons propsName="Contacts" propsDescription="Crie, edite e acompanhe seus contatos." route="contacts"/>
      <Buttons propsName="Ranking" propsDescription="Verifique quais funcionarios cadastram mais contatos." route="ranking" />
    </div>
    <hr>
    <div class="activity">
      <Activity />
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import Activity from './activity/Activity';
import Buttons from './menu/Buttons';

export default {
  components: { Buttons, Activity },
  name: 'HomeComponent',
  data(){
    return {
    }
  },
  methods:{
    contacts(){
      console.log('ola');
      this.$router.push({ name:'contacts' });
      this.$router.go();
    }
  },
  computed:{
    ...mapState('auth', ['employer']),
    firstName(){
      let firstName = this.employer.name;
      return firstName.split(' ')[0]
    },

  }
}
</script>

<style scoped src="./style.css">

</style>