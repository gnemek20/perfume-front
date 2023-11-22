<template>
  <div>
    <Banner />
    <Base>
      <div class="flex flex-column justify-center">
        <div class="mt-50px mb-50px">
          <h2 class="text-center">New Arival</h2>
        </div>
        <div class="list">
          <Frame></Frame>
          <Frame></Frame>
          <Frame></Frame>
          <Frame></Frame>
          <Frame></Frame>
        </div>
        <div class="mt-50px mb-50px">
          <h2 class="text-center">New Arival</h2>
        </div>
        <div class="list">
          <Frame></Frame>
          <Frame></Frame>
          <Frame></Frame>
          <Frame></Frame>
          <Frame></Frame>
        </div>
      </div>
    </Base>
  </div>
</template>

<script>
import Banner from '@/components/Banner.vue'
import Base from '@/components/Base.vue'
import Frame from '@/components/Frame.vue'

export default {
  components: {
    Banner,
    Base,
    Frame
  },
  data() {
    return {
      eventListener: document
    }
  },
  mounted() {
    this.eventListener.addEventListener('scroll', this.scrollCategory);
  },
  beforeDestroy() {
    this.eventListener.removeEventListener('scroll', this.scrollCategory);
  },
  methods: {
    scrollCategory() {
      const element = document.getElementsByClassName('absolute width-200px')[0];
      const scrollY = window.scrollY;
      const CategoryY = scrollY <= 500 ? scrollY : 500;

      element.style.top = `-${CategoryY}px`;
    }
  }
}
</script>

<style lang="scss" scoped>
.list {
  justify-content: center;
  display: grid;
  grid-template-columns: repeat(auto-fit, 250px);
  gap: 25px;
}
</style>