import Breadcrumb from "@/components/Common/Breadcrumb";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Useful Links | Research Lab",
  description: "Links to our YouTube, GitHub, and Blog.",
};

const UsefulLinksPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="Useful Links"
        description="Find our lab's online presence and resources."
      />
      <section className="py-16 md:py-20 lg:py-28">
        <div className="container">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            <a
              href="https://www.youtube.com/@examplelab"
              target="_blank"
              rel="noopener noreferrer"
              className="block rounded-lg border border-gray-200 bg-white p-8 text-center shadow hover:border-primary hover:shadow-lg transition"
            >
              <span className="mb-2 block text-3xl">📺</span>
              <h3 className="mb-2 text-xl font-bold">YouTube</h3>
              <p className="text-body-color">Watch our research videos and presentations.</p>
            </a>
            <a
              href="https://github.com/examplelab"
              target="_blank"
              rel="noopener noreferrer"
              className="block rounded-lg border border-gray-200 bg-white p-8 text-center shadow hover:border-primary hover:shadow-lg transition"
            >
              <span className="mb-2 block text-3xl">💻</span>
              <h3 className="mb-2 text-xl font-bold">GitHub</h3>
              <p className="text-body-color">Explore our open-source projects and code.</p>
            </a>
            <a
              href="https://blog.examplelab.org"
              target="_blank"
              rel="noopener noreferrer"
              className="block rounded-lg border border-gray-200 bg-white p-8 text-center shadow hover:border-primary hover:shadow-lg transition"
            >
              <span className="mb-2 block text-3xl">📝</span>
              <h3 className="mb-2 text-xl font-bold">Blog</h3>
              <p className="text-body-color">Read articles and updates from our team.</p>
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default UsefulLinksPage; 