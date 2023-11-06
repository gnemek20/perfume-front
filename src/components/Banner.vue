<template>
  <div class="banner flex relative">
    <img ref="Abydos1" class="absolute" src="@/assets/Abydos01.jpg">
    <img ref="Abydos2" class="none" src="@/assets/Abydos02.jpg">
    <img ref="Abydos3" class="none" src="@/assets/Abydos03.jpg">
  </div>
</template>

<script>
export default {
  data() {
    return {
      interval: null,
      images: ['Abydos01', 'Abydos02', 'Abydos03']
    }
  },
  mounted() {
    let count = 2;
    this.interval = setInterval(() => {
      const beforeImage = this.$refs[`Abydos${count - 1 === 0 ? this.images.length : count - 1}`]
      const image = this.$refs[`Abydos${count}`];

      beforeImage.className = 'fade-out';
      image.className = 'block absolute';

      setTimeout(() => {
        beforeImage.className = 'none'
      }, 3000);

      count === 3 ? count = 1 : count++;
    }, 10000);
  },
  beforeDestroy() {
    clearInterval(this.interval);
  }
}
</script>

<style lang="scss" scoped>
@keyframes fade-in {
  0% {
    opacity: 0%;
  }
  100% {
    opacity: 100%;
  }
}

@keyframes fade-out {
  0% {
    opacity: 100%;
  }
  100% {
    opacity: 0%;
  }
}

.banner {
  height: 500px;
}

img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  animation: fade-in 3500ms;
}

.fade-out {
  animation: fade-out 3000ms;
  animation-fill-mode: forwards;
}
</style>