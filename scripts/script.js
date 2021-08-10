async function getdata(query) {
    let res = await fetch(`https://newsapi.org/v2/everything?q=${query}&from=2021-07-09&sortBy=publishedAt&apiKey=4c5aa34fa7d44f96a8140abdd0bb2153`)
    let data = await res.json();
    // console.log(data.articles[2].description);
    return data;
}

const appendData = ({ author, content, publishedAt, title, url, urlToImage }) => {
    let main_div = document.getElementById('middleDiv');

    let ancle = document.createElement('a');
    ancle.href = url;
    ancle.target = 'blank';

    let div = document.createElement('div')
    div.setAttribute('class', 'eachDiv')
    // first
    let tittleDiv = document.createElement('div');
    let title_p = document.createElement('p');
    title_p.innerHTML = title;
    let author_p = document.createElement('p');
    author_p.innerHTML = author;
    let pub_p = document.createElement('p');
    pub_p.innerHTML = publishedAt;
    tittleDiv.append(title_p, author_p, pub_p)
    // second
    let desc_div = document.createElement('div');
    let desc_p = document.createElement('p');
    desc_p.innerHTML = content;
    desc_div.append(desc_p);

    // third
    let img_div = document.createElement('div');
    let img_p = document.createElement('img');
    img_p.src = urlToImage;
    img_div.append(img_p);

    div.append(tittleDiv, desc_div, img_div);
    // ancle.innerHTML = div
    ancle.append(div)
    main_div.append(ancle);

}

async function defaultData() {
    let res = await fetch('https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=4c5aa34fa7d44f96a8140abdd0bb2153')
    let data = await res.json();
    return data;
}



export { appendData, getdata, defaultData }