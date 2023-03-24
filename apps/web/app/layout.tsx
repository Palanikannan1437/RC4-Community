import "../src/styles/globals.css";
import "@palanikannan1437/rc4-ui/styles.css";
import "@palanikannan1437/rc4community-timeline/styles.css";
import "@palanikannan1437/rc4community-navbar/styles.css";
import NavigationMenuDemo from "./navbar/nav";
import { getSession } from "../lib/session";
import qs from "qs";
// import { fetchNavData } from "@palanikannan1437/rc4community-navbar";
export function getStrapiURL(path: string = ""): string {
  return `${process.env.NEXT_PUBLIC_STRAPI_API_URL || "http://localhost:1337"
    }${path}`;
}

type NavObjectType = { title: string; href: string; description: string };

async function fetchNavData(
  urlParamsObject: object = {},
  options: object = {}
): Promise<NavObjectType[]> {
  const mergedOptions = {
    headers: {
      "Content-Type": "application/json",
    },
    ...options,
  };

  const queryString = qs.stringify(urlParamsObject);
  const requestUrl = `${getStrapiURL(
    `/api/navs${queryString ? `?${queryString}` : ""}`
  )}`;

  const response = await fetch(requestUrl, mergedOptions);

  if (!response.ok) {
    console.error(response.statusText);
    throw new Error(`An error occured please try again`);
  }
  const data = await response.json();
  return data.data;
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getSession();

  const components = await fetchNavData({ cache: "no-store" });

  return (
    <html className="ui-dark dark bg-zinc-900">
      <body>
        <NavigationMenuDemo session={session} components={components} />
        <div className="flex min-h-screen flex-col items-center justify-center py-2">
          <main className="mx-auto w-auto px-4 pt-16 pb-8 sm:pt-24 lg:px-8">
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}
