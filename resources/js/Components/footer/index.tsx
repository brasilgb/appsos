import React from 'react'
import moment from "moment"

const Footer = () => {
  return (
    <footer className="flex flex-row items-center justify-betwen">
    <div className="flex flex-1 justify-end">
        <p>&copy;{moment().format('YYYY')}</p>
    </div>
    <div className="flex flex-1 justify-end">
        <p>dev</p>
    </div>
</footer>
  )
}

export default Footer