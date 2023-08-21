import { connectDB } from "@/util/database.js"


export default async function handler(res,req) {

    const db = (await connectDB).db("forum")
    let result = await db.collection('post').find().toArray();
    console.log(result)

    if(res.method == 'POST') {
        return req.status(200).json('처리완료')
    }

    if(res.method == 'GET') {
        return req.status(200).json(result)
    }
    
}