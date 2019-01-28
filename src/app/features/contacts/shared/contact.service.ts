import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { catchError, tap } from 'rxjs/operators';
import { Observable } from 'rxjs/Observable';

//import { environment } from '../../../../environments/environment';
//import { Logger } from '../../../core/logger/logger.service';
import { environment } from '@env/environment';
import { Logger } from '@app/core';
import { ToastService } from '@app/core';

import { Contact } from './contact';

const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class ContactService {
    private baseUrl = environment.restApi;
    private contactsUrl = `${this.baseUrl}contacts`;

    constructor(
        private http: HttpClient,
        private logger: Logger,
        private toastService: ToastService) {
    }

    /** 
     * GET: get all contacts from the database 
     */
    getContacts(): Observable<any> {
        this.logger.log(this.contactsUrl);
        return this.http
            .get<Contact[]>(this.contactsUrl)
            .pipe(
                tap(_ => this.notify('fetched contacts', 'GET')),
                catchError(this.handleError('getContacts', 'GET'))
            );
    }

    /** 
     * GET: get an existing contact from the database by an id 
     */ 
    getContact(id: number): Observable<any> {
        const url = `${this.contactsUrl}/${id}`;
        return this.http
            .get<Contact>(url)
            .pipe(
                tap(_ => this.notify(`fetched contact id=${id}`, 'GET')),
                catchError(this.handleError(`getContact id=${id}`, 'GET'))
            );
    }

    /** 
     * POST: add a new contact to the database 
     */
    addContact(contact: Contact): Observable<any> {
        return this.http
            .post<Contact>(this.contactsUrl, contact, httpOptions)
            .pipe(
                tap((contact: Contact) => this.notify(`added hero w/ id=${contact.id}`, 'POST')),
                catchError(this.handleError('addContact', 'POST'))
            );
    }

    /** 
     * PUT: update an existing contact to the database 
     */
    updateContact(contact: Contact): Observable<any> {
        return this.http
            .put(this.contactsUrl, contact, httpOptions)
            .pipe(
                tap(_ => this.notify(`updated contact id=${contact.id}`, 'PUT')),
                catchError(this.handleError('updateContact', 'PUT'))
            );
    }

    /** 
     * DELETE: delete an existing hero from the database 
     */
    deleteContact(contact: Contact | number): Observable<any> {
        const id = typeof contact === 'number' ? contact : contact.id;
        const url = `${this.contactsUrl}/${id}`;
        return this.http
            .delete<Contact>(url, httpOptions)
            .pipe(
                tap(_ => this.notify(`deleted contact id=${id}`, 'DELETE')),
                catchError(this.handleError('deleteContact', 'DELETE'))
            );
    }

    /**
     * Prepare an error handler for failed HTTP requests.
     * That handler extracts the error message and logs it.
     * It also adds the message to the errors$ observable to which the caller
     * may listen and react.
     * @param operation The name/description of the operation that failed
     * @param method The HTTP method for the failed HTTP request
     */
    protected handleError(operation: string, method: string) {
        return function errorHandler(res: HttpErrorResponse) {
            this.logger.error(res);
            const eMsg = res.message || '';
            const error = `${this.entityNamePlural} ${operation} Error${
                eMsg ? ': ' + eMsg : ''
                }`;
            this.notify(error, method);
            this.updateState({ error, loading: false });
        }.bind(this);
    }

    protected notify(message: string, method: string) {
        this.toastService.openSnackBar(message, method);
    }
}
