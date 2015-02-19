# Markets of Berlin

## Short Overview

This is a website to get an overview on the regular markets in Berlin.

### Dataset

We used the <a href="http://daten.berlin.de/datensaetze/wochen-und-tr%C3%B6delm%C3%A4rkte">open data published by the city Berlin on weekly markets and fleamarkets</a>. You can find our version of the data in data/berlin-markets.json. We had to edit the data to make it work with our program and convert it from CSV to json. It is now structured and constistent.

### Demo:

http://frimelle.github.io/markets-berlin/

### License:

Our Code is under a GNU GPLv3 license. That doesn't include the jQuery file which is included in this repository. We downloaded it from the <a href="http://jquery.com/download/">jQuery website</a>.

## Complete Documentation

### Idea

### Use Cases

When we started thinking of our project, we gathered use case scenarios and possible personas, who could use this application. We decided we want to make this project especially accessible to people, who are not in the technical field, because it’s something anyone could have an advantage of. It’s sometimes hard to remember what things are important, when you are too much into a project so we tried to regularly get feedback from people from outside the project. We did a single page web app, so anyone could access it. 
We thought a typical user of our app (let’s call him or her A) is someone, who just quickly wants to look up markets and looks up our site to find the information quickly and precisely. 
The other persona (B) we had in mind could be someone, who is going regularly on markets but not always on the same one or doesn’t have the times in mind. 
The third persona (C) would be someone, who is a tourist and just visiting and wants to discover one of the multiple markets around Berlin while her or his stay. 
We thought of persona D as someone living in Berlin for quite a while already and wanting to discover the markets around them. So they would look at the map and check out the markets around the place they live and probably at the time they have free time. 
This four personas have in common, that they want quick access to the information they are looking for and don’t want to bother with additional things. Especially A and C wouldn’t be regular users of the side so they would need to understand the website really quickly and won’t stay at the website for long. Person B wouldn’t stay long on the site either even if they would use the website very often. 
Even though Persona D is staying longer, they probably won’t bother with anything else but what they are looking for: markets at a certain time around there area.
For all of them, it’s important to know, where those markets are on a glanze to decide where to go and which ones are opened now or the time they want to go. That’s why we decided to give the user the possibility to filter the markets by a day and time.
 
Those ideas reflect in our minimalistic design, which focuses on the map and the few buttons.

### Design

As mentioned before, we wanted to keep the design simple. So, we just wanted to have the map covering your screen and even the footer with our names below it not immediately visible. We decided to have the buttons in the top right corner and the background of the container of those and the title transparent so you could still the map underneath it. 
To not confuse the user in any way or distract them from the content, we decided to not add anything else.
The button labeled with “Click me!” is probably not the most creative choice of naming, but makes it purpose very clear and obvious what to do. 
The side is easy to use and discover as well as just to use to get quick access to the information you are looking for.

### Data

### Technical Details

Since we built a website, we used HTML, CSS and Javascript. We had to include jQuery for the leaflet API (see more in Map). The buttons are handled by the JavaScript in map.js.We decided to have a reset.css to clean up the defaults of the browser to have more control about what we are doing. We had to include jQuery as jquery-2.1.3.min.js, otherwise we would have gotten errors with the map and a “mixed content warning”.

#### Map

We decided to use leaflet, which is an API for OpenStreetMap. You can look up there documentation at <a href="http://leafletjs.com/">their website</a>. We used jQuery due to leaflet.
OpenStreetMap is the obvious solution for a website, that is based on open data but also nice and easy to use with the leaflet API. Our code using it is included in the map.js. 

#### Marker

The markers we set on the map for the markets are in the same file in the functions setMarker and getMarker in map.js We picked not everything from the data we had because we wanted to keep the website overseeable. 
Instead we used the things we thought were really important like the name of the market and the address, which is good to have additionally to seeing it on the map. You will need the closing and opening time additionally to the hour you chose, too. The name of the person who runs the market and their contact information as in their telephone number and EMail address are nice to have, too. The website of the market is cool to look up more information. Not all the markets have all of these things. Due to the effort in cleaning up the data we had a name of all the markets but for the rest we had to handle the missing or not existing data so we just left it blank.

#### Choose day and time

On the top right corner you can find buttons to choose day and time. 
We decided on days and not dates because we wanted our project only the regular markets not the ones  that only are on special occasions like christmas markets. So you can also just check out in general when the regular markets are in your area on the day you usually have time.
Even though the first market starts at 5:00 in the morning and the last one ends at 22:00 we wanted to use a range that seemed realistic to us for a possible visit at a market. We decided to make the range longer than our last market ends (at 20:00) for the idea of keeping this project alive and adding more markets which might end later without the bigger hassle of changing the Javascript code.

### Language

We decided to have the language of our side English. Even though it would be easy to translate and a nice possible feature for the future, we thought our goal is to reach many people and a lot people speak at least enough English to understand our website which has only really little text on it. 
There are words like names of the markets that are in German and we didn’t want to translate them because that would sophisticate our data.

### To Dos And Possible Features

We will work on the master branch on different things, including the API idea and a filter by the type of markets for now.

#### Filter By Type Of Market

Our idea was to add a filter for the type of market so you can additionally choose from the different kinds of markets we have like farmers markets, eco markets (Ökomarkt) and so on. This would be a useful feature. Since the data doesn’t have those types yet we will have to search through the names and descriptions and/or check them online again.

#### API

We thought that was a nice thing to have at one point to make our version of the data by Berlin Open Data quickly accessible for anyone to use in whatever they want.

#### Adding Markets

For more interaction with the user, it would be nice if users could as missing data as in regular markets we don’t have in our database. Ideally, they could just have kind of an edit mode where they can just set a new marker on the map and fill in the data. To start we could use a simple edit field where you can resolve an address into geo coordinates because that would be the worst work for someone who just wants to add a market.

#### Mobile App

We had the request of people testing the website to have it as an mobile app. We kind of liked the idea and it would be nice for the first step to have the website mobile friendly. 
