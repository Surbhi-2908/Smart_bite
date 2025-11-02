import { Wallet, CreditCard, Trophy, Users } from "lucide-react";

export default function DashboardCards() {
  const cards = [
    {
      title: "Budget",
      value: "$45 / $100",
      icon: Wallet,
      color: "border-green-400 text-green-700",
    },
    {
      title: "Spending",
      value: "$20.00 Today",
      icon: CreditCard,
      color: "border-blue-400 text-blue-700",
    },
    {
      title: "Rewards",
      value: "3 Badges Earned",
      icon: Trophy,
      color: "border-yellow-400 text-yellow-700",
    },
    {
      title: "Queue Status",
      value: "5 people ahead",
      icon: Users,
      color: "border-green-400 text-green-700",
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
      {cards.map((card, i) => {
        const Icon = card.icon;
        return (
          <div
            key={i}
            className={`flex items-center justify-between p-5 bg-white border rounded-xl shadow-sm ${card.color}`}
          >
            <div>
              <h3 className="text-gray-500 text-sm">{card.title}</h3>
              <p className="font-semibold text-lg">{card.value}</p>
            </div>
            <Icon className={`h-8 w-8 opacity-80`} />
          </div>
        );
      })}
    </div>
  );
}
