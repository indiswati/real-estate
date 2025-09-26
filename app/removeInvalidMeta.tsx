"use client"
import { useEffect } from "react"

export default function RemoveInvalidMeta() {
  useEffect(() => {
    const invalidMeta = document.querySelector('meta[name="next-size-adjust"]')
    if (invalidMeta) invalidMeta.remove()
  }, [])

  return null
}