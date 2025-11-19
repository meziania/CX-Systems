import SingleBlog from "@/components/Blog/SingleBlog";
import blogData from "@/components/Blog/blogData";
import Breadcrumb from "@/components/Common/Breadcrumb";

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
