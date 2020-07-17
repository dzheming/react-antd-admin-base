import React from "react";
import { DatePicker } from "antd";
import moment from "moment";

class DateTimeRangePicker extends React.Component {
    
  range(start, end) {
    const result = [];
    for (let i = start; i < end; i++) {
      result.push(i);
    }
    return result;
  }
 
  disabledDate(current) {
    const { disabledDate } = this.props
    return disabledDate && current < moment();
  }
  disabledRangeTime(dates, type) {
    const { disabledRangeTime } = this.props
    if (!disabledRangeTime) {
        return [];
    }
    if (type === "start") {
      let hours = moment().hours();
      let minutes = moment().minutes();
      let pic = moment(dates);
      if (pic.endOf("hour").valueOf() === moment().endOf("hour").valueOf()) {
        return {
          disabledHours: () => this.range(0, hours),
          disabledMinutes: () => this.range(0, minutes),
        };
      }
      if (pic.endOf("day").valueOf() === moment().endOf("day").valueOf()) {
        return {
          disabledHours: () => this.range(0, hours),
        };
      }
    }
  }

      handleChange(time) {
        const { onChange } = this.props
        onChange(time)
    }
  render() {
    return (
      <DatePicker.RangePicker
        disabledDate={e => this.disabledDate(e)}
        disabledTime={(e,type) => this.disabledRangeTime(e, type)}
        showTime
        format="YYYY-MM-DD HH:mm:00"
        defaultValue={[moment(), null]}
        onChange={e => this.handleChange(e)}
      />
    );
  }
}

export default DateTimeRangePicker;
