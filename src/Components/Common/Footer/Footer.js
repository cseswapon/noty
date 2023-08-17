import React from 'react'
import variable from './Footer.module.scss';

export default function Footer() {
  return (
    <footer className={`${variable.footerBg}`}>
      <div className={`${variable.container}`}>
      <h1>Hello Footer Section</h1>
      </div>
    </footer>
  )
}
