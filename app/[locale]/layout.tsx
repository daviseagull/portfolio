export default function LocaleLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  return (
    <html lang={locale} className="font-space-grotesk">
      <body>{children}</body>
    </html>
  );
}
