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
type NavItem = {
    id: string;
    title: string;
    description: string;
    href?: string;
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
type Variant1 = {
    id: string;
    type: "variant1";
    title: string;
    tile: NavItem;
    subTiles: [NavItem, NavItem, NavItem];
};
type Variant2 = {
    id: string;
    type: "variant2";
    title: string;
    components: Component[];
};
type Variant3 = {
    id: string;
    type: "variant3";
    title: string;
    href: string;
};
type BrandLogo = {
    logoPath: string;
    logoText: string;
};

export { BrandLogo as B, Component as C, NavBarData as N, Variant1 as V, NavItems as a, fetchNavData as b, NavItem as c, Variant2 as d, Variant3 as e, fetchNavData1 as f, getStrapiURL as g };
