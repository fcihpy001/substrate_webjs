import React, { useState } from 'react'
import { Form, Grid, Card, Statistic } from 'semantic-ui-react'

import { TxButton } from './substrate-lib/components'

export default function Main (props) {

  const [kittyCnt] = useState(0)

  const [status] = useState('')

  return <Grid.Column width={16}>
    <h1>小毛孩</h1>
    <Card centered>
        <Card.Content textAlign="center">
          <Statistic label="当前毛孩数量:" value={kittyCnt} />
        </Card.Content>
      </Card>
    <Form style={{ margin: '1em 0' }}>
      <Form.Field style={{ textAlign: 'center' }}>
        <TxButton
          label= "创建小毛孩" type='SIGNED-TX'
          attrs={{
            palletRpc: 'KittiesModule',
            callable: 'create',
            inputParams: [],
            paramFields: []
          }}
        />
      </Form.Field>
    </Form>
    <div style={{ overflowWrap: 'break-word' }}>{status}</div>
  </Grid.Column>

}
