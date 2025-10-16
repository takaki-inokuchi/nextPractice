import DeleteButton from "@/app/components/DeleteButton";
import { getDetailArticle } from "@/blogAPI";
import Image from "next/image";

const Article = async ({ params }: { params: { id: string } }) => {
  const { id } = params;
  const detailArticle = await getDetailArticle(id);
  console.log("detailArticle:", detailArticle);
  console.log("detailArticle.id:", detailArticle.id);

  return (
    <div className="max-w-3xl mx-auto p-5">
      <Image
        src={`https://picsum.photos/id/${detailArticle.id}/600/400`}
        alt=""
        width={660}
        height={400}
      />
      <h1 className="text-center text-4xl mb-10 mt-10">
        {detailArticle.title}
      </h1>
      <div className="text-lg leading-relaxed text-justify">
        {detailArticle.content}
      </div>
      <div className="text-right mt-5">
        <DeleteButton id={detailArticle.id} />
      </div>
    </div>
  );
};

export default Article;
