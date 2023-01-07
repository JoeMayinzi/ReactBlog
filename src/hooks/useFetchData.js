import { useEffect } from "react"
import { useState } from "react"

export const useFetchData = (url) => {
    const [articles, setArticles] = useState([])
    const [isLoading, setIsLoading] = useState(true);

    useEffect(()=> {
        const fetchData = async () => {
            try {
                const request  =  await fetch(url);
                const response =  await request.json();
                const newArticles = response

                if (request.ok) {
                    setArticles(newArticles)
                    setIsLoading(false)
                }

            } catch (e) {
                console.log("une erreur est survenue", e)
            }
        }

        fetchData()
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return [articles, setArticles, isLoading]

}