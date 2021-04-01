<template>
<div>
<!--  <div>-->
<!--    <input type="text" @input="debounceSearch" placeholder="Search">-->
<!--    <span v-if="typing">You are typing</span>-->
<!--    <span v-if="message">You typed: {{message}}</span>-->
<!--  </div>-->

<!--  <hr>-->
<!--  <hr>-->

  <div class="concentrate">
    <input type="text" class="center-input" v-model="search">
  </div>
  <div >
    <div v-for="user in filteredBlogs" :key="user.id" class="center">
      <h3 >name: {{user.name}}</h3>
      <p>last name: {{user.lastName}}</p>
      <hr>
    </div>
  </div>

</div>
</template>

<script>

import _ from "debounce";

export default {
name: "Test",
  data(){
  return{
    users:[
      {name:'mahsa',lastName:'r',age:20,id:1},
      {name: 'accb',lastName: 'AAA',age: 22,id:2},
      {name: 'acgg',lastName: 'BBB',age: 25,id:3},
      {name: 'ccc',lastName: 'CCC',age: 18,id:4}
    ],
    search:'',
    message: null,
    typing: null,
    debounce: null,
    timer: 0

  }
  },
  computed:{

     // filteredIcons (){
     //   return this.users.filter(user => {
     //     return user.name.toLowerCase().includes(this.search.toLowerCase())
     //   })
     // },
    // filteredBlogs(){
    //   return this.users.filter((user)=>{
    //     return user.name.match(this.search)
    //   })
    // },

    // filteredBlogs(){
    //   return this.users.filter((user)=>{
    //     return user.name.match(this.search)
    //   })
    // },
    //  myEfficientFn (){
    // return  debounce(function () {
    //      // All the taxing stuff you do
    //    }, 250);
    //  },


    filteredBlogs:{
      get(){
        return this.users
      },

        // Only update the this.filter after half a second of inactivity
        set: _.debounce(function(newVal)  { //eslint-disable-line
          if (newVal !== this.users) { // Prevents unnecessary triggers
            this.users= newVal
            return this.users.filter((user)=>{
                  return user.name.match(this.search)
                })
          }
        }, 100)


      // console.log('dd',this.search)
      // return this.users.filter((user)=>user.name.match(this.search))

    }

  },

}
</script>

<style scoped>
.center{
  text-align: center;
}
.concentrate{
  display: flex;
  justify-content: center;
}
</style>