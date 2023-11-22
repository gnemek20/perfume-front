<template>
  <div>
    <Base>
      <div class="flex justify-center">
        <div class="flex flex-column mt-50px">
          <div class="mb-30px">
            <div class="text-center">
              <h1>로그인</h1>
            </div>
            <div class="text-center">
              <h5>짧은 소개</h5>
            </div>
          </div>
          <div class="flex pt-20px pr-20px pb-20px pl-20px border-solid radius-5px">
            <div class="flex flex-column mr-5px">
              <div class="flex">
                <input class="border-solid bb-none pt-10px pr-10px pb-10px pl-10px" type="text" name="id" placeholder="아이디">
              </div>
              <div class="flex">
                <input class="border-solid bt-none pt-10px pr-10px pb-10px pl-10px" type="password" name="pwd" placeholder="비밀번호">
              </div>
            </div>
            <div class="flex ml-5px">
              <button class="cursor-pointer">로그인</button>
            </div>
          </div>
        </div>
      </div>
    </Base>
  </div>
</template>

<script>
import Base from '@/components/Base.vue'

export default {
  components: {
    Base
  }
}
</script>

<style lang="scss" scoped>
input {
  outline: none;
}
</style>