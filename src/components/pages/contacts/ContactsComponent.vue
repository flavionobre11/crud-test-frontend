<template>
  <div>
      <p>
        hello contacts
      </p>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  mounted(){
    this.ActionFindEmployer()
  },
  
  methods:{
    ...mapActions('employerList', ['ActionFindEmployer']),
  }
}
</script>

<style>

</style>