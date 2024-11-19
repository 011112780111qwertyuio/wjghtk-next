import '@fortawesome/fontawesome-svg-core/styles.css';
import { config } from '@fortawesome/fontawesome-svg-core';
import { GoogleOAuthProvider } from '@react-oauth/google';
config.autoAddCss = false;
import { Roboto } from "next/font/google";
import "./_styles/globals/utilts.scss";
import Provider from "./redux/Provider";
const roboto = Roboto({ weight: '400', subsets: ["latin"] });
export const metadata = {
  title: "WJHTK.COM | رحلات سياحية في مصر - استمتع بأفضل العروض للوجهات السياحية",
  description: "اكتشف أفضل العروض السياحية في مصر مع WJHTK.COM. احجز رحلات إلى الأهرامات، الأقصر، أسوان، البحر الأحمر والمزيد. عروض سياحية مميزة وخدمات حجز سهلة.",
  keywords: "رحلات سياحية, مصر, سياحة, الأهرامات, الأقصر, أسوان, البحر الأحمر, عروض سياحية, حجز رحلات, معالم سياحية في مصر, WJHTK",
  openGraph: {
    title: "WJHTK.COM | رحلات سياحية في مصر - استمتع بأفضل العروض للوجهات السياحية",
    description: "استمتع بأفضل العروض السياحية في مصر مع WJHTK.COM. احجز رحلتك إلى الأهرامات، الأقصر، أسوان، البحر الأحمر والمزيد.",
    image: "https://wjhtk.com/images/main-banner.jpg", // رابط الصورة الرئيسية للصفحة
    url: "https://wjhtk.com", // رابط الصفحة الرئيسية
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "WJHTK.COM | رحلات سياحية في مصر - استمتع بأفضل العروض للوجهات السياحية",
    description: "اكتشف العروض السياحية المميزة في مصر مع WJHTK.COM، بما في ذلك الأهرامات، الأقصر، البحر الأحمر، وأسوان. احجز رحلتك الآن!",
    image: "https://wjhtk.com/images/main-banner.jpg", // رابط الصورة الرئيسية للصفحة
  },
};
export default function RootLayout(
  {
    children,

  }
) {









  return (
    <html lang="ar">
      <body suppressHydrationWarning={true} className={roboto.className}>
        <GoogleOAuthProvider clientId="385206976159-f6hipust822aocahncnq25a8nr6tvh1j.apps.googleusercontent.com">
          <Provider>
            <div>
              {children}
            </div>
          </Provider>
        </GoogleOAuthProvider>
      </body>
    </html>
  );
}
