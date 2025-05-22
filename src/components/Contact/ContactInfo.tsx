const ContactInfo = () => {
  return (
    <div className="wow fadeInUp mb-12 rounded-xs bg-white p-8 shadow-three dark:bg-gray-dark lg:px-5 xl:p-[55px]">
      <h2 className="mb-8 text-2xl font-bold text-black dark:text-white">
        Contact Information
      </h2>
      <p className="mb-9 text-base font-medium leading-relaxed text-body-color">
        Feel free to reach out to us for research collaborations, student opportunities, or general inquiries about our work in embodied AGI.
      </p>
      <div className="mb-8 flex w-full max-w-[370px]">
        <div className="mr-6 flex h-[60px] w-full max-w-[60px] items-center justify-center overflow-hidden rounded bg-primary bg-opacity-5 text-primary">
          <svg
            width="28"
            height="19"
            viewBox="0 0 28 19"
            className="fill-current"
          >
            <path d="M25.3636 0H2.63636C1.18182 0 0 1.16785 0 2.6052V16.3948C0 17.8322 1.18182 19 2.63636 19H25.3636C26.8182 19 28 17.8322 28 16.3948V2.6052C28 1.16785 26.8182 0 25.3636 0ZM25.3636 1.5721C25.5909 1.5721 25.7727 1.61702 25.9545 1.75177L14.6364 8.53428C14.2273 8.75886 13.7727 8.75886 13.3636 8.53428L2.04545 1.75177C2.22727 1.66194 2.40909 1.5721 2.63636 1.5721H25.3636ZM25.3636 17.4279H2.63636C2.09091 17.4279 1.59091 16.9943 1.59091 16.4039V3.15123L12.5 9.88148C12.9545 10.1513 13.4545 10.2861 13.9545 10.2861C14.4545 10.2861 14.9545 10.1513 15.4091 9.88148L26.3182 3.15123V16.4039C26.4091 16.9943 25.9091 17.4279 25.3636 17.4279Z" />
          </svg>
        </div>
        <div className="w-full">
          <h4 className="mb-1 text-xl font-bold text-dark dark:text-white">
            Email
          </h4>
          <p className="text-base text-body-color">contact@kist.re.kr</p>
        </div>
      </div>
      <div className="mb-8 flex w-full max-w-[370px]">
        <div className="mr-6 flex h-[60px] w-full max-w-[60px] items-center justify-center overflow-hidden rounded bg-primary bg-opacity-5 text-primary">
          <svg
            width="24"
            height="28"
            viewBox="0 0 24 28"
            className="fill-current"
          >
            <path d="M12 0C5.37259 0 0 5.37259 0 12C0 18.6274 5.37259 24 12 24C18.6274 24 24 18.6274 24 12C24 5.37259 18.6274 0 12 0ZM12 2.4C17.3023 2.4 21.6 6.69765 21.6 12C21.6 17.3023 17.3023 21.6 12 21.6C6.69765 21.6 2.4 17.3023 2.4 12C2.4 6.69765 6.69765 2.4 12 2.4ZM12 4.8C8.02355 4.8 4.8 8.02355 4.8 12C4.8 15.9764 8.02355 19.2 12 19.2C15.9764 19.2 19.2 15.9764 19.2 12C19.2 8.02355 15.9764 4.8 12 4.8ZM12 7.2C14.6512 7.2 16.8 9.34884 16.8 12C16.8 14.6512 14.6512 16.8 12 16.8C9.34884 16.8 7.2 14.6512 7.2 12C7.2 9.34884 9.34884 7.2 12 7.2Z" />
          </svg>
        </div>
        <div className="w-full">
          <h4 className="mb-1 text-xl font-bold text-dark dark:text-white">
            Location
          </h4>
          <p className="text-base text-body-color">
            Korea Institute of Science and Technology (KIST)<br />
            Seoul, South Korea
          </p>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo; 