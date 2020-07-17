import React, { useState } from "react";
import { Form, Input, Button, message } from "antd";
import ModalForm from "@/components/AddItemForm";
import GoodsList from "@/components/GoodsList";
import ServerSelect from "@/components/ServerSelect";

const layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 16,
  },
};
const tailLayout = {
  wrapperCol: {
    offset: 8,
    span: 16,
  },
};

const MailSend = (props) => {
  const [visible, setVisible] = useState(false);
  const { serverList, req, mode, isRole } = props;

  const showUserModal = () => {
    setVisible(true);
  };

  const hideUserModal = () => {
    setVisible(false);
  };

  const onFinish = (values) => {
    req(values)
      .then((data) => {
        message.success("发送成功");
      })
      .catch((error) => {
        message.error(error);
      });
  };

  const [form] = Form.useForm();

  const clearGoodsList = () => {
    form.setFieldsValue({
      goods_list: [],
    });
  };

  return (
    <>
      <Form.Provider
        onFormFinish={(name, { values, forms }) => {
          if (name === "itemForm") {
            const { basicForm } = forms;
            const items = basicForm.getFieldValue("goods_list") || [];
            if (items.length >= 4) {
              message.error("物品最多4个");
              return;
            }
            if (
              items.some(function (item) {
                return item.id === values.id && item.num === values.num;
              })
            ) {
              message.error("不能添加重复物品");
              return;
            }
            basicForm.setFieldsValue({
              goods_list: [...items, values],
            });
            setVisible(false);
          }
        }}
      >
        <Form
          form={form}
          {...layout}
          name="basicForm"
          onFinish={onFinish}
          style={{
            width: 800,
          }}
        >
          <Form.Item
            name={isRole ? "server_id" : "server_ids" }
            label="服务器"
            rules={[
              {
                required: true,
                message: "Please select server !",
              },
            ]}
          >
            <ServerSelect serverList={serverList} mode={mode}/>
          </Form.Item>
          {
              isRole ? (<Form.Item
                name="role_id"
                label="角色ID"
                rules={[
                    {
                      required: true,
                      message: "Please input title!",
                    },
                  ]}
                  
              >
                  <Input placeholder="Please input role id" />
              </Form.Item>) : (<></>)
          }
          <Form.Item
            name="title"
            label="标题"
            rules={[
              {
                required: true,
                message: "Please input title!",
              },
            ]}
          >
            <Input placeholder="Please input title" />
          </Form.Item>
          <Form.Item
            name="context"
            label="正文"
            rules={[
              {
                required: true,
                message: "Please input context!",
              },
            ]}
          >
            <Input.TextArea rows={4} placeholder="Please input context" />
          </Form.Item>
          <Form.Item
            label="物品列表"
            shouldUpdate={(prevValues, curValues) =>
              prevValues.goods_list !== curValues.goods_list
            }
          >
            {({ getFieldValue }) => {
              const items = getFieldValue("goods_list") || [];
              return <GoodsList items={items} />;
            }}
          </Form.Item>
          <Form.Item {...tailLayout}>
            <Button htmlType="submit" type="primary">
              发送
            </Button>
            <Button
              htmlType="button"
              style={{
                margin: "0 8px",
              }}
              onClick={showUserModal}
            >
              添加物品
            </Button>
            <Button
              htmlType="button"
              style={{
                margin: "0 8px",
              }}
              onClick={clearGoodsList}
            >
              清空物品
            </Button>
          </Form.Item>
        </Form>

        <ModalForm visible={visible} onCancel={hideUserModal} />
      </Form.Provider>
    </>
  );
};

export default MailSend
