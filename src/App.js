import { Route, Routes } from "react-router-dom";
import { PostContent } from "./components/PostContent";
import { Posts } from "./components/Posts";

export const App = () => (
  <Routes>
    <Route path="/" element={ <Posts />} />
    <Route path="post">
      <Route path=":postId" element={<PostContent />} />
    </Route>
  </Routes>
);
