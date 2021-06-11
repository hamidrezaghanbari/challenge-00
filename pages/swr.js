import useSWR from "swr"
import { axiosFetcher, fetcher } from "../lib/utils/request.util"

const SwrPage = () => {

    // ** pass
    // const { error, data } = useSWR('https://jsonplaceholder.ir/users', fetcher)

    // const { error, data } = useSWR(['https://jsonplaceholder.typicode.com/todos', 'GET'], fetcher)
    // const { error, data } = useSWR(['https://jsonplaceholder.typicode.com/todos', 'GET'], axiosFetcher)
    const { error, data } = useSWR(['https://jsonplaceholder.typicode.com/todos', 'GET'])


    if (error) return <p>error happened on the page</p>
    if (!data) return <p>loading ....</p>

    return (
        <div>
            <p>swr page</p>
            <button>click me</button>
        </div>
    )
}

export default SwrPage
