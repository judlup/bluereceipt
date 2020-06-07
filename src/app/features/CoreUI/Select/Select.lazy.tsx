import React, { lazy, Suspense } from 'react';

const LazySelect = lazy(() => import('./Select'));

const Select = (props: JSX.IntrinsicAttributes & { children?: React.ReactNode; }) => (
  <Suspense fallback={null}>
    <LazySelect {...props} />
  </Suspense>
);

export default Select;
