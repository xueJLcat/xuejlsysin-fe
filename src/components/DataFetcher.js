import React, { useState, useEffect } from 'react';
import { httpService } from '../utils/HttpService';

function DataFetcher() {
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        httpService.get('/api/data')
            .then(data => setData(data))
            .catch(error => setError(error));
    }, []);

    if (error) {
        return <div>Error: {error.message}</div>; // 显示错误消息
    }

    return (
        <div>
            {data ? <pre>{JSON.stringify(data, null, 2)}</pre> : <p>Loading...</p>}
        </div>
    );
}

export default DataFetcher;
