import { Injectable } from '@angular/core';
import { Employee } from './employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  

  constructor() { }

  employees: Employee[]=[
    {
      "employeeID": 1,
      "fullName": "Nancy Davolio",
      "position": "Sales Representative",
      "titleOfCourtesy": "Ms.",
      "birthDate": "1968-12-08T00:00:00.000Z",
      "hireDate": "2011-05-01T00:00:00.000Z",
      "address": "507 - 20th Ave. E.\r\nApt. 2A",
      "city": "Seattle",
      "region": "WA",
      "postalCode": "98122",
      "country": "USA",
      "homePhone": "(206) 555-9857",
      "extension": "5467",
      "photo": "https://js.devexpress.com/Demos/WidgetsGallery/JSDemos/images/employees/06.png",
      "notes": "Education includes a BA in psychology from Colorado State University in 1990.  She also completed \"The Art of the Cold Call.\"  Nancy is a member of Toastmasters International.",
      "reportsTo": 2
  }, {
      "employeeID": 2,
      "fullName": "Andrew Fuller",
      "position": "Vice President, Sales",
      "titleOfCourtesy": "Dr.",
      "birthDate": "1972-02-19T00:00:00.000Z",
      "hireDate": "2011-08-14T00:00:00.000Z",
      "address": "908 W. Capital Way",
      "city": "Tacoma",
      "region": "WA",
      "postalCode": "98401",
      "country": "USA",
      "homePhone": "(206) 555-9482",
      "extension": "3457",
      "photo": "https://js.devexpress.com/Demos/WidgetsGallery/JSDemos/images/employees/02.png",
      "notes": "Andrew received his BTS commercial in 1994 and a Ph.D. in international marketing from the University of Dallas in 2001.  He is fluent in French and Italian and reads German.  He joined the company as a sales representative, was promoted to sales manager in January 2012 and to vice president of sales in March 2013.  Andrew is a member of the Sales Management Roundtable, the Seattle Chamber of Commerce, and the Pacific Rim Importers Association.",
      "reportsTo": 1
  }, {
      "employeeID": 3,
      "fullName": "Janet Leverling",
      "position": "Sales Representative",
      "titleOfCourtesy": "Ms.",
      "birthDate": "1983-08-30T00:00:00.000Z",
      "hireDate": "2011-04-01T00:00:00.000Z",
      "address": "722 Moss Bay Blvd.",
      "city": "Kirkland",
      "region": "WA",
      "postalCode": "98033",
      "country": "USA",
      "homePhone": "(206) 555-3412",
      "extension": "3355",
      "photo": "https://js.devexpress.com/Demos/WidgetsGallery/JSDemos/images/employees/09.png",
      "notes": "Janet has a BS degree in chemistry from Boston College (2004).  She has also completed a certificate program in food retailing management.  Janet was hired as a sales associate in 2011 and promoted to sales representative in February 2012.",
      "reportsTo": 2
  }, {
      "employeeID": 4,
      "fullName": "Margaret Peacock",
      "position": "Sales Representative",
      "titleOfCourtesy": "Mrs.",
      "birthDate": "1957-09-19T00:00:00.000Z",
      "hireDate": "2012-05-03T00:00:00.000Z",
      "address": "4110 Old Redmond Rd.",
      "city": "Redmond",
      "region": "WA",
      "postalCode": "98052",
      "country": "USA",
      "homePhone": "(206) 555-8122",
      "extension": "5176",
      "photo": "https://js.devexpress.com/Demos/WidgetsGallery/JSDemos/images/employees/04.png",
      "notes": "Margaret holds a BA in English literature from Concordia College (1978) and an MA from the American Institute of Culinary Arts (1986).  She was assigned to the London office temporarily from July through November 2012.",
      "reportsTo": 2
  }, {
      "employeeID": 5,
      "fullName": "Steven Buchanan",
      "position": "Sales Manager",
      "titleOfCourtesy": "Mr.",
      "birthDate": "1975-03-04T00:00:00.000Z",
      "hireDate": "2012-10-17T00:00:00.000Z",
      "address": "14 Garrett Hill",
      "city": "London",
      "region": "UK",
      "postalCode": "SW1 8JR",
      "country": "UK",
      "homePhone": "(71) 555-4848",
      "extension": "3453",
      "photo": "https://js.devexpress.com/Demos/WidgetsGallery/JSDemos/images/employees/05.png",
      "notes": "Steven Buchanan graduated from St. Andrews University, Scotland, with a BSC degree in 1996.  Upon joining the company as a sales representative in 2012, he spent 6 months in an orientation program at the Seattle office and then returned to his permanent post in London.  He was promoted to sales manager in March 2013.  Mr. Buchanan has completed the courses \"Successful Telemarketing\" and \"International Sales Management.\"  He is fluent in French.",
      "reportsTo": 2
  }, {
      "employeeID": 6,
      "fullName": "Michael Suyama",
      "position": "Sales Representative",
      "titleOfCourtesy": "Mr.",
      "birthDate": "1983-07-02T00:00:00.000Z",
      "hireDate": "2012-10-17T00:00:00.000Z",
      "address": "Coventry House\r\nMiner Rd.",
      "city": "London",
      "region": "UK",
      "postalCode": "EC2 7JR",
      "country": "UK",
      "homePhone": "(71) 555-7773",
      "extension": "428",
      "photo": "https://js.devexpress.com/Demos/WidgetsGallery/JSDemos/images/employees/01.png",
      "notes": "Michael is a graduate of Sussex University (MA, economics, 2003) and the University of California at Los Angeles (MBA, marketing, 2006). He has also taken the courses \"Multi-Cultural Selling\" and \"Time Management for the Sales Professional.\"  He is fluent in Japanese and can read and write French, Portuguese, and Spanish.",
      "reportsTo": 5
  }, {
      "employeeID": 7,
      "fullName": "Robert King",
      "position": "Sales Representative",
      "titleOfCourtesy": "Mr.",
      "birthDate": "1980-05-29T00:00:00.000Z",
      "hireDate": "2012-01-02T00:00:00.000Z",
      "address": "Edgeham Hollow\r\nWinchester Way",
      "city": "London",
      "region": "UK",
      "postalCode": "RG1 9SP",
      "country": "UK",
      "homePhone": "(71) 555-5598",
      "extension": "465",
      "photo": "https://js.devexpress.com/Demos/WidgetsGallery/JSDemos/images/employees/07.png",
      "notes": "Robert King served in the Peace Corps and traveled extensively before completing his degree in English at the University of Michigan in 2002, the year he joined the company.  After completing a course entitled \"Selling in Europe,\" he was transferred to the London office in March 2013.",
      "reportsTo": 5
  }, {
      "employeeID": 8,
      "fullName": "Laura Callahan",
      "position": "Inside Sales Coordinator",
      "titleOfCourtesy": "Ms.",
      "birthDate": "1978-01-09T00:00:00.000Z",
      "hireDate": "2012-03-05T00:00:00.000Z",
      "address": "4726 - 11th Ave. N.E.",
      "city": "Seattle",
      "region": "WA",
      "postalCode": "98105",
      "country": "USA",
      "homePhone": "(206) 555-1189",
      "extension": "2344",
      "photo": "https://js.devexpress.com/Demos/WidgetsGallery/JSDemos/images/employees/08.png",
      "notes": "Laura received a BA in psychology from the University of Washington.  She has also completed a course in business French.  She reads and writes French.",
      "reportsTo": 2
  }, {
      "employeeID": 9,
      "fullName": "Brett Wade",
      "position": "Sales Representative",
      "titleOfCourtesy": "Mr.",
      "birthDate": "1986-01-27T00:00:00.000Z",
      "hireDate": "2012-11-15T00:00:00.000Z",
      "address": "7 Houndstooth Rd.",
      "city": "London",
      "region": "UK",
      "postalCode": "WG2 7LT",
      "country": "UK",
      "homePhone": "(71) 555-4444",
      "extension": "452",
      "photo": "https://js.devexpress.com/Demos/WidgetsGallery/JSDemos/images/employees/03.png",
      "notes": "Brett has a BA degree in English from St. Lawrence College.  He is fluent in French and German.",
      "reportsTo": 5
  }
  ];

  getEmployees(): Employee[]{
    return this.employees;

  }

}
