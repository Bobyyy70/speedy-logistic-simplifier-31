/**
 * Dynamic Blog Article Page
 * Renders individual blog articles based on slug parameter
 */

import { useParams, Navigate } from "react-router-dom";
import { BlogArticleDetailPage } from "@/components/blog/BlogArticleDetailPage";
import {
  getBlogArticleBySlug,
  getBlogArticlesByCategory
} from "@/data/blog-articles-data";

const BlogArticle = () => {
  const { slug } = useParams<{ slug: string }>();

  if (!slug) {
    return <Navigate to="/blog" replace />;
  }

  const article = getBlogArticleBySlug(slug);

  if (!article) {
    return <Navigate to="/blog" replace />;
  }

  // Get related articles from same category
  const relatedArticles = getBlogArticlesByCategory(article.category)
    .filter(a => a.slug !== article.slug)
    .slice(0, 3);

  return <BlogArticleDetailPage article={article} relatedArticles={relatedArticles} />;
};

export default BlogArticle;
