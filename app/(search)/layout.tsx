import { Footer } from "@/components/shared/footer";
import { Header } from "@/components/shared/header";
import { Suspense } from "react";

export default function SearchLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  return (
    <>
      <Suspense fallback={
        <div className="flex justify-center items-center min-h-screen">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-purple-500"></div>
        </div>
      }>
        <Header />
          {children}
        <Footer />
      </Suspense>
    </>
  );
}
