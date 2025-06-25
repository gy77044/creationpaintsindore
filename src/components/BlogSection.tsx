import React from "react";

const blogPosts = [
  {
    title: "Modern Hall Paint Color Combinations: Blending Indian Tradition with Contemporary Design",
    image: "https://ext.same-assets.com/305100765/3441984267.jpeg",
    link: "#",
  },
  {
    title: "Pongal Glow-Up: How a Simple Wall Makeover Can Transform Your Celebrations",
    image: "https://ext.same-assets.com/305100765/3985277357.jpeg",
    link: "#",
  },
  {
    title: "Glamorous Three-Color Combinations for a Sophisticated Look at Home",
    image: "https://ext.same-assets.com/305100765/3985277357.jpeg",
    link: "#",
  },
  {
    title: "Pongal Glow-Up: How a Simple Wall Makeover Can Transform Your Celebrations",
    image: "https://ext.same-assets.com/305100765/3985277357.jpeg",
    link: "#",
  },
  {
    title: "Pongal Glow-Up: How a Simple Wall Makeover Can Transform Your Celebrations",
    image: "https://ext.same-assets.com/305100765/3985277357.jpeg",
    link: "#",
  },
];

export default function BlogSection() {
  return (
    <section className="py-10 max-w-[80%] m-auto">
      <div className="mx-auto">
        <h3 className="text-2xl font-bold text-[#273261] mb-3">Ideas and Inspiration</h3>
        <div className="mb-4 text-gray-800 text-sm">The best of ideas to enrich your home decor journey</div>
        <div className="grid gap-6 grid-cols-1 md:grid-cols-3 lg:grid-cols-5">
          {blogPosts.map((blog) => (
            <a
              key={blog.title}
              href={blog.link}
              className="bg-white rounded-xl shadow hover:scale-105 hover:border-[#ab4b62] border border-transparent transition-all flex flex-col overflow-hidden"
            >
              <img src={blog.image} alt={blog.title} className="h-36 w-full object-cover" />
              <div className="flex-1 p-4 flex flex-col">
                <div className="text-[#273261] font-semibold mb-2 text-base line-clamp-3 min-h-[64px]">
                  {blog.title}
                </div>
                <span className="mt-auto text-[#ab4b62] font-medium underline text-xs">Read more</span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
