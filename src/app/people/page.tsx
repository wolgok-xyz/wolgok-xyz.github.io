import { Metadata } from "next";
import Breadcrumb from "@/components/Common/Breadcrumb";

export const metadata: Metadata = {
  title: "People | KIST Embodied AGI Research Lab",
  description: "Meet our researchers at KIST Embodied AGI Research Lab",
};

const PeoplePage = () => {
  return (
    <>
      <Breadcrumb
        pageName="People"
        description="Meet our researchers working on advancing embodied artificial general intelligence"
      />
      <section className="pt-16 md:pt-20 lg:pt-28">
        <div className="container">
          <div className="grid grid-cols-1 gap-x-8 gap-y-10 md:grid-cols-2 lg:grid-cols-3">
            {/* Researcher cards will go here */}
            <div className="w-full">
              <div className="wow fadeInUp" data-wow-delay=".1s">
                <div className="mb-10 rounded-md bg-white p-8 shadow-signUp dark:bg-dark lg:px-5 xl:px-8">
                  <div className="flex items-center justify-center">
                    <div className="relative h-[200px] w-[200px] overflow-hidden rounded-full">
                      <img
                        src="/images/team/placeholder.jpg"
                        alt="Researcher"
                        className="h-full w-full object-cover"
                      />
                    </div>
                  </div>
                  <h3 className="mb-4 mt-4 text-center text-xl font-bold text-black dark:text-white">
                    Dr. Jane Smith
                  </h3>
                  <p className="mb-4 text-center text-base text-body-color dark:text-body-color-dark">
                    Principal Investigator
                  </p>
                  <p className="text-center text-base text-body-color dark:text-body-color-dark">
                    Research interests: Embodied AI, Computer Vision, Robotics
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default PeoplePage; 