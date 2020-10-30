import { createContext } from "react";

const PostContext = createContext();
console.log("This is Context", PostContext.Provider);

export default PostContext;
