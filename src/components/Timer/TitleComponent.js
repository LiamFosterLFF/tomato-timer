import React from 'react'
import Helmet from 'react-helmet'

const TitleComponent = ({ title, show }) => {
  const titleSwitch = (show) ? title : null
  return (
    <Helmet>
      <title>{titleSwitch}</title>
    </Helmet>
  )
}

export default TitleComponent
