<template>
  <div class="banner flex relative">
    <img ref="Abydos1" class="opacity-100 absolute" src="@/assets/Abydos01.jpg">
    <img ref="Abydos2" class="opacity-0 absolute" src="@/assets/Abydos02.jpg">
    <img ref="Abydos3" class="opacity-0 absolute" src="@/assets/Abydos03.jpg">
    <div class="absolute max-width max-height flex justify-center">
      <div class="selector top-auto mb-10px grid gap-10 opacity-75">
        <label for="1" class="relative">
          <input ref="radio1" type="radio" id="1" name="image" @click="clickRadioButton(1)" checked>
          <span class="button pointer"></span>
        </label>
        <label for="2" class="relative">
          <input ref="radio2" type="radio" id="2" name="image" @click="clickRadioButton(2)">
          <span class="button pointer"></span>
        </label>
        <label for="3" class="relative">
          <input ref="radio3" type="radio" id="3" name="image" @click="clickRadioButton(3)">
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
      images: ['Abydos01', 'Abydos02', 'Abydos03'],
      count: 0
    }
  },
  mounted() {
    this.changeImages(1);
  },
  beforeDestroy() {
    this.clearThisInterval();
  },
  methods: {
    changeImages(number) {
      this.count = number;
      this.interval = setInterval(() => {
        this.count === 3 ? this.count = 1 : this.count++;

        const beforeImage = this.$refs[`Abydos${this.count - 1 === 0 ? this.images.length : this.count - 1}`]
        const image = this.$refs[`Abydos${this.count}`];
        const radioButton = this.$refs[`radio${this.count}`];

        beforeImage.className = 'opacity-0 fade-out absolute';
        image.className = 'opacity-100 absolute';
        radioButton.checked = true;
      }, 10000);
    },
    clearThisInterval() {
      clearInterval(this.interval);
    },
    clickRadioButton(number) {
      if (this.count === number) return;

      this.clearThisInterval();
      const beforeImage = this.$refs[`Abydos${this.count}`];
      const image = this.$refs[`Abydos${number}`];

      beforeImage.className = 'opacity-0 fade-out absolute';
      image.className = 'opacity-100 absolute';

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
  transition: 3500ms;
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
  transition: 2500ms !important;
}

.width-70px {
  width: 70px;
}
</style>