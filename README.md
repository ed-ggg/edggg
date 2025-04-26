# EDGGG : A Catalog for Green Gas Giants in Elite Dangerous
*EDGGG* is a passion project of mine, with a goal of organizing and cataloging all of the known 'Green Gas Giants', a rare bugged planet subtype in the videogame Elite: Dangerous. So far there are many spreadsheets that are documenting these objects, but no dedicated visual medium for them. My mission is to make
the data (and knowledge about them in general) more accessible to curious minds, displaying all necessary information about them in an orderly (and visually attractive) manner.

I am currently teaching myself web development, and as I progress through my courses and become more comfortable with different concepts, I will attempt to improve the page and make it look more appealing, reactive and interactive.
## Features
The main flow of the site features a 'Search' function that will give the user the ability to quickly search for a planet through 'Known Classes', or use the search bar to search for a specific planet via its procedural generation name.

This site's core functionality is still a work-in-progress. Ideally when this site is completed, it will be fully automated, detecting a new GGG codex entry, giving it a GGG#, creating an Information Page, as well as submitting it into its appropriate Class Category. A 'Missing' Image
will be displayed until a photo, taken in correct format, is procured.

### Other Add-ons
Other features that are or will be included in the future are:
* New GGGs This Year
* GGGs Discovered On This Day

#### New GGGs This Year
This section is located on the site's index.html landing page. It will be an almost-fully automated process, detecting new GGGs discovered via EDDN and adding it to this portion of the webpage. At the beginning of each year, this section
will reset to be empty for new ones to be added.

#### GGGs Discovered On This Day
A separate section that will take the date on the user's computer and see if any of the GGGs on the database match the month/day, then display them. They will be clickable and will take the user to that specific GGG page.
## How To Use
Upon landing at EDGGG's index.html page, there is a 'Search' section and a 'New GGGs This Year' section, for the current in-game year. 

### Search
All known GGG Classes are located here, which when clicked will take you to that class' results page, where all GGGs of that class will be shown. Clicking any of those planets will take you to its corresponding Info Page.

### Information Page
Each known GGG has its own page where a carousel of pictures of it are displayed as well as its name, characteristics, a description, its community name, and where it is located in the in-game galaxy.

### GGGs Discovered This Year
GGGs found during the current in-game year will show up here. At the beginning of each year, the section is emptied for new ones to be found in the new year.

### Nav Bar
The Nav Bar is currently present across the entire site. Clicking 'About' brings you to an informational about what exactly these planets are, their history, as well as how to use the site. Clicking 'Search' returns you to index.html to the
'Search' area for classes. Clicking 'New This Year' will bring you to the bottom of index.html where new GGGs are listed.

## Technologies
Currently EDGGG uses HTML and CSS for structure and styling of each webpage. JavaScript is used for a few animations, but primarily used for the site's search function.

In the future, I am planning for the site to connect to various external APIs for automated information collection for GGGs.



