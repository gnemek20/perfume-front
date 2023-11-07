<template>
  <div class="banner flex relative">
    <img :ref="`Abydos${++index}`" class="opacity-0 absolute" :src="image" v-for="(image, index) in images" v-bind:key="index">
    <div class="absolute max-width max-height flex justify-center">
      <div class="selector top-auto mb-10px grid gap-10 opacity-75">
        <label :for="number" class="relative" v-for="number in images.length" v-bind:key="number">
          <input :ref="`radio${number}`" type="radio" :id="number" name="image" @click="clickRadioButton(number)">
          <span class="button pointer"></span>
        </label>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      interval: null,
      count: 1,
      images: [
        require("@/assets/Abydos01.jpg"),
        require("@/assets/Abydos02.jpg"),
        require("@/assets/Abydos03.jpg")
      ]
    }
  },
  mounted() {
    this.clickRadioButton(1);
  },
  beforeDestroy() {
    this.clearThisInterval();
  },
  methods: {
    changeImages(number) {
      this.count = number;
      this.interval = setInterval(() => {
        this.count === 3 ? this.count = 1 : this.count++;

        const beforeImage = this.$refs[`Abydos${this.count - 1 === 0 ? this.images.length : this.count - 1}`][0];
        const image = this.$refs[`Abydos${this.count}`][0];
        const radioButton = this.$refs[`radio${this.count}`][0];

        beforeImage.className = 'opacity-0 fade-out absolute';
        image.className = 'opacity-100 absolute';
        radioButton.checked = true;
      }, 10000);
    },
    clearThisInterval() {
      clearInterval(this.interval);
    },
    clickRadioButton(number) {
      this.clearThisInterval();
      const beforeImage = this.$refs[`Abydos${this.count}`][0];
      const image = this.$refs[`Abydos${number}`][0];
      const radioButton = this.$refs[`radio${number}`][0];

      beforeImage.className = 'opacity-0 fade-out absolute';
      image.className = 'opacity-100 absolute';
      radioButton.checked = true;

      this.count === 3 ? this.count = 1 : this.count++;
      this.changeImages(number);
    }
  }
}
</script>

<style lang="scss" scoped>
img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: 3000ms;
}
input[type="radio"] {
  display: none;
}
input[type="radio"]:checked + .button {
  background: #fcf8f7;
}
.selector {
  grid-template-columns: repeat(3, 1fr);
}
.button {
  display: block;
  width: 40px;
  height: 5px;
  background: dimgray;
}
.banner {
  height: 500px;
}
.fade-out {
  transition: 2000ms !important;
}

.width-70px {
  width: 70px;
}
</style>