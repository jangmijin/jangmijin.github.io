export default function Write() {
    return (
        <div>
            <h4>글작성</h4>
            <form action="/api/test" method="POST">
                <button type="submit">버튼</button>
            </form>

            <form action="/api/push" method="POST">
                <input type="text" name="title" placeholder="글제목"/>
                <input type="text" name="content" placeholder="글내용"/>
                <button type="submit">버튼</button>
            </form>
        </div>
    )
}