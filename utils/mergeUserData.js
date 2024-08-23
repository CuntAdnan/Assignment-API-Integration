const mergeUserData = (users, posts, comments) => {
    
    const userMap = new Map();
  
    users.forEach(user => {
      userMap.set(user.id, { ...user, posts: [], comments: [] });
    });
  
    // Add posts from Platform B
    posts.forEach(post => {
      if (userMap.has(post.userId)) {
        userMap.get(post.userId).posts.push(post);
      }
    });
  
    // Add comments from Platform C
    comments.forEach(comment => {
      // Find the post that this comment belongs to
      const postOwner = posts.find(post => post.id === comment.postId);
  
      // If a post owner exists and is in the userMap, add the comment to their comments array
      if (postOwner && userMap.has(postOwner.userId)) {
        userMap.get(postOwner.userId).comments.push(comment);
      }
    });
  
    return Array.from(userMap.values());
  };
  
module.exports =  mergeUserData ;
  