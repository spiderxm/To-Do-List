<template>
  <div class="index container">
    <div class="card" v-for="to in todos" :key="to.id">
      <div class="card-content">
        <i class="material-icons delete" @click="deltodo(to.id)">delete</i>
        <h2 class="black-text">{{to.title}}</h2>
        <ul class="ingredients">
          <li v-for = "(spec,index) in to.specifications" :key="index">
          <span class="chip center-text">{{spec}}</span>
          </li>
        </ul>
      </div>
      <span class="btn-floating btn large halfway-fab grey">
        <router-link :to="{name:'Edit-todo',params:{urlparam:to.urlparam}}" ><i class="material-icons">edit</i></router-link>
      </span>
    </div>
  </div>
</template>

<script>
import Navbar from '@/components/Navbar'
import firebase from 'firebase'
import db from '@/firebase/init'
export default {
  name: 'HelloWorld',
    data () {
    return {
       todos:[]    
    }
  
},
              
components:{
    Navbar
  },
  methods:{
    deltodo(id){

          this.todos = this.todos.filter(to =>{
              return to.id != id})
        db.collection('To-Do-List').doc(id).delete()
        .then (()=> {
            this.todos = this.todos.filter(to =>{
              return to.id != id
            })
        })
        .catch(err => console.log(err))
    }
  },
created(){
  //fetch data from firestore
    db.collection("To-Do-List").where('user_id','==',firebase.auth().currentUser.uid).get().then(querySnapshot => {
    querySnapshot.forEach(doc => {
        // doc.data() is never undefined for query doc snapshots
        let todo = doc.data();
        todo.id = doc.id;
        this.todos.push(todo);
        
    });
});
}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.index{
  display:grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap:30px;
  margin-top:30px;
}
.index h2{
  font-size: 1.8em;
  text-align: center;
  margin-top: 0;
}
.index .ingredients{
  margin:30px auto;
}
.index .ingredients li{
  display: inline-block ;
}
.index .delete{
  position: absolute;
  top:4px;
  right: 4px;
  cursor: pointer;
  color:gray;
  font-size: 1.4em;
}
</style>
