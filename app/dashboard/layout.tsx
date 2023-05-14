interface Props {
  children: React.ReactNode;
}

async function DashboardLayout({ children }: Props) {
  return (
    <div style={{ color: "red", padding: "15px" }}>
      <h3>Navbar</h3>
      {children}
    </div>
  );
}

export default DashboardLayout;
