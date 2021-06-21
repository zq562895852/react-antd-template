
### 环境脚本

   + `yarn start`  启动开发环境
   + `yarn test`  测试
   + `yarn build`  打包
   + `yarn lint`  eslint检测脚本
   + `yarn eject`  弹出配置，不可逆
### package.json说明
   + commit提交前执行 `npm run lint` 检测
   ```bash
    "husky": {
        "hooks": {
          "pre-commit": "npm run lint"
        }
      }
   ```
   + husky 配置方法
     ```bash
     {
        "precommit": "foo, bar, test"
        "pre-commit": "foo, bar, test"
        "pre-commit": ["foo", "bar", "test"]
        "precommit": ["foo", "bar", "test"],
        "precommit": {
          "run": "foo, bar, test",
        },
        "pre-commit": {
          "run": ["foo", "bar", "test"],
        },
        "precommit": {
          "run": ["foo", "bar", "test"],
        },
        "pre-commit": {
          "run": "foo, bar, test",
        }
      }
     ```

     + 


### 配置说明(如有新增，请添加)
   + react-app-rewired 自定义配置文件使用的包
   + config-overrides.js 自定义的配置文件
   + addDecoratorsLegacy  开启装饰器支持
   + fixBabelImports antd组件库配置
   + addLessLoader  less加载器配置
   + overrideDevServer 开发环境配置

### 分支说明
   + 分支规范
      - 功能分支：feature/*；
      - 修补bug分支：fixbug/*；
      - 紧急bug分支：hotfix/*；
      - 样式分支：style/*;
      - 测试分支：test/*；
   + 提交规范
      - `type` 代表某次提交的类型，比如是修复一个 bug 还是增加一个新的 feature。所有的 type 类型如下：

      -   feat： 新增 feature；
      -   fix: 修复 bug；
      -   docs: 仅仅修改了文档，比如 README, CHANGELOG, CONTRIBUTE 等等；
      -   style: 仅仅修改了空格、格式缩进、都好等等，不改变代码逻辑；
      -   refactor: 代码重构，没有加新功能或者修复 bug；
      -   perf: 优化相关，比如提升性能、体验；
      -   test: 测试用例，包括单元测试、集成测试等；
      -   chore: 一般用来发布版本；
      -   build: 改变构建流程、或者增加依赖库、工具等；
      -   revert: 回滚到上一个版本；
      -   ci: git ci 相关修改；


### 项目结构
   + api  api相关文件
   + assets 静态文件
   + components 基础公共组件
   + examples  使用方法示例
   + hooks 抽离的所有hooks
   + layout 容器组件
   + pages  页面
   + redux  redux所有文件
   + router router配置文件
   + theme 主题配置文件
   + utils 公共工具抽离
   + index.js  项目入口文件
   


### 基础组件
   + Button.js 基础button组件

### 示例文件(examples文件夹)
  + App.js  redux 集成使用
  + TestReduxHooks.js  redux-hooks使用

### hooks功能
   。。。

### pages页面
  。。。


### utils公共工具
  。。。



    
   


