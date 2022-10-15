console.log("js load");

const router = async () => {
    // 각 route의 경로와 현재 페이지 확인용 콘솔
    const routes = [
      { path: "/", view: () => console.log("Viewing Dashboard") },
      { path: "/posts", view: () => console.log("Viewing Posts") },
      { path: "/settings", view: () => console.log("Viewing Settings") },
    ];
  };