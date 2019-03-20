import CONFIG from '../config/index';

const instance = CONFIG.instance;

export function getBaseApi(_url, _params) {
    let json = {};
    if (_params) {
        json.params = {..._params}
    }
    return instance.get(_url, json).then(response => {
        console.log("Method get");
        console.log("URL", _url);
        console.log("Params", json);
        return response.data.data
    }).catch(err => {
        console.log("Errr", err);
        return err
    })
}

export function postBaseApi(_url, _body) {
    // let json = {};
    // if (_body) {
    //     json = _body
    // }

    return instance.post(_url, _body).then(response => {
        console.log("Method Post");
        console.log("URL", _url);
        console.log("Params", _body);
        return response.data.data
    }).catch(err => {
        console.log("Errr", err);
        return err
    })
}
