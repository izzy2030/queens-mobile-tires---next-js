import { client } from '@/lib/apollo';
import { GET_RECENT_POSTS } from '@/lib/queries';
import ServiceAreaSchema from '@/components/ServiceAreaSchema';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';
import Hero from '@/components/Hero';

export const dynamic = 'force-dynamic';

export default async function Home() {
  let posts = [];
  try {
    const { data } = await client.query<any>({
      query: GET_RECENT_POSTS,
    });
    posts = data?.posts?.nodes || [];
  } catch (error) {
    console.error('Error fetching posts:', error);
    // Fallback or empty state if WP is down/unreachable
  }

  return (
    <main className="flex min-h-screen flex-col">
      <ServiceAreaSchema />

      <Hero />

      {/* Recent Cities / Service Areas */}
      <section className="bg-slate-50 py-24">
        <div className="container mx-auto px-4">
          <div className="mb-12 flex items-end justify-between">
            <div>
              <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl">Areas We Serve</h2>
              <p className="mt-4 text-lg text-slate-600">Providing mobile tire service across Queens and beyond.</p>
            </div>
            <Link href="/locations" className="hidden text-orange-600 hover:text-orange-700 font-bold sm:inline-flex items-center">
              View All Locations <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {posts.map((post: any) => (
              <Link
                key={post.slug}
                href={`/${post.slug}`}
                className="group relative overflow-hidden rounded-2xl bg-white shadow-md transition-all hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="aspect-video w-full overflow-hidden bg-slate-200">
                  {post.featuredImage?.node?.sourceUrl ? (
                    <Image
                      src={post.featuredImage.node.sourceUrl}
                      alt={post.featuredImage.node.altText || post.title}
                      width={600}
                      height={400}
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  ) : (
                    <div className="flex h-full w-full items-center justify-center bg-slate-800 text-slate-600">
                      <span className="text-4xl font-bold text-slate-700 opacity-50">QMT</span>
                    </div>
                  )}
                </div>
                <div className="p-6">
                  <h3 className="mb-2 text-xl font-bold text-slate-900 group-hover:text-orange-600 transition-colors">
                    {post.title}
                  </h3>
                  <div
                    className="line-clamp-2 text-sm text-slate-600"
                    dangerouslySetInnerHTML={{ __html: post.excerpt }}
                  />
                  <div className="mt-4 flex items-center text-sm font-bold text-orange-600">
                    Book in {post.title} <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
