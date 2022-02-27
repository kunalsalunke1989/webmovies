# Web Movies

A React app which uses an external movies API to show list of movies in a carousel. Clicking on any movie in the carousel will show its details in the panels above it. 

### Prerequisites

Following should be installed before running the project

```
Node 
```

### Installing

1. Install necessary dependencies

```
npx create-react-app checklist
npm install --save react-elastic-carousel

```

2. To run the project locally using npm

```
npm start
```
3. Navigate to the following URL to launch app

```
http://localhost:3000
```

# Web Movies Features
* The landing page shows a list of movies in a carousel which is created using the following plugin: https://www.npmjs.com/package/react-elastic-carousel.
* The "Prev" and "Next" buttons can be used to navigate through the carousel.
* Each item contains the movie's poster.
* Clicking on any movie poster name in the carousel will show more details about the movie in the panels above. This includes a larger poster of the movie, it's title and other metadata.
* The number of movies shown in the carousel can be filtered according to Genre with the help of the Genre dropdown.
* The UI follows the following breakpoints for responsiveness:
  * Mobile phones (screen width less than 481 pixels): Layout as per second mockup. Use Chrome's built in "Device toolbar" in "Developer tools" to get to this resolution. 
  * Tablets (screen width greater than 480 pixels but less than 769 pixels): Layout as per first mockup with at the most 3 carousel items  
  * Desktops (screen width greater than 768 pixels): Layout as per first mockup with at the most 6 carousel items
* The UI uses CSS Grid to make it responsive on all resolutions.
* Assumption as per mock up: The title panel will contain the movie plot for mobile devices while for larger devices it will be shown in the metadata panel.
