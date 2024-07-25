<template>
  <body>
    <div class="wrapper">
      <div class="imgs-parent">
        <div class="img1"></div>
        <div class="img2"></div>
        <div class="img3"></div>
        <div class="img4"></div>
        <div class="img5"></div>
        <div class="img6"></div>
        <div class="img7"></div>
        <div class="img8"></div>
        <div class="img9"></div>
        <div class="img10"></div>
        <div class="img11"></div>
        <div class="img12"></div>
        <div class="img13"></div>
      </div>
    </div>
  </body>
</template>

<style scoped lang="scss">
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  background: linear-gradient(90deg, black, #333);
}

.wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
}

.imgs-parent {
  display: flex;
  gap: 0.4rem;
  perspective: 60rem;

  div {
    width: 5.4rem;
    height: 21rem;
    background-size: cover;
    background-position: center;
    cursor: pointer;
    transition: transform 1s ease;
  }
  div:hover {
    transform: translateZ(17.375rem);
  }
}

.img1 {
  background-image: url("../assets/images/soccer.png");
}
.img2 {
  background-image: url("../assets/images/americanFootball.png");
}
.img3 {
  background-image: url("../assets/images/basketbal.png");
}
.img4 {
  background-image: url("../assets/images/boogschieten.png");
}
.img5 {
  background-image: url("../assets/images/cricket.png");
}
.img6 {
  background-image: url("../assets/images/honkbal.png");
}
.img7 {
  background-image: url("../assets/images/ijshockey.png");
}
.img8 {
  background-image: url("../assets/images/karten.png");
}
.img9 {
  background-image: url("../assets/images/kickboxing.png");
}
.img10 {
  background-image: url("../assets/images/rotsklimmen.png");
}
.img11 {
  background-image: url("../assets/images/sailing.png");
}
.img12 {
  background-image: url("../assets/images/tennis.png");
}
.img13 {
  background-image: url("../assets/images/speerwerpen.png");
}
</style>

<!-- https://www.youtube.com/watch?v=Ass8RNXVFQM&ab_channel=CodeDesign -->
