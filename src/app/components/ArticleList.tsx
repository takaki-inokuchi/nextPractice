import Image from "next/image";
import Link from "next/link";
import React from "react";

export const ArticleList = () => {
  return (
    <div>
      <article className="shadow my-4 flex flex-col">
        <Link href="#" className="hover:opacity-75">
          <Image
            src="https://cdn.pixabay.com/photo/2025/07/20/08/07/alley-9723861_1280.jpg"
            alt=""
            width={660}
            height={100}
          />
        </Link>
        <div className="bg-white flex flex-col justify-start p-6">
          <Link href="#" className="text-blue-700 pb-4 font-bold">
            Technology
          </Link>
          <Link
            href="#"
            className="text-slate-900 text-3xl font-bold hover:text-gray-700"
          >
            Next.js勉強中
          </Link>
          <p className="text-sm pb-3 text-slate-900">By takakichi,2025/10/14</p>
          <Link href="#" className="text-slate-900 pb-6">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias
            maiores accusamus unde incidunt rerum esse at laboriosam aliquid,
            earum fuga laborum magnam porro neque. Maxime eius deleniti ducimus
            facilis obcaecati?
          </Link>
          <Link href="#" className="hover:text-black text-pink-800">
            続きを読む
          </Link>
        </div>
      </article>

      <article className="shadow my-4 flex flex-col">
        <Link href="#" className="hover:opacity-75">
          <Image
            src="https://cdn.pixabay.com/photo/2025/07/20/08/07/alley-9723861_1280.jpg"
            alt=""
            width={660}
            height={100}
          />
        </Link>
        <div className="bg-white flex flex-col justify-start p-6">
          <Link href="#" className="text-blue-700 pb-4 font-bold">
            Technology
          </Link>
          <Link
            href="#"
            className="text-slate-900 text-3xl font-bold hover:text-gray-700"
          >
            Next.js勉強中
          </Link>
          <p className="text-sm pb-3 text-slate-900">By takakichi,2025/10/14</p>
          <Link href="#" className="text-slate-900 pb-6">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias
            maiores accusamus unde incidunt rerum esse at laboriosam aliquid,
            earum fuga laborum magnam porro neque. Maxime eius deleniti ducimus
            facilis obcaecati?
          </Link>
          <Link href="#" className="hover:text-black text-pink-800">
            続きを読む
          </Link>
        </div>
      </article>
    </div>
  );
};
