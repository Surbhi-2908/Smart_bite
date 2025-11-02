export default function QuickMenu() {
  const menuItems = [
    {
      name: "Low Waste Burrito",
      image: "/burrito.jpg",
    },
    {
      name: "Grilled Chicken Salad",
      image: "/chicken-salad.jpg",
    },
    {
      name: "Tomato Ball Soup",
      image: "/soup.jpg",
    },
    {
      name: "Falafel Wrap",
      image: "/falafel.jpg",
    },
  ];

  return (
    <div className="bg-white p-6 rounded-2xl shadow-sm border">
      <h3 className="text-lg font-semibold mb-4">Quick Order / Menu Preview</h3>
      <div className="flex items-center justify-start gap-6 overflow-x-auto pb-2">
        {menuItems.map((item, index) => (
          <div
            key={index}
            className="flex flex-col items-center min-w-[120px] hover:scale-105 transition-transform"
          >
            <div className="w-24 h-24 rounded-full overflow-hidden border-2 border-green-500 shadow-sm">
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-full object-cover"
              />
            </div>
            <p className="mt-2 text-sm font-medium text-gray-700 text-center">
              {item.name}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
