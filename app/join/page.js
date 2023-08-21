

export default function Join() {
    return(
        <div>
            <h3>회원가입</h3>
            <form action="/api/join" method="POST">
                <input type="text" name="ID" placeholder="아이디" />
                <input type="password" name="PASSWORD" placeholder="비밀번호" />
                <button type="submit">전송</button>
            </form>
        </div>
    )
}