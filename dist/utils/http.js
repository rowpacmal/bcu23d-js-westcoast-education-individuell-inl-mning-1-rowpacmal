var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { state } from './config.js';
export function httpClient(endpoint, method = 'GET', data) {
    return __awaiter(this, void 0, void 0, function* () {
        const url = `${state.BASE_URL}${endpoint}`;
        let options;
        switch (method) {
            case 'GET':
            case 'DELETE':
                const baseMethod = {
                    method: method,
                };
                options = baseMethod;
                break;
            case 'POST':
            case 'PUT':
                const patchMethod = {
                    method: method,
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(data),
                };
                options = patchMethod;
                break;
            default:
                throw new Error(`'${method}' is not a valid method parameter for httpClient()`);
        }
        try {
            const response = yield fetch(url, options);
            if (response.ok) {
                return yield response.json();
            }
            else {
                throw new Error(`${response.status} ${response.statusText}`);
            }
        }
        catch (error) {
            throw error;
        }
    });
}
