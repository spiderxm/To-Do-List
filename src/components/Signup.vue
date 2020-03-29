<template> 
<div class="signup container">
        <form action="" @submit.prevent="signup" class="card-panel">
            <h2 class="center black-text">Signup</h2>
            <div class="field">
                <label for="email">Email</label>
                <input type="email" name="email" v-model="email">
            </div>
            <div class="field">
                <label for="password">Password</label>
                <input type="password" name="password" v-model="password">
            
            </div>
            <div class="field">
                <label for="alias">Alias</label>
                <input type="text" name="alias" v-model="alias">
            </div>
            <div class="field">
                <p v-if="feedback" class="center red-text">{{feedback}}</p>
            </div>

            <div class="field center"><button class="btn black">Signup</button></div>
        </form>
</div>
</template>
<script>
import slugify from 'slugify'
import firebase from 'firebase'
import db from '@/firebase/init'
export default {
    name:"signup",
    data(){
        return {
          email:null,
          password:null,
          alias:null,
          feedback: null,
          slug:null
        }
    },
    methods:{
        signup(){
            if(this.alias && this.email && this.password){
                this.feedback = null
                this.slug = slugify(this.alias,{
                    replacement: '-',
                    remove: /[*+~.()'"!:@]/g,
                    lower:true
                })
                console.log(this.slug)
                let ref = db.collection('users').doc(this.slug);
                ref.get().then(doc => {
                    if(doc.exists){
                        console.log(doc)
                        this.feedback="This alias already exists";
                    }
                    else{
                        firebase.auth().createUserWithEmailAndPassword(this.email,this.password).then(cred =>{
                            console.log(cred.user);
                          ref.set({
                              alias: this.alias,
                              geolocation: null,
                              user_id:cred.user.uid
                          }).then( () => this.$router.push({ name:'Index'})
                          )
                        }).catch(err=>
                        {console.log(err)
                        this.feedback = err.message});
                         this.feedback="This alias is free to use";
                         
                    }
                }).catch(err => console.log(err));
            }
            else{
                this.feedback="You must enter all the fields"
            }
        }
    }
}
</script>

<style>
.signup {
    max-width: 500px;
    margin-top: 60px;
}
.signup h2{
    font-size: 2.4em;
}
.signup .field{
    margin-bottom: 16px;
}
.card-panel{
     border-radius: 30px;
 }

</style>