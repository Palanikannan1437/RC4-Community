import "../src/styles/globals.css";
import "@palanikannan1437/rc4-ui/styles.css";
import "@palanikannan1437/rc4community-timeline/styles.css";
import "@palanikannan1437/rc4community-navbar/styles.css";
import NavigationMenuDemo from "./navbar/nav";
import { getSession } from "../lib/session";

import { fetchNavData } from "@palanikannan1437/rc4community-navbar/core";

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getSession();

  const components = await fetchNavData();

  const navData = {
    brandLogo: { logoPath: "as", logoText: "RC4Community" },
    variant1: [
      {
        title: "Getting started 1",
        type: "variant1",
        tile: {
          text: "rc-ui",
          description:
            "Beautifully designed components built with Radix UI and Tailwind CSS.",
        },
        subTiles: [
          {
            href: "/",
            title: "Introduction",
            description:
              "Re-usable components built using Radix UI and Tailwind CSS.",
          },
          {
            href: "/",
            title: "Installation",
            description: "How to install dependencies and structure your app.",
          },
          {
            href: "/",
            title: "Introduction",
            description:
              "Re-usable components built using Radix UI and Tailwind CSS.",
          },
        ],
      },
      {
        title: "Getting started 2",
        type: "variant1",
        tile: {
          text: "rc-ui",
          description:
            "Beautifully designed components built with Radix UI and Tailwind CSS.",
        },
        subTiles: [
          {
            href: "/",
            title: "Introduction",
            description:
              "Re-usable components built using Radix UI and Tailwind CSS.",
          },
          {
            href: "/",
            title: "Installation",
            description: "How to install dependencies and structure your app.",
          },
          {
            href: "/",
            title: "Introduction",
            description:
              "Re-usable components built using Radix UI and Tailwind CSS.",
          },
        ],
      },
    ],
    variant2: [
      {
        title: "No Role",
        type: "variant2",
        components: components,
      },
      {
        title: "Member",
        type: "variant2",
        components: components,
      },
      {
        title: "Admin",
        type: "variant2",
        components: components,
      },
    ],
    variant3: [
      { title: "Documentation", type: "variant3", href: "/docs" },
      { title: "Docs", type: "variant3", href: "/docs" },
    ],
  };
  
  console.log(JSON.stringify(navData))

  const final = [
    navData.variant1[0],
    navData.variant2[0],
    navData.variant3[1],
    navData.variant1[1],
  ]
  return (
    <html className="ui-dark dark bg-zinc-900">
      <body>
        <NavigationMenuDemo session={session} components={components} navData={navData} final={final} />
        <div className="flex min-h-screen flex-col items-center justify-center py-2">
          <main className="mx-auto w-auto px-4 pt-16 pb-8 sm:pt-24 lg:px-8">
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}

// export function getStrapiURL(path: string = ""): string {
//   return `${process.env.NEXT_PUBLIC_STRAPI_API_URL || "http://localhost:1337"
//     }${path}`;
// }

// type NavObjectType = { id: string, attributes: { title: string; href: string; description: string } };

// async function fetchNavData(
//   urlParamsObject: object = {},
//   options: object = {}
// ): Promise<NavObjectType[]> {
//   const mergedOptions = {
//     headers: {
//       "Content-Type": "application/json",
//     },
//     ...options,
//   };

//   const queryString = qs.stringify(urlParamsObject);
//   const requestUrl = `${getStrapiURL(
//     `/api/navs${queryString ? `?${queryString}` : ""}`
//   )}`;

//   const response = await fetch(requestUrl, mergedOptions);

//   if (!response.ok) {
//     console.error(response.statusText);
//     throw new Error(`An error occured please try again`);
//   }
//   const data = await response.json();
//   return data.data;
// }
