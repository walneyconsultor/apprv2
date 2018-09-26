import axios from 'axios';

import { AsyncStorage } from 'react-native';

export const API_LOGIN_URL = 'https://rede-verde-server.herokuapp.com/api/v1/auth/login'

export function makeLoginRequest(data) {
    axios.post(API_LOGIN_URL, data)

        .then(response => {

            if(response.data.status = 'success') {

                const { status, message, token } = response.data;

                return new Promise((resolve, reject) => {
                    AsyncStorage.setItem('user_token', token);
                    resolve(true);
                })

            } else {
                resolve(false);
            }

        })

        .catch(error => {
            console.log(error);
        })
}