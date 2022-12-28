<template>
  <Carousels />
  <div class="app-main pb20">
    <div class="img-container mt20">
      <v-img
        lazy-src="https://axure-file.lanhuapp.com/972697ee-3bc9-433a-a021-c9db12c13be9__9b1f4b15419cfeeeda1ea44e01b8a8ec.png"
        height="300"
        width="800"
        src="https://axure-file.lanhuapp.com/972697ee-3bc9-433a-a021-c9db12c13be9__9b1f4b15419cfeeeda1ea44e01b8a8ec.png"
        style="{background-size: 'cover'}"
      />
    </div>
    <div class="briefing-container">
      <p class="briefing-font mt10 blue">对您自己的专业了解了多少？</p>
      <p class="briefing-font mt10 green">您知道您这个专业是要学什么知识吗？</p>
      <p class="briefing-font mt10 green-2">您知道这个专业以后可以做什么工作吗？</p>
      <v-btn class="mt20 btn-center" width="140" style="color: white;" color="rgba(22, 155, 213, 1)">了解专业介绍</v-btn>
    </div>
    <div class="img-container mt20">
      <v-img
        lazy-src="https://axure-file.lanhuapp.com/972697ee-3bc9-433a-a021-c9db12c13be9__0f20c8bad82fe146760b7e9a2984ce1e.png"
        height="300"
        width="800"
        src="https://axure-file.lanhuapp.com/972697ee-3bc9-433a-a021-c9db12c13be9__0f20c8bad82fe146760b7e9a2984ce1e.png"
        style="{background-size: 'cover'}"
      />
    </div>
    <div class="briefing-container">
      <p class="briefing-font mt10 green-2">您是否在考证？</p>
      <p class="briefing-font mt10 green-2">您是否还在为找不到学习资料而烦恼呢？</p>
      <v-btn class="mt20 btn-center" width="140" style="color: white;" color="rgba(22, 155, 213, 1)">前往知识库</v-btn>
    </div>
    <div class="img-container mt20">
      <v-img
        lazy-src="https://axure-file.lanhuapp.com/972697ee-3bc9-433a-a021-c9db12c13be9__c06af3c7f0ef5e33eb6b80edfd800b8f.png"
        height="300"
        width="800"
        src="https://axure-file.lanhuapp.com/972697ee-3bc9-433a-a021-c9db12c13be9__c06af3c7f0ef5e33eb6b80edfd800b8f.png"
        style="{background-size: 'cover'}"
      />
    </div>
    <div class="briefing-container">
      <p class="briefing-font mt10 blue">您是否还在因为没有合适的圈子而烦恼呢？</p>
      <p class="briefing-font mt10 blue-2">您是否想要早日脱单呢？</p>
      <v-btn class="mt20 btn-center" width="140" style="color: white;" color="rgba(22, 155, 213, 1)">进入校园圈</v-btn>
    </div>
  </div>
</template>

<script setup lang="ts">
useHead({
  title: '学习使者-首页',
  meta: [
    { name: 'description', content: '学习使者,首页' }
  ]
})
</script>

<style lang="scss" scoped>
.img-container {
  display: flex;
  justify-content: center;
}

.briefing-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  .briefing-font {
    font-family: 'Arial Normal', 'Arial';
    font-weight: 400;
    font-style: normal;
    font-size: 13px;
    letter-spacing: normal;
    vertical-align: none;
    text-align: center;
    line-height: normal;
    font-size: 30px;
  }
}
</style>