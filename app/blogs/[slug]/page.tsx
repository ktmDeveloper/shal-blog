import First from "@/content/first.mdx";

export default async function BlogPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  return (
    <div>
      <div className="container mx-auto">
        <div className="py-16 lg:py-20">
          My Post: {slug}
          <article className="prose dark:prose-invert">
            <First />
          </article>
        </div>
      </div>
    </div>
  );
}
