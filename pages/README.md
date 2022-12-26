## 1. pages文件夹使用方法
nuxt3采用文件夹自动生成路由的方法，直接新建文件夹/文件即可直接通过路由访问

## 2. 创建路由
### 2.1 创建指定页面路由
例如创建了一个pages/school/dynamic/index.vue的文件

该路由等价于pages/school/dynamic.vue

可以通过 => url => /school/dynamic访问到该页面


### 2.2 指定路由参数
假设需要在路由上添加参数访问可以使用 “_参数名称”创建路由名称

例如创建了pages/school/dynamic/_schoolName/blog/_id/index.vue文件

该路由等价于 pages/school/dynamic/_schoolName/blog/_id.vue

可以通过 => url => /school/dynamic/学校名称/blog/动态id访问到该页面

然后可以通过路由参数拿到上述值