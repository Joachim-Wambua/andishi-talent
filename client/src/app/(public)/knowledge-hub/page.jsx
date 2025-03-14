import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import React from "react";
import HubHero from "./components/HubHero";
import { articles } from "@/constants";
import ArticleCard from "./components/ArticleCard";

const KnowledgeHub = () => {
  return (
    <section className="bg-white min-h-screen w-full">
      <Navbar />
      <HubHero />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {articles.map((article) => {
          <ArticleCard key={article.id} article={article} />
        })}
      </div>
      <Footer />
    </section>
  );
};

export default KnowledgeHub;
