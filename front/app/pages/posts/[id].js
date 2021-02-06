import fs from "fs"
import path from "path"

export default function Post(params) {
    return (
        <p>{params.title}</p>
    )
}

export async function getStaticProps({ params }) {
    const content = await readContentFile({ fs, slug: params.id })
    return {
        props: {
            title: content.title
        }
    }
}