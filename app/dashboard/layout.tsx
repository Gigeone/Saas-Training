import ButtonSignOut from "../Components/ButtonSignOut";
import DashboardNav from "../Components/DashboardNav";

export default async function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <section className="max-w-[1200px] mx-auto md:flex md:items-center md:gap-4 h-screen w-full mt-2 p-2">
      <DashboardNav />
      <div className="w-full h-full">
        <ButtonSignOut />
        {children}
      </div>
    </section>
  );
}
