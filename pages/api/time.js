


export default async function handler(res,req) {

    let today = new Date();  

    if(res.method == 'POST') {
        return req.status(200).json('처리완료')
    }

    if(res.method == 'GET') {
        return req.status(200).json(today)
    }
    
}