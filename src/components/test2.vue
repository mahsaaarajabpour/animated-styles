<template>
  <div id="debounce">
    <label>
      <input type="text" @input="search">
    </label>
    <h1>vue select <small>search github repositories</small></h1>
    <div v-for="user in results" :key="user.id" class="center">
      <h3 >name: {{user.name}}</h3>
      <p>last name: {{user.lastName}}</p>
      <hr>
    </div>
<!--    <select label="full_name" @search="search" :options="results"></select>-->
    <p></p>
  </div>
</template>

<script>
import _ from "debounce";
import axios from 'axios'
export default {
  name: "test2",
  data() {
    return {
      results: [
        {name:'mahsa',lastName:'r',age:20,id:1},
        {name: 'accb',lastName: 'AAA',age: 22,id:2},
        {name: 'acgg',lastName: 'BBB',age: 25,id:3},
        {name: 'ccc',lastName: 'CCC',age: 18,id:4}],
      loading:''
    }
  },


  methods: {

    search(search) {
      console.log('mahas',search,this.loading)
      if (search !== "") {
        console.log('1')

        this.loading=false
       // const loading=this.loading
        this.getRepositories(search, this.loading);
      }
    },
    // eslint-disable-next-line no-undef
    getRepositories: _.debounce((search,loading) => {
      // loading=''
      // const loading1=this.loading
     axios.get(`https://api.github.com/search/repositories?q=${search}`)
          .then(res => {
            console.log('2',loading)

            this.results = res.data.items;
            this.loading=false
          })
          .catch((err) => err);
    }, 250)
  }

}
</script>

<style scoped>
body {
  font-family: 'Open Sans', sans-serif;
  color: #3f3f3f;
}

small {
  display: block;
  color: #ccc;
  font-size: .65em;
  margin-top: .35em;
}

#debounce {
  max-width: 35em;
  margin: 1em auto;
}
</style>