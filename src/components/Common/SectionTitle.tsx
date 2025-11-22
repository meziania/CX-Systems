const SectionTitle = ({
  title,
  paragraph,
  width = "570px",
  center,
  mb = "100px",
}: {
  title: string;
  paragraph: string;
  width?: string;
  center?: boolean;
  mb?: string;
}) => {
  return (
    <>
      <div
        className={`w-full ${center ? "mx-auto text-center" : ""}`}
        style={{ maxWidth: width, marginBottom: mb }}
      >
        <h2 className="mb-4 text-3xl font-bold leading-tight text-black dark:text-white sm:text-4xl md:text-[45px]">
          <span className="bg-gradient-to-r from-primary via-purple-600 to-primary bg-clip-text text-transparent dark:from-primary dark:via-purple-400 dark:to-primary">
            {title}
          </span>
        </h2>
        <p className="text-base leading-relaxed text-body-color md:text-lg max-w-3xl mx-auto">
          {paragraph}
        </p>
      </div>
    </>
  );
};

export default SectionTitle;
