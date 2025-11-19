import SingleBlog from "@/components/Blog/SingleBlog";
import blogData from "@/components/Blog/blogData";
import Breadcrumb from "@/components/Common/Breadcrumb";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "CX Solutions | CX System - News and Insights",
  description: "Discover our latest solutions, tips and trends in customer experience. Stay informed about CX System innovations.",
  // other metadata
};

const Blog = () => {
  return (
    <>
      <Breadcrumb
        pageName="Solutions & News"
        description="Explore our innovative solutions and discover the latest trends in customer experience. Use cases, expert advice and success stories."
      />

      <section className="pt-12">
        <div className="container">
          <div className="flex flex-col gap-6 rounded-2xl bg-primary/5 px-8 py-10 text-center md:flex-row md:items-center md:justify-between md:text-left">
            <div>
              <p className="text-sm font-semibold uppercase tracking-wide text-primary">
                Nouveauté
              </p>
              <h2 className="mt-2 text-2xl font-bold text-dark dark:text-white">
                Découvrez nos projets déployés sur le terrain
              </h2>
              <p className="mt-3 text-base text-body-color">
                Accédez à une sélection de cas clients illustrés avec images et
                résultats pour vous inspirer.
              </p>
            </div>
            <div>
              <Link
                href="/blog/projects"
                className="inline-flex items-center justify-center rounded-full bg-primary px-8 py-3 font-medium text-white transition hover:bg-primary/90"
              >
                Voir les projets
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="pt-[120px] pb-[120px]">
        <div className="container">
          <div className="-mx-4 flex flex-wrap justify-center">
            {blogData.map((blog) => (
              <div
                key={blog.id}
                className="w-full px-4 md:w-2/3 lg:w-1/2 xl:w-1/3"
              >
                <SingleBlog blog={blog} />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Blog;
