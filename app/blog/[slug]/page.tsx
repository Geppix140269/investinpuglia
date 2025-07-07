// app/blog/[slug]/page.tsx - Beautiful Magazine-Style Blog Posts with TypeScript Fix
import Link from 'next/link'

// Define all your blog post slugs for static generation
export async function generateStaticParams() {
  return [
    { slug: 'mini-pia-grants' },
    { slug: 'puglia-property-trends' },
    { slug: 'ostuni-success-story' },
    { slug: 'tax-optimization' },
    { slug: 'coastal-towns-puglia' },
    { slug: 'trullo-renovation-guide' },
  ]
}

// Type definitions
interface Quote {
  text: string
  author: string
}

interface Callout {
  type: 'success' | 'warning' | 'info'
  title: string
  text: string
}

interface Subsection {
  subtitle: string
  points: string[]
}

interface TimelinePhase {
  phase: string
  duration: string
  tasks: string[]
}

interface ChartData {
  type: string
  data: Array<{ year: string; value: number }>
}

interface ContentSection {
  title: string
  content: string
  image?: string
  imageCaption?: string
  highlights?: string[]
  stats?: Record<string, string>
  quote?: Quote
  callout?: Callout
  subsections?: Subsection[]
  timeline?: TimelinePhase[]
  chart?: ChartData
}

interface BlogPostContent {
  intro: string
  sections: ContentSection[]
}

interface BlogPostData {
  title: string
  subtitle: string
  author: string
  authorRole: string
  date: string
  readTime: string
  category: string
  categoryColor: string
  heroImage: string
  authorImage: string
  tableOfContents?: string[]
  content: BlogPostContent
}

// Blog post data with full content
const blogPosts: Record<string, BlogPostData> = {
  'mini-pia-grants': {
    title: "How to Get €540,000 in Italian Property Grants",
    subtitle: "The Complete Guide to Mini PIA Funding That Can Transform Your Investment",
    author: "Giuseppe Funaro",
    authorRole: "Senior Investment Advisor",
    date: "November 15, 2024",
    readTime: "12 min read",
    category: "Grants & Funding",
    categoryColor: "from-emerald-500 to-green-600",
    heroImage: "https://images.unsplash.com/photo-1523864462188-d16e15c384df?w=1600&h=800&fit=crop",
    authorImage: "/Giuseppe Funaro 062025.jpg",
    tableOfContents: [
      "What is Mini PIA?",
      "Real Success Story",
      "Eligibility Requirements",
      "Application Process",
      "Maximizing Your Grant",
      "Common Mistakes to Avoid"
    ],
    content: {
      intro: "Last month, our client Sarah from London secured €540,000 in Mini PIA grants for her trullo renovation project in Ostuni. This isn't a rare exception – it's a repeatable strategy that savvy investors are using to transform their Italian property dreams into profitable realities.",
      sections: [
        {
          title: "What is Mini PIA?",
          content: "Mini PIA (Piccoli Investimenti Attrattivi) represents one of the most significant opportunities for foreign property investors in Italy. This regional funding program, specifically designed to boost tourism infrastructure in Puglia, offers non-repayable grants that can cover up to 45% of your total project costs.",
          image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=1200&h=600&fit=crop",
          imageCaption: "Historic trulli in Alberobello, Puglia - prime candidates for Mini PIA funding",
          highlights: [
            "45-50% non-refundable grants on eligible costs",
            "Additional 15% tax credit on top of the grant",
            "Maximum funding of €2.25 million per project",
            "Minimum investment threshold of just €30,000"
          ]
        },
        {
          title: "Real Success Story: Sarah's Ostuni Project",
          content: "Sarah, a marketing executive from London, had dreamed of owning a property in Italy for years. When she discovered the Mini PIA program through our consultation, everything changed. Her initial budget of €1 million suddenly became much more powerful.",
          quote: {
            text: "I couldn't believe it when Giuseppe showed me the numbers. The grant essentially paid for my entire renovation, turning what seemed like an expensive dream into a profitable investment.",
            author: "Sarah L., London"
          },
          stats: {
            "Property Purchase": "€280,000",
            "Renovation Budget": "€720,000",
            "Total Investment": "€1,000,000",
            "Mini PIA Grant": "€450,000",
            "Tax Credit": "€150,000",
            "Net Investment": "€400,000"
          },
          callout: {
            type: "success",
            title: "60% Cost Reduction",
            text: "Through strategic use of Mini PIA grants and tax credits, Sarah reduced her net investment by 60% while maintaining full ownership."
          }
        },
        {
          title: "Eligibility Requirements",
          content: "Understanding the eligibility criteria is crucial for a successful Mini PIA application. The program is designed to support genuine tourism development projects that will contribute to Puglia's economic growth.",
          subsections: [
            {
              subtitle: "Location Requirements",
              points: [
                "Property must be in Puglia region",
                "Priority given to designated tourism areas",
                "Coastal and historic centers preferred",
                "Rural areas with tourism potential eligible"
              ]
            },
            {
              subtitle: "Property Types",
              points: [
                "Masserie (traditional farmhouses)",
                "Trulli (cone-shaped houses)",
                "Historic palazzos",
                "Coastal properties",
                "Rural estates with tourism potential"
              ]
            },
            {
              subtitle: "Tourism Purpose",
              points: [
                "Hotels and boutique accommodations",
                "Bed & Breakfasts",
                "Vacation rentals",
                "Agriturismos",
                "Wellness and spa facilities"
              ]
            }
          ]
        },
        {
          title: "Step-by-Step Application Process",
          content: "The Mini PIA application process requires careful planning and attention to detail. Here's a comprehensive timeline to guide you through each phase.",
          timeline: [
            {
              phase: "Phase 1: Preparation",
              duration: "2-3 months",
              tasks: [
                "Property selection and due diligence",
                "Business plan development",
                "Financial projections",
                "Technical documentation"
              ]
            },
            {
              phase: "Phase 2: Application",
              duration: "1 month",
              tasks: [
                "Online registration on PugliaSemplice",
                "Document submission",
                "Bank guarantee arrangement",
                "Digital signature acquisition"
              ]
            },
            {
              phase: "Phase 3: Approval",
              duration: "3-6 months",
              tasks: [
                "Technical evaluation",
                "Site inspection",
                "Grant agreement signing",
                "Project implementation"
              ]
            }
          ]
        }
      ]
    }
  },
  'puglia-property-trends': {
    title: "Why Puglia Property Prices Will Double by 2027",
    subtitle: "Data-Driven Analysis of Italy's Hottest Real Estate Market",
    author: "Maria Trulli",
    authorRole: "Market Analyst",
    date: "November 10, 2024",
    readTime: "8 min read",
    category: "Market Analysis",
    categoryColor: "from-blue-500 to-indigo-600",
    heroImage: "https://images.unsplash.com/photo-1599707367072-cd6ada2bc375?w=1600&h=800&fit=crop",
    authorImage: "https://i.pravatar.cc/150?img=5",
    tableOfContents: [
      "Market Overview",
      "Growth Drivers",
      "Area Analysis",
      "Investment Strategy",
      "Risk Factors"
    ],
    content: {
      intro: "Puglia's property market is experiencing unprecedented growth, with international buyers driving prices up by 30% annually in prime coastal areas. Our analysis reveals why this trend will continue through 2027.",
      sections: [
        {
          title: "Current Market Performance",
          content: "The numbers speak for themselves. Puglia has emerged from relative obscurity to become one of Europe's hottest property markets, attracting buyers from London to Los Angeles.",
          stats: {
            "Coastal Properties": "+32% YoY",
            "Historic Centers": "+28% YoY",
            "Rural Masserie": "+24% YoY",
            "Avg Price/sqm": "€2,850"
          },
          chart: {
            type: "growth",
            data: [
              { year: "2021", value: 1500 },
              { year: "2022", value: 1950 },
              { year: "2023", value: 2540 },
              { year: "2024", value: 3300 },
              { year: "2025*", value: 4290 },
              { year: "2027*", value: 6600 }
            ]
          }
        },
        {
          title: "Key Growth Drivers",
          content: "Several factors are converging to create the perfect storm for property price appreciation in Puglia.",
          subsections: [
            {
              subtitle: "Infrastructure Investment",
              points: [
                "€3.2 billion government allocation for Puglia",
                "High-speed rail connection to Rome by 2026",
                "47 new direct flight routes to European capitals",
                "Marina and port expansions"
              ]
            },
            {
              subtitle: "Tourism Boom",
              points: [
                "15+ million annual tourists",
                "300% increase in luxury accommodation searches",
                "Ryanair establishing Puglia hub",
                "UNESCO heritage status applications"
              ]
            }
          ]
        }
      ]
    }
  },
  'ostuni-success-story': {
    title: "From €200k to €2M: Ostuni Villa Success Story",
    subtitle: "How One Investor Turned a Ruined Masseria into a Luxury Rental Empire",
    author: "Giuseppe Funaro",
    authorRole: "Senior Investment Advisor",
    date: "November 5, 2024",
    readTime: "10 min read",
    category: "Success Stories",
    categoryColor: "from-purple-500 to-pink-600",
    heroImage: "https://images.unsplash.com/photo-1573408301185-9146fe634ad0?w=1600&h=800&fit=crop",
    authorImage: "/Giuseppe Funaro 062025.jpg",
    content: {
      intro: "When British investor Michael K. first saw the abandoned masseria on the outskirts of Ostuni, most people would have walked away. Two years later, it's valued at €2 million and generates €180,000 in annual rental income.",
      sections: [
        {
          title: "The Beginning: A Diamond in the Rough",
          content: "The 400-year-old masseria had been abandoned for decades. The roof had partially collapsed, walls were crumbling, and the 2-hectare land was completely overgrown. But Michael saw potential where others saw problems.",
          image: "https://images.unsplash.com/photo-1509833903111-9cb142f644e4?w=1200&h=600&fit=crop",
          stats: {
            "Purchase Price": "€200,000",
            "Land Size": "2 hectares",
            "Building Size": "450 sqm",
            "Initial Condition": "Ruins"
          }
        }
      ]
    }
  },
  'tax-optimization': {
    title: "Tax Optimization for Italian Property Investors",
    subtitle: "Legal Strategies to Maximize Your Returns",
    author: "Marco Rossi",
    authorRole: "Tax Advisor",
    date: "October 28, 2024",
    readTime: "7 min read",
    category: "Tax & Legal",
    categoryColor: "from-yellow-500 to-orange-600",
    heroImage: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=1600&h=800&fit=crop",
    authorImage: "https://i.pravatar.cc/150?img=8",
    content: {
      intro: "Smart tax planning can make the difference between a good investment and a great one. Here's how to legally minimize your tax burden on Italian property investments.",
      sections: [
        {
          title: "Understanding Italian Property Taxes",
          content: "Italy's tax system offers several opportunities for optimization, especially for foreign investors who structure their investments correctly.",
          highlights: [
            "7% flat tax for new residents",
            "No wealth tax on foreign assets",
            "Capital gains exemptions available",
            "VAT recovery on renovations"
          ]
        }
      ]
    }
  },
  'coastal-towns-puglia': {
    title: "Best Coastal Towns in Puglia for Investment",
    subtitle: "Where to Buy Before Prices Skyrocket",
    author: "Sofia Bianchi",
    authorRole: "Location Scout",
    date: "October 20, 2024",
    readTime: "9 min read",
    category: "Area Guides",
    categoryColor: "from-cyan-500 to-blue-600",
    heroImage: "https://images.unsplash.com/photo-1530176611600-d05c72e63dad?w=1600&h=800&fit=crop",
    authorImage: "https://i.pravatar.cc/150?img=1",
    content: {
      intro: "Puglia's 800km coastline offers countless investment opportunities, but knowing where to look is crucial. These five coastal towns offer the best combination of growth potential and current value.",
      sections: [
        {
          title: "Monopoli: The Rising Star",
          content: "Once overshadowed by its famous neighbors, Monopoli is now attracting serious investor attention with its authentic charm and untapped potential.",
          image: "https://images.unsplash.com/photo-1599654080051-e8a6ad7d0303?w=1200&h=600&fit=crop",
          stats: {
            "Current Price/sqm": "€2,800",
            "5-Year Growth": "+180%",
            "Rental Yield": "8.5%",
            "Distance to Airport": "45 min"
          }
        }
      ]
    }
  },
  'trullo-renovation-guide': {
    title: "Complete Guide to Trullo Renovation Costs",
    subtitle: "Everything You Need to Budget for Your Dream Trullo",
    author: "Giuseppe Funaro",
    authorRole: "Senior Investment Advisor", 
    date: "October 15, 2024",
    readTime: "11 min read",
    category: "Renovation",
    categoryColor: "from-orange-500 to-red-600",
    heroImage: "https://images.unsplash.com/photo-1613749355006-e1c1e13a3489?w=1600&h=800&fit=crop",
    authorImage: "/Giuseppe Funaro 062025.jpg",
    content: {
      intro: "Renovating a trullo is both an art and a science. With proper planning and realistic budgeting, you can transform these iconic Puglian structures into stunning modern homes while preserving their historic charm.",
      sections: [
        {
          title: "Understanding Trullo Construction",
          content: "Before diving into costs, it's essential to understand the unique construction of trulli. These conical stone dwellings require specialized restoration techniques.",
          highlights: [
            "Dry stone construction without mortar",
            "Limestone walls up to 2 meters thick",
            "Conical roofs requiring specialist masons",
            "Natural insulation properties"
          ],
          callout: {
            type: "warning",
            title: "Heritage Protection",
            text: "Many trulli are protected structures. Always verify regulations before starting work."
          }
        }
      ]
    }
  }
}

export default function BlogPost({ params }: { params: { slug: string } }) {
  const post = blogPosts[params.slug as keyof typeof blogPosts]

  if (!post) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-purple-600 to-indigo-800 flex items-center justify-center">
        <div className="bg-white p-8 rounded-lg shadow-xl max-w-2xl text-center">
          <h1 className="text-3xl font-bold mb-4">Post Not Found</h1>
          <p className="text-gray-600 mb-6">Sorry, this blog post doesn't exist.</p>
          <Link href="/blog" className="text-purple-600 hover:text-purple-700 font-semibold">
            ← Back to Blog
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative h-[85vh] min-h-[700px] overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0">
          <img 
            src={post.heroImage} 
            alt={post.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
        </div>
        
        {/* Navigation */}
        <div className="relative z-20 p-8">
          <Link href="/blog" className="inline-flex items-center gap-2 text-white/80 hover:text-white transition-colors">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to Blog
          </Link>
        </div>
        
        {/* Hero Content */}
        <div className="absolute bottom-0 left-0 right-0 p-8 md:p-16 z-20">
          <div className="max-w-4xl">
            <div className={`inline-flex items-center gap-2 bg-gradient-to-r ${post.categoryColor} px-4 py-2 rounded-full text-white text-sm font-semibold mb-6`}>
              {post.category}
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 leading-tight">
              {post.title}
            </h1>
            
            <p className="text-xl md:text-2xl text-white/90 mb-8 font-light">
              {post.subtitle}
            </p>
            
            <div className="flex items-center gap-6 text-white/80">
              <div className="flex items-center gap-3">
                <img 
                  src={post.authorImage} 
                  alt={post.author}
                  className="w-12 h-12 rounded-full border-2 border-white/20"
                />
                <div>
                  <div className="font-semibold">{post.author}</div>
                  <div className="text-sm opacity-80">{post.authorRole}</div>
                </div>
              </div>
              <div className="hidden md:block">•</div>
              <div className="hidden md:block">{post.date}</div>
              <div className="hidden md:block">•</div>
              <div className="hidden md:block">{post.readTime}</div>
            </div>
          </div>
        </div>
        
        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <svg className="w-6 h-6 text-white/60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </div>

      {/* Table of Contents (if available) */}
      {post.tableOfContents && (
        <div className="sticky top-20 float-right w-80 mr-8 mt-8 hidden xl:block">
          <div className="bg-gray-50 rounded-2xl p-6 border border-gray-200">
            <h3 className="font-bold text-gray-900 mb-4">Table of Contents</h3>
            <nav className="space-y-2">
              {post.tableOfContents.map((item, index) => (
                <a 
                  key={index}
                  href={`#section-${index}`}
                  className="block text-gray-600 hover:text-purple-600 transition-colors py-1"
                >
                  {item}
                </a>
              ))}
            </nav>
          </div>
        </div>
      )}

      {/* Article Content */}
      <article className="max-w-4xl mx-auto px-8 py-16">
        {/* Introduction */}
        <div className="prose prose-xl max-w-none mb-16">
          <p className="text-2xl leading-relaxed text-gray-700 font-light">
            {post.content.intro}
          </p>
        </div>

        {/* Content Sections */}
        {post.content.sections.map((section, index) => (
          <section key={index} id={`section-${index}`} className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-gray-900">
              {section.title}
            </h2>
            
            <div className="prose prose-lg max-w-none text-gray-700">
              <p className="mb-6">{section.content}</p>
              
              {/* Section Image */}
              {section.image && (
                <figure className="my-8">
                  <img 
                    src={section.image} 
                    alt={section.title}
                    className="w-full rounded-2xl shadow-lg"
                  />
                  {section.imageCaption && (
                    <figcaption className="text-center text-sm text-gray-600 mt-4">
                      {section.imageCaption}
                    </figcaption>
                  )}
                </figure>
              )}
              
              {/* Highlights */}
              {section.highlights && (
                <div className="bg-gradient-to-br from-purple-50 to-indigo-50 rounded-2xl p-8 my-8 border border-purple-200">
                  <h4 className="font-bold text-gray-900 mb-4">Key Points:</h4>
                  <ul className="space-y-3">
                    {section.highlights.map((highlight, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <span className="text-purple-600 text-xl">✓</span>
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
              
              {/* Stats Grid */}
              {section.stats && (
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 my-8">
                  {Object.entries(section.stats).map(([label, value]) => (
                    <div key={label} className="bg-gradient-to-br from-gray-50 to-white rounded-xl p-6 text-center border border-gray-200">
                      <div className="text-sm text-gray-600 mb-2">{label}</div>
                      <div className="text-2xl font-bold text-gray-900">{value}</div>
                    </div>
                  ))}
                </div>
              )}
              
              {/* Quote */}
              {section.quote && (
                <blockquote className="relative my-8 pl-8 pr-8 py-6 bg-gradient-to-r from-purple-50 to-transparent border-l-4 border-purple-500">
                  <div className="text-6xl text-purple-200 absolute -top-4 -left-2">"</div>
                  <p className="text-xl italic text-gray-700 mb-4">{section.quote.text}</p>
                  <cite className="text-gray-600 font-semibold">— {section.quote.author}</cite>
                </blockquote>
              )}
              
              {/* Callout Box */}
              {section.callout && (
                <div className={`rounded-2xl p-8 my-8 border-2 ${
                  section.callout.type === 'success' ? 'bg-green-50 border-green-300' : 
                  section.callout.type === 'warning' ? 'bg-yellow-50 border-yellow-300' : 
                  'bg-blue-50 border-blue-300'
                }`}>
                  <h4 className="font-bold text-gray-900 mb-2">{section.callout.title}</h4>
                  <p className="text-gray-700">{section.callout.text}</p>
                </div>
              )}
              
              {/* Timeline */}
              {section.timeline && (
                <div className="relative my-12">
                  <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-purple-200"></div>
                  {section.timeline.map((phase, i) => (
                    <div key={i} className="relative mb-8 ml-8">
                      <div className="absolute -left-8 w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center text-white font-bold text-xl">
                        {i + 1}
                      </div>
                      <div className="bg-white rounded-xl p-6 ml-12 shadow-lg border border-gray-200">
                        <h4 className="font-bold text-gray-900 mb-2">{phase.phase}</h4>
                        <p className="text-purple-600 font-semibold mb-3">{phase.duration}</p>
                        <ul className="space-y-2">
                          {phase.tasks.map((task, j) => (
                            <li key={j} className="flex items-start gap-2 text-gray-700">
                              <span className="text-green-500 mt-1">•</span>
                              {task}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  ))}
                </div>
              )}
              
              {/* Subsections */}
              {section.subsections && section.subsections.map((subsection, i) => (
                <div key={i} className="mt-8">
                  <h3 className="text-xl font-bold mb-4 text-gray-800">{subsection.subtitle}</h3>
                  <ul className="space-y-2">
                    {subsection.points.map((point, j) => (
                      <li key={j} className="flex items-start gap-3">
                        <span className="text-purple-600 mt-1">▸</span>
                        <span className="text-gray-700">{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>
        ))}

        {/* Call to Action */}
        <section className="bg-gradient-to-br from-purple-900 to-indigo-900 rounded-3xl p-12 text-white text-center my-16">
          <h3 className="text-3xl font-bold mb-4">Ready to Start Your Investment Journey?</h3>
          <p className="text-xl mb-8 opacity-90">
            Use our free tools to analyze your investment opportunity or get expert consultation.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/calculator" className="bg-white text-purple-900 px-8 py-4 rounded-full font-semibold hover:shadow-2xl transition-all hover:scale-105 inline-flex items-center gap-2">
              🧮 Calculate Your Grant
            </Link>
            <Link href="/contact" className="bg-purple-700 text-white border-2 border-purple-600 px-8 py-4 rounded-full font-semibold hover:bg-purple-600 transition-all inline-flex items-center gap-2">
              📞 Get Expert Help
            </Link>
          </div>
        </section>

        {/* Author Bio */}
        <section className="bg-gray-50 rounded-2xl p-8 my-16">
          <div className="flex items-start gap-6">
            <img 
              src={post.authorImage} 
              alt={post.author}
              className="w-24 h-24 rounded-full"
            />
            <div>
              <h3 className="text-xl font-bold mb-2">{post.author}</h3>
              <p className="text-gray-600 mb-4">{post.authorRole}</p>
              <p className="text-gray-700">
                {post.author === 'Giuseppe Funaro' 
                  ? 'Senior property investment advisor with 35+ years of international business experience, specializing in Italian property investment and EU grant optimization.'
                  : 'Property investment expert at InvestiScope, specializing in market analysis and investment strategies.'}
              </p>
            </div>
          </div>
        </section>

        {/* Share Section */}
        <section className="border-t border-gray-200 pt-8 mt-16">
          <h3 className="text-lg font-semibold mb-4">Share this article</h3>
          <div className="flex gap-4">
            <button 
              onClick={() => window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(post.title)}&url=${encodeURIComponent(window.location.href)}`, '_blank')}
              className="bg-gray-100 hover:bg-gray-200 p-3 rounded-full transition-colors"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
              </svg>
            </button>
            <button 
              onClick={() => window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(window.location.href)}`, '_blank')}
              className="bg-gray-100 hover:bg-gray-200 p-3 rounded-full transition-colors"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
              </svg>
            </button>
            <button 
              onClick={() => window.open(`https://wa.me/?text=${encodeURIComponent(post.title + ' ' + window.location.href)}`, '_blank')}
              className="bg-gray-100 hover:bg-gray-200 p-3 rounded-full transition-colors"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
              </svg>
            </button>
          </div>
        </section>
      </article>

      {/* Related Articles */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-6xl mx-auto px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Related Articles</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {/* Add related articles here based on the current post */}
            <article className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all hover:-translate-y-1">
              <div className="h-48 bg-gradient-to-br from-blue-400 to-blue-600"></div>
              <div className="p-6">
                <div className="text-sm text-gray-500 mb-2">Nov 10, 2024 • 4 min read</div>
                <h4 className="text-xl font-bold text-gray-900 mb-2">Why Puglia Property Prices Will Double by 2027</h4>
                <p className="text-gray-600">Data-driven analysis of Puglia's property boom...</p>
                <Link href="/blog/puglia-property-trends" className="text-purple-600 font-semibold hover:text-purple-700 mt-4 inline-block">
                  Read More →
                </Link>
              </div>
            </article>
            
            <article className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all hover:-translate-y-1">
              <div className="h-48 bg-gradient-to-br from-green-400 to-green-600"></div>
              <div className="p-6">
                <div className="text-sm text-gray-500 mb-2">Nov 5, 2024 • 6 min read</div>
                <h4 className="text-xl font-bold text-gray-900 mb-2">From €200k to €2M: Ostuni Villa Success Story</h4>
                <p className="text-gray-600">How our client turned a ruined masseria into...</p>
                <Link href="/blog/ostuni-success-story" className="text-purple-600 font-semibold hover:text-purple-700 mt-4 inline-block">
                  Read More →
                </Link>
              </div>
            </article>
            
            <article className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all hover:-translate-y-1">
              <div className="h-48 bg-gradient-to-br from-purple-400 to-purple-600"></div>
              <div className="p-6">
                <div className="text-sm text-gray-500 mb-2">Oct 28, 2024 • 5 min read</div>
                <h4 className="text-xl font-bold text-gray-900 mb-2">Tax Optimization for Italian Property Investors</h4>
                <p className="text-gray-600">Advanced strategies to minimize liability and...</p>
                <Link href="/blog/tax-optimization" className="text-purple-600 font-semibold hover:text-purple-700 mt-4 inline-block">
                  Read More →
                </Link>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="bg-gradient-to-br from-purple-900 via-indigo-900 to-purple-800 py-16">
        <div className="max-w-4xl mx-auto px-8 text-center">
          <h3 className="text-3xl font-bold text-white mb-4">
            Stay Updated on Italian Property Investment
          </h3>
          <p className="text-white/80 mb-8 text-lg">
            Get exclusive insights on grants, market trends, and investment opportunities delivered to your inbox.
          </p>
          <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input 
              type="email" 
              placeholder="Enter your email" 
              className="flex-1 px-6 py-4 rounded-full bg-white/20 backdrop-blur border border-white/30 text-white placeholder-white/60 focus:outline-none focus:ring-4 focus:ring-white/20"
            />
            <button 
              type="submit" 
              className="px-8 py-4 bg-white text-purple-900 rounded-full font-semibold hover:shadow-lg transition-all hover:scale-105"
            >
              Subscribe
            </button>
          </form>
        </div>
      </section>
    </div>
  )
}
