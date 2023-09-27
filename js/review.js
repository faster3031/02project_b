// 멀티미디어 리소스 로딩 완료 후 실행
//  dom (html 태그 로딩 완료시 실행)
$(document).ready(function () {
  $("#writeBtn").click(function () {
    $(".writecontainerbox").show();
  });
  $("#postClosseBtn").click(function () {
    $(".writecontainerbox").hide();
  });
});
// 좋아요
$(function () {
  $(".heart").on("click", function () {
    $(this).toggleClass("is-active");
  });
});
// 멀티미디어 리소스 로딩 완료 후 실행
window.addEventListener("load", function () {
  const postTitleInput = document.getElementById("postTitle");
  const postWriterInput = document.getElementById("postWriter");
  const postContentInput = document.getElementById("postContent");
  const addPostBtn = document.getElementById("addPostBtn");
  const postTableBody = document.getElementById("postTableBody"); // 변경된 부분
  const postDateInput = document.getElementById("postDate");
  const searchInput = document.getElementById("searchInput");
  const btnSearch = document.getElementById("btnSearch");
  const clearBtn = document.getElementById("clearBtn");

  let posts = [];
  // 등록 번호를 나타내는 변수
  let registrationNumber = 4;

  function addPostToDOM(post) {
    const postTableBody = document.getElementById("postTableBody");

    // 등록 번호를 업데이트하고 3자리로 표시
    registrationNumber++;
    const formattedRegistrationNumber = String(registrationNumber).padStart(
      3,
      "0"
    );

    const newRow = document.createElement("tr");
    newRow.innerHTML = `
       <td class="num">${formattedRegistrationNumber}</td>
       <td class="subject">${post.title}</td>
       <td class="writer">${post.writer}<br><span>${post.date || ""}</span></td>
       <td class="date">${post.date || ""}</td>
       <td class="hearttitle"><div class="heart1"></div></td>
       <td class="del"><button class=delete-post-btn>x</button></td>
       `;
    
// 이벤트 위임을 사용하여 클릭 이벤트를 처리합니다.
newRow.addEventListener("click", function (event) {
  const target = event.target;
  if (target.classList.contains("heart1")) {
    target.classList.toggle("is-active1");
  }
});
    // 삭제 버튼에 클릭 이벤트 추가
    const deleteButton = newRow.querySelector(".delete-post-btn");
    deleteButton.addEventListener("click", function () {
      // 게시글을 삭제하고 화면에서 제거
      const index = posts.indexOf(post);
      //       if (index !== -1) { ... }: index가 -1이 아니라면
      // (즉, 해당 게시글이 배열에 존재한다면) 아래 코드를 실행합니다.
      // posts.splice(index, 1);: index 위치에 있는
      // 게시글을 posts 배열에서 1개만큼 제거합니다.즉, 해당 게시글을 삭제
      if (index !== -1) {
        posts.splice(index, 1);
        localStorage.setItem("posts", JSON.stringify(posts));
        newRow.remove();
      }
    });
    postTableBody.prepend(newRow);
  }

  addPostBtn.addEventListener("click", function () {
    const title = postTitleInput.value;
    const writer = postWriterInput.value;
    // const content = postContentInput.value;
    // const date = postDateInput.value;

    if (title && writer) {
      const currentDate = new Date(); // 현재 날짜와 시간을 가져옵니다.
      const formattedDate = `${currentDate.getFullYear()}-${(
        currentDate.getMonth() + 1
      )
        .toString()
        .padStart(2, "0")}-${currentDate
        .getDate()
        .toString()
        .padStart(2, "0")} ${currentDate
        .getHours()
        .toString()
        .padStart(2, "0")}:${currentDate
        .getMinutes()
        .toString()
        .padStart(2, "0")}`;

      const newPost = {
        title,
        writer,
        date: formattedDate,
      };

      posts.push(newPost);
      localStorage.setItem("posts", JSON.stringify(posts));
      addPostToDOM(newPost);

      postTitleInput.value = "";
      postWriterInput.value = "";
      // postContentInput.value = "";
      // postDateInput.value = "";
    }
  });

  // btnSearch.addEventListener("click", function () {
  //   const searchTerm = searchInput.value.toLowerCase();
  //   const filteredPosts = posts.filter((post) => {
  //     return (
  //       post.title.toLowerCase().includes(searchTerm) ||
  //       post.content.toLowerCase().includes(searchTerm)
  //     );
  //   });

  //   postTableBody.innerHTML = "";
  //   for (const post of filteredPosts) {
  //     addPostToDOM(post);
  //   }
  // });

  if (localStorage.getItem("posts")) {
    posts = JSON.parse(localStorage.getItem("posts"));
    for (const post of posts) {
      addPostToDOM(post);
    }
  }
});
