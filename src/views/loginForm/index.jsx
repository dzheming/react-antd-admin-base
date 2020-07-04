import React, { useState } from "react";
import { Form, Input, Button, message, Spin } from "antd";
import {
  UserOutlined,
  LockOutlined,
} from "@ant-design/icons";
import { connect } from "react-redux";
import "./index.less";
import { login, getUserInfo } from "@/store/actions";

const LoginForm = (props) => {
  const { login, getUserInfo } = props;
  const [loading, setLoading] = useState(false);

  const onFinish = (values) => {
    const { username, password } = values;
    setLoading(true);
    login(username, password)
      .then((data) => {
        message.success("登录成功");
        getUserInfo(data.token)
        .then((data) => {})
        .catch((error) => {
          message.error(error);
        });
      })
      .catch((error) => {
        setLoading(false);
      });
  };

  return (
    <div className="content">
      <h2 className="title">用户登录</h2>
      <Form onFinish={onFinish} 
      initialValues={{
        username: 'admin',
        password: '22222',
      }}>
      <Spin spinning={loading} tip="登录中...">
        <Form.Item
          name="username"
          rules={[
            { required: true, whitespace: true, message: "请输入用户名" },
            { min: 4, message: "用户名至少4位" },
            { max: 12, message: "用户名最多12位" },
            {
              pattern: /^[a-zA-Z0-9_]+$/,
              message: "用户名必须是英文、数字或下划线组成",
            },
          ]}
        >
          <Input
            size="large"
            allowClear={true}
            prefix={<UserOutlined />}
            placeholder="用户名"
          />
        </Form.Item>
        <Form.Item
          name="password"
          rules={[
            {
              required: true,
              message: "Please input your Password!",
            },
          ]}
        >
          <Input
            size="large"
            allowClear={true}
            prefix={<LockOutlined />}
            type="password"
            placeholder="密码"
          />
        </Form.Item>
        <Form.Item style={{ marginBottom: 0 }}>
          <span className="register link">注册新用户</span>
          <Button
            size="large"
            type="primary"
            htmlType="submit"
            className="submit"
          >
            立即登录
          </Button>
        </Form.Item>
        </Spin>
      </Form>
    </div>
  );
};

export default connect((state) => state.user, { login, getUserInfo })(
  LoginForm
);
