export default function handler(res,req) {
    console.log(123)
    if(res.method == 'POST') {
        return req.status(200).json('처리완료')
    }

    if(res.method == 'GET') {
        return req.status(200).json('처리완료')
    }
    
}