<template>
  <v-container>
    <v-card>
      <div class="category-container">
        <v-row :gutters="20">
          <v-col cols="9">
            <div class="mb10">课程类别</div>
            <div>
              <span v-for="tg in searchTags" :class="{ active: params.type === tg.value }" class="search-tag" :key="tg.value" @click="handleClickTag(tg)">{{ tg.label }}</span>
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
import { DictModel } from '~~/type/BaseModel';
import { KNOWLEDGE_PAGE } from '~~/constant/address';

useHead({
  title: '学习使者-知识库',
  meta: [
    { name: 'description', content: '学习使者,知识库' }
  ]
})
const searchTags = ref<Array<DictModel>>([
  { value: 'graduate', label: '考研' }, 
  { value: 'it', label: 'IT' }, 
  { value: 'Java', label: 'Java' }, 
  { value: 'Python', label: 'Python' }, 
  ])
  const { params } = useRoute()
  const { resolve, push } = useRouter()
  // 跳转
  const handleClickTag = (tg: DictModel) => {
    push(KNOWLEDGE_PAGE + '/' + tg.value)
  }
</script>

<style lang="scss" scoped>
.category-container {
  .search-ground {
    height: 100%;
    display: flex;
    align-items: center;
  }

  .search-tag {
    margin-right: 20px;
    padding: {
      left: 12px;
      right: 12px;
      top: 4px;
      bottom: 4px;
    };
    cursor: pointer;
    transition: all 0.3s;
    border-radius: 5px;
    &:hover {
      background-color: aquamarine;
    }
    &.active {
      background-color: aquamarine;
    }
  }
}
</style>