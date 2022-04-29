import React from "react"

function Layout({ children, className }: JSX.IntrinsicElements["div"]) {
  return <div className={`w-6/12 m-auto ${className}`}>{children}</div>
}

export default Layout
