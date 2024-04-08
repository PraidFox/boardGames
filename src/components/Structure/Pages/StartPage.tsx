export const StartPage = () => {

    const moreText = () => {
        let jsxContent = []
        for (let i = 0; i < 100; i++) {
            jsxContent.push(<h1 key={i}>Проверка если будет много текста</h1>)
        }
        return jsxContent
    }

    return (
        <div>
            {moreText()}
        </div>
    )
}