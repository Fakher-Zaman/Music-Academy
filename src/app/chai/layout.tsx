export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <>
            <h2>Chai Layout Item</h2>
            {children}
        </>
    );
}
