const Component = React.lazy(() => import('./Component'));

const App = () => (
  <React.Suspense fallback={<Spinner />}>
    <div>
      <Component />
    </div>
  </React.Suspense>
);