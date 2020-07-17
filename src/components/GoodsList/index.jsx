import React from "react";
import { Form, Table, Typography } from "antd";

const GoodsList = (props) => {
  return (
    <>
      {props.items.length ? (
      <Form.Item name="goods_list">
        <Table 
        columns={[
            {
                title: '物品ID',
                dataIndex: 'id',
            },
            {
                title: '物品数量',
                dataIndex: 'num',
            }
        ]} dataSource={props.items} size="small" pagination={false} rowKey={record => record.id + "_" + record.num}/>
      </Form.Item>
      ) : (<Typography.Text>没有添加物品</Typography.Text>
      )}
    </>
  );
};

export default GoodsList