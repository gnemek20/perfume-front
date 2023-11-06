<template>
  <div>
    <Banner />
    <Base>
    </Base>
  </div>
</template>

<script>
import Banner from '@/components/Banner.vue'
import Base from '@/components/Base.vue'

export default {
  components: {
    Banner,
    Base
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
    this.eventListener.removeEvenrListener('scroll', this.scrollCategory);
  },
  methods: {
    scrollCategory() {
      const element = document.getElementsByClassName('absolute width-240px')[0];
      const scrollY = window.scrollY;
      const CategoryY = scrollY <= 500 ? scrollY : 500;

      element.style.top = `-${CategoryY}px`;
    }
  }
}
</script>