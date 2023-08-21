import { connectDB } from "@/util/database.js"
import { ObjectId } from "mongodb"

export default async function handler(req,res) {

   
    if(req.method == 'POST') {
        if(req.body.id == '') {
            return res.status(400).json('아이디를 입력해주세요')
        }
        if(req.body.password == '') {
            return res.status(400).json('비밀번호를 입력해주세요')
        }
        console.log(req.body)

        const db = (await connectDB).db("forum")
        let result = await db.collection('join').insertOne(req.body);

        let result2 = await db.collection('join').findOne({ID});
        console.log(result2)

        // return res.status(200).json('저장완료')
        return res.status(200).json('저장완료')
    }


    if(req.method == 'GET') {
        return res.status(200).json('처리완료')
    }
    
    
}