async function fetchUsers() {
  console.log("Fetching users...");
  return new Promise((resolve) => {
      setTimeout(() => {
          console.log("Users fetched.");
          resolve([
              { id: 1, name: "Mutasim" },
              { id: 2, name: "Zeyad" }
          ]);
      }, 2000);
  });
}

async function fetchPosts() {
  console.log("Fetching posts...");
  return new Promise((resolve) => {
      setTimeout(() => {
          console.log("Posts fetched.");
          resolve([
              { userId: 1, title: "Mutasim's first post" },
              { userId: 2, title: "Zeyad's latest thoughts" }
          ]);
      }, 3000);
  });
}

async function fetchData() {
  try {
      console.log("Getting data...");
      
      let users = await fetchUsers();
      let posts = await fetchPosts();
      
      let combinedData = posts.map(post => {
          let user = users.find(u => u.id === post.userId);
          return `${user.name}: "${post.title}"`;
      });
      
      console.log("Done.");
      combinedData.forEach(entry => console.log(entry));
      
      return combinedData;
  } catch (error) {
      console.log("Error:", error);
      return [];
  }
}

fetchData();