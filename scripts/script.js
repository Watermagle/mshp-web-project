function toggleNavMenu() {
    var nav_menu = document.getElementById('nav-menu');
    nav_menu.classList.toggle('nav-menu-active');
}

function toggleArticleMenu() {
    var article_button1 = document.getElementById('article-button1');
    var article_button2 = document.getElementById('article-button2');
    var article_navlist = document.getElementById('article-navlist');
    article_navlist.classList.toggle('article-navlist-visible');
    article_button1.classList.toggle('visible-article-button');
    article_button2.classList.toggle('visible-article-button');
}