import Posts from "../components/Posts";

function Page(props) {
  return (
    <div>
      <h1>POSTの一覧</h1>
      {props.posts.map((post) =>
        <Posts post={post} key={post.id} />
      )}
    </div>
  )
}

// SSGのビルド時のみ呼ばれるライフサイクル
//   -- ビルド時に記事一覧を取得するAPIを叩き、コンポーネントのPropsにその内容を渡す
//   -- その内容が渡されたコンポーネントからHTMLが生成されるため、記事データを文字列として含むHTMLが生成される
export async function getStaticProps() {
  const response = await fetch("http://api:3000/posts", {method: "GET"});
  const json = await response.json();

  return {
    props: {
      posts: json.data
    },
  };
}

export default Page;
