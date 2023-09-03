### 介绍
该项目为vue3.0 + vant-ui + dart-sass + axios + pinia搭建的手机移动端框架，
支持响应式rem布局，可以直接一键下载使用

### 使用教程
#### 初始化
```js
git clone git@github.com:freya1106/vue3-vant-framework.git
npm install
```

#### 开发环境
```js
npm run dev
```

#### 测试环境
```js
npm run stg
```

#### 生产环境
```js
npm run build
```

#### 格式化代码
```js
# 使用eslint检测代码风格
npm run lint 

# 使用prettier格式化代码
npm run format
```

### 发布预览
```js
npm run deploy
```
[点我访问](https://freya1106.github.io/vue3-vant-framework/)

### 项目结构
```js
├─.env.development // 开发环境变量配置
├─.env.production // 测试环境变量配置
├─.env.staging // 生产环境变量配置
├─.eslintrc.cjs // eslint格式化配置
├─.prettierrc.json // prettier格式化配置
├─index.html
├─package-lock.json
├─package.json
├─README.md
├─vite.config.js
├─deploy.sh // 部署github page脚本
├─src
|  ├─App.vue
|  ├─main.js
|  ├─views
|  |   ├─tabbar // 首页四个tabbar文件
|  |   |   ├─Home.vue
|  |   |   ├─Index.vue
|  |   |   ├─Life.vue
|  |   |   ├─My.vue
|  |   |   └Work.vue
|  |   ├─my
|  |   | ├─AboutMe.vue
|  |   | ├─MyCollection.vue
|  |   | └Setting.vue
|  |   ├─login
|  |   |   ├─ForgetPwd.vue
|  |   |   ├─Login.vue
|  |   |   └Registry.vue
|  ├─utils
|  |   ├─common.js // 公共方法
|  |   └request.js // axios发送请求
|  ├─styles
|  |   ├─index.scss
|  |   ├─normalize.scss // css reset文件
|  |   └vars.scss // css变量文件
|  ├─stores
|  |   └tabbar.js // pinia状态存储tabbar模块
|  ├─router
|  |   ├─index.js
|  |   ├─modules // 各子模块路由配置
|  |   |    ├─login.js
|  |   |    └my.js
|  ├─components
|  |     └Echart.vue // echarts等公共组件封装
|  ├─assets
|  |   ├─images
|  |   |   └life-bg.png
|  ├─api
|  |  ├─life.js // 各模块请求api封装
|  |  └login.js
├─public
|   └favicon.ico
```
#### MARK
以上项目结构可以使用开源的插件[Treer](https://www.npmjs.com/package/treer)自动生成,

使用教程如下：
```js
npm install treer -g
treer -i "/node_modules|.git/" -e result.txt # 忽略文件，将结果放入result.txt中
```
如果执行命令时不让执行(windows有安全策略),那么可以管理员身份打开powershell,
执行: set-executionpolicy remotesigned即可

### TODO
- 加入stylelint格式化css
- 加入htmllint检测html文件
- 加入husky和git hook、lintstage检测代码提交

### LICENSE
[MIT](https://opensource.org/licenses/MIT)