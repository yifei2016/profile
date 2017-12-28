<template>
  <div id='app'>
    <vue-particles class="particle" color="#dedede" :particleOpacity="0.7" :particlesNumber="80" shapeType="star" :particleSize="4" linesColor="#dedede" :linesWidth="2" :lineLinked="true" :lineOpacity="0.4" :linesDistance="150" :moveSpeed="3" :hoverEffect="true"
      hoverMode="repulse" :clickEffect="true" clickMode="push">
    </vue-particles>
    <div class="layout">
      <div class="navigation">
        <a href="#secondPage">
          <i class="fa fa-long-arrow-down fa-3x secondpageArrow" aria-hidden="true">  </i>
        </a>
  
        <label class="navigation--label">
        <input class="navigation--button" type='checkbox'>
        <span class='menu'>
          <span class='hamburger'></span>
        </span>
        <ul class="navigation--list">
          <li>
            <a href="#knowledges" class="navigation--link">Knowledges</a>
          </li>
          <li>
            <a href='#thirdPage' class="navigation--link">Projects</a>
          </li>
          <li>
            <a href='#contact-page' class="navigation--link">Contact</a>
          </li>
        </ul>
      </label>
      </div>
      <div class="text__container">
        <!-- <h1 class="app__text">What I make</h1> -->
        <div class="app__text">
          <svg id="animation1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 588.2 96.1"><title>welcome</title>
              <path d="M77.3,109.07l-23.6-93H66.4l11,47.1c2.8,11.6,5.2,23.2,6.9,32.2h.3c1.5-9.2,4.4-20.3,7.6-32.3l12.4-47h12.6l11.3,47.2c2.6,11,5.1,22.1,6.5,31.9h.3c1.9-10.2,4.6-20.6,7.5-32.2l12.3-46.9h12.3l-26.4,93H128.4l-11.8-48.4a296.45,296.45,0,0,1-6.1-30.4h-.3a292.63,292.63,0,0,1-7.2,30.4l-13.2,48.4Z" transform="translate(-53.7 -14.47)"/><path d="M227,65.47H190.8V99h40.3v10.1H178.8v-93H229v10.1H190.8v29.4H227Z" transform="translate(-53.7 -14.47)"/><path d="M246.7,16.07h12V99h39.7v10.1H246.6v-93Z" transform="translate(-53.7 -14.47)"/><path d="M371.5,106.07c-4.4,2.2-13.2,4.4-24.6,4.4-26.2,0-46-16.6-46-47.1,0-29.1,19.7-48.9,48.6-48.9,11.6,0,18.9,2.5,22.1,4.1l-2.9,9.8a43.88,43.88,0,0,0-18.8-3.9c-21.8,0-36.3,13.9-36.3,38.4,0,22.8,13.1,37.4,35.7,37.4,7.3,0,14.8-1.5,19.6-3.9Z" transform="translate(-53.7 -14.47)"/><path d="M463.1,61.57c0,32-19.5,49-43.2,49-24.6,0-41.8-19-41.8-47.2,0-29.5,18.4-48.9,43.2-48.9C446.7,14.57,463.1,34,463.1,61.57Zm-72.2,1.5c0,19.9,10.8,37.7,29.7,37.7s29.8-17.5,29.8-38.6c0-18.5-9.7-37.8-29.7-37.8C400.9,24.37,390.9,42.67,390.9,63.07Z" transform="translate(-53.7 -14.47)"/><path d="M557.1,68.27c-.7-13-1.5-28.6-1.4-40.2h-.4c-3.2,10.9-7,22.5-11.7,35.3l-16.4,45.1h-9.1l-15-44.3c-4.5-13.1-8.2-25.1-10.9-36.1h-.3c-.3,11.6-1,27.2-1.8,41.1l-2.5,39.9H476.1l6.5-93h15.3l15.9,45c3.9,11.5,7,21.7,9.4,31.3h.4c2.3-9.4,5.7-19.6,9.8-31.3l16.6-45h15.3l5.8,93H559.4Z" transform="translate(-53.7 -14.47)"/><path d="M637.8,65.47H601.6V99h40.3v10.1H589.6v-93h50.2v10.1H601.6v29.4h36.2Z" transform="translate(-53.7 -14.47)"/></svg>
        </div>
      </div>
      <div>
      </div>
    </div>
    <div id="secondPage">
      <div class="flex">
        <a href="#0" class="bttn" v-on:click="toShowKnowledges" id="knowledges">Knowledges</a>
      </div>
    </div>
    <div class="knowledges" ref="knowledges" >
      <h4>Html5, Css3, Javascript6</h4>
      <h4>React.js, Vue.js, Webpack, Ajax, Axios, Fetch,Promise</h4>
      <h4>Redux</h4>
      <h4>Sass, BEM</h4>
      <h4>Git bash</h4>
      <h4>Bootstrap, Materilize</h4>
      <h4>Css animation, GSAP</h4>
      <h4>MongoDB, Mongoose, Express.js, Node.js, Firebase</h4>
      <h4>Jest test</h4>
      <h4>Photoshop, Illustrator</h4>
      <h4>Canvas, Svg</h4>
    </div>
  
    <div id="thirdPage">
      <a class="projects" v-on:click="toShowProjects">
        <span class="text">Projects</span>
        <span class="line -right"></span>
        <span class="line -top"></span>
        <span class="line -left"></span>
        <span class="line -bottom"></span>
      </a>
  
      <div class="thirdPage__project--names"  v-bind:style="display">
        <ul class="thirdPage__project--namesProjects">
          <li class="">
          <a href="https://github.com/yifei2016/laravel-php" class="project__name link2">Html5, Css3, Bootstrap 4, PHP, laravel, Sequel pro</a>
          </li>
          <li class="">
          <a href="https://yifei2016.github.io/exercise23redux/" class="project__name link2">Html5, Css3, Bootstrap, Vue.js, Vue resource, Vue router</a>
          </li>
          <li>
          <a href="https://yifei2016.github.io/exercise23redux/" class="project__name link2">Html5, Css3, React.js, Redux</a>
          </li>
          <li>
          <a href="https://github.com/yifei2016/localStorage-firebase/tree/gh-pages" class="project__name link2">Html5, Css3, Firebase, Bootstrap, localStorage, DOM.js</a>
          </li>
          <li>
            <a href="https://yifei2016.github.io/sortera-filtrera/" class="project__name link2">Html5, Css3, Firebase, Bootstrap, localStorage, DOM.js</a>
          </li>
          <li>
          <a href="https://yifei2016.github.io/great-book/" class="project__name link2">Html5, Css, Bootstrap, Ajax</a>
          </li>
          <li>
          <a href="https://github.com/yifei2016/expressProject" class="project__name link2">Html5, Css3, Express.js,Socket</a>
          </li>
          <li>
          <a href="https://yifei2016.github.io/ExpressMongoDBReact/" class="project__name link2">Html5, Css3, React.js, axios, Express.js,Mongoose, MongoDB</a>
          </li>
          <li>
          <a href="https://github.com/yifei2016/expressProject" class="project__name link2">Html5, Css3,Sass, Bootstrap, Vue.js</a>
          </li>
          <li>
          <a href="https://github.com/yifei2016/expressProject" class="project__name link2">Express.js,Socket, Html5, Css3</a>
          </li>
          <li>
          <a href="https://github.com/yifei2016/expressProject" class="project__name link2">Express.js,Socket, Html5, Css3</a>
          </li>
          <li>
          <a href="https://yifei2016.github.io/html-css-project/" class="project__name link2">Html5, Css, Bootstrap</a>
          </li>
          <li>
          <a href="https://yifei2016.github.io/html-css/" class="project__name link2">Html5, Css, flex box</a>
          </li>
          <li>
          <a href="https://github.com/yifei2016/jest-test.js" class="project__name link2">Jest test</a>
          </li>
          <li>
          <a href="https://github.com/yifei2016/Laravel" class="project__name link2">Laravel PHP</a>
          </li>
          <li>
          <a href="https://github.com/yifei2016/guessing-game" class="project__name link2">Python game</a>
          </li>
          <li>
          <a href="https://github.com/yifei2016/Laravel" class="project__name link2">Laravel PHP</a>
          </li>
        </ul>
      </div>
       <div class="view">
          <div class="plane main">
            <div class="circle"></div>
            <div class="circle"></div>
            <div class="circle"></div>
            <div class="circle"></div>
            <div class="circle"></div>
            <div class="circle"></div>
          </div>
        </div>
      <div class="thirdpage__image">
        <img class="thirdpageImage" src="https://cdn.dribbble.com/users/798857/screenshots/2677694/run_rabbit_3.gif">
      </div>
    </div>
    <div class="photoshopPage">
      <div>
        <b-carousel id="carousel1" style="text-shadow: 1px 1px 2px #333;" controls indicators background="#ababab" :interval="4000" v-model="slide" @sliding-start="onSlideStart" @sliding-end="onSlideEnd">
          <b-carousel-slide :img-src="require('../assets/hair-slash.png')" style="height:320px;">
          </b-carousel-slide>
          <b-carousel-slide :img-src="require('../assets/julkort.jpg')">
          </b-carousel-slide>
          <b-carousel-slide :img-src="require('../assets/3D-logo.png')" style="height:320px;">
          </b-carousel-slide>
          <b-carousel-slide :img-src="require('../assets/splash.png')">
          </b-carousel-slide>
          <b-carousel-slide :img-src="require('../assets/gold.png')">
          </b-carousel-slide>
        </b-carousel>
      </div>
      <div>
        <img src="../assets/Ronaldo.jpg" alt="">
      </div>
    </div>
  
    <footer class="contact-page" >
      <div class="contact--pageFooter" >
        <div class="flip-container" ontouchstart="this.classList.toggle('hover');" id="contact-page">
          <div class="flipper">
            <div class="front">
              <img src="../assets/yifei.jpg" alt="" class="front--image">
            </div>
            <div class="back">
              <p>Yifei Wang</p>
              <p>Kabbeleksgatan 5A, Göteborg</p>
              <a href="mailto:hello.yifei@icloud.com" class="back--mail" target="_top">Mail address</a>
              <a href="tel:+0765583776" class="back--tel">Tel: 076 558 3776</a>
            </div>
          </div>
        </div>
  
        <div class="media-icons">
          <ul class="social-networks bounce">
            <li><a href="https://www.linkedin.com/in/yifei-wang-994b84104/" class="icon-linkedin">LinkedIn</a></li>
            <li><a href="https://www.facebook.com/profile.php?id=100010103582055" class="icon-facebook">Facebook</a></li>
            <li><a href="https://github.com/yifei2016" class="icon-github">GitHub</a></li>
          </ul>
        </div>
        <div class="contact--page--star">
          <vue-star animate="animated bounce">
            <i slot="icon" class="fa fa-3x fa-star" aria-hidden="true"></i>
          </vue-star>
        </div>
  
      </div>
    </footer>
  </div>
</template>

<script>
  import Vue from 'vue'
  import BootstrapVue from 'bootstrap-vue'
  import 'bootstrap/dist/css/bootstrap.css'
  import 'bootstrap-vue/dist/bootstrap-vue.css'
  Vue.use(BootstrapVue)
  export default {
    data () {
      return {
        email: null,
        clickNumber: 0,
        slide: 0,
        sliding: null,
        display: {
          display: 'none'
        }
      }
    },
    methods: {
      toShowKnowledges: function () {
        this.$refs.knowledges.classList.toggle('showKnowledges')
      },
      toShowProjects: function () {
        this.clickNumber = this.clickNumber + 1
        if (this.clickNumber % 2 === 1) {
          this.display = {
            display: 'block'
          }
        } else {
          this.display = {
            display: 'none'
          }
        }
      },
      onSlideStart (slide) {
        this.sliding = true
      },
      onSlideEnd (slide) {
        this.sliding = false
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  #app {
    height: 100vh;
  }
  
  path {
    stroke: white;
    stroke-dasharray: 1200;
    animation: animation1 3s infinite;
    stroke-width: 6;
  }
  
  @keyframes animation1 {
    0% {
      stroke-dasharray: 0;
    }
    50% {
      stroke-dasharray: 1200;
    }
    100% {
      stroke-dasharray: 0;
    }
  }
  
  .projects {
    position: fixed;
    cursor: pointer;
    top: 50vh;
    left: 50%;
    color: rgb(34, 98, 44);
    -webkit-transform: translate3d(-50%, -50%, 0);
    transform: translate3d(-50%, -50%, 0);
    padding: 0.7em calc(0.7em * 1.2);
    display: inline-block;
    border: 3px solid transparent;
    position: relative;
    font-size: 1.5em;
    letter-spacing: 0.07em;
  }
  
  .projects .text {
    font-family: proxima-nova;
    -webkit-transform: translate3d(0, 0.7em, 0);
    transform: translate3d(0, 0.7em, 0);
    display: block;
    -webkit-transition: -webkit-transform 0.4s cubic-bezier(0.2, 0, 0, 1) 0.4s;
    transition: -webkit-transform 0.4s cubic-bezier(0.2, 0, 0, 1) 0.4s;
    transition: transform 0.4s cubic-bezier(0.2, 0, 0, 1) 0.4s;
    transition: transform 0.4s cubic-bezier(0.2, 0, 0, 1) 0.4s, -webkit-transform 0.4s cubic-bezier(0.2, 0, 0, 1) 0.4s;
  }
  
  .projects:after {
    position: absolute;
    content: '';
    bottom: -3px;
    left: calc(0.7em * 1.2);
    right: calc(0.7em * 1.2);
    height: 3px;
    background: rgb(244, 334, 45);
    z-index: -1;
    -webkit-transition: right 0.2s cubic-bezier(0.04, 0.48, 0, 1) 0.6s, left 0.4s cubic-bezier(0.04, 0.48, 0, 1) 0.6s, -webkit-transform 0.8s cubic-bezier(1, 0, 0.37, 1) 0.2s;
    transition: right 0.2s cubic-bezier(0.04, 0.48, 0, 1) 0.6s, left 0.4s cubic-bezier(0.04, 0.48, 0, 1) 0.6s, -webkit-transform 0.8s cubic-bezier(1, 0, 0.37, 1) 0.2s;
    transition: transform 0.8s cubic-bezier(1, 0, 0.37, 1) 0.2s, right 0.2s cubic-bezier(0.04, 0.48, 0, 1) 0.6s, left 0.4s cubic-bezier(0.04, 0.48, 0, 1) 0.6s;
    transition: transform 0.8s cubic-bezier(1, 0, 0.37, 1) 0.2s, right 0.2s cubic-bezier(0.04, 0.48, 0, 1) 0.6s, left 0.4s cubic-bezier(0.04, 0.48, 0, 1) 0.6s, -webkit-transform 0.8s cubic-bezier(1, 0, 0.37, 1) 0.2s;
    -webkit-transform-origin: left;
    transform-origin: left;
  }
  
  .line {
    position: absolute;
    background: rgb(244, 334, 45);
  }
  
  .line.-right,
  .line.-left {
    width: 3px;
    bottom: -3px;
    top: -3px;
    -webkit-transform: scale3d(1, 0, 1);
    transform: scale3d(1, 0, 1);
  }
  
  .line.-top,
  .line.-bottom {
    height: 3px;
    left: -3px;
    right: -3px;
    -webkit-transform: scale3d(0, 1, 1);
    transform: scale3d(0, 1, 1);
  }
  
  .line.-right {
    right: -3px;
    -webkit-transition: -webkit-transform 0.1s cubic-bezier(1, 0, 0.65, 1.01) 0.23s;
    transition: -webkit-transform 0.1s cubic-bezier(1, 0, 0.65, 1.01) 0.23s;
    transition: transform 0.1s cubic-bezier(1, 0, 0.65, 1.01) 0.23s;
    transition: transform 0.1s cubic-bezier(1, 0, 0.65, 1.01) 0.23s, -webkit-transform 0.1s cubic-bezier(1, 0, 0.65, 1.01) 0.23s;
    -webkit-transform-origin: top;
    transform-origin: top;
  }
  
  .line.-top {
    top: -3px;
    -webkit-transition: -webkit-transform 0.08s linear 0.43s;
    transition: -webkit-transform 0.08s linear 0.43s;
    transition: transform 0.08s linear 0.43s;
    transition: transform 0.08s linear 0.43s, -webkit-transform 0.08s linear 0.43s;
    -webkit-transform-origin: left;
    transform-origin: left;
  }
  
  .line.-left {
    left: -3px;
    -webkit-transition: -webkit-transform 0.08s linear 0.51s;
    transition: -webkit-transform 0.08s linear 0.51s;
    transition: transform 0.08s linear 0.51s;
    transition: transform 0.08s linear 0.51s, -webkit-transform 0.08s linear 0.51s;
    -webkit-transform-origin: bottom;
    transform-origin: bottom;
  }
  
  .line.-bottom {
    bottom: -3px;
    -webkit-transition: -webkit-transform 0.3s cubic-bezier(1, 0, 0.65, 1.01);
    transition: -webkit-transform 0.3s cubic-bezier(1, 0, 0.65, 1.01);
    transition: transform 0.3s cubic-bezier(1, 0, 0.65, 1.01);
    transition: transform 0.3s cubic-bezier(1, 0, 0.65, 1.01), -webkit-transform 0.3s cubic-bezier(1, 0, 0.65, 1.01);
    -webkit-transform-origin: right;
    transform-origin: right;
  }
  
  .projects:hover .text,
  .projects:active .text {
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
    -webkit-transition: -webkit-transform 0.6s cubic-bezier(0.2, 0, 0, 1) 0.4s;
    transition: -webkit-transform 0.6s cubic-bezier(0.2, 0, 0, 1) 0.4s;
    transition: transform 0.6s cubic-bezier(0.2, 0, 0, 1) 0.4s;
    transition: transform 0.6s cubic-bezier(0.2, 0, 0, 1) 0.4s, -webkit-transform 0.6s cubic-bezier(0.2, 0, 0, 1) 0.4s;
  }
  
  .projects:hover:after,
  .projects:active:after {
    -webkit-transform: scale3d(0, 1, 1);
    transform: scale3d(0, 1, 1);
    right: -3px;
    left: -3px;
    -webkit-transform-origin: right;
    transform-origin: right;
    -webkit-transition: right 0.2s cubic-bezier(1, 0, 0.65, 1.01), left 0s 0.3s, -webkit-transform 0.2s cubic-bezier(1, 0, 0.65, 1.01) 0.17s;
    transition: right 0.2s cubic-bezier(1, 0, 0.65, 1.01), left 0s 0.3s, -webkit-transform 0.2s cubic-bezier(1, 0, 0.65, 1.01) 0.17s;
    transition: transform 0.2s cubic-bezier(1, 0, 0.65, 1.01) 0.17s, right 0.2s cubic-bezier(1, 0, 0.65, 1.01), left 0s 0.3s;
    transition: transform 0.2s cubic-bezier(1, 0, 0.65, 1.01) 0.17s, right 0.2s cubic-bezier(1, 0, 0.65, 1.01), left 0s 0.3s, -webkit-transform 0.2s cubic-bezier(1, 0, 0.65, 1.01) 0.17s;
  }
  
  .projects:hover .line,
  .projects:active .line {
    -webkit-transform: scale3d(1, 1, 1);
    transform: scale3d(1, 1, 1);
  }
  
  .projects:hover .line.-right,
  .projects:active .line.-right {
    -webkit-transition: -webkit-transform 0.1s cubic-bezier(1, 0, 0.65, 1.01) 0.2s;
    transition: -webkit-transform 0.1s cubic-bezier(1, 0, 0.65, 1.01) 0.2s;
    transition: transform 0.1s cubic-bezier(1, 0, 0.65, 1.01) 0.2s;
    transition: transform 0.1s cubic-bezier(1, 0, 0.65, 1.01) 0.2s, -webkit-transform 0.1s cubic-bezier(1, 0, 0.65, 1.01) 0.2s;
    -webkit-transform-origin: bottom;
    transform-origin: bottom;
  }
  
  .projects:hover .line.-top,
  .projects:active .line.-top {
    -webkit-transition: -webkit-transform 0.08s linear 0.4s;
    transition: -webkit-transform 0.08s linear 0.4s;
    transition: transform 0.08s linear 0.4s;
    transition: transform 0.08s linear 0.4s, -webkit-transform 0.08s linear 0.4s;
    -webkit-transform-origin: right;
    transform-origin: right;
  }
  
  .projects:hover .line.-left,
  .projects:active .line.-left {
    -webkit-transition: -webkit-transform 0.08s linear 0.48s;
    transition: -webkit-transform 0.08s linear 0.48s;
    transition: transform 0.08s linear 0.48s;
    transition: transform 0.08s linear 0.48s, -webkit-transform 0.08s linear 0.48s;
    -webkit-transform-origin: top;
    transform-origin: top;
  }
  
  .projects:hover .line.-bottom,
  .projects:active .line.-bottom {
    -webkit-transition: -webkit-transform 0.5s cubic-bezier(0, 0.53, 0.29, 1) 0.56s;
    transition: -webkit-transform 0.5s cubic-bezier(0, 0.53, 0.29, 1) 0.56s;
    transition: transform 0.5s cubic-bezier(0, 0.53, 0.29, 1) 0.56s;
    transition: transform 0.5s cubic-bezier(0, 0.53, 0.29, 1) 0.56s, -webkit-transform 0.5s cubic-bezier(0, 0.53, 0.29, 1) 0.56s;
    -webkit-transform-origin: left;
    transform-origin: left;
  }
</style>
