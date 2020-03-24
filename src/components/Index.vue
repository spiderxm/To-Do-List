<template>
  <div class="index container">
    <div class="card" v-for="to in todo" :key="to.id">
      <div class="card-content">
        <h2 class="black-text">{{to.title}}</h2>
        <ul class="ingredients">
          <li v-for = "(spec,index) in to.specifications" :key="index">
          <span class="chip">{{spec}}</span>
          </li>
        </ul>
      </div>

    </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
todo:[{
  title:'Morning Code',
  requirements:'Codeforces',
  specifications:['Windows laptop','ide','net connection'],
  id:1
},
{
  title:'Evening Code',
  requirements:'Codechef',
  specifications:['Macintosh','ide','net connection'],
  id:2
}]    }
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
</style>
