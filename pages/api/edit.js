import { connectDB } from "@/util/database.js"
import { ObjectId } from "mongodb"

export default async function handler(req,res) {
    if(req.method == 'POST') {
        let editChange = { 
            title: req.body.title,
            content: req.body.content
        }

    const db = (await connectDB).db("forum")
    let result = await db.collection('post').updateOne(
        { _id : new ObjectId(req.body._id)},
        {$set: editChange}
        )
        res.status(200).redirect(302,'/list')
    }
}