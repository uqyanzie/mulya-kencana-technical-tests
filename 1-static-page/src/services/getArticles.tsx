import Article from "../types/article";

export default async function getArticles() : Promise<Article[]> {
    const options = {
        method: 'GET',
        headers: {
        'Content-Type': 'application/json',
        },
    };
  
    const response = await fetch(
        'https://jsonplaceholder.typicode.com/posts', 
        options
    )
    
    if (!response.ok) {
        throw new Error('Network response was not ok');
    }

    const data: Article[] = await response.json();

    return data;
}