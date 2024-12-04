import React from 'react'

const Breadcum = ({children,Mode}) => {
  return (
        <nav id="breadcrumbs" class={Mode}>
            {children}
        </nav>
  )
}

export default Breadcum