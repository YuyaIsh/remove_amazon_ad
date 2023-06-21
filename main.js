var spans = document.querySelectorAll('span'); // 全ての <span> 要素を取得

Array.from(spans).forEach(function(span) {
    if (span.textContent.includes('スポンサー')) {  // スポンサーと記載されているものを取得
        var parentDiv = span.closest('.s-result-item');  // 親要素で商品を取得
        if (parentDiv) {
            parentDiv.style.display = "none";  // 非表示
        }
    }
});