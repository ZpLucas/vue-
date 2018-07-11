import axios from 'axios'
const baseUrl = ''
export default function ajax(url,data={},type='GET') {
  return new Promise(function (resolve,reject) {
    let promise
    url = baseUrl + url
    if(type==='GET'){
      let paramStr = ''
      Object.keys(data).forEach(key => {
        paramStr +=key + '=' + data[key] + '&'
      })
      if(paramStr){
        paramStr = '?'+ paramStr.substring(0,paramStr.length-1)
      }
      promise = axios.get(url  + paramStr)
    }else{
      promise = axios.post(url,data)
    }
    promise.then(response =>  {
      resolve(response.data)
    }).catch(error => {
      reject(error)
    })
  })
}
