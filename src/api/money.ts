import axios from "axios";
import server from "./request";

export function searchMoney() {
    return server({
        url: '/search',
        method: 'get',
    })
}

export function changeMoney(data: any) {
    return server({
        url: '/changeMoney',
        method: 'post',
        data
    })
}

