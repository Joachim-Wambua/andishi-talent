import React from "react";

const ArticleCard = ({ article }) => {
  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden">
      <Image
        src={article.imageUrl}
        alt={article.title}
        width={400}
        height={250}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h2 className="text-lg font-semibold">{article.title}</h2>
        <div className="flex items-center space-x-2 text-sm text-gray-500 mt-2">
          <span>{article.author}</span>
          <span>•</span>
          <span>{article.date}</span>
          <span>•</span>
          <span>{article.shares}</span>
        </div>
        <p className="text-gray-600 mt-3 line-clamp-3">{article.description}</p>
        <div className="flex items-center justify-between mt-4">
          <a href="#" className="text-blue-600 font-medium hover:underline">
            View Post
          </a>
          <span className="flex items-center text-sm text-gray-500">
            📩 {article.readTime}
          </span>
        </div>
      </div>
    </div>
  );
};

export default ArticleCard;
