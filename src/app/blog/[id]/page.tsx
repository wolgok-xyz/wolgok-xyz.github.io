import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import blogData from "@/data/blogData";
import Breadcrumb from "@/components/Common/Breadcrumb";

export const metadata: Metadata = {
  title: "Project Details | Research Lab",
  description: "Detailed information about our research projects",
};

interface BlogDetailsProps {
  params: {
    id: string;
  };
}

export default function BlogDetails({ params }: BlogDetailsProps) {
  const blog = blogData.find((blog) => blog.id === parseInt(params.id));

  if (!blog) {
    return (
      <div className="container py-16">
        <h1 className="text-2xl font-bold">Project not found</h1>
        <Link href="/blog" className="text-primary hover:underline">
          Back to Projects
        </Link>
      </div>
    );
  }

  return (
    <>
      <Breadcrumb
        pageName={blog.title}
        description={blog.paragraph}
      />

      <section className="pt-[120px] pb-[120px]">
        <div className="container">
          <div className="flex flex-wrap">
            <div className="w-full px-4">
              <div className="mb-8 overflow-hidden rounded">
                <Image
                  src={blog.image}
                  alt={blog.title}
                  width={1200}
                  height={600}
                  className="w-full"
                />
              </div>
              <div className="mb-8">
                <h1 className="mb-4 text-3xl font-bold text-black dark:text-white">
                  {blog.title}
                </h1>
                <div className="mb-4 flex items-center">
                  <div className="mr-4 flex items-center">
                    <Image
                      src={blog.author.image}
                      alt={blog.author.name}
                      width={40}
                      height={40}
                      className="rounded-full"
                    />
                    <div className="ml-2">
                      <h4 className="text-base font-medium text-black dark:text-white">
                        {blog.author.name}
                      </h4>
                      <p className="text-sm text-body-color">
                        {blog.author.designation}
                      </p>
                    </div>
                  </div>
                  <div className="text-sm text-body-color">
                    {blog.publishDate}
                  </div>
                </div>
                <div className="mb-8 flex flex-wrap gap-2">
                  {blog.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="rounded bg-primary/10 px-3 py-1 text-sm text-primary"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="prose max-w-none dark:prose-invert">
                  <p className="text-lg text-body-color">
                    {blog.paragraph}
                  </p>
                  {/* Add more detailed content here */}
                  <h2 className="mt-8 mb-4 text-2xl font-bold">Project Overview</h2>
                  <p className="text-body-color">
                    This project focuses on advancing the state of the art in {blog.title.toLowerCase()}. 
                    Our team is working on innovative solutions that combine cutting-edge technologies 
                    and research methodologies to address complex challenges in this field.
                  </p>
                  <h2 className="mt-8 mb-4 text-2xl font-bold">Key Features</h2>
                  <ul className="list-disc pl-6 text-body-color">
                    <li>Advanced research methodology</li>
                    <li>State-of-the-art implementation</li>
                    <li>Comprehensive evaluation framework</li>
                    <li>Real-world applications</li>
                  </ul>
                </div>
              </div>
              <div className="flex justify-between">
                <Link
                  href="/blog"
                  className="inline-flex items-center text-primary hover:underline"
                >
                  ← Back to Projects
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );