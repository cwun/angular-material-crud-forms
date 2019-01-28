import { Injectable } from '@angular/core';

import { InMemoryDbService } from 'angular-in-memory-web-api';

@Injectable({
    // Declare that this service should be created
    // by the root application injector
    providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {
    // Create a "database" with a set of collection named "contacts"
    createDb() {
        
        const contacts = [
            {
                id: 1,
                firstName: 'Quinn',
                lastName: 'Nixon',
                email: 'qnixon@gmail.com',
                work: 'design',
                street: '1760 Hillhurst Ave',
                city: 'Los Angeles',
                state: 'CA',
                zip: '90027'
            },
            {
                id: 2,
                firstName: 'Eric',
                lastName: 'Smith',
                email: 'esmith@gmail.com',
                work: 'code',
                street: '1910 Pacific Ave',
                city: 'Dallas',
                state: 'TX',
                zip: '75201'

            },
            {
                id: 3,
                firstName: 'Carlson',
                lastName: 'Cox',
                email: 'ccox@gmail.com',
                work: 'deploy',
                street: '12345 Beltline Rd',
                city: 'Dallas',
                state: 'TX',
                zip: '75080'

            },
            {
                id: 4,
                firstName: 'Kelsea',
                lastName: 'Kelly',
                email: 'kkelly@gmail.com',
                work: 'design',
                street: '33915 Coal Heritage Rd',
                city: 'Northfork',
                state: 'WV',
                zip: '24868'
            },
            {
                id: 5,
                firstName: 'Aino',
                lastName: 'Uno',
                email: 'auno@gmail.com',
                work: 'code',
                street: '185 N High St',
                city: 'Columbus',
                state: 'OH',
                zip: '43215'
            },
            {
                id: 6,
                firstName: 'Amy',
                lastName: 'Little',
                email: 'alittle@gmail.com',
                work: 'deploy',
                street: '3601 Dallas Pkwy',
                city: 'Plano',
                state: 'TX',
                zip: '75093'
            },
            {
                id: 7,
                firstName: 'Doris',
                lastName: 'Chandler',
                email: 'dchandler@gmail.com',
                work: 'design',
                street: '1660 India St',
                city: 'San Diego',
                state: 'CA',
                zip: '92110'

            },
            {
                id: 8,
                firstName: 'Brielle',
                lastName: 'Davidson',
                email: 'bdavidson@gmail.com',
                work: 'code',
                street: '5640 Kearny Mesa Rd Ste H',
                city: 'San Diego',
                state: 'CA',
                zip: '92110'
            },
            {
                id: 9,
                firstName: 'Vivian',
                lastName: 'Hurst',
                email: 'vhurst@gmail.com',
                work: 'deploy',
                street: '3960 W Point Loma Blvd',
                city: 'San Diego',
                state: 'CA',
                zip: '92110'
            },
            {
                id: 10,
                firstName: 'Haley',
                lastName: 'Frost',
                email: 'hforst@gmail.com',
                work: 'design',
                street: '1443 W Fullerton Ave',
                city: 'Chicago',
                state: 'IL',
                zip: '60614'
            },
            {
                id: 11,
                firstName: 'Fiona',
                lastName: 'Gaines',
                email: 'fgaines@gmail.com',
                work: 'code',
                street: '1443 W Fullerton Ave',
                city: 'Chicago',
                state: 'IL',
                zip: '60603'
            },
            {
                id: 12,
                firstName: 'Olivia',
                lastName: 'Flynn',
                email: 'oflynn@gmail.com',
                work: 'deploy',
                street: '1541 W Bryn Mawr Ave',
                city: 'Chicago',
                state: 'IL',
                zip: '60660'

            },
            {
                id: 13,
                firstName: 'Jennifer',
                lastName: 'Marshall',
                email: 'jmarshall@gmail.com',
                work: 'design',
                street: '509 Amsterdam Ave',
                city: 'New York',
                state: 'NY',
                zip: '10024'

            },
            {
                id: 14,
                firstName: 'Hope',
                lastName: 'Kennedy',
                email: 'hkennedy@gmail.com',
                work: 'code',
                street: '524 Court St',
                city: 'Brooklyn',
                state: 'NY',
                zip: '11231'
            },
            {
                id: 15,
                firstName: 'Sandra',
                lastName: 'Fitzpatrick',
                email: 'sfitzpatrick@gmail.com',
                work: 'deploy',
                street: '565 Gorge Rd',
                city: 'cliffside Park',
                state: 'NJ',
                zip: '07010'

            },
            {
                id: 16,
                firstName: 'Ashton',
                lastName: 'Silva',
                email: 'asilva@gmail.com',
                work: 'design',
                street: '4529 Sand Point Way NE',
                city: 'Seattle',
                state: 'WA',
                zip: '98105'
            },
            {
                id: 17,
                firstName: 'Peter',
                lastName: 'Byrd',
                email: 'pbyrd@gmail.com',
                work: 'deploy',
                street: '710 8th Ave S',
                city: 'Seattle',
                state: 'WA',
                zip: '98104'
            }
        ];

        return { contacts };
    }
}