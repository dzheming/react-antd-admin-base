import React from 'react';

const Dashboard = React.lazy(() => import(/*webpackChunkName:'Dashboard'*/'@/views/dashboard'));
const Explanation = React.lazy(() => import(/*webpackChunkName:'Explanation'*/'@/views/permission'));
const AdminPage = React.lazy(() => import(/*webpackChunkName:'AdminPage'*/'@/views/permission/adminPage'));
const GuestPage = React.lazy(() => import(/*webpackChunkName:'GuestPage'*/'@/views/permission/guestPage'));
const EditorPage = React.lazy(() => import(/*webpackChunkName:'EditorPage'*/'@/views/permission/editorPage'));
const About = React.lazy(() => import(/*webpackChunkName:'About'*/'@/views/about'));
const Error404 = React.lazy(() => import(/*webpackChunkName:'Error404'*/'@/views/error/404'));

export default [
  { path: "/dashboard", component: Dashboard, roles: ["admin","editor","guest"] },
  { path: "/permission/explanation", component: Explanation, roles: ["admin"] },
  { path: "/permission/adminPage", component: AdminPage, roles: ["admin"] },
  { path: "/permission/guestPage", component: GuestPage, roles: ["guest"] },
  { path: "/permission/editorPage", component: EditorPage, roles: ["editor"] },
  { path: "/about", component: About, roles: ["guest"] },
  { path: "/error/404", component: Error404 },
];
 