import Link from "next/link"

const Posts = (props) => (
    <div>
        <h2><Link href="/posts/[id]" as={`/posts/${props.post.id}`}><a>{props.post.title}</a></Link></h2>
    </div>
)

export default Posts
