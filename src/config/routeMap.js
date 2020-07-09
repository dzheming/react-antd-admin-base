import React from 'react';

const Dashboard = React.lazy(() => import(/*webpackChunkName:'Dashboard'*/'@/views/dashboard'));
const About = React.lazy(() => import(/*webpackChunkName:'About'*/'@/views/about'));
const Error404 = React.lazy(() => import(/*webpackChunkName:'Error404'*/'@/views/error/404'));

export default [
  { path: "/dashboard", component: Dashboard, roles: ["admin","editor","guest"] },
  { path: "/about", component: About, roles: ["admin","editor","guest"] },
  { path: "/error/404", component: Error404 },
];
 