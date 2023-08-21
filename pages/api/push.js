import { connectDB } from "@/util/database.js"


export default async function handler(req,res) {


    if(req.method == 'POST') {
        if(req.body.title == '') {
            return res.status(400).json('글제목을 입력해주세요')
        }
        if(req.body.content == '') {
            return res.status(400).json('글내용을 입력해주세요')
        }
        console.log(req.body)
        const db = (await connectDB).db("forum")
        let result = await db.collection('post').insertOne(req.body);
        // return res.status(200).json('저장완료')
        return res.status(200).redirect('/list')
    }


    if(req.method == 'GET') {
        return res.status(200).json('처리완료')
    }
    
}