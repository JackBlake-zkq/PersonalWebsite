import { readable } from 'svelte/store';
import { getValue, fetchAndActivate } from "@firebase/remote-config";
import { remoteConfig } from './firebase';

export const aboutMeInfo = readable(null, set => {
    let info = {};
    fetchAndActivate(remoteConfig)
    .then(() => {
        console.log('remote config loaded')
    })
    .catch(err => console.error(err))
    .finally(() => {
        //If there was an error fetching, it will use the defult values from firebase.js
        info.whoAmI = getValue(remoteConfig, 'who_am_i').asString();
        info.technicalDesc = getValue(remoteConfig, 'technical_desc').asString();
        info.freeTimeDesc = getValue(remoteConfig, 'free_time_desc').asString();
        set(info);
    });
});