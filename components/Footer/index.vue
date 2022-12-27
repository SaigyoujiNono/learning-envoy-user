<template>
  <v-footer class="bg-grey-lighten-1" height="100px">
    <v-row>
      <v-col>
        <div class="footer-content">
          <p class="mt10">免责声明</p>
          <p class="mt10">本网站所提供的文章和资料，均来源于互联网，仅供参考学习，不做商业使用。如有侵权请联系2317790164@qq.com，提供原文链接地址以及资料原创证明，本站将会立即删除</p>
          <p class="mt10">{{ new Date().getFullYear() }}© — 网站公安备案编号： 粤ICP备2022xxxxxx号</p>
        </div>
      </v-col>
    </v-row>
  </v-footer>
</template>

<script setup lang="ts">
</script>

<style lang="scss" scoped>
p {
  font-family: 'Arial Normal', 'Arial';
  font-weight: 400;
  font-style: normal;
  font-size: 13px;
  letter-spacing: normal;
  color: #333333;
}
.footer-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
</style>
