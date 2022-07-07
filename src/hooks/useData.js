import { useEffect, useState } from "react"

const useData = (url, id) => {
    const [isLoading, setIsLoading] = useState(false);
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        setIsLoading(true);
        fetch(url + `/${id}`)
            .then(res => res.json())
            .then((data) => {
                setData(data)
            })
            .catch((error) => {
                setError(error.message);
            })
            .finally(() => {
                setIsLoading(false);
            })
    }, [url, id]);

    return [isLoading, data, error];
};

export default useData;
