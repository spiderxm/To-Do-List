<template>
    <div class="navbar">
      <nav class="nav-extended black darken-2">
         <div class="nav-content">
             <router-link :to="{name:'Index'}">
                 <span class="nav-title">To Do List</span>
             </router-link>
             <a href="" class="btn-floating btn-large halfway-fab grey">
                <router-link :to="{name:'Addtodo'}">
                    <i class="material-icons" >+</i>
                </router-link>
             </a>
         </div>
      </nav>
    </div>
</template>
<script>
export default {
    name:'Navbar',
    data(){

    },
    methods:{

    }
}
</script>
<style scoped>
.navbar nav {
    padding:0 40px;
}
</style>