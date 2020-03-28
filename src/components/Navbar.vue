<template>
    <div class="navbar">
      
       <nav class="nav-extended black darken-2">
    <div class="nav-wrapper nav-content">
      <a href="#" class="brand-logo">To Do List</a>
      <ul class="right">
                 <li><router-link :to="{'name':'login'}">Login</router-link>
                </li> 
                <li><router-link :to="{'name':'signup'}" >Register</router-link>
                </li>
                <li><a @click="logout">Logout</a></li>
             </ul>
    </div>
    <div class="nav-content">
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
import firebase from 'firebase'
export default {
    name:'Navbar',
    data(){

    },
    methods:{
logout(){
          firebase.auth().signOut().then(()=>{
              this.$router.push({'name':'login'})
          }).catch(err => console.log(err))
        }
    }
}
</script>
<style scoped>
.navbar nav {
    padding:0 40px;
}
.navbar li{
    margin-top: 4px;
}
.navbar a{
    margin-top: 12px;
}
</style>