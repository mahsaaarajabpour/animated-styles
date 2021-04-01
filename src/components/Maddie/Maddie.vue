<template>
  <div class="container">
    <div class="box">
      <div class="header">
        <img class="image" src="@/assets/image/1.jpg" alt="">
        <div class="card-name">
          <h2><i>Maddie</i></h2>
        </div>
      </div>
      <div class="body">
        <div class="content">
          <p>
            Maddie in front end developer in New York.
            She has work in the field for the 10 years now.
            Check out her projects in the links below.
            She is available for hire as well.
          </p>
        </div>
        <div class="links">
          <button :to="'/github'"> GitHub</button>
          <button> Twitter</button>
          <button> Linkedin</button>
        </div>
        <div class="hire">
          <button class="my-btn">Hire Me</button>
        </div>
      </div>
      <div class="footer">
        <div class="likes">
          <p><i class="fas fa-heart"></i></p>
          <p class="heart-count"> 1.5 K</p>
        </div>
        <div class="projects">
          <p>Projects</p>
          <p class="projects-count">154</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Maddie",
  mounted() {
    if (window.location.pathname==='/') {
      window.location.pathname= '/users'
    }
  }
}
</script>

<style scoped>
.container {
  padding: 50px;
  display: flex;
  justify-content: center;
}

.box {
  margin: 50px;
  width: 30%;
  border-radius: 7px;
  justify-content: center;
  display: flex;
  flex-direction: column;
  box-shadow: 3px 6px 11px 3px #d2c8c8;
}

.header {
  display: flex;
}

img {
  border-radius: 100px;
}

.image {
  width: 25%;
  border-radius: 100%;
  position: relative;
  top: -33px;
  left: -33px;
  box-shadow: 6px 4px 7px 2px #d2c8c8;
}

.card-name {
  color: #fec04d;
  display: flex;
  justify-content: center;
  position: relative;
  left: 60px;
  font-size: 20px;
  align-items: center;
}

.card-name h2 {
  margin: 0;
}

.body {
  line-height: 1.4;
  font-size: 16.5px;
  padding: 0 14px 14px;
}

.content, .hire {
  display: flex;
  justify-content: center;
}

.content p {
  margin: 0;
}

.links {
  display: flex;
  justify-content: center;
  margin: 0 20px;
}

.links button {
  margin: 17px;
  background-color: white;
  border: 2px solid #f1294f;
  padding: 8px 10px;
  border-radius: 5px;
  font-size: 16px;
}

.links button:hover {
  background-color: #f1294f;
  color: white;
  cursor: pointer;
}

.links button:focus {
  outline: none;
}

.hire button {
  margin-top: 20px;
  width: 270px;
  height: 76px;
  border: none;
  border-radius: 5px;
  box-shadow: 7px 9px 9px -1px #b1acac;
  outline: none;
  font-size: 34px;
  background-size: 300% 300%;
  color: white;
  background: linear-gradient(45deg, #ff6b6c, #ffc145, #ffc145 ,#ff6b6c);
  transition: all 200ms ease-in-out;
  -webkit-animation: gradientBG 1.5s ease-in-out forwards;
  animation: gradientBG 1.5s ease-in-out forwards;
}

.hire button:hover {
  cursor: pointer;
  transform:translateY(2px);
  animation: gradientBG 1.5s ease-in-out forwards;
}

.hire button:active {
  transform: translateY(4px);
  box-shadow: 4px 9px 6px -4px #4e4c4c;

}

.footer {
  display: flex;
  justify-content: space-between;
  margin-top: 15px;
  background-color: #5a5f97;
  padding: 7px 20px;
  color: white;
  border-radius: 0 0 7px 7px;
}

.footer p {
  margin: 0;
}

.likes, .projects {
  display: flex;
}

.projects p:first-child, .likes p:first-child {
  padding-right: 15px;
}

.fa-heart {
  color: red;
}

.heart-count, .projects-count {
  margin-left: 15px;
  padding-left: 15px;
  border-left: 3px solid white;
  height: 18px;
}

@keyframes gradientBG {
  0% {
    background-position: 0% 50%;
  }
  100% {
    background-position: 100% 50%;
  }
}

</style>





