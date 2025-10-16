import React from 'react'
import CreateBlogForm from './CreateBlogForm';

const CreatePage = () => {
   return (
    <div className="max-w-3xl mx-auto px-4 py-8 md:px-12 min-h-screen">
      <h2 className="text-2xl font-bold mb-4">ブログ新規作成</h2>
      <CreateBlogForm />
    </div>
  );
}

export default CreatePage