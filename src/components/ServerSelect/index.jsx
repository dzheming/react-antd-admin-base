import React, { Component } from 'react'
import { Select } from 'antd'

class ServerSelect extends Component {
    handleChange(serverId) {
        const { onChange } = this.props
        onChange(serverId)
    }
    render() {
        const { serverList, mode } = this.props
        return (
            <Select placeholder="Please select server "
            onChange={e => this.handleChange(e)}
            mode={mode}
            >
          {serverList.map((server) => (
            <Select.Option key={server.server_id}>
              {server.server_id} {server.server_name}
            </Select.Option>
          ))}
        </Select>
        )
    }
}

export default ServerSelect