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
declare function fetchNavData(options?: object, urlParamsObject?: object): Promise<NavObjectType[]>;
type NavObjectType = {
    id: string;
    attributes: {
        title: string;
        href: string;
        description: string;
    };
};

export { NavObjectType as N, fetchNavData as f, getStrapiURL as g };
