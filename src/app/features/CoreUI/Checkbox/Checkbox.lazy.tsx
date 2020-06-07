import React, { lazy, Suspense } from 'react';

const LazyCheckbox = lazy(() => import('./Checkbox'));

const Checkbox = (props: JSX.IntrinsicAttributes & { children?: React.ReactNode; }) => (
  <Suspense fallback={null}>
    <LazyCheckbox {...props} />
  </Suspense>
);

export default Checkbox;
