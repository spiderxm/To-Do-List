<template>
    <div class="add-todo container">
        <h2 class="center-align black-text">Add Work To Be Done</h2>
        <form @submit.prevent="Addtodo">
            <div class="field title">
              <label for="title" class="black-text">Title For Your Todo</label>
              <input type="text" name="title" v-model="title" placeholder="Title">   <!-- adding model for storing -->
            </div>
            <div v-for="(to,index) in specs" :key="index">
                <label for="specifications"> Specifications:</label>
                <input type="text" name="specifications" v-model="specs[index]">
            </div>
            <div class="field add-specs">
                <label for="add-specifications" class="black-text">Add specifications:</label>
                <input type="text" name="add-specs" placeholder="Specs" @keydown.tab="addspec" v-model="anotherspec">
                <p v-if="feedback" class = "red-text center-text">{{feedback}}</p>
                </div>
            <div class="field center-align">
                <button class="btn">Add Todo</button>
           </div>
        </form>
    </div>
</template>
<script>
import db from '@/firebase/init';
import slugify from 'slugify'
export default {
    name:'Addtodo',
    data(){
        return{
          title:null,
          anotherspec:null,
          specs:[],
          feedback:null,
          urlparam: null,
        }
    },
    methods:{
        Addtodo(){
if(this.title){
  this.feedback = null;
  this.urlparam = slugify(this.title),{
      replacement : '-',
      remove:/[!@#$%^&*()]/g,
      lower : true
  }
  console.log(this.urlparam);
  db.collection('smoothies').add({
      title: this.title,
      specifications: this.specs,
      urlparam: this.urlparam
  }).then().catch(err => console.log(err))
}   
else{
    this.feedback = 'You must enter a title for your todo';
}     },
        addspec(){
            if(this.anotherspec){
             this.specs.push(this.anotherspec);
             this.anotherspec = null,
             this.feedback = null
            }
            else{
              this.feedback = 'You must enter something in specs'
            }
        }
    }
}
</script>
<style scoped>
.add-todo{
    margin:60px;
    padding:20px;
    max-width :500 px;

}
.add-todo h2{
    font-size:2em;
    margin:20px auto;
}
.add-todo .field{
    margin: 20px auto;
}
</style>