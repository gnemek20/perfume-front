<template>
  <div class="frame">
    <slot />
  </div>
</template>

<style lang="scss" scoped>
.frame {
  display: flex;
  border: 1px solid #e7e7e7;
  width: 250px;
  height: 250px;
}
</style>