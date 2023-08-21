import { connectDB } from "@/util/database.js"
import { ObjectId } from "mongodb"

export default async function Edit(props) {

    const db = (await connectDB).db("forum")
    let result = await db.collection('post').findOne({ _id: new ObjectId(props.params.id )})

    await db.collection('post').updateOne({ _id: new ObjectId(props.params.id) },
        {$set: { title: '바보', content: '바보2' }}
    )

    console.log(result)

    return(
        <div>
            <h4>글수정</h4>

            <form action="/api/edit" method="POST">
                <input type="text" name="title" defaultValue={result.title}/>
                <input type="text" name="content" defaultValue={result.content}/>
                <input type="text" name="_id" defaultValue={result._id.toString()} style={{display:"none"}}/>
                <button type="submit">버튼</button>
            </form>
        </div>
    )
}