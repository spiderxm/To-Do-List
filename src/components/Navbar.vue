<template>
      
 

    <nav class="navbar navbar-expand navbar-dark bg-dark">
      <div class="container">
          <a href="index.html" class="navbar-brand">To Do List</a>
          <button class="navbar-toggler" data-toggle="collapse" data-target="#navbarCollapse">
              <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarCollapse">
              <ul class="navbar-nav ml-auto">
                <li><router-link v-if="!user" :to="{'name':'login'}" class="nav-item">Login</router-link>
                </li> 
                <li><router-link v-if="!user" :to="{'name':'signup'}" class="nav-item">Register</router-link>
                </li>
                <li v-if="user" class="nav-item">
                    <a>{{user.email}}</a>
                  <li>
                <li class="nav-item"><a v-if="user" @click="logout">Logout</a></li>
              </ul>
          </div>
            <div class="nav-content" v-if="user">
            <a href="" class="btn-floating btn-large halfway-fab grey">
                <router-link  :to="{name:'Addtodo'}">
                    <i class="material-icons" >+</i>
                </router-link>
             </a>
    </div>
           
      </div>
  </nav>
 
    
</template>
<script>
import firebase from 'firebase'
export default {
    name:'Navbar',
    data(){
     return{
         user:null
     }
    },
    methods:{
logout(){
          firebase.auth().signOut().then(()=>{
              this.$router.push({'name':'login'})
          }).catch(err => console.log(err))
        }
    },
    created(){
      firebase.auth().onAuthStateChanged((user) => {
         if(user){
             this.user = user
         }
         else{ 
              this.user = null
         }
      })

}
}
</script>
<style scoped>
.navbar .nav-link{
    font-size: 14px;
    text-transform: uppercase;
    padding-left: 1rem !important;
    padding-right: 1rem !important;

}
.navbar .nav-item.active{
    border-right: #444 3px solid;
}

</style>