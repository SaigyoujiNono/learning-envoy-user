<template>
  <v-container>
    <v-card>
      <div class="category-container">
        <v-row :gutters="20">
          <v-col cols="9">
            <div>课程类别</div>
            <div>
              <v-row :gutters="40">
                <v-col cols="2">
                  <span>考研</span>
                </v-col>
                <v-col cols="2">
                  <span>考研</span>
                </v-col>
                <v-col cols="2">
                  <span>考研</span>
                </v-col>
                <v-col cols="2">
                  <span>考研</span>
                </v-col>
                <v-col cols="2">
                  <span>考研</span>
                </v-col>
                <v-col cols="2">
                  <span>考研</span>
                </v-col>
                <v-col cols="2">
                  <span>考研</span>
                </v-col>
              </v-row>
            </div>
          </v-col>
          <v-col cols="3">
            <div class="search-ground">
              <v-autocomplete
                label="搜索"
                :items="['California', 'Colorado', 'Florida', 'Georgia', 'Texas', 'Wyoming']"
                hide-no-data
                hide-details
              ></v-autocomplete>
            </div>
          </v-col>
        </v-row>
      </div>
    </v-card>
  </v-container>
</template>

<script setup lang="ts">
useHead({
  title: '学习使者-知识库',
  meta: [
    { name: 'description', content: '学习使者,知识库' }
  ]
})
</script>

<style lang="scss" scoped>
.category-container {
  .search-ground {
    height: 100%;
    display: flex;
    align-items: center;
  }
}
</style>