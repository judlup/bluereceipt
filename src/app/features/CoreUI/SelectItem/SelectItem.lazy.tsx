import React, { lazy, Suspense } from 'react';

const LazySelectItem = lazy(() => import('./SelectItem'));

const SelectItem = (props: JSX.IntrinsicAttributes & { children?: React.ReactNode; }) => (
  <Suspense fallback={null}>
    <LazySelectItem {...props} />
  </Suspense>
);

export default SelectItem;
