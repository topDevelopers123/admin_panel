import React from 'react'

function Loader({className}) {
  return (
    <div className={className}>
      <div class="spinner-border " role="status">
          <span class="sr-only">Loading...</span>
      </div>
      </div>
  )
}

export default Loader