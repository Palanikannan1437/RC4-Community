import qs from "qs";
/**
 * Get full Strapi URL from path
 * @param {string} path Path of the URL
 * @returns {string} Full Strapi URL
 */
export function getStrapiURL(path: string = ""): string {
    return `${process.env.NEXT_PUBLIC_STRAPI_API_URL || "http://localhost:1337"
        }${path}`;
}

/**
 * Helper to make GET requests to Strapi API endpoints
 * @param {Object} urlParamsObject URL params object, will be stringified
 * @param {Object} options Options passed to fetch
 * @returns Parsed API call response
 */
export async function fetchNavData(
    options: object = {},
    urlParamsObject: object = {}
): Promise<Component[]> {
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

export type Component = { id: string, attributes: { title: string; href: string; description: string } };

export type Root = {
    brandLogo: BrandLogo
    variant1: Variant1[]
    variant2: Variant2[]
    variant3: Variant3[]
}

export type NavItems = (Variant1 | Variant2 | Variant3)[]

export type BrandLogo = {
    logoPath: string
    logoText: string
}

export type Variant1 = {
    title: string
    type: string
    tile: Tile
    subTiles: [SubTile, SubTile, SubTile]
}

export type Tile = {
    text: string
    description: string
}

export type SubTile = {
    href: string
    title: string
    description: string
}

export type Variant2 = {
    title: string
    type: string
    components: Component[]
}

export type Attributes = {
    href: string
    title: string
    description: string
    createdAt: string
    updatedAt: string
    publishedAt: string
}

export type Variant3 = {
    title: string
    type: string
    href: string
}
