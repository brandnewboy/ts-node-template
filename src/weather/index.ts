import axios, { AxiosResponse, RawAxiosRequestHeaders } from 'axios'
interface IRequestBody {
    city?: string
    cityid?: string //城市（city,cityid,citycode三者任选其一）
    citycode?: string
    location?: string //经纬度 纬度在前，,分割 如：39.983424,116.322987
    ip?: string
}
async function main() {
    const host: string = "https://jisutqybmf.market.alicloudapi.com"
    const path: string = "/weather/query"
    const appcode: string = "AppCode"

    const headers: RawAxiosRequestHeaders & {
        Authorization: string
    } = {
        "Authorization": `APPCODE ${appcode}`,
        "Content-Type": "application/json; charset=UTF-8"
    }

    const reqBody: IRequestBody = {
        city: "重庆",
    }
    try {
        const url = `${host}${path}`
        const response: AxiosResponse = await axios.get(url, {
            method: 'GET',
            headers: headers,
            params: reqBody
        })
        console.log(response.toString())
        console.log(response.data)
    } catch (error) {
        console.error(error)
    }
}

main()
.then(() => {
    console.log("请求成功")
})