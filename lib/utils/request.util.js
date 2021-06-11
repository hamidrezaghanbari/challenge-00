
// ** fetcher for fetch function

import axios from "axios"

// ** params ---- url ---- method ---- body ---- contentType ---- token 
export const fetcher = async (...params) => {

    const url = params[0]
    if (!url) throw new Error('url must indicated')

    const method = params[1] !== undefined ? params[1] : 'GET'
    const body = params[2]
    const contentType = params[3] !== undefined ? params[3] : 'application/json'
    const token = params[4] !== undefined ? params[4] : ''

    // console.log(method, 'method')
    // console.log(body, 'body')
    // console.log(contentType, 'contentType')
    // console.log(token, 'token')


    let response

    if (!body) {
        response = await fetch(url, {
            method: method,
            headers: {
                'Content-Type': contentType,
                'Accept': 'application/json',
                'Authorization': token
            }
        })
    } else {
        response = await fetch(url, {
            method: method,
            headers: {
                'Content-Type': contentType,
                'Accept': 'application/json',
                'Authorization': token
            },
            body: body
        })
    }

    const responseJson = await response.json()
    console.log(responseJson, 'response')
    return responseJson
}


// ** axios fetcher
export const axiosFetcher = async (...params) => {

    const url = params[0]
    if (!url) throw new Error('url must indicated')

    const method = params[1] !== undefined ? params[1] : 'GET'
    const body = params[2]
    const contentType = params[3] !== undefined ? params[3] : 'application/json'
    const token = params[4] !== undefined ? params[4] : ''

    // console.log(method, 'method')
    // console.log(body, 'body')
    // console.log(contentType, 'contentType')
    // console.log(token, 'token')


    let response

    if (!body) {
        response = await axios({
            method: method,
            url: url,
            headers: {
                'Content-Type': contentType,
                'Accept': 'application/json',
                'Authorization': token
            }
        })
    } else {
        response = await axios({
            method: method,
            url: url,
            data: body,
            headers: {
                'Content-Type': contentType,
                'Accept': 'application/json',
                'Authorization': token
            }
        })
    }

    console.log(response.data)
    return response.data
}