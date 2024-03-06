export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <>
            <h2>Lemon Layout Item</h2>
            {children}
        </>
    );
}
