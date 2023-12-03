import React from 'react'

import ListAgents from '../components/ListAgents'
import TitrePage from '../components/TitrePage'

const ServiceEnterAgent = () => {
  return (
    <div>
        <TitrePage/>
        <div className=" bg-orange-100 p-12 rounded-xl">
            <ListAgents/>
        </div>
    </div>
  )
}

export default ServiceEnterAgent