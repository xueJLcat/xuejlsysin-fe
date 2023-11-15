import axios from 'axios';

class HttpService {
    constructor() {
        this.client = axios.create({
            baseURL: process.env.REACT_APP_BACKEND_URL,
            headers: {
                'Content-Type': 'application/json',
            },
        });
    }

    async request(method, path, payload = {}, config = {}) {
        try {
            const response = await this.client[method](path, payload, config);
            return response.data;
        } catch (error) {
            this.handleError(error);
        }
    }

    get(path, config = {}) {
        return this.request('get', path, {}, config);
    }

    post(path, payload, config = {}) {
        return this.request('post', path, payload, config);
    }

    put(path, payload, config = {}) {
        return this.request('put', path, payload, config);
    }

    delete(path, config = {}) {
        return this.request('delete', path, {}, config);
    }

    handleError(error) {
        if (error.response) {
            // 请求已发出，服务器以状态码进行响应
            // 超出2xx的范围
            console.error("Backend returned status code:", error.response.status);
            console.error("Response data:", error.response.data);
            // 处理特定的响应错误代码
        } else if (error.request) {
            // 请求已发出但没有收到响应
            console.error("No response received:", error.request);
        } else {
            // 发送请求时出错
            console.error("Error setting up request:", error.message);
        }
        // 如果需要，这里可以返回默认的错误消息或对象
        throw error;
    }
}

export const httpService = new HttpService();
