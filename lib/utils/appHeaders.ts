export default class AppHeaders {
    private static accountHeaders: string[] = [
        'X-Account-User-Identity',
        'X-Account-User-Uuid',
        'X-Account-User-Filtered-Groups',
        'X-Account-User-Attr-Provider',
        'X-Account-Access-Token']

    static getValues(headers: any   ) {
        const userHeaders = {};
        for (const header of this.accountHeaders) {

            // @ts-ignore
            userHeaders[header.toLowerCase()] = headers[header.toLowerCase()];
        }
        return userHeaders;
    }
}