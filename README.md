# Electron + Ant Design 初始框架

## 结构
使用 Vue 3 + Vite + Electron + Ant Design
为便于展示，添加了一个很小的模块 tts，另做他用时，在View层删除即可


## 安装
1. 请自行安装 node及npm，并建议使用npmmirror至中国区或者cnpm
npm install
2. 在.env.*中配置各环境所使用的后端接口地址
3. 请在上线前。关闭 `app.config.js`  文件中的 openDevTools

## 命令解释
```shell
npm run dev   # 本地开发   
npm run build:web # 打包出 Html 至 build-production 目录   
npm run build:electron  # 打包出对应系统的可执行程序至Dist目录 
```
Web编译支持docker，Linux/MacOS平台可以使用 `sh start_docker_web.sh`

## 问题及错误
受GitHub过慢的问题，Windows平台初次编译经常依赖包下载不下来, package.json  中已经使用了镜像，如果还是无法下载，可以在这里(https://registry.npmmirror.com/binary.html)下载到对应包,
然后放置到 C:\Users\你的用户名\AppData\Local\electron-builder\Cache，再重新编译

 ## 技术细节

### 关于路由
本程序添加了自动路由注册，除可以在`router/index.ts`中指定路由外，您可以在vue文件中添加
```ini
  name: 'tts', //路由组件名称
  isRouter: true,  //是否自动为路由
  isComponents: false,  // 是否自动注册为公共组件
```
会检测到并自动将tts注册为路由，具体的注册项为：
`{path: '/tts', name: 'TTS'}`   

可以使用以下代码，进行路由跳转
```javascript
    const router = useRouter();
    const goHomePage = () => {
      console.log(router);
      router.push({ name: "TEMPFILE" });
    };
```