import Link from "next/link";

export default function Dashboard() {
  return (
    <div style={{ textAlign: "center", padding: "50px" }}>
      <h1>Welcome to Student Dashboard ✅</h1>
      <nav style={{ margin: "20px 0" }}>
        <Link href="/order">Order</Link> |{" "}
        <Link href="/profile">Profile</Link> |{" "}
        <Link href="/notifications">Notifications</Link> |{" "}
        <Link href="/settings">Settings</Link>
      </nav>
      <p>Track your orders, manage your account, and explore canteen offers!</p>
    </div>
  );
}
