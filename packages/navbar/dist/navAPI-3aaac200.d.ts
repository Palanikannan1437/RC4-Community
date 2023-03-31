/**
 * Get full Strapi URL from path
 * @param {string} path Path of the URL
 * @returns {string} Full Strapi URL
 */
declare function getStrapiURL(path?: string): string;
/**
 * Helper to make GET requests to Strapi API endpoints
 * @param {Object} urlParamsObject URL params object, will be stringified
 * @param {Object} options Options passed to fetch
 * @returns Parsed API call response
 */
declare function fetchNavData1(options?: object, urlParamsObject?: object): Promise<Component[]>;
declare function fetchNavData(options?: object, urlParamsObject?: object): Promise<Component[]>;
type Component = {
    id: string;
    attributes: {
        title: string;
        href: string;
        description: string;
    };
};
type NavBarData = {
    brandLogo: BrandLogo;
    variant1: Variant1[];
    variant2: Variant2[];
    variant3: Variant3[];
};
type NavItems = ({
    show: boolean;
    item: Variant1;
} | {
    show: boolean;
    item: Variant2;
} | {
    show: boolean;
    item: Variant3;
})[];
type BrandLogo = {
    logoPath: string;
    logoText: string;
};
type Tile = {
    id: string;
    title: string;
    description: string;
    href?: string;
};
type Variant1 = {
    id: string;
    title: string;
    type: "variant1";
    tile: Tile;
    subTiles: [Tile, Tile, Tile];
};
type Variant2 = {
    id: string;
    type: "variant2";
    title: string;
    components: Component[];
};
type Variant3 = {
    id: string;
    title: string;
    type: "variant3";
    href: string;
};

export { BrandLogo as B, Component as C, NavBarData as N, Tile as T, Variant1 as V, NavItems as a, fetchNavData as b, Variant2 as c, Variant3 as d, fetchNavData1 as f, getStrapiURL as g };
