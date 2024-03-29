import { useState, useEffect } from "react"

const UserUseFetch = (url) => {

    const [data, setData] = useState(null)
    const [error, setError] = useState(null)
    const [isPending, setIsPending] = useState(true)


    useEffect(() => {
        setTimeout(() => {
            fetch(url)
                .then(res => {
                    if (!res.ok) {
                        throw Error("Could not fetch data! :(")
                    }
                    return res.json()
                })
                .then(data => {
                    setIsPending(false)
                    setData(data)
                    setError(null)
                })
                .catch((err) => {
                    setError(err.message)
                })
        }, 1000)
    }, [])

    return { data, error, isPending }
}

export default UserUseFetch;