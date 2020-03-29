<template>
     
    <div class="login container">
        <form @submit.prevent="login" class="card-panel">
            <h2 class="center black-text">
                Login
            </h2>
            <div class="field">
                <label for="email">Email</label>
                <input type="email" name="email" v-model="email">
            </div>
            <div class="field">
                <label for="password">Password</label>
                <input type="password" name="password" v-model="password">
            </div>
          <div class="field center">
              <button class=" black btn">Login</button>
          </div>
            <div class="field">
                <p v-if="feedback" class="center red-text">{{feedback}}</p>
            </div>
        </form>
    </div>
</template>
<script>
import firebase from 'firebase'
export default {
    name:'Login',
    data(){
        return{
           email:null,
           password:null,
           feedback:null
        }
    },
    methods:{
   login(){
       if(this.email && this.email){
           this.feedback= null;
           firebase.auth().signInWithEmailAndPassword(this.email,this.password).then(cred=>{
               console.log(cred.user);
               this.$router.push({'name':'Index'});
           }).catch(err=> this.feedback=err.message);
       }
       else {
           this.feedback = "please fill in both fields";
       }
   }
    }
}
</script>
<style>
 
 .login{
     max-width: 400px;
     margin-top: 60px;

 }
 .login h2{
     font-size: 2.4em;
 }
 .login .field{
     margin-bottom: 16px;
 }
 .card-panel{
     border-radius: 30px;
 }




</style>