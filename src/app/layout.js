export const metadata = {
  title: "Auto Parts Store",
  description: "Starter project",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
