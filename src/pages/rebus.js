import React, { useEffect } from "react"

const DirektePage = () => {
  useEffect(() => {
    if (typeof window !== "undefined")
      window.location.href = "https://forms.gle/oMAvY4o251HyEx1UA"
  }, [])
  return <></>
}

export default DirektePage
