import Image from "next/image";
import Link from "next/link";
import React from "react";

export const ArticleList = () => {
  return (
    <div>
      <article>
        <Link href="#">
          <Image
            src="https://cdn.pixabay.com/photo/2025/07/20/08/07/alley-9723861_1280.jpg"
            alt=""
            width={660}
            height={100}
          />
        </Link>
        <div>
          <Link href="#">Technology</Link>
          <Link href="#">Next.js勉強中</Link>
          <p>By takakichi,2025/10/14</p>
          <Link href="#">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias
            maiores accusamus unde incidunt rerum esse at laboriosam aliquid,
            earum fuga laborum magnam porro neque. Maxime eius deleniti ducimus
            facilis obcaecati?
          </Link>
          <Link href="#" className="text-sm text-orange-200">
            続きを読む
          </Link>
        </div>
      </article>
    </div>
  );
};
