import { Blog } from "@/types/blog";

const blogData: Blog[] = [
  {
    id: 1,
    title: "AI Transforms Customer Experience in 2025",
    paragraph:
      "Discover how artificial intelligence is revolutionizing customer interactions and improving satisfaction by an average of 40%.",
    image: "/images/blog/blog-01.jpg",
    author: {
      name: "Sophie Martin",
      image: "/images/blog/author-03.png",
      designation: "CX Expert",
    },
    tags: ["intelligence-artificielle"],
    publishDate: "2025",
  },
  {
    id: 2,
    title: "5 Steps to Succeed in Your CX Transformation",
    paragraph:
      "Complete guide to digitize your customer journey and maximize loyalty through modern technologies.",
    image: "/images/blog/blog-02.jpg",
    author: {
      name: "Alexandre Dupont",
      image: "/images/blog/author-02.png",
      designation: "Digital Consultant",
    },
    tags: ["transformation"],
    publishDate: "2025",
  },
  {
    id: 3,
    title: "Measurable ROI: How to Calculate Your CX Impact",
    paragraph:
      "Essential metrics and KPIs to measure the effectiveness of your customer experience strategy and justify your investments.",
    image: "/images/blog/blog-03.jpg",
    author: {
      name: "Marie Dubois",
      image: "/images/blog/author-03.png",
      designation: "Business Analyst",
    },
    tags: ["analytics"],
    publishDate: "2025",
  },
];
export default blogData;
