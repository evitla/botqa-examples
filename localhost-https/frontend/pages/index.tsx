import { useEffect, useState } from 'react'

export default function Home() {
  const [data, setData] = useState('')

  useEffect(() => {
    const a = async () => {
      const res = await fetch('https://localhost/api/hello', { credentials: 'include' })

      const data = await res.json()
      setData(JSON.stringify(data))
    }

    a()
  }, [])

  return (
    <>
      <button className="text-red-300" onClick={console.log}>
        schrute farm !!! battle star galactica Michael Scott, no no please god no, nooooooo I
        declare bankcrupcy, only friends
      </button>
      <pre>{JSON.stringify(data)}</pre>
    </>
  )
}
