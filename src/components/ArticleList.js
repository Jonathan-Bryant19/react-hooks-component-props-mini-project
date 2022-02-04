import Article from './Article'


function ArticleList(props) {
    console.log(props.posts)

    const postArr = props.posts

    const article = postArr.map(posts => {
        return <Article key={posts.id} title={posts.title} date={posts.date} preview={posts.preview} minutes={posts.minutes}/>
      })

    return (
        <main>
            {article}
        </main>
    )
}

export default ArticleList
