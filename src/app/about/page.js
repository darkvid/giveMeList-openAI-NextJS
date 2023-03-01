import styles from '../../styles/About.module.css'

const about = () => {
    return (
        <div className={styles.container}>
            <h1>NextJs Challenge</h1>
            <p>In this challenge we will build and app that connects with openAI API in order to give us a list of a topic</p>
            <p>Example:</p>
            <p>If you type "Paella" in the topic fied of main page, the api will return a list of steps to make a paella</p>
        </div>
    );
}

export default about;