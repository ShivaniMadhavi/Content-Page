
export const GET_CONTENT_LISTING_DATA = 'GET_CONTENT_LISTING_DATA';
export function fetchContentListingData(ContentData) {
    return {
        type: GET_CONTENT_LISTING_DATA,
        ContentData
    }
}
