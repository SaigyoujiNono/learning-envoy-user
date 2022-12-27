<template>
  <v-app>
      <Header />
        <div class="app-main">
          <slot />
        </div>
      <Footer />
    </v-app>
</template>

<style lang="scss" scoped>
.app-main {
  height: 100%;
  width: 1200px;
  margin-left: auto;
  margin-right: auto;
}
</style>
