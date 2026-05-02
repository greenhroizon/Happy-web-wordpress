import Header from "@/components/Header";
import Insights from "@/components/Insights";
import Published from "@/components/Published";
import Footer from "@/components/Footer";
import FooterSmall from "@/components/FooterSmall";
import BlogNavigationButton from "@/components/BlogNavigationButton";
import {
  fetchWordPressPosts,
  resolvePostImage,
  sanitizeWordPressHtml,
  stripHtml,
  type WordPressPost,
} from "@/lib/wordpress";

interface ResourcesPageProps {
  searchParams: Promise<{ q?: string; page?: string }>;
}

function formatDate(value: string): string {
  return new Date(value).toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });
}

function buildHref(query: string, page: number): string {
  const params = new URLSearchParams();
  if (query) {
    params.set("q", query);
  }
  params.set("page", String(page));
  return `/Resources?${params.toString()}`;
}

function FeaturedCard({ post, compact = false }: { post: WordPressPost; compact?: boolean }) {
  return (
    <article className={`rounded-3xl overflow-hidden bg-[#e9e1d6] text-[#978059] ${compact ? "" : "h-full"}`}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={resolvePostImage(post)}
        alt={stripHtml(post.title.rendered) || "Article image"}
        className={`w-full object-cover ${compact ? "h-[180px]" : "h-[250px]"}`}
      />
      <div className="p-4 md:p-5 space-y-3">
        <h3 className="text-sm md:text-xl" dangerouslySetInnerHTML={{ __html: sanitizeWordPressHtml(post.title.rendered) }} />
        <p className="text-[10px]">
          Published: {formatDate(post.date)}
        </p>
        <p className="text-[10px] md:text-sm">{stripHtml(post.excerpt.rendered).slice(0, 140)}...</p>
        <BlogNavigationButton
          href={`/Resources/${post.slug}`}
          className="font-medium cursor-pointer text-[10px] md:text-sm hover:underline"
          loadingText="Opening..."
        >
          Read Article →
        </BlogNavigationButton>
      </div>
    </article>
  );
}

export default async function ResourcesPage({ searchParams }: ResourcesPageProps) {
  const params = await searchParams;
  const query = params.q?.trim() ?? "";
  const page = Math.max(1, Number(params.page) || 1);

  let posts: WordPressPost[] = [];
  let error = "";

  try {
    posts = await fetchWordPressPosts(query, page, 10);
  } catch {
    error = "Articles are loading slowly right now. Please try again.";
  }

  const featured = posts.slice(0, 3);
  const hasNext = posts.length === 10;

  return (
    <>
      <div className="bg-[#E5DFD5] rounded-b-[60px] pb-10">
        <Header />
        <Insights />
      </div>

      <section className="pt-8 px-6 xl:p-16 max-w-[1200px] mx-auto">
        <h2 className="text-3xl xl:text-5xl text-center mb-8">Featured Insights</h2>
        {featured.length === 0 ? (
          <p className="text-center text-[#736345]">No featured insights available yet.</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="md:row-span-2">{featured[0] ? <FeaturedCard post={featured[0]} /> : null}</div>
            <div className="space-y-6">
              {featured[1] ? <FeaturedCard post={featured[1]} compact /> : null}
              {featured[2] ? <FeaturedCard post={featured[2]} compact /> : null}
            </div>
          </div>
        )}
      </section>

      <section className="p-6 xl:p-8 max-w-[1200px] mx-auto">
        <h2 className="text-3xl xl:text-5xl text-center mb-8">Explore Articles</h2>

        <form className="max-w-[760px] mx-auto mb-8" action="/Resources" method="GET">
          <div className="flex gap-3">
            <input
              name="q"
              defaultValue={query}
              placeholder="Search articles..."
              className="w-full rounded-full border border-[#544120]/30 px-5 py-3 bg-white outline-none"
            />
            <button type="submit" className="rounded-full bg-[#3f5c4a] text-white px-6 py-3">Search</button>
          </div>
        </form>

        {error ? <p className="text-center text-red-700 mb-8">{error}</p> : null}

        {!error && posts.length === 0 ? (
          <p className="text-center text-[#736345]">No articles found{query ? ` for "${query}"` : ""}.</p>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {posts.map((post) => (
              <article key={post.id} className="rounded-3xl bg-[#e9e1d6] overflow-hidden">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={resolvePostImage(post)}
                  alt={stripHtml(post.title.rendered) || "Article image"}
                  className="w-full h-[200px] object-cover"
                  loading="lazy"
                />
                <div className="p-4 space-y-3 text-[#544120]">
                  <h3 className="text-sm font-semibold" dangerouslySetInnerHTML={{ __html: sanitizeWordPressHtml(post.title.rendered) }} />
                  <p className="text-[10px]">{stripHtml(post.excerpt.rendered).slice(0, 120)}...</p>
                  <BlogNavigationButton
                    href={`/Resources/${post.slug}`}
                    className="text-sm font-medium hover:underline"
                    loadingText="Opening..."
                  >
                    Read Article →
                  </BlogNavigationButton>
                </div>
              </article>
            ))}
          </div>
        )}

        <div className="flex justify-center gap-3 mt-10">
          {page > 1 ? (
            <BlogNavigationButton
              href={buildHref(query, page - 1)}
              className="rounded-full border border-[#544120]/40 px-6 py-3"
              loadingText="Loading..."
            >
              Previous Page
            </BlogNavigationButton>
          ) : null}

          {hasNext ? (
            <BlogNavigationButton
              href={buildHref(query, page + 1)}
              className="rounded-full bg-[#3f5c4a] text-white px-6 py-3"
              loadingText="Loading..."
            >
              Next Page
            </BlogNavigationButton>
          ) : null}
        </div>
      </section>

      <div className="relative z-0">
        <Published />
      </div>
      <div className="relative z-20 -mt-20 md:-mt-15 xl:-mt-30">
        <div className="hidden md:block">
          <Footer />
        </div>
        <div className="block md:hidden">
          <FooterSmall />
        </div>
      </div>
    </>
  );
}
