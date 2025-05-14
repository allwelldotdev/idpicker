import { Inter } from "next/font/google"
import "./globals.css"
import { cn } from "@/lib/utils"
import { Providers } from "@/components/providers"
import AuthGate from "@/components/auth/AuthGate"
import { LanguageProvider } from '@/lib/context/LanguageContext'

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "idpicker - Discover Your Learning Path",
  description: "AI-powered learning style analysis and educational path recommendation",
}

function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={cn(inter.className, "min-h-screen bg-background antialiased")}>
        <Providers>
          <AuthGate>
            <LanguageProvider>
              {children}
            </LanguageProvider>
          </AuthGate>
        </Providers>
      </body>
    </html>
  );
}

export default RootLayout;
