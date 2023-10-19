import { useEffect, useState } from "react"

const useData = (url) => {
    const [state, setState] = useState()

    useEffect(() => {
        const fetchData = async () => {
            const data = await (await fetch(url, {mode: 'cors'})).json() 

            setState(data)
        }

        fetchData()
    }, [url])

    return {data : state}
}

export default useData