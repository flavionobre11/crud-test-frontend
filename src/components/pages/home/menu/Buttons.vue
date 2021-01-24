<template>
  <div id="home-buttons">
      <button @click.prevent="contacts()" class="buttons">
        <h5>{{ propsName }}</h5>
        <p>{{ propsDescription }}</p>
      </button>
  </div>



</template>

<script>
export default {
    name: 'buttonsHome',
    props:{
        propsName: String,
        propsDescription: String,
        route: String
    },
    methods:{
        contacts(){
            this.$router.push(this.$props.route)
        }
    }
}
</script>

<style scoped>
    .buttons{
        margin-left: .5em;
        margin-right: .5rem;
        padding: .8rem;
        width: 10rem;
        height: 10rem;
        border: none;
        outline: none;
        border-radius: 10px;
        color: var(--text-menu-buttom);
        background-color:var(--bg-menu-buttom);
        transition: .4s;
    }

    .buttons:hover {
        background-color:var(--hover-menu-buttom);
        transition: .4s;
        transform: scale(1.05);
    }

    .buttons:active {
        border:none;
    }

    h5{
        text-align: left;
        font-weight: 600;
    }

    p {
        text-align: left;
        font-size: .8rem;
    }
</style>