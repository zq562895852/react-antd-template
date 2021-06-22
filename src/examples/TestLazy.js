// 测试懒加载
import React, {lazy, Suspense} from 'react';
const TestText = lazy(() => import('./TestText'));

/**
 * 通过lazy() api来动态import需要懒加载的组件
 * import的组件目前只支持export default的形式导出
 * Suspense来包裹懒加载的组件进行加载，可以设置fallback现实加载中效果
 */

function TestLazy () {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <TestText />
    </Suspense>
  );
}

export default TestLazy;
