import "@/common/styles/globals.css";
import type { AppProps } from "next/app";
import { ThemeProvider } from "@mui/material/styles";
import { defaultTheme } from "@/ui/theme/CustomTheme";
import Script from "next/script";
import Head from "next/head";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={defaultTheme}>
      <Component {...pageProps} />
      <CustomHead />
      <ChannelTalk />
    </ThemeProvider>
  );
}

export default MyApp;

const CustomHead = () => {
  return (
    <Head>
      <title>퍼블리싱 서비스 문의 전 자가 진단하기 - 유레카</title>
      <link rel="icon" href="favicon.png" type="image/x-icon" />
      <link rel="shortcut icon" href="favicon.png" />
      <link rel="apple-touch-icon" href="favicon.png" />
      <meta
        name="description"
        content="유레카에 퍼블리싱 서비스를 문의하시나요? 문의 전 자가 진단을 해보세요."
      />
      <meta
        name="keywords"
        content="웹, 퍼블리싱, 프론트엔드, 랜딩페이지, 이벤트페이지, 광고페이지, 앱개발, 웹개발, 외주, 홈페이지, 사이트"
      />

      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://www.ureca.im" />
      <meta
        property="og:title"
        content="퍼블리싱 서비스 문의 전 자가 진단하기 - 유레카"
      />
      <meta property="og:image" content="favicon.png" />
      <meta
        property="og:description"
        content="유레카에 퍼블리싱 서비스를 문의하시나요? 문의 전 자가 진단을 해보세요"
      />
      <meta
        property="og:site_name"
        content="퍼블리싱 서비스 문의 전 자가 진단하기 - 유레카"
      />
      <meta property="og:locale" content="ko_KR" />
    </Head>
  );
};

const ChannelTalk = () => {
  return (
    <Script
      id="channelTalk"
      dangerouslySetInnerHTML={{
        __html: `(function () {
var w = window;
if (w.ChannelIO) {
return (window.console.error || window.console.log || function () {})(
"ChannelIO script included twice."
);
}
var ch = function () {
ch.c(arguments);
};
ch.q = [];
ch.c = function (args) {
ch.q.push(args);
};
w.ChannelIO = ch;
function l() {
if (w.ChannelIOInitialized) {
return;
}
w.ChannelIOInitialized = true;
var s = document.createElement("script");
s.type = "text/javascript";
s.async = true;
s.src = "https://cdn.channel.io/plugin/ch-plugin-web.js";
s.charset = "UTF-8";
var x = document.getElementsByTagName("script")[0];
x.parentNode.insertBefore(s, x);
}
if (document.readyState === "complete") {
l();
} else if (window.attachEvent) {
window.attachEvent("onload", l);
} else {
window.addEventListener("DOMContentLoaded", l, false);
window.addEventListener("load", l, false);
}
})();
ChannelIO("boot", {
pluginKey: "139fcbba-5a00-42f7-bf9d-8741c97a92d2",
});
`,
      }}
    />
  );
};
