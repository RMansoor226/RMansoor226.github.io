function showFilter() {
    document.getElementById("filterContent").style.display = "block";
    document.getElementById("newContent").style.display = "none";
}

function showAddNew() {
    document.getElementById("newContent").style.display = "flex";
    document.getElementById("filterContent").style.display = "none";
}

function addNewArticle() {
    // Create new article element
    let newArticle = document.createElement("article");

    // Create new span to serve as article type
    let newArticleType = document.createElement("span");
    newArticleType.classList.add("marker");

    // Check selected type to finalize article type
    if (document.getElementById("opinionRadio").checked === true) {
        newArticleType.textContent = "Opinion";
        newArticle.classList = "opinion";
    }   else if (document.getElementById("recipeRadio").checked === true) {
        newArticleType.textContent = "Recipe";
        newArticle.classList = "recipe";
    }   else {
        newArticleType.textContent = "Update";
        newArticle.classList = "update";
    }

    // Attach span to new article
    newArticle.appendChild(newArticleType);

    // Create and attach new article title element
    let newArticleTitle = document.createElement("h2");
    newArticleTitle.textContent = document.getElementById("inputHeader").value;
    newArticle.appendChild(newArticleTitle);

    // Create and attach new article text element
    let newArticleText = document.createElement("p");
    newArticleText.textContent = document.getElementById("inputArticle").value;
    newArticle.appendChild(newArticleText);

    // Create and attach new article anchor element
    let newArticleAnchorText = document.createElement("p");

    let newArticleAnchor = document.createElement("a");
    newArticleAnchor.href = "moreDetails.html";
    newArticleAnchor.textContent = "Read more...";

    newArticleAnchorText.appendChild(newArticleAnchor);
    newArticle.appendChild(newArticleAnchorText);

    // Add article to articleList div
    document.getElementById("articleList").appendChild(newArticle);
}

function filterArticles() {
    // Initialize visibility for all article types
    let opinionVisibility = "";
    let recipeVisibility = "";
    let updateVisibility = "";

    // Conditionals to check if article type checkboxes are checked and change visibility variable accordingly
    if (document.getElementById("opinionCheckbox").checked === false) {
        opinionVisibility = "none";
    }   else {
        opinionVisibility = "block";
    }

    if (document.getElementById("recipeCheckbox").checked === false) {
        recipeVisibility = "none";
    }   else {
        recipeVisibility = "block";
    }

    if (document.getElementById("updateCheckbox").checked === false) {
        updateVisibility = "none";
    }   else {
        updateVisibility = "block";
    }

    // Store all articles by class name
    let opinionArticles = document.getElementsByClassName("opinion");
    let recipeArticles = document.getElementsByClassName("recipe");
    let updateArticles = document.getElementsByClassName("update");

    // Loops to change every article in every class's visibility appropriately
    for (let i=0; i < opinionArticles.length; i++)
        opinionArticles[i].style.display = opinionVisibility;

    for (let i=0; i < recipeArticles.length; i++)
        recipeArticles[i].style.display = recipeVisibility;

    for (let i=0; i < updateArticles.length; i++)
        updateArticles[i].style.display = updateVisibility;
}

