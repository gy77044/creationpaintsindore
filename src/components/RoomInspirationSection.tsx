import React from "react";

const inspirations = [
  {
    label: "Living Room",
    img: "https://ext.same-assets.com/305100765/1998606599.svg",
    color: "#d39d9a",
  },
  {
    label: "Bedroom",
    img: "https://ext.same-assets.com/305100765/1367661487.svg",
    color: "#dc9e52",
  },
  {
    label: "Kids Room",
    img: "https://ext.same-assets.com/305100765/2838098675.svg",
    color: "#65a2be",
  },
  {
    label: "Study Room",
    img: "https://ext.same-assets.com/305100765/1743763944.svg",
    color: "#c2cad5",
  },
];

export default function RoomInspirationSection() {
  return (
    <section className="py-8 max-w-[80%] m-auto">
      <h3 className="text-4xl font-semibold text-center text-[#273261] mb-6">Colours for every mood</h3>
        <p className="text-gray-500 text-center mb-12 max-w-2xl m-auto">Make your room stand out with our curated colours</p>
        <div className="grid gap-4 grid-cols-2 md:grid-cols-4 max-w-">
          {inspirations.map((room) => (
            <div
              key={room.label}
              className="rounded-xl shadow hover:scale-105 transition-transform bg-white overflow-hidden flex flex-col"
              style={{ borderTop: `8px solid ${room.color}` }}
            >
              <div className="flex-1 flex items-center justify-center py-8 bg-gray-50">
                <img src={room.img} alt={room.label} className="h-16 w-16 object-contain" />
              </div>
              <div className="text-center py-3 text-[#273261] font-semibold text-sm">
                {room.label}
              </div>
            </div>
          ))}
        </div>
    </section>
  );
}
