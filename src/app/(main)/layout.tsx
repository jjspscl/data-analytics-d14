import Header from "@/components/header";


const MainLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
    return (
        <>
            <Header />
            <main className="">
                {children}
            </main>
        </>
    )
}

export default MainLayout;