/*
	© 2020 NetSuite Inc.
	User may not copy, modify, distribute, or re-bundle or otherwise make available this code;
	provided, however, if you are an authorized user with a NetSuite account or log-in, you
	may use this code subject to the terms that govern your access and use.
*/

export interface LoggersAppender {
    ready(): boolean;
    info(data: any);
    error(data: any);
    start(action: string, options: object): object;
    end(startOptions: object, options: object);
}
