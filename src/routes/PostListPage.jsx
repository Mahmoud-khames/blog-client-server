import { useState } from "react";
import PostList from "../components/PostList.jsx";
import SideMenu from "../components/SideMenu.jsx";
export default function PostListPage() {
  const [open, setOpen] = useState(false);
  return (
    <div className="">
      <h1 className="mb-8 text-2xl">Development Blog</h1>
      <button
        className="bg-blue-800 text-sm text-white px-4 py-2 rounded-2xl md:hidden mb-4"
        onClick={() => setOpen((prev) => !prev)}
      >
        {open ? "Close" : "Filter or Search"} 
      </button>
      <div className="flex flex-col-reverse gap-8 md:flex-row justify-between">
        <div className="">
          <PostList />
        </div>
        <div className={`${open ? "block" : "hidden"} md:block transition-all ease-in-out`}>
          <SideMenu />
        </div>
      </div>
    </div>
  );
}
