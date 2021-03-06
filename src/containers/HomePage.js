import React, { Component } from 'react'
import InfoCard from 'src/components/InfoCard'
import FormCard from 'src/components/FormCard'
import {DRIVER, STUDENT, SEARCH} from 'src/data/route/index'

class AdminHomePage extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div>
        <InfoCard/>
        <FormCard
          title={'学生列表'}
          description={'取消订单, 更改信息, 更换司机'}
          link={STUDENT}
        />
        <br/>
        <FormCard
          title={'司机列表'}
          description={'取消订单, 更改信息, 验证司机'}
          link={DRIVER}
        />
        <br/>
        <FormCard
          title={'查找用户'}
          description={'查找学生, 查找司机'}
          link={SEARCH}
        />
        <br/>
      </div>
    )
  }
}

export default AdminHomePage
