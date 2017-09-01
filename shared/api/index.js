import ApiClient from './ApiClient';

export default function apiConstruct(config) {
    if (!config || !config.apiPrefix) throw new Error('[config.apiPrefix] required');

    const api = new ApiClient({ prefix: config.apiPrefix });

    return {
        apiClient : api
        // session     : new SessionAPI({ apiClient: api }),
    };
}
