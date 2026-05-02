import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FooterSmall from "@/components/FooterSmall";
import BlogNavigationButton from "@/components/BlogNavigationButton";
import {
  fetchWordPressPostBySlug,
  resolvePostImage,
  sanitizeWordPressHtml,
  SITE_URL,
  stripHtml,
} from "@/lib/wordpress";

interface ArticlePageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: ArticlePageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = await fetchWordPressPostBySlug(slug);

  if (!post) {
    return { title: "Article Not Found | Happy Ho" };
  }

  const title = stripHtml(post.title.rendered);
  const description = stripHtml(post.excerpt.rendered);

  return {
    title: `${title} | Happy Ho`,
    description,
    openGraph: {
      title,
      description,
      url: `${SITE_URL}/Resources/${post.slug}`,
      images: [{ url: resolvePostImage(post) }],
      type: "article",
      publishedTime: post.date,
      modifiedTime: post.modified,
    },
  };
}

export default async function ArticlePage({ params }: ArticlePageProps) {
  const { slug } = await params;
  const post = await fetchWordPressPostBySlug(slug);

  if (!post) {
    notFound();
  }

  return (
    <>
      <div className="bg-[#E5DFD5] rounded-b-[60px] pb-10">
        <Header />
        <section className="pt-8 px-6 xl:p-8 mx-auto max-w-[980px]">
          <BlogNavigationButton
            href="/Resources"
            className="text-[#3f5c4a] hover:underline"
            loadingText="Loading..."
          >
            ← Back to Resources
          </BlogNavigationButton>
          <h1
            className="text-3xl md:text-5xl mt-6 font-canela text-[#30271b]"
            dangerouslySetInnerHTML={{ __html: sanitizeWordPressHtml(post.title.rendered) }}
          />
        </section>
      </div>

      <section className="px-6 xl:px-8 py-10 mx-auto max-w-[980px]">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={resolvePostImage(post)}
          alt={stripHtml(post.title.rendered)}
          className="w-full max-h-[480px] object-cover rounded-3xl"
        />
        <article
          className="wp-content mt-8 text-[#2f2f2f]"
          dangerouslySetInnerHTML={{ __html: sanitizeWordPressHtml(post.content.rendered) }}
        />
      </section>

      <div className="hidden md:block">
        <Footer />
      </div>
      <div className="block md:hidden">
        <FooterSmall />
      </div>
    </>
  );
}
