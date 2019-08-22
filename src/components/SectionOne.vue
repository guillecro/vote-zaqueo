<template>
  <div class="hero is-secondary is-fullheight make-relative">
    <img src="../assets/zaq01.png" class="daddy-left is-hidden-touch" alt="">
    <img src="../assets/policho.png"  class="daddy-right is-hidden-touch" alt="">
    <div class="hero-body has-text-white">
      <div class="container has-text-centered">
        <img src="../assets/vote-zaqueo.png"  class="image is-centered logo-title" alt="">
        <p>
          Not just a team, but also
          <br />
          <i>A DREAM FOR <span class="is-800">YOU</span></i>
        </p>
        <br>
          <p class="animated pulse infinite">
          <a href="https://twitter.com/votezaqueo" class="button is-primary is-medium">
            <h1 class="has-text-black is-font-one"><i class="fab fa-twitter fa-lg"></i>&nbsp;SHOW YOUR SUPPORT</h1>
          </a>
        </p>
        <br>
        <br>
        <p class="animated bounce infinite">
          <i class="far fa-hand-point-down has-text-white fa-2x"></i>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HelloWorld"
};
</script>

<style lang="scss">
.logo-title{
  width: 350px; 
}
.logo-uwu{
  width: 100px; 
  margin: 20px auto;
}
.daddy-left{
  position: absolute;
  left: -10px;
  height:100%;
}
.daddy-right{
  position: absolute;
  right: -10px;
  height:100%;
}
.make-relative{
  position:relative;
}
</style>