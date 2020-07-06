import React from 'react';

const Dashboard = React.lazy(() => import(/*webpackChunkName:'Dashboard'*/'@/views/dashboard'));
const Error404 = React.lazy(() => import(/*webpackChunkName:'Error404'*/'@/views/error/404'));

export default [
  { path: "/dashboard", component: Dashboard, roles: ["admin","editor","guest"] },
  { path: "/error/404", component: Error404 },
];
 