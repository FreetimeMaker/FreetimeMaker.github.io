import type { Metadata } from "next";
import HoverCard from "@/components/hover-card";
import ThemeToggle from "@/components/theme-toggle";

export const metadata: Metadata = {
  title: "My Portfolio",
  description:
    "Hello, I'm Freetime Maker and I like to make Web and Android Apps. Explore my portfolio with projects like GeoWeather, SuperSMP Companion and FreetimeSDK.",
  alternates: {
    canonical: "/",
  },
  keywords: [
    "Freetime Maker",
    "portfolio",
    "web developer",
    "android developer",
    "GeoWeather",
    "SuperSMP Companion",
    "FreetimeSDK",
  ],
  openGraph: {
    title: "My Portfolio | Freetime Maker",
    description:
      "Hello, I'm Freetime Maker and I like to make Web and Android Apps.",
    url: "https://free-time.me/",
    type: "website",
  },
};

const languagesRow1 = [
  { src: "/images/java.png", alt: "Java Logo", label: "Java" },
  { src: "/images/html.png", alt: "HTML Logo", label: "HTML 5" },
  { src: "/images/cs.png", alt: "C# Logo", label: "C#" },
  { src: "/images/css.png", alt: "CSS Logo", label: "CSS" },
];

const languagesRow2 = [
  { src: "/images/gh.png", alt: "GitHub Logo", label: "GitHub" },
  { src: "/images/git.png", alt: "Git Logo", label: "Git" },
  { src: "/images/gitlab.png", alt: "GitLab Logo", label: "GitLab" },
  { src: "/images/kt.png", alt: "Kotlin Logo", label: "Kotlin" },
  { src: "/images/linux.png", alt: "Linux Logo", label: "Linux" },
];

const projects = [
  { src: "/images/geoweather.png", alt: "GeoWeather Logo", label: "GeoWeather" },
  { src: "/images/ssmpc.png", alt: "SuperSMP Companion Logo", label: "SuperSMP Companion" },
  { src: "/images/freetimesdk.png", alt: "FreetimeSDK Logo", label: "FreetimeSDK" },
];

const geoWeatherPics = [
  { src: "/images/geoweatheraction1.png", alt: "First Picture of GeoWeather in Action", label: "GeoWeather Homepage" },
  { src: "/images/geoweatheraction2.png", alt: "Second Picture of GeoWeather in Action", label: "GeoWeather Searchpage" },
  { src: "/images/geoweatheraction3.png", alt: "Third Picture of GeoWeather in Action", label: "GeoWeather Weatherpage 1" },
  { src: "/images/geoweatheraction4.png", alt: "Fourth Picture of GeoWeather in Action", label: "GeoWeather Weatherpage 2" },
];

const ssmpcPics = [
  { src: "/images/ssmpcaction1.png", alt: "First Picture of SuperSMP Companion in Action", label: "SuperSMP Companion Shoppage with Cookies Text" },
  { src: "/images/ssmpcaction2.png", alt: "Second Picture of SuperSMP Companion in Action", label: "SuperSMP Companion Shopspage without Cookies Text" },
  { src: "/images/ssmpcaction3.png", alt: "Third Picture of SuperSMP Companion in Action", label: "SuperSMP Mappage" },
];

export default function HomePage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Freetime Maker",
    url: "https://free-time.me/",
    jobTitle: "Web and Android Developer",
    description:
      "Freetime Maker creates Web and Android Apps and open-source projects like GeoWeather, SuperSMP Companion and FreetimeSDK.",
    sameAs: ["https://github.com/FreetimeMaker"],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <ThemeToggle />
      <h1 className="anim-fade-in p-4 text-center" style={{ opacity: 0 }}>My Portfolio</h1>
      <p className="anim-fade-in-delay-1 p-4 text-center text-xl" style={{ opacity: 0 }}>
        Hello, I&apos;m Freetime Maker and I like to make Web and Android Apps.
      </p>
      <h1 className="anim-fade-in-delay-2 p-4 text-center" style={{ opacity: 0 }}>
        Here are Technologies I worked with listed.
      </h1>

      {/* Technologies */}
      <div className="anim-fade-in-delay-3 p-4" style={{ opacity: 0 }}>
        <div className="flex flex-wrap items-center justify-center gap-5 max-md:flex-col">
          {languagesRow1.map((l) => (
            <HoverCard key={l.label} {...l} size={180} variant="lang" />
          ))}
        </div>
        <div className="flex flex-wrap items-center justify-center gap-5 max-md:flex-col">
          {languagesRow2.map((l) => (
            <HoverCard key={l.label} {...l} size={180} variant="lang" />
          ))}
        </div>
      </div>

      {/* Projects */}
      <h1 className="anim-text-appear p-4 text-center">
        Here are Projects that I&apos;ve made listed.
      </h1>
      <div className="anim-image-appear p-4">
        <div className="flex flex-wrap items-center justify-center gap-5 max-md:flex-col">
          {projects.map((p) => (
            <HoverCard key={p.label} {...p} size={250} variant="project" />
          ))}
        </div>
      </div>

      {/* Projects in Action */}
      <h1 className="anim-text-appear p-4 text-center">
        Here are the Projects I&apos;ve made in Action
      </h1>
      <div className="p-4">
        {/* GeoWeather in Action */}
        <div className="anim-image-appear flex flex-col items-center">
          <h1 className="my-10 text-center">Here you can see GeoWeather in Action.</h1>
          <div className="flex flex-wrap items-center justify-center gap-5 max-md:flex-col md:items-start">
            {geoWeatherPics.map((p) => (
              <HoverCard key={p.label} {...p} size={200} variant="geow" />
            ))}
          </div>
        </div>

        {/* SuperSMP Companion in Action */}
        <div className="anim-image-appear flex flex-col items-center">
          <h1 className="my-10 text-center">Here you can see SuperSMP Companion in Action.</h1>
          <div className="flex flex-wrap items-center justify-center gap-5 max-md:flex-col md:items-start">
            {ssmpcPics.map((p) => (
              <HoverCard key={p.label} {...p} size={250} variant="ssmpc" />
            ))}
          </div>
        </div>

        {/* Project links */}
        <h1 className="text-center">
          Here are URL&apos;s to the Projects I&apos;ve made.
        </h1>
        <div className="flex flex-wrap items-center justify-center gap-5">
          <h2>
            <a
              className="text-gw-txt no-underline"
              href="https://github.com/FreetimeMaker/GeoWeather"
              target="_blank"
              rel="noopener noreferrer"
              title="Look at the Source Code of GeoWeather on GitHub."
            >
              GeoWeather on GitHub
            </a>
          </h2>
          <h2>
            <a
              className="text-ssmpc-txt no-underline"
              href="https://github.com/FreetimeMaker/SuperSMP-Companion-App"
              target="_blank"
              rel="noopener noreferrer"
              title="Look at the Source Code of SuperSMP Companion on GitHub."
            >
              SuperSMP Companion on GitHub
            </a>
          </h2>
          <h2>
            <a
              className="text-fsdk-txt no-underline"
              href="https://github.com/FreetimeMaker/FreetimeSDK"
              target="_blank"
              rel="noopener noreferrer"
              title="Look at the Source Code of FreetimeSDK on GitHub."
            >
              FreetimeSDK on GitHub
            </a>
          </h2>
        </div>

        {/* Other websites */}
        <h1 className="text-center">Visit my other Websites</h1>
        <div className="flex flex-col items-center justify-center gap-5">
          <a
          className="text-don-txt no-underline" href="https://donation.free-time.me" title="Donate to me.">
            <h2>
              Donate to me.
            </h2>
          </a>
          <a className="text-geoweather-next-txt no-underline" href="https://geoweather-next.free-time.me" title="Look at the Weather anywhere in the Web without needing the App." target="_blank">
            <h2>
              Look at the Weather anywhere in the Web without needing the App.
            </h2>
          </a>
          <a className="text-dashboard-txt no-underline" href="https://dashboard.free-time.me" title="Go to the Dashboard to control everything." target="_blank">
            <h2>
              Go to the Dashboard to control everything.
            </h2>
          </a>
          <a className="text-fdroid-repo-txt no-underline" href="https://fdroid.free-time.me" title="Visit my own F-Droid Repository." target="_blank">
            <h2>
                Visit my own F-Droid Repository.
            </h2>
          </a>
          <a className="text-blog-txt no-underline" href="https://blog.free-time.me" title="Visit and read my Blogs." target="_blank">
            <h2>
                Visit and read my Blogs.
            </h2>
          </a>
          <a className="text-luma-store-txt no-underline" href="https://luma.free-time.me" title="Submit your own Android App to Luma Store." target="_blank">
            <h2>
                Submit your own Android App to Luma Store.
            </h2>
          </a>
        </div>

        <footer className="mt-[25px] text-center">&copy;  2026 FreetimeMaker</footer>
      </div>
    </>
  );
}
