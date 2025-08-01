import { NextIntlClientProvider, hasLocale } from "next-intl";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import "../globals.scss";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { cookies } from "next/headers";
import AosWrapper from "@/components/layout/AosWrapper";
import "aos/dist/aos.css";
import ScrollBtn from "@/components/ui/ScrollBtn";
export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  // Ensure that the incoming `locale` is valid
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  const appCookies = await cookies()

  const themeMode = appCookies.get('modeLayout')

  return (
    <html className={`${themeMode ? themeMode : ''}`} lang={locale} dir={locale === "ar" ? "rtl" : "ltr"}>
      <head>
        <title>{locale === "ar" ? "شبل" : "shebl"}</title>
        <link rel="icon" href="/assets/logo/logo-head.png" />
      </head>
      <body className=" flex flex-col min-h-screen">
        {/* <ChangeThem /> */}
        <NextIntlClientProvider>
          <>
            <AosWrapper>

              <Navbar />
              {children}
              <Footer />
            </AosWrapper>
            <ScrollBtn />
          </>

        </NextIntlClientProvider>
      </body>
    </html>
  );
}
