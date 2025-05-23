import Breadcrumb from "@/components/Common/Breadcrumb";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Publications | Research Lab",
  description: "Research papers and patents from our lab.",
};

const PublicationsPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="Publications"
        description="Explore our lab's research output, including peer-reviewed papers and innovative patents."
      />
      <section className="py-16 md:py-20 lg:py-28">
        <div className="container">
          <h2 className="mb-8 text-2xl font-bold text-black dark:text-white">Research Papers</h2>
          <ul className="mb-12 list-disc pl-6 space-y-4">
            <li>
              <strong>Smith, J., Kim, H., & Lee, S.</strong> (2023). Vision-Language Navigation for Embodied Agents. <em>International Journal of Robotics Research</em>.
            </li>
            <li>
              <strong>Park, Y., Choi, M., & Lee, S.</strong> (2022). Multimodal Perception in Human-Robot Collaboration. <em>IEEE Transactions on Robotics</em>.
            </li>
            <li>
              <strong>Kim, H., et al.</strong> (2021). End-to-End Learning for Dexterous Robotic Manipulation. <em>Robotics: Science and Systems</em>.
            </li>
          </ul>
          <h2 className="mb-8 text-2xl font-bold text-black dark:text-white">Patents</h2>
          <ul className="list-disc pl-6 space-y-4">
            <li>
              <strong>US 12345678 B2</strong> - Method and System for Vision-Language-Based Robotic Navigation (2023)
            </li>
            <li>
              <strong>KR 20210098765 A</strong> - Apparatus for Multimodal Human-Robot Interaction (2021)
            </li>
          </ul>
        </div>
      </section>
    </>
  );
};

export default PublicationsPage; 