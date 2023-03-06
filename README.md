# Find-Movie-Web-Application
Find movies based on - Movie Title (e.g titanic) OR  IMDB Id (e.g tt0120338)

Find Movie Web Application :

Created find movie web application.where we can find movie based on
- Movie Title (e.g titanic) OR 
- Imdb id (e.g tt0120338)
of the movie.

#Technology :
 - Angular 8
 - Angular Material (8)
 - Ng Bootstrap 
 - Typescript (3.5.3)
 - for API used omdbapi.com

Technical Approach:

#Modules :

- AppModule - Base default Module.
- MovieCommonModule - Contains common component used to building UI such as Input,Button etc.
- MoviesDashboardModule - Main feature module of the application

#Component :

* MovieCommon - common component used to building UI

- movie-input - Used Angular Material Input for creating movie input which has id,placeholder,disable,value property.
- movie-button - Used Angular Material button for creating movie button which has id,text,color of the button property.
- movie-card - Used Angular Material card for creating movie card which has movie data to create reusable movie card functionality.

MovieCommonModule.ts - contains all required meta data for this module

* MoviesDashboard - feature module of the application

- dashboard - Parent component to integrated all the component (land page of the application) 
- serach - Search component is used to show search div which is integrated with common UI used in application
- movies-details - This component used to integate common card component

#Services :

- Api - Api service is responsible to call the api and pass fetch the result to respective comp and also error handling done on the methods which are in this service
- Sharing - Sharing service is use for sharing the data betwwen sibling component.

MoviesDashboardModule.ts - contains all required meta data for this module

#Theme : Angular material theme is created for button used in this applicaton.

Application functionality tested by manually and used the angular material for building UI, theme is also created for button used in this application

Application tested and working fine !


![image](https://user-images.githubusercontent.com/39131644/223065902-c210577a-06f0-401f-8a3d-668a0909b160.png)







