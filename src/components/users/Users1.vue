<template>
  <div class="container">
    <div class="card">
      <div class="row card-image">
        <img src="@/assets/image/avatar1.jpg" alt="image">
      </div>
      <div class="user-name">
        <p>users1</p>
      </div>
      <div class="user-description">
        <p>156 Post</p>
        <p>1012 Likes</p>
      </div>
      <ul class="social-media">
        <li><a href="/"><i class="fab fa-instagram"></i></a></li>
        <li><a href="/"><i class="fab fa-twitter"></i></a></li>
        <li><a href="/"><i class="fab fa-linkedin-in"></i></a></li>
        <li><a href="/"><i class="fab fa-codepen"></i></a></li>
      </ul>
      <button class="btn my-border">
        follow
      </button>
      <button class="btn my-border">
        Message
      </button>
    </div>
    <div class="card">
      <div class="row card-image">
        <img src="@/assets/image/avatar2.jpg" alt="image">
      </div>
      <div class="user-name">
        <p>users2</p>
      </div>
      <div class="user-description">
        <p>305 Post</p>
        <p>2643 Likes</p>
      </div>
      <ul class="social-media">
        <li><a href="/"><i class="fab fa-instagram"></i></a></li>
        <li><a href="/"><i class="fab fa-twitter"></i></a></li>
        <li><a href="/"><i class="fab fa-linkedin-in"></i></a></li>
        <li><a href="/"><i class="fab fa-codepen"></i></a></li>
      </ul>
      <button class="btn my-border">
        follow
      </button>
      <button class="btn my-border">
        Message
      </button>
    </div>
    <div class="card">
      <div class="card-image">
        <img src="@/assets/image/avatar3.jpg" alt="image">
      </div>
      <div class="user-name">
        <p>users3</p>
      </div>
      <div class="user-description">
        <p>902 Post</p>
        <p>1300 Likes</p>
      </div>
      <ul class="social-media">
        <li><a href="/"><i class="fab fa-instagram"></i></a></li>
        <li><a href="/"><i class="fab fa-twitter"></i></a></li>
        <li><a href="/"><i class="fab fa-linkedin-in"></i></a></li>
        <li><a href="/"><i class="fab fa-codepen"></i></a></li>
      </ul>
      <button class="btn my-border">
        follow
      </button>
      <button class="btn my-border">
        Message
      </button>
    </div>

  </div>
</template>

<script>
export default {
  name: "Users"
}
</script>

<style scoped >
img {
  width: 10em;
  height: 10em;
  border-radius: 100%;
  border: 4px solid black;
  box-shadow: 0 0 40px 1px deeppink;
}

.container {
  margin: auto;
  display: flex;
  justify-content: center;
}

.card {
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  margin: 1.8em;
  border-radius: 5px;
  padding: 1.5em 3em;
  background-color: #3d3d45;
}


.card-image {
  display: flex;
  justify-content: center;
}

.user-name p {
  display: flex;
  justify-content: center;
  padding: .7em .5em;
  font-weight: 500;
  font-size: 20px;
  color: aliceblue;
}
.user-description  {
  display: flex;
  justify-content: space-between;}

.user-description p {  font-weight: 500;
  font-size: 16px;
  color: aliceblue;
}

.social-media {
  margin: 0;
  padding: 0;
  display: flex;
}

.social-media  li {
  list-style: none ;
  margin: 8px;
  border-radius: 100%;
  padding: 15px;
  background-color: deeppink;
  color: aliceblue;
}
.social-media li i{
  transition:  all 260ms ease-in-out;

}

.social-media  li:hover {
  background-color: revert;
}
.social-media  li:hover i{
  color: deeppink;
  transform: scale(1.7);
}


.social-media li:hover a{
  transition: all 260ms ease-in;

}

.social-media  li a {
  text-decoration: none;
  color: aliceblue;
  padding: 4px;
}

.my-border {
  border: none;
  box-shadow: inset 0 0 0 4px #58cdd1;
  -webkit-transition: color 0.25s 0.0833333333s;
  transition: color 0.25s 0.0833333333s;
  position: relative;

  margin-top: 25px;
  text-align: center;
  font-size: 20px;
  color: aqua;
  font-weight: bold;
  background-color: #3d3d45;
  width: 100%;
  height: 50px;
  outline: none;
}
.my-border::before,
.my-border::after {
  border: 0 solid transparent;
  box-sizing: border-box;
  content: '';
  pointer-events: none;
  position: absolute;
  width: 0;
  height: 0;
  bottom: 0;
  right: 0;
}

.my-border::before {
  border-bottom-width: 4px;
  border-left-width: 4px;
}

.my-border::after {
  border-top-width: 4px;
  border-right-width: 4px;
}

.my-border:hover {
  color: #ffe593;
  transition-delay:0.5s;
}

.my-border:hover::before,
.my-border:hover::after {
  border-color: #eb196e;
  /*-webkit-transition: border-color 0s, width 0.25s, height 0.25s;*/
  transition: border-color 0s, width 0.25s, height 0.25s;
  width: 100%;
  height: 100%;
}

.my-border:hover::before {
  -webkit-transition-delay: 0s, 0s, 0.25s;
  transition-delay: 0s, 0s, 0.25s;
}

.my-border:hover::after {
  -webkit-transition-delay: 0s, 0.25s, 0s;
  transition-delay: 0s, 0.25s, 0s;
}

.btn:focus{
  outline: 2px dotted #55d7dc;
}


</style>