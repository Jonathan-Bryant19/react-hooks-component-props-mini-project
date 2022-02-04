
function Article(props) {
    const minsToRead = props.minutes
    let emoji = '☕️'
    if (minsToRead < 30) {     
        const numOfCups =  Math.ceil(minsToRead/5)
        emoji = emoji.repeat(numOfCups)
        console.log(emoji)
    } else {
        emoji = '🍱'
        const numOfBoxes = Math.ceil(minsToRead/10)
        emoji = emoji.repeat(numOfBoxes)
    }

    return (
        <article>
            <h3>{props.title}</h3>
            <small>{props.date || "January 1, 1970"} • {emoji} {minsToRead} min read </small>
            <p>{props.preview}</p>
        </article>
    )
}

export default Article