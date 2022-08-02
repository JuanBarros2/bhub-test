import { EnvService } from './../../interfaces/EnvService';

export default class EnvServiceImpl implements EnvService {
    get(key: string) {
        return process.env[key]
    };
}