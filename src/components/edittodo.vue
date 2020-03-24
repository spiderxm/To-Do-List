<template>
    <div v-if="todo" class="edit-todo container">
        <h2>Edit your todo</h2>
        <form @submit.prevent="edittodo">
            <div class="field title">
              <label for="title" class="black-text">Title For Your Todo</label>
              <input type="text" name="title"  placeholder="Title" v-model="todo.title">   <!-- adding model for storing -->
            </div>
            <div v-for="(to,index) in todo.specifications" :key="index" class="field">
                <label for="specifications"> Specifications:</label>
                <input type="text" name="specifications" v-model="todo.specifications[index]">
                <i class="material-icons delete" @click="deletespec(to)">delete</i>
            </div>
            <div class="field add-specs">
                <label for="add-specifications" class="black-text">Add specifications:</label>
                <input type="text" name="add-specs" placeholder="Specs" @keydown.tab="addspec" v-model="another">
                <p v-if="feedback" class = "red-text center-text">{{feedback}}</p>
                </div>
            <div class="field center-align">
                <button class="btn">Edit Todo</button>
           </div>
              </form>
    </div>
 
</template>
<script>
import db from '@/firebase/init'
import slugify from 'slugify'
export default {
    name:'Edit-todo',
    data(){
        return{
           todo : null,
           another: null,
           feedback: null,

        }
    },
    methods:{
        edittodo(){
           if(this.todo.title){
               this.feedback = null;
               this.todo.urlparam =slugify(this.todo.title,{
                   replacement : '-',
      remove:/[!@#$%^&*()]/g,
      lower : true
               })
               db.collection('To-Do-List').doc(this.todo.id).update({
    title: this.todo.title,
      urlparam: this.todo.urlparam,
    specifications: this.todo.specifications,

               }).then(
                   this.$router.push({name:'Index'})
               ).catch(err => console.log(err));
           }
        },
        addspec(){
            if(this.another){
             this.todo.specifications.push(this.another);
             this.another = null,
             this.feedback = null
            }
            else{
              this.feedback = 'You must enter something in specs'
            }
        },
        deletespec(specs){
            this.todo.specifications = this.todo.specifications.filter(spec =>{
                return spec != specs
            })
         }
        },
        created(){
         let ref = db.collection('To-Do-List').where('urlparam','==',this.$route.params.urlparam)   //Take 3 params
         ref.get().then((snapshot)=>{
          
          snapshot.forEach(doc => {
              this.todo = doc.data();
              this.todo.id = doc.id
        })
    }
        )}
}
</script>
<style  scoped>
.edit-todo{
    max-width :500 px;

}
.edit-todo h2{
    font-size:2em;
    margin:20px auto;
}
.edit-todo .field{
    margin: 20px auto;
    position: relative;
}
.edit-todo .delete{
position:absolute;
right:0;
bottom: 16px;
color: grey;
font-size:1.4em;
cursor:pointer;
}
</style>