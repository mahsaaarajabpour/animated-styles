<template>
<div class="navbar">
<ul class="navbar-row">
  <li class="nav-links"><RouterLink class="nav-item" to="/users">User</RouterLink></li>
  <li class="nav-links"><RouterLink class="nav-item" to="/users1">User1</RouterLink></li>
  <li class="nav-links"><RouterLink class="nav-item" to="/card">Card</RouterLink></li>
  <li class="nav-links"><RouterLink class="nav-item" to="/maddie">Maddie</RouterLink></li>
  <li class="nav-links"><RouterLink class="nav-item" to="/javascript">JavaScript</RouterLink></li>
  <li class="nav-links"><RouterLink class="nav-item" to="/test">test</RouterLink></li>
  <li class="nav-links"><RouterLink class="nav-item" to="/debounce">test2</RouterLink></li>


</ul>
</div>
</template>

<script>
export default {
name: "Navbar"
}
</script>

<style scoped>
.navbar{
  border-bottom: 3px solid darkgray;
}
.navbar-row{
  display: flex;
}
.nav-links{
  list-style: none;
  cursor: pointer;
  padding: 10px 0;
  margin-right: 7px;
}
.nav-item{
  color: #3d3d45;
  font-weight: bold;
  font-size: 16px;
  text-decoration: none;
  border: 1px solid green;
  padding: 10px 38px;
}

</style>