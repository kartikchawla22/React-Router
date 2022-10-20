import axios from "axios"
import { useEffect, useState } from "react"
import Loader from "../loader/loader";
import './news-feed.css';

const NewsFeed = (params) => {
    const [newsData, setNewsData] = useState({});
    const [isLoading, setIsloading] = useState(false);

    useEffect(() => {
        (async () => {
            setIsloading(true)
            const newsData = await axios.get("https://newsapi.org/v2/top-headlines?country=us&apiKey=a058eb099f404d14a491583b0afaa01c");
            console.log(newsData.data);
            setNewsData(newsData.data)
            setIsloading(false)
        })();
    }, []);

    return (
        isLoading ? <div className="news-container"><Loader></Loader></div> :
            newsData &&
            <div className="news-container">
                <div className="articles">
                    {newsData.articles?.map((article, index) =>
                        <div className="content">
                            {
                                article?.title ?
                                    <h2 className="title">
                                        {article.title}
                                    </h2>
                                    : <></>
                            }
                            {
                                article?.author ?
                                    <div className="author">
                                        By: {article.author}
                                    </div>
                                    :
                                    <></>
                            }
                            {
                                article?.urlToImage ?
                                    <div className="article-image">
                                        <img src={article.urlToImage} alt={article.title} />
                                    </div>
                                    : <></>
                            }
                            {
                                article?.description ?
                                    <div className="description">
                                        {article.description}
                                    </div>
                                    : <></>
                            }
                        </div>

                    )}
                </div>
            </div>
    )
}
export default NewsFeed