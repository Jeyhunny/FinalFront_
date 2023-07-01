document.getElementById("commentForm").addEventListener("submit", function(e) {
    e.preventDefault();
    
    var nickname = document.getElementById("nickname").value;
    var topic = document.getElementById("topic").value;
    var comment = document.getElementById("comment").value;
    
    var commentContainer = document.createElement("div");
    commentContainer.classList.add("comment-container");
    
    var nameElement = document.createElement("h4");
    nameElement.textContent = nickname;
    
    var topicElement = document.createElement("p");
    topicElement.textContent = "Topic: " + topic;
    
    var commentElement = document.createElement("p");
    commentElement.textContent = comment;
    
    commentContainer.appendChild(nameElement);
    commentContainer.appendChild(topicElement);
    commentContainer.appendChild(commentElement);
    
    document.getElementById("comments").appendChild(commentContainer);
    
    document.getElementById("commentForm").reset();
  });
  