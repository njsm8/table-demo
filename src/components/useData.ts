import { useState, useEffect } from 'react';

interface Project {
    "s.no"?: number;
    "amt.pledged"?: number;
    "blurb"?: string;
    "by"?: string;
    "country"?: string;
    "currency"?: string;
    "end.time"?: string;
    "location"?: string;
    "percentage.funded"?: number;
    "num.backers"?: string;
    "state"?: string;
    "title"?: string;
    "type"?: string;
    "url"?: string;
}

interface UseDataResult {
    data: Project[] | null;
    loading: boolean;
    error: Error | null;
}

export const useData = (): UseDataResult => {
    const [data, setData] = useState<Project[] | null>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<Error | null>(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true);
                // Delay 2 seconds to show loading 
                await new Promise((resolve) => setTimeout(resolve, 2000));
                const response = await fetch('https://raw.githubusercontent.com/saaslabsco/frontend-assignment/refs/heads/master/frontend-assignment.json');
                
                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }
                
                const jsonData = await response.json();
                setData(jsonData);
            } catch (err) {
                setError(err instanceof Error ? err : new Error('An unknown error occurred'));
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    return { data, loading, error };
};

export default useData;