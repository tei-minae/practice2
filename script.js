var newsData = [
    {
        title: "お知らせのタイトル1",
        content: "お知らせの内容1",
        date: "2023年7月1日"
    },
    {
        title: "お知らせのタイトル2",
        content: "お知らせの内容2",
        date: "2023年6月30日"
    }
    // 他のお知らせデータを追加
];

function generateNewsList() {
    var newsListElement = document.getElementById("news-list");

    for (var i = 0; i < newsData.length; i++) {
        var newsItem = newsData[i];
        var listItem = document.createElement("li");
        
        var titleElement = document.createElement("h2");
        titleElement.textContent = newsItem.title;
        
        var contentElement = document.createElement("p");
        contentElement.textContent = newsItem.content;
        
        var dateElement = document.createElement("p");
        dateElement.textContent = "日付: " + newsItem.date;
        
        listItem.appendChild(titleElement);
        listItem.appendChild(contentElement);
        listItem.appendChild(dateElement);
        
        newsListElement.appendChild(listItem);
    }
}

window.addEventListener("load", generateNewsList);

