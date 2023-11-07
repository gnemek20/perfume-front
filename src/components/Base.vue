<template>
  <div class="flex flex-column screen-height">
    <div class="flex max-height">
      <div id="side" class="side flex flex-column relative">
        <div class="absolute width-240px right-10px">
          <div class="fixed flex flex-column width-240px">
            <div class="flex mt-20px mb-100px">
              <h1 class="color-fcf8f7">Logo</h1>
            </div>
            <div class="flex flex-column">
              <div id="category" class="mb-30px">
                <h3 class="color-fcf8f7">Category</h3>
                <hr class="mt-10px mb-5px">
                <div v-for="category in categories" v-bind:key="category">
                  <p class="color-fcf8f7 pointer text-hover pt-5px pb-5px">{{ category }}</p>
                </div>
              </div>
              <div id="community" class="mt-30px">
                <h3 class="color-fcf8f7">Community</h3>
                <hr class="mt-10px mb-5px">
                <div v-for="community in communities" v-bind:key="community">
                  <p class="color-fcf8f7 pointer text-hover pt-5px pb-5px">{{ community }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="content" class="content flex flex-column max-width">
        <slot />
      </div>
    </div>
    <div id="footer" class="footer top-auto flex flex-column space-between pt-10px pb-10px pr-10px pl-10px">
      <div class="flex">
        <div class="pr-10px">
          <p>Home</p>
        </div>
        <div class="pl-10px pr-10px">
          <p>Company</p>
        </div>
        <div class="pl-10px">
          <p>Guide</p>
        </div>
      </div>
      <hr class="border-e7e7e7 mt-10px mb-10px">
      <p>대충 CS 이메일이랑 Notice 등 Community에도 있는 내용</p>
      <p>절대 귀찮아서 이렇게 해두는거 아님</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      categories: ['New', 'Best', 'Warm', 'Cool', 'Lovely', 'Daily'],
      communities: ['Notice', 'Review', 'Event']
    }
  }
}
</script>

<style lang="scss" scoped>
.side {
  min-width: 250px;
  width: 20vw;
  border-right: 1px solid #e7e7e7;
  // background-color: #fff2ed;
  background-color: #8e7371;
}
.content {
  background-color: #fcf8f7;
  // background-color: #ffefeb;
}
.footer {
  border-top: 1px solid #e7e7e7;
  background-color: #fcf8f7;
}

.color-fcf8f7 {
  color: #fcf8f7;
}
.border-e7e7e7 {
  border-color: #e7e7e7;
}
.width-240px {
  width: 200px;
}
</style>