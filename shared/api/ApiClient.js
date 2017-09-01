import api from '../apiSingleton.js';

// import config from '../etc/config.js';

export default class ApiClient {
    constructor({ prefix = '' } = {}) {
        this.prefix = prefix;
    }

    prepareBody(params) {
        return Object.keys(params).map(key => `${key}=${params[key]}`).join('&');
    }

    get(requestUrl, params = {}) {
        return this.request({
            url    : requestUrl,
            method : 'get',
            params
        });
    }

    put(requestUrl, payload = {}) {
        return this.request({
            url    : requestUrl,
            method : 'put',
            body   : this.prepareBody(payload)
        });
    }

    putJSON(requestUrl, payload = {}, params = {}) {
        return this.request({
            url     : requestUrl,
            method  : 'put',
            body    : JSON.stringify(payload),
            headers : {
                'Content-Type' : 'application/json; charset=utf-8'
            },
            params
        });
    }

    patch(requestUrl, payload = {}) {
        return this.request({
            url    : requestUrl,
            method : 'put',
            data   : payload
        });
    }

    patchJSON(requestUrl, payload = {}, params = {}) {
        return this.request({
            url     : requestUrl,
            method  : 'patch',
            body    : JSON.stringify(payload),
            headers : {
                'Content-Type' : 'application/json; charset=utf-8'
            },
            params
        });
    }

    post(requestUrl, payload = {}, params = {}) {
        return this.request({
            url    : requestUrl,
            method : 'post',
            body   : this.prepareBody(payload),
            params
        });
    }

    postJSON(requestUrl, payload = {}, params = {}) {
        return this.request({
            url     : requestUrl,
            method  : 'post',
            body    : JSON.stringify(payload),
            headers : {
                'Content-Type' : 'application/json; charset=utf-8'
            },
            params
        });
    }

    postFormData(requestUrl, formData) {
        return this.request({
            url         : requestUrl,
            type        : 'POST',
            data        : formData,
            cache       : false,
            contentType : false,
            processData : false
        });
    }

    delete(requestUrl) {
        return this.request({
            url    : requestUrl,
            method : 'delete',
            body   : '{"data":{}}'
        });
    }

    async request(options) {
        const tmpOptions = { ...options };

        if (!tmpOptions.params) {
            tmpOptions.params = {};
        }

        if (!this.prefix) {
            await api.config.getAPI();
        }
        // + connection
        if (this.prefix) {
            const fetchOptions = {
                ...tmpOptions,
                headers : {
                    'Content-Type'     : 'application/x-www-form-urlencoded; charset=utf-8',
                    'X-APP-AUTH-TOKEN' : this.appAuthToken,
                    ...(tmpOptions.headers || {})
                }
            };

            if (![ 'login', 'login-guest' ].includes(tmpOptions.url)) {
                fetchOptions.headers['X-USER-AUTH-TOKEN'] = this.authToken;
            }

            const res  = await fetch(`${this.prefix}/${options.url}`, fetchOptions);

            const data = await res.json();

            if (data && !data.error && !data.Message && data.status !== 0) {
                return data;
            }

            if (this.onError) {
                this.onError(data.error);
            }

            return Promise.reject(data.error);
        }

        throw new Error('No internet connection');
    }

    setAuthToken(authToken) {
        this.authToken = authToken;
    }

    setUserId(userId) {
        this.userId = userId;
    }

    setPrefix(prefix = '') {
        this.prefix = prefix;
    }

    setErrorHandler(handler) {
        this.onError = handler;
    }
}
