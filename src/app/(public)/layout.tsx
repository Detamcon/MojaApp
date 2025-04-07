// src/app/(public)/layout.tsx

export const metadata = { title: "Public | MojaApp" };

export default function PublicLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      {children} 
    </div>
  );
}