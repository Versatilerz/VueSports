<template>
  <body>
    <div class="wrapper">
      <div ref="outsideHover" class="imgs-parent">
        <div
          class="img1"
          @click="openAndCloseHandler(1)"
          :class="{ open: isClicked === 1 }"
        ></div>
        <div
          class="img2"
          @click="openAndCloseHandler(2)"
          :class="{ open: isClicked === 2 }"
        ></div>
        <div
          class="img3"
          @click="openAndCloseHandler(3)"
          :class="{ open: isClicked === 3 }"
        ></div>
        <div
          class="img4"
          @click="openAndCloseHandler(4)"
          :class="{ open: isClicked === 4 }"
        ></div>
        <div
          class="img5"
          @click="openAndCloseHandler(5)"
          :class="{ open: isClicked === 5 }"
        ></div>
        <div
          class="img6"
          @click="openAndCloseHandler(6)"
          :class="{ open: isClicked === 6 }"
        ></div>
        <div
          class="img7"
          @click="openAndCloseHandler(7)"
          :class="{ open: isClicked === 7 }"
        ></div>
        <div
          class="img8"
          @click="openAndCloseHandler(8)"
          :class="{ open: isClicked === 8 }"
        ></div>
        <div
          class="img9"
          @click="openAndCloseHandler(9)"
          :class="{ open: isClicked === 9 }"
        ></div>
        <div
          class="img10"
          @click="openAndCloseHandler(10)"
          :class="{ open: isClicked === 10 }"
        ></div>
        <div
          class="img11"
          @click="openAndCloseHandler(11)"
          :class="{ open: isClicked === 11 }"
        ></div>
        <div
          class="img12"
          @click="openAndCloseHandler(12)"
          :class="{ open: isClicked === 12 }"
        ></div>
        <div
          class="img13"
          @click="openAndCloseHandler(13)"
          :class="{ open: isClicked === 13 }"
        ></div>
      </div>
    </div>
  </body>
</template>

<script setup>
import { onMounted, onUnmounted, ref } from "vue";

const isClicked = ref("");

const openAndCloseHandler = (value) => {
  if (value === isClicked.value) {
    isClicked.value = "";
  } else {
    isClicked.value = value;
  }
};

//click outside
const outsideHover = ref(null);
const handleClickOutside = (event) => {
  // Check if the click was outside the parent div
  if (outsideHover.value && !outsideHover.value.contains(event.target)) {
    // console.log("Clicked outside the parent div");
    isClicked.value = "";
    // Perform any action you need here
  }
};

// Add event listener when the component is mounted
onMounted(() => {
  document.addEventListener("click", handleClickOutside);
});

// Remove event listener when the component is unmounted
onUnmounted(() => {
  document.removeEventListener("click", handleClickOutside);
});
</script>

<style scoped lang="scss">
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
}

// ease in effect
$transitionCubic: cubic-bezier(0.1, 0.7, 0, 1);

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
    transition: transform 1.25s $transitionCubic, filter 3s $transitionCubic;
    position: relative;
    filter: grayscale(1) brightness(1);
    will-change: transform, filter;
  }
  div:hover {
    transform: translateZ(17.375rem);
    filter: inherit;
    // width: 15rem;
  }

  // for clicked open version of image
  .open {
    width: 20rem;
    transform: translateZ(17.375rem);
    filter: inherit;
    z-index: 1;
    margin: 0 0.45vw;
  }

  // affect images next to hover one
  div:hover + * {
    transform: translateZ(14.77rem) rotateY(35deg);
    z-index: -1;
    filter: grayscale(0.2) brightness(0.9);
  }
  div:hover + * + * {
    transform: translateZ(9.73rem) rotateY(40deg);
    z-index: -2;
    filter: grayscale(0.4) brightness(0.8);
  }
  div:hover + * + * + * {
    transform: translateZ(4.17rem) rotateY(35deg);
    z-index: -3;
    filter: grayscale(0.6) brightness(0.7);
  }
  div:hover + * + * + * + * {
    transform: translateZ(1.1rem) rotateY(25deg);
    z-index: -4;
    filter: grayscale(0.8) brightness(0.6);
  }
  div:has(+ :hover) {
    transform: translateZ(14.77rem) rotateY(-35deg);
    filter: grayscale(0.2) brightness(0.9);
  }
  div:has(+ * + :hover) {
    transform: translateZ(9.73rem) rotateY(-40deg);
    filter: grayscale(0.4) brightness(0.8);
  }
  div:has(+ * + * + :hover) {
    transform: translateZ(4.17rem) rotateY(-35deg);
    filter: grayscale(0.6) brightness(0.7);
  }
  div:has(* + * + * + :hover) {
    transform: translateZ(1.1rem) rotateY(-25deg);
    filter: grayscale(0.8) brightness(0.6);
  }
  //to make sure there is no dead space between the cards (otherwise you get a weird snapping effect)
  div::before,
  div::after {
    content: "";
    position: absolute;
    width: 1.25rem;
    height: 100%;
    right: -1.25rem;
    left: -1.25rem;
  }
}

// links to images
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
