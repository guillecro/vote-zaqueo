<template>
  <div id="app">
    <section-one></section-one>
    <section-two></section-two>
    <img src="./assets/bannerhorizontal.png" class="image" style="width:100%;" alt="">
    <section-three></section-three>
    <section-four></section-four>
    <section-five></section-five>
    <section-six></section-six>
    <section-seven></section-seven>
    <section-eight></section-eight>
    <section-nine></section-nine>
    <section-ten></section-ten>
  </div>
</template>

<script>
import SectionOne from "./components/SectionOne.vue";
import SectionTwo from "./components/SectionTwo.vue";
import SectionThree from "./components/SectionThree.vue";
import SectionFour from "./components/SectionFour.vue";
import SectionFive from "./components/SectionFive.vue";
import SectionSix from "./components/SectionSix.vue";
import SectionSeven from "./components/SectionSeven.vue";
import SectionEight from "./components/SectionEight.vue";
import SectionNine from "./components/SectionNine.vue";
import SectionTen from "./components/SectionTen.vue";

export default {
  name: "app",
  components: {
    SectionOne,
    SectionTwo,
    SectionThree,
    SectionFour,
    SectionFive,
    SectionSix,
    SectionSeven,
    SectionEight,
    SectionNine,
    SectionTen,
  }
};
</script>

<style lang="scss">
@import './assets/sass/app.scss';
</style>
