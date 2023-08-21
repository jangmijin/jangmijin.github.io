'use client'

import Link from "next/link"


export default function ListItem(props) {

    return (
        <div>
            {
                props.result.map((a, i)=>{
                    return (
                        <div className="list-item" key={i}>
                            <Link href={`/detail/${props.result[i]._id}`}>
                                <h4>{props.result[i].title}</h4>
                            </Link>
                            <p>{props.result[i].content}</p>

                            <Link href={'/edit/' + props.result[i]._id }>수정</Link>
                            {/* <Link href={'/delete/' + props.result[i]._id }>삭제</Link> */}



                            <span onClick={(e)=>{
                                fetch('/api/delete' ,
                                {
                                    method:'DELETE',
                                    body : props.result[i]._id
                                    
                                })
                                
                                .then((r)=> {
                                    return r.json()
                                })
                                .then(()=> {
                                    e.target.parentElement.style.opacity = 0;
                                    setTimeout(()=>{
                                        e.target.parentElement.style.display = 'none';
                                    },100)
                                })

                                
                            }}>삭제</span>
                        </div>
                    )
                })

            }
           
        </div>
    )
}