<template>
  <div class="header">
    <div class="header-container">
      <div class="header-logo-box">
        <NuxtLink to="/">
          <span class="header-logo">学习使者</span>
        </NuxtLink>
      </div>
      <div class="header-right-menu">
        <div class="menu-item">
          <NuxtLink to="/">首页</NuxtLink>
        </div>
        <div class="menu-item">
          <NuxtLink to="/specialty">专业库</NuxtLink>
        </div>
        <div class="menu-item">
          <NuxtLink to="/knowledge">知识库</NuxtLink>
        </div>
        <div class="menu-item">
          <NuxtLink to="/school">校园圈</NuxtLink>
        </div>
        <div class="menu-item">
          <NuxtLink to="/register">登记/注册</NuxtLink>
        </div>
      </div>
    </div>
    <NuxtLoadingIndicator />
  </div>
</template>


<style lang="scss" scoped>
.header {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 60px;
  flex-direction: row;
  box-shadow: 0 3px 3px rgba(0,0,0,0.2);
  a {
    text-decoration: none;
    color: #333333;
  }
  .header-container {
    width: 1200px;
    display: flex;

    .header-logo-box {
      flex: 1;
      .header-logo {
        font-family: 'Arial Negreta', 'Arial Normal', 'Arial';
        font-weight: 700;
        font-style: normal;
        font-size: 36px;
      }
    }

    // 菜单右侧样式
    .header-right-menu {
      display: flex;
      align-items: center;
      
      .menu-item {
        position: relative;
        height: 100%;
        margin-right: 10px;
        margin-left: 10px;
        font-family: 'Arial Normal', 'Arial';
        font-weight: 400;
        font-style: normal;
        font-size: 18px;
        letter-spacing: normal;
        color: #333333;
        transition: all 0.5S;

        a {
          height: 100%;
          display: flex;
          align-items: center;
        }

        &:hover {
          // 底部样式
          &::after {
            content: '';
            position: absolute;
            height: 2px;
            width: 100%;
            background-color: rgb(0, 255, 42);
            bottom: 0;
            left: 0;
            transition: all 0.5s;
          }
        }
      }
    }
  }
}
</style>