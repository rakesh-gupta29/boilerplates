import Sidebar from "./sidebar";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="lg:grid grid-cols-12">
      <aside className="col-start-1 col-end-3">
        <Sidebar />
      </aside>
      <main className="col-start-3 col-end-13">{children}</main>
    </div>
  );
}
