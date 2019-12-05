import { Injectable } from '@angular/core';

@Injectable()
export class PageUrlConstant {

    public static URL = {
        API_BASE_URL: 'http://localhost:3000/', 
       user:localStorage.getItem("userId")
    };
    public static env: object = {};
    public static changeEnv(envObj) {
        PageUrlConstant.env = envObj;
    }

}
