<template>
  <div class="body">
    <div class="container">
      <transition name="slide-fade">
        <div name="fade" v-if="show" class="content" id="content">
          <div class="left-box">
            <p class="course">course</p>
            <h3 class="title">JavaScript Fundamentals</h3>
            <a class="view-chapters" href="/">view all chapters<i class="fas fa-chevron-right"></i></a>
          </div>
          <div class="right-box">
            <div class="col">
              <div class="row">
                <p class="chapter">chapter 4</p>
                <div class="col">
                  <progress :value="progressValue" max="9" class="progress">c</progress>
                  <p class="description-progress"><span class="m-3">{{ this.progressValue }}/9</span>Challenges</p>
                </div>
              </div>
              <h3 class="over-view">callback & closures</h3>
              <div class="div-button">
                <button v-if="this.progressValue<9 " class="btn" @click="Increase">Increase</button>
                <button v-else class="btn reset-btn" @click="Reset">Reset</button>
              </div>
            </div>
          </div>
        </div>
      </transition>
    </div>
  </div>


</template>

<script>
export default {
  name: "JS",
  data() {
    return {
      progressValue: 0,
      show: true
    }
  },
  methods: {
    Increase() {
      this.progressValue++
    },
    Reset() {
      this.progressValue = 0
    }
  },
  mounted() {
    setTimeout(() => {
      this.show = true
    }, 1000)
  },
  beforeMount() {
    this.show = false
  }
}
</script>

<style scoped>

.m-3 {
  margin-right: .4rem;
}
.body{
  background-color: #7f80e4;
  height: 563.5px;
}

.container {
  display: flex;
  justify-content: center;
  padding: 120px 140px;
}

.content {
  width: 70%;
  border-radius: 10px;
  display: grid;
  grid-template-columns: 35% 65%;
  overflow: hidden;
  border: none;
  box-shadow: 0 6px 5px 1px #6162ab;

}

.slide-fade-enter-active {
  transition: all 3s ease;
}

.slide-fade-enter, .slide-fade-leave-to
  /* .slide-fade-leave-active below version 2.1.8 */
{
  opacity: 0;
  transform: rotate3d(40, 40, -30, 360deg);
  transition-duration: 3s;
}

.col {
  display: flex;
  flex-direction: column;
}

.content .left-box {
  padding: 10px 30px 40px;
  color: white;
  background-color: #2a2760;
  display: flex;
  flex-direction: column;
}

.left-box .course, .right-box .chapter {
  font-size: 13px;
  text-transform: uppercase;
  letter-spacing: .5px;
  color: #88878e;
}

.left-box .title, .right-box .over-view {
  font-size: 29px;
  margin: 0 0 30px;
}

.left-box .view-chapters {
  text-decoration: none;
  color: #88878e;
  font-size: 14px;
}

.fa-chevron-right {
  padding: 2px;
  font-size: smaller;
  margin-left: 3px;
}

.right-box {
  background-color: #ffffff;
  padding: 10px 30px 40px;
  display: flex;
  flex-direction: column;
}

.right-box .row {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}

.right-box .row .progress {
  margin: 15px;
  height: 5px;
  border: 0;
}

/* background: */
progress::-webkit-progress-bar {
  background-color: #ededf7;
  width: 100%;
  border-radius: 50px
}

/* value: */
progress::-webkit-progress-value {
  background-color: #2b265c !important;
  border-radius: 50px;
}

.description-progress {
  margin: 0 15px;
  padding: 0;
  font-size: 12px;
  color: #88878e;
  text-align: end;
}

.div-button {
  display: flex;
  justify-content: flex-end;
  margin: 15px;
}

.btn {
  color: white;
  background-color: #2b265c;
  padding: 13px;
  border: none;
  width: 30%;
  border-radius: 50px;
  font-size: 16px;
  box-shadow: 0 6px 11px 1px #b8b8bb;
  outline: none;
  cursor: pointer;
}

.reset-btn {
  background-color: #1b0f94;
}

.btn:active {
  transform: translateY(2px);
  box-shadow: 0 3px 3px 2px #94949a;
}
</style>