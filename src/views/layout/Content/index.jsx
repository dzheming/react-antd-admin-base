import React, { useEffect } from "react";
import { Redirect, withRouter, Route, Switch } from "react-router-dom";
import { connect } from "react-redux";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import { Layout } from "antd";
import { getMenuItemInMenuListByProperty } from "@/utils";
import routeList from "@/config/routeMap";
import menuList from "@/config/menuConfig";
import Loading from "@/components/Loading";
const { Content } = Layout;

const LayoutContent = (props) => {
  const { role, location } = props;
  const { pathname } = location;
  useEffect(() => {
    let title = "Ant Design Pro";
    let item = getMenuItemInMenuListByProperty(menuList, "path", pathname);
    if (item) {
      title = `${item.title} - Ant Design Pro`;
    }
    document.title = title;
  });
  const handleFilter = (route) => {
    return role === "admin" || !route.roles || route.roles.includes(role);
  };
  return (
    <Content style={{ height: "calc(100% - 100px)", marginTop: "2px" }}>
      <TransitionGroup>
        <CSSTransition
          key={location.pathname}
          timeout={500}
          classNames="fade"
          exit={false}
        >
          <Switch location={location}>
            <Redirect exact from="/" to="/dashboard" />
            {routeList.map((route) => {
              return (
                handleFilter(route) && (
                  <Route
                    render={() => {
                      return (
                        <React.Suspense fallback={<Loading />}>
                          <route.component />
                        </React.Suspense>
                      );
                    }}
                    key={route.path}
                    path={route.path}
                  />
                )
              );
            })}
            <Redirect to="/error/404" />
          </Switch>
        </CSSTransition>
      </TransitionGroup>
    </Content>
  );
};

export default connect((state) => state.user)(withRouter(LayoutContent));
