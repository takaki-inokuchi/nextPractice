import React from "react";

const CreateBlogPage = () => {
  return (
    <div className="max-w-3xl mx-auto px-4 py-8 md:px-12 min-h-screen">
      <h2 className="text-2xl font-bold mb-4">ブログ新規作成</h2>
      <form className="bg-slate-200 p-6 rounded shadow-lg">
        <div className="mb-4">
          <label className="text-gray-700 text-sm font-bold mb-2">URL</label>
          <input
            type="text"
            className="shadow border rounded w-full py-2 px-3 text-gray-500 leading-tight focus:outline-none bg-white"
          />
        </div>
        <div className="mb-4">
          <label className="text-gray-700 text-sm font-bold mb-2">
            タイトル
          </label>
          <input
            type="text"
            className="shadow border rounded w-full py-2 px-3 text-gray-500 leading-tight focus:outline-none bg-white"
          />
        </div>
        <div className="mb-4">
          <label className="text-gray-700 text-sm font-bold mb-2">本文</label>
          <textarea className="shadow border rounded w-full py-2 px-3 text-gray-500 leading-tight focus:outline-none bg-white" />
        </div>

        <button
          type="submit"
          className="py-2 px-2 border rounded-md bg-orange-300"
        >
          投稿
        </button>
      </form>
    </div>
  );
};

export default CreateBlogPage;
