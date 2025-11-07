// app/podcast/page.tsx
import { Play } from "lucide-react";

function decodeHtmlEntities(text: string): string {
  if (!text) return "";
  return text
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/&#x27;/g, "'")
    .replace(/&#x2F;/g, "/");
}

interface Podcast {
  id: string;
  title: string;
  description: string;
  date: string;
}

// This is now an async Server Component
export default async function PodcastPage() {
  const API_KEY = process.env.YOUTUBE_API_KEY;
  const CHANNEL_ID = "UCCCKarloG2gtWD1pkNpbftA"; // Your channel ID
  const MAX_RESULTS = 50;

  let podcasts: Podcast[] = [];

  if (API_KEY) {
    try {
      const url = `https://www.googleapis.com/youtube/v3/search?part=snippet&channelId=${CHANNEL_ID}&order=date&maxResults=${MAX_RESULTS}&type=video&key=${API_KEY}`;
      const res = await fetch(url, { cache: "no-store" }); // Fresh data every load
      const data = await res.json();

      if (!data.error) {
        podcasts = data.items.map((item: any) => ({
          id: item.id.videoId,
          title: item.snippet.title,
          description: item.snippet.description,
          date: item.snippet.publishedAt,
        }));
      } else {
        console.error("YouTube API Error:", data.error);
      }
    } catch (error) {
      console.error("Fetch failed:", error);
    }
  }

  return (
    <main className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      <section className="relative h-96 flex items-center justify-center text-white">
        <div className="absolute inset-0">
          <img
            src="/FFMM-Cover.png"
            alt="Podcast recording"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>
        <div className="relative z-10 text-center px-4">
          <div className="flex justify-center mb-6">
            <img
              src="/FFMM_Logo1.svg"
              alt="Florida Floodplain Management Matters"
              className="h-32 w-auto"
            />
          </div>
          <p className="text-xl max-w-3xl mx-auto">
            Expert insights on floodplain management, coastal resilience, and community rating systems
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">

        {podcasts.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-gray-500">
              {API_KEY ? "Loading episodes..." : "Missing YouTube API key. Add YOUTUBE_API_KEY to .env.local"}
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {podcasts.map((podcast, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
              >
                <div className="relative aspect-video bg-gray-900 group cursor-pointer">
                  <iframe
                    className="w-full h-full"
                    src={`https://www.youtube.com/embed/${podcast.id}`}
                    title={podcast.title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-sm text-[hsl(var(--ocean-blue))] font-semibold">
                      {new Date(podcast.date).toLocaleDateString("en-US", {
                        month: "long",
                        day: "numeric",
                        year: "numeric",
                      })}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2 line-clamp-2">
                    {decodeHtmlEntities(podcast.title)}
                  </h3>
                  <p className="text-gray-600 text-sm line-clamp-3">
                    {decodeHtmlEntities(podcast.description)}
                  </p>
                </div>
              </div>
            ))}
          </div>
        )}

        <div className="mt-16 bg-white rounded-2xl shadow-lg p-8 md:p-12 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Subscribe for Updates
          </h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Don't miss out on our latest episodes. Subscribe to our YouTube channel to stay informed
            about floodplain management, coastal resilience, and community development.
          </p>
          <a
            href="https://www.youtube.com/channel/UCCCKarloG2gtWD1pkNpbftA"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-8 py-4 bg-[hsl(var(--ocean-blue))] text-white font-semibold rounded-lg hover:bg-[hsl(var(--ocean-blue))]/90 transition-all duration-200 transform hover:scale-105 shadow-lg"
          >
            <Play className="w-5 h-5 mr-2" fill="currentColor" />
            Subscribe on YouTube
          </a>
        </div>
      </div>
    </main>
  );
}