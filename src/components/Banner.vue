<template>
  <div class="flex">
    <img ref="Abydos1" class="" src="@/assets/Abydos01.jpg">
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

      setTimeout(() => {
        beforeImage.className = 'none'
        image.className = 'block';
      }, 750);

      count === 3 ? count = 1 : count++;
    }, 8000);
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

img {
  width: 100%;
  height: 500px;
  object-fit: cover;
  animation: fade-in 1000ms;
}

.fade-out {
  animation: fade-out 750ms;
  animation-fill-mode: forwards;
}
</style>