import acrylicbalti from "../../public/assests/blackbalti.png";
import bluebalti from "../../public/assests/blackbalti.png";
import greenbalti from "../../public/assests/blackbalti.png";
import pinkbalti from "../../public/assests/blackbalti.png";
const items = [
  {
    title: "Visualize your space",
    img: acrylicbalti,
    link: "#",
    bg: "bg-[#ab4b62]",
  },
  {
    title: "Choose your Shade",
    img: pinkbalti,
    link: "#",
    bg: "bg-[#273261]",
  },
  {
    title: "Find a Creative Paint Buddy",
    img: greenbalti,
    link: "#",
    bg: "bg-[#65a2be]",
  },
  {
    title: "Locate a store near you",
    img: bluebalti,
    link: "#",
    bg: "bg-[#dc9e52]",
  },
];

export default function QuickHelpSection() {
  return (
    <section className="py-12">
      <h3 className="text-4xl font-semibold text-center text-[#273261] m-6">How can we help you?</h3>
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-4xl mx-auto">
        {items.map((item) => (
          <a
            key={item.title}
            href={item.link}
            className={`rounded-xl ${item.bg} flex flex-col items-center justify-center p-6 hover:scale-105 transition-transform shadow-lg min-h-[140px] text-white`}
          >
            <img src={item.img} alt="" className="mb-2 h-12 w-12 object-contain" />
            <div className="font-medium text-base text-center mt-2">{item.title}</div>
          </a>
        ))}
      </div>
    </section>
  );
}
