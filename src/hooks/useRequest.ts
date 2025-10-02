import { useState, useEffect } from "react";



export default function useRequest<T = any>(
    request: () => Promise<{ data: T }>
): [T | null, boolean, string] {
    const [data, setData] = useState<T | null>(null);
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<string>('');

    useEffect(() => {
        setLoading(true);
        setError('');
        
        request()
            .then(response => {
                setData(response.data);
            })
            .catch(error => {
                setError(error.message || 'An error occurred');
            })
            .finally(() => {
                setLoading(false);
            });
    }, [request]);

    return [data, loading, error];
}