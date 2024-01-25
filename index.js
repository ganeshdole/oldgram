const posts = [
  {
    name: "Vincent van Gogh",
    username: "vincey1853",
    location: "Zundert, Netherlands",
    avatar: "images/avatar-vangogh.jpg",
    post: "images/post-vangogh.jpg",
    comment: "just took a few mushrooms lol",
    likes: 21,
  },
  {
    name: "Gustave Courbet",
    username: "gus1819",
    location: "Ornans, France",
    avatar: "images/avatar-courbet.jpg",
    post: "images/post-courbet.jpg",
    comment: "i'm feelin a bit stressed tbh",
    likes: 4,
  },
  {
    name: "Joseph Ducreux",
    username: "jd1735",
    location: "Paris, France",
    avatar: "images/avatar-ducreux.jpg",
    post: "images/post-ducreux.jpg",
    comment:
      "gm friends! which coin are YOU stacking up today?? post below and WAGMI!",
    likes: 152,
  },
];

function appendPosts() {
  const postsContainer = document.getElementById("posts-container");

  posts.forEach((post) => {
    const postElement = document.createElement("div");
    postElement.classList.add("post");

    postElement.innerHTML = `
      <div class="post-header">
        <img class="avatar" src="${post.avatar}" />
        <div>
          <div><span class="name">${post.name}</span></div>
          <span class="location">${post.location}</span>
        </div>
      </div>
      <div>
        <img class="img" src="${post.post}" />
      </div>
      <div class="post-footer">
        <img src="/images/icon-heart.png"  class="post-footer-img" />
        <img src="/images/icon-comment.png"  class="post-footer-img" />
        <img src="/images/icon-dm.png"  class="post-footer-img" />
      </div>
      <p class="like-count">${post.likes} likes</p>
      <p class="comment">
        <span>${post.username}</span> ${post.comment}
      </p>
      <div class="temp"></div>
    `;

    postsContainer.appendChild(postElement);
  });
}

// Call the function to append posts when the page loads
document.addEventListener("DOMContentLoaded", appendPosts);
