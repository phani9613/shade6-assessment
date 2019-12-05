import { Injectable } from '@angular/core';

@Injectable()
export class PageUrlConstant {

    public static URL = {
        API_BASE_URL: 'http://10.219.90.162:3000/', 
       user:localStorage.getItem("userId")
    };
    public static env: object = {};
    public static changeEnv(envObj) {
        PageUrlConstant.env = envObj;
    }

}
