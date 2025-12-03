import { client } from '@/lib/apollo';
import { GET_POST_BY_SLUG } from '@/lib/queries';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import { Phone, MapPin, CheckCircle, ArrowRight } from 'lucide-react';
import { Metadata } from 'next';

// Force dynamic rendering for now to ensure we fetch fresh data
export const dynamic = 'force-dynamic';

export async function generateMetadata({ params }: { params: Promise<{ city: string }> }): Promise<Metadata> {
    const { city } = await params;
    const { data } = await client.query<any>({
        query: GET_POST_BY_SLUG,
        variables: { slug: city },
    });

    const post = data?.postBy;

    if (!post) return { title: 'Page Not Found' };

    return {
        title: post.seo?.title || `${post.title} | Queens Mobile Tires`,
        description: post.seo?.metaDesc || `Mobile tire service in ${post.title}. We come to you!`,
        alternates: {
            canonical: post.seo?.canonical,
        },
    };
}

export default async function CityPage({ params }: { params: Promise<{ city: string }> }) {
    const { city } = await params;

    const { data } = await client.query<any>({
        query: GET_POST_BY_SLUG,
        variables: { slug: city },
    });

    const post = data?.postBy;

    if (!post) {
        return notFound();
    }

    return (
        <main className="min-h-screen bg-slate-50">
            {/* Hero Section */}
            <div className="relative h-[60vh] min-h-[500px] w-full overflow-hidden bg-slate-900">
                {post.featuredImage?.node?.sourceUrl && (
                    <Image
                        src={post.featuredImage.node.sourceUrl}
                        alt={post.featuredImage.node.altText || post.title}
                        fill
                        className="object-cover opacity-40"
                        priority
                    />
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent" />

                <div className="absolute inset-0 flex items-center justify-center">
                    <div className="container px-4 text-center">
                        <div className="mb-4 inline-flex items-center rounded-full bg-orange-500/10 px-4 py-1.5 text-sm font-medium text-orange-400 backdrop-blur-sm border border-orange-500/20">
                            <MapPin className="mr-2 h-4 w-4" />
                            Serving {post.title} & Surrounding Areas
                        </div>
                        <h1 className="mb-6 text-5xl font-bold tracking-tight text-white sm:text-7xl">
                            Mobile Tire Shop in <span className="text-orange-500">{post.title}</span>
                        </h1>
                        <p className="mx-auto mb-8 max-w-2xl text-lg text-slate-300">
                            Don't waste time at the shop. We bring the tire shop to your driveway, home, or office in {post.title}.
                        </p>
                        <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
                            <a
                                href="tel:1234567890" // Replace with actual number
                                className="group inline-flex items-center justify-center rounded-full bg-orange-500 px-8 py-4 text-lg font-bold text-white transition-all hover:bg-orange-600 hover:shadow-lg hover:shadow-orange-500/30"
                            >
                                <Phone className="mr-2 h-5 w-5 transition-transform group-hover:rotate-12" />
                                Call Now
                            </a>
                            <a
                                href="#book"
                                className="group inline-flex items-center justify-center rounded-full bg-white/10 px-8 py-4 text-lg font-bold text-white backdrop-blur-sm transition-all hover:bg-white/20"
                            >
                                Book Online
                                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            {/* Main Content */}
            <div className="container mx-auto px-4 py-16">
                <div className="grid gap-12 lg:grid-cols-3">
                    {/* Left Column: Content */}
                    <div className="lg:col-span-2">
                        <div className="rounded-2xl bg-white p-8 shadow-sm ring-1 ring-slate-900/5">
                            <div
                                className="prose prose-lg prose-slate max-w-none prose-headings:font-bold prose-headings:text-slate-900 prose-a:text-orange-600 hover:prose-a:text-orange-500"
                                dangerouslySetInnerHTML={{ __html: post.content }}
                            />
                        </div>
                    </div>

                    {/* Right Column: Sidebar/Widget */}
                    <div className="lg:col-span-1">
                        <div className="sticky top-8 space-y-6">
                            {/* Service Features */}
                            <div className="rounded-2xl bg-slate-900 p-6 text-white shadow-xl">
                                <h3 className="mb-4 text-xl font-bold">Why Choose Us?</h3>
                                <ul className="space-y-4">
                                    {[
                                        'We Come To You',
                                        'Competitive Pricing',
                                        'Professional Installation',
                                        'All Major Brands',
                                        'Same Day Service Available'
                                    ].map((item, i) => (
                                        <li key={i} className="flex items-start">
                                            <CheckCircle className="mr-3 h-6 w-6 shrink-0 text-orange-500" />
                                            <span className="text-slate-300">{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* Mini Contact Card */}
                            <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-900/5">
                                <h3 className="mb-2 text-lg font-bold text-slate-900">Need Help?</h3>
                                <p className="mb-4 text-slate-600">Our tire experts are ready to assist you.</p>
                                <a href="tel:1234567890" className="flex items-center text-xl font-bold text-slate-900 hover:text-orange-600">
                                    <Phone className="mr-3 h-6 w-6 text-orange-500" />
                                    (555) 123-4567
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}
