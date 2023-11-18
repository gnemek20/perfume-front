<template>
  <div class="flex flex-column screen-height">
    <div class="flex max-height">
      <div id="side" class="side flex flex-column relative">
        <div class="absolute width-200px right-10px">
          <div class="fixed flex flex-column width-200px">
            <div class="flex cursor-pointer mt-20px mb-100px" @click="$push('/')">
              <h1 class="color-fcf8f7">Logo</h1>
            </div>
            <div class="flex flex-column">
              <div id="category" class="mb-30px">
                <h3 class="color-fcf8f7">Category</h3>
                <hr class="mt-10px mb-5px">
                <div v-for="category in categories" v-bind:key="category">
                  <p class="color-fcf8f7 cursor-pointer text-hover pt-5px pb-5px">{{ category }}</p>
                </div>
              </div>
              <div id="community" class="mt-30px">
                <h3 class="color-fcf8f7">Community</h3>
                <hr class="mt-10px mb-5px">
                <div v-for="community in communities" v-bind:key="community">
                  <p class="color-fcf8f7 cursor-pointer text-hover pt-5px pb-5px">{{ community }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="content" class="content flex justify-center max-width">
        <div class="lock-width max-width">
          <div class="flex mr-5px pt-10px pr-10px">
            <div class="flex left-auto">
              <div ref="user" class="cursor-pointer flex flex-column justify-start align-center pr-5px pl-5px relative" @mouseenter="mouseEnterUser" @mouseleave="mouseLeaveUser">
                <img src="@/assets/icons/user.svg" width="24px">
                <div ref="userMenu" class="none cursor-default flex flex-column border-solid radius-10px width-100px pt-10px pb-10px absolute top-30px" @mouseenter="mouseEnterUser" @mouseleave="mouseLeaveUser">
                  <div class="cursor-pointer area-hover text-hover flex justify-center max-width pt-5px pb-5px" @click="$push('signin')">
                    <p>로그인</p>
                  </div>
                  <div class="cursor-pointer area-hover text-hover flex justify-center max-width pt-5px pb-5px" @click="$push('signup')">
                    <p>회원가입</p>
                  </div>
                  <div class="cursor-pointer area-hover text-hover flex justify-center max-width pt-5px pb-5px">
                    <p>주문조회</p>
                  </div>
                </div>
              </div>
              <div class="cursor-pointer flex align-start pr-5px pl-5px mr-30px ml-30px">
                <img src="@/assets/icons/steamed.svg" width="24px">
              </div>
              <div class="cursor-pointer flex align-start pr-5px pl-5px">
                <img src="@/assets/icons/cart.svg" width="24px">
              </div>
            </div>
          </div>
          <slot />
        </div>
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
      communities: ['Notice', 'Review', 'Event'],
    }
  },
  methods: {
    mouseEnterUser() {
      const user = this.$refs['user'];
      const userMenu = this.$refs['userMenu'];
      user.style.height = '50px';
      userMenu.className = 'cursor-default flex flex-column border-solid radius-10px width-100px pt-10px pb-10px absolute top-30px';
    },
    mouseLeaveUser() {
      const user = this.$refs['user'];
      const userMenu = this.$refs['userMenu'];
      user.style.height = '100%';
      userMenu.className = 'none cursor-default flex flex-column border-solid radius-10px width-100px pt-10px pb-10px absolute top-30px';
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
.width-200px {
  width: 200px;
}
.width-100px {
  width: 100px;
}
.top-30px {
  top: 30px;
}
</style>