

### `yarn start`  启动开发环境

### `yarn test`  测试

### `yarn build`  打包

### `yarn eject`  弹出配置，不可逆

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


### 配置说明(如有新增，请添加说明)
   + config-overrides.js 自定义的配置文件
   + addDecoratorsLegacy  开启装饰器支持
   + fixBabelImports antd组件库配置
   + addLessLoader  less加载器配置
   + overrideDevServer 开发环境配置

