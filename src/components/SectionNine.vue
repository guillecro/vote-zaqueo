<template>
  <div class="hero is-secondary is-small make-relative">
    <div class="hero-body has-text-white">
      <div class="container is-fluid has-text-centered">
          <h1 class="subtitle has-text-white is-2">YOUR RULERS</h1>
          <div class="columns is-centered">
            <div class="column is-narrow is-hidden-touch">
              <img src="../assets/poli.png" class="twitter-avatar smaller" alt="Poli">
              <h1 class="title is-3 has-text-primary is-marginless">POLICHO</h1>
              <h1 class="subtitle is-5 has-text-white is-marginless">VICE-PRESIDENTE</h1>
              <p class="has-text-centered is-font-two">Dergon pilot</p>
              <p class="has-text-centered is-font-two"><a href="https://twitter.com/policho02" class="has-text-primary"><i class="fab fa-twitter fa-lg"></i>&nbsp;@policho02</a></p>
            </div>
            <div class="column is-narrow">
              <img src="../assets/zaq.png" class="twitter-avatar " alt="">
              <h1 class="title is-3 has-text-primary is-marginless">ZAQUEO</h1>
              <h1 class="subtitle is-5 has-text-white is-marginless">PRESIDENTE</h1>
              <p class="has-text-centered is-font-two">Trash king</p>
              <p class="has-text-centered is-font-two"><a href="https://twitter.com/justZaqueo" class="has-text-primary"><i class="fab fa-twitter fa-lg"></i>&nbsp;@justZaqueo</a></p>
            </div>
            <div class="column is-narrow is-hidden-touch">
              <img src="../assets/kioba.jpg" class="twitter-avatar smaller" alt="">
                  <h1 class="title is-3 has-text-primary is-marginless">SHERLU</h1>
                  <h1 class="subtitle is-5 has-text-white is-marginless">ASSISTANT</h1>
                  <p class="has-text-centered is-font-two">Artist Swag</p>
                  <p class="has-text-centered is-font-two"><a href="https://twitter.com/kiobarts" class="has-text-primary"><i class="fab fa-twitter fa-lg"></i>&nbsp;@kiobarts</a></p>
            </div>
            <div class="column is-hidden-desktop">
              <div class="columns is-mobile">
                <div class="column">
                  <img src="../assets/poli.png" class="twitter-avatar smaller" alt="">
                  <h1 class="title is-5 has-text-primary is-marginless">POLICHO</h1>
                  <h1 class="subtitle is-6 has-text-white is-marginless">VICE-PRESIDENTE</h1>
                  <p class="has-text-centered is-font-two">Dergon pilot</p>
                  <p class="has-text-centered is-font-two"><a href="https://twitter.com/policho02" class="has-text-primary"><i class="fab fa-twitter fa-lg"></i>&nbsp;@policho02</a></p>
                </div>
                <div class="column">
                  <img src="../assets/kioba.jpg" class="twitter-avatar smaller" alt="">
                  <h1 class="title is-5 has-text-primary is-marginless">SHERLU</h1>
                  <h1 class="subtitle is-5 has-text-white is-marginless">ASSISTANT</h1>
                  <p class="has-text-centered is-font-two">Artist Swag</p>
                  <p class="has-text-centered is-font-two"><a href="https://twitter.com/kiobarts" class="has-text-primary"><i class="fab fa-twitter fa-lg"></i>&nbsp;@kiobarts</a></p>
                </div>
              </div>
            </div>
          </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.twitter-avatar{
  width: 200px;
  border-radius:600px;
  margin: 0 auto 10px;
}
.smaller{
  padding:30px;
  @include until($tablet) {
    padding:20px;
  }
}
</style>
