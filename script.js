// index.html을 열어서 agoraStatesDiscussions 배열 요소를 확인하세요.
console.log(agoraStatesDiscussions);

// convertToDiscussion은 아고라 스테이츠 데이터를 DOM으로 바꿔줍니다.
const convertToDiscussion = (obj) => {
    ////// discussion__container
    const li = document.createElement("li"); // li 요소 생성
    li.className = "discussion__container"; // 클래스 이름 지정

    //// discussion__avatar--wrapper
    const avatarWrapper = document.createElement("div"); // div 요소 생성
    avatarWrapper.className = "discussion__avatar--wrapper";

    // discussion__avatar--image
    const avatarImg = document.createElement('img');
    avatarImg.src = obj.avatarUrl;
    avatarImg.alt = 'avatar of ' + obj.author;
    avatarImg.classList.add('discussion__avatar--image');
    avatarWrapper.append(avatarImg); // 부모 div에 추가


    //// discussion__content
    const discussionContent = document.createElement("div");
    discussionContent.className = "discussion__content";

    // discussion__chat
    const discussionChat = document.createElement("p");
    discussionChat.className = "discussion__chat";
    discussionChat.textContent =
        `${obj.chat}`;

    // discussion__information
    const discussionInformation = document.createElement("div");
    discussionInformation.className = "discussion__information";
    discussionInformation.textContent =
        `${obj.author} / ${new Date(obj.createdAt).toLocaleTimeString()}`;
    discussionContent.append(discussionChat, discussionInformation);

    //  li요소에 모든 하위요소 추가
    li.append(avatarWrapper, discussionContent);
    return li;
}

// agoraStatesDiscussions 배열의 모든 데이터를 화면에 렌더링하는 함수입니다.
const render = (element) => {
    for (let i = 0; i < agoraStatesDiscussions.length; i += 1) {
        element.append(convertToDiscussion(agoraStatesDiscussions[i]));
    }
    return;
};

// ul 요소에 agoraStatesDiscussions 배열의 모든 데이터를 화면에 렌더링합니다.
const ul = document.querySelector("ul.discussions__container");
render(ul);


//// Bare Minimum Requirement
// 디스커션 추가 기능
// 아이디, 내용 입력 후 버튼을 눌렀을 때 화면에 디스커션 추가
// 배열에 추가한 데이터 쌓기

// add data
const submit = document.querySelector('.submit');
const Name = document.querySelector('#name');
const Story = document.querySelector('#story');

// event
submit.addEventListener("click", (e) => {
    e.preventDefault();

    let newDiscussion = {
        id : Name.value,
        avatarUrl : "https://avatars.githubusercontent.com/u/92300124?s=64&u=82d8e12bfca4deb05c7f86db7d3c15e06ca34d05&v=4",
        chat : Story.value,
        author : Name.value,
        createdAt : new Date().toISOString()
    };

    console.log(newDiscussion);
    agoraStatesDiscussions.unshift(newDiscussion);
    console.log(agoraStatesDiscussions);

    ul.prepend(convertToDiscussion(newDiscussion));

    Name.value = ""; // 왜 값을 빈문자열로 변경했을까?
    Story.value = "";

    return false;
});