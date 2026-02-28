export default function LegalLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div dir="rtl" lang="ar" className="font-arabic">
      {children}
    </div>
  );
}
