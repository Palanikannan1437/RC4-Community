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

  const navData = await fetchNavData({"cache":"no-store"});
  
  const navItems = [
    { show: true, item: navData.variant1.data[0] },
    { show: true, item: navData.variant2.data[0] },
    { show: true, item: navData.variant3.data[1] },
    { show: true, item: navData.variant1.data[1] },
  ]

  return (
    <html className="ui-dark dark bg-zinc-900">
      <body>
        <NavigationMenuDemo session={session} navData={navData} navItems={navItems} />
        <div className="flex min-h-screen flex-col items-center justify-center py-2">
          <main className="mx-auto w-auto px-4 pt-16 pb-8 sm:pt-24 lg:px-8">
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}

// const navData = {
//   brandLogo: { logoText: "RC4Community" },
//   variant1: [
//     {
//       id: "string",
//       attributes: {
//         type: "variant1",
//         title: "Getting started 1",
//         tile: {
//           attributes: {
//             title: "rc-ui",
//             description:
//               "Beautifully designed components built with Radix UI and Tailwind CSS.",
//           }
//         },
//         subTiles: [
//           {
//             id: "s",
//             attributes: {
//               href: "/",
//               title: "Introduction",
//               description:
//                 "Re-usable components built using Radix UI and Tailwind CSS.",
//             }
//           },
//           {
//             id: "w",
//             attributes: {
//               href: "/",
//               title: "Installation",
//               description: "How to install dependencies and structure your app.",
//             }
//           },
//           {
//             id: "s3",
//             attributes: {
//               href: "/",
//               title: "Introduction",
//               description:
//                 "Re-usable components built using Radix UI and Tailwind CSS.",
//             }
//           },
//         ],
//       }

//     },
//     {
//       id: "string1",
//       attributes: {
//         title: "Getting started 2",
//         type: "variant1",
//         tile: {
//           id: "soem",
//           attributes: {
//             title: "rc-ui",
//             description:
//               "Beautifully designed components built with Radix UI and Tailwind CSS.",
//           }
//         },
//         subTiles: [
//           {
//             id: "s",
//             attributes: {
//               href: "/",
//               title: "Introduction",
//               description:
//                 "Re-usable components built using Radix UI and Tailwind CSS.",
//             }
//           },
//           {
//             id: "w",
//             attributes: {
//               href: "/",
//               title: "Installation",
//               description: "How to install dependencies and structure your app.",
//             }
//           },
//           {
//             id: "s3",
//             attributes: {
//               href: "/",
//               title: "Introduction",
//               description:
//                 "Re-usable components built using Radix UI and Tailwind CSS.",
//             }
//           },
//         ],
//       }

//     }
//   ],
//   variant2: [
//     {
//       id: '2',
//       attributes: {
//         title: "No Role",
//         type: "variant2",
//         components: components,
//       }
//     },
//     {
//       id: '3',
//       attributes: {
//         title: "Member",
//         type: "variant2",
//         components: components,
//       }
//     },
//     {
//       id: '4',
//       attributes: {
//         title: "Admin",
//         type: "variant2",
//         components: components,
//       }
//     },
//   ],
//   variant3: [
//     { id: '5', attributes: { title: "Documentation", type: "variant3", href: "/docs" } },
//     { id: '6', attributes: { title: "Docs", type: "variant3", href: "/docs" } },
//   ],
// };
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
