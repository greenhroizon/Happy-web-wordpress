import { redirect } from "next/navigation";

interface BlogSlugRedirectProps {
  params: Promise<{ slug: string }>;
}

export default async function BlogSlugRedirect({ params }: BlogSlugRedirectProps) {
  const { slug } = await params;
  redirect(`/Resources/${slug}`);
}