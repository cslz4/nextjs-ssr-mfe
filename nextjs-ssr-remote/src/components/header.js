import { useState } from "react"

export default function Header() {
  const [count, setCount] = useState(0)

  return <header>Nav from remote <button type="button" onClick={() => setCount(state => state + 1)}>{count}</button></header>
}
