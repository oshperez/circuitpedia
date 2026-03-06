# WEB103 Project 1 - _Circuitpedia_

Submitted by: **Osmani Hernandez**

## About this web app

Circuitpedia is a small web application that serves as a reference guide for common electronic circuit components. The application displays a list of components such as resistors, capacitors, inductors, fuses, diodes, and transistors. Each component is shown with an image, name, and category. Users can click on a component to view a detailed page containing additional information about the component, including its description and classification.

The application is built using **HTML, CSS, and JavaScript** with a simple **Node.js/Express backend** that serves the component data and routes. The user interface is styled using **PicoCSS** and displays the components in a card-based layout.

Time spent: **5 hours**

---

## Required Features

The following **required** functionality is completed:

- [x] **The web app uses only HTML, CSS, and JavaScript without a frontend framework**
- [x] **The web app displays a title**
- [x] **The web app displays at least five unique list items, each with at least three displayed attributes (such as title, text, and image)**
- [x] **The user can click on each item in the list to see a detailed view of it, including all database fields**
  - [x] **Each detail view is a unique endpoint**, such as  
         `localhost:3000/components/1`  
         `localhost:3000/components/2`

- [x] **The web app serves an appropriate 404 page when no matching route is defined**
- [x] **The web app is styled using PicoCSS**

---

## Optional Features

The following **optional** features are implemented:

- [x] The web app displays items using a **card-based layout instead of a traditional list**

---

## Additional Features

No additional features

## Video Walkthrough

Here's a walkthrough of implemented required features:

<div>
    <a href="https://www.loom.com/share/2493665f3fc747529e93c6e47ec44527">
      <p>Circuitpedia - 6 March 2026 - Watch Video</p>
    </a>
    <a href="https://www.loom.com/share/2493665f3fc747529e93c6e47ec44527">
      <img style="max-width:300px;" src="https://cdn.loom.com/sessions/thumbnails/2493665f3fc747529e93c6e47ec44527-34f69e93dcd73536-full-play.gif#t=0.1">
    </a>
  </div>

GIF created with Loom

## Notes

One challenge encountered while building the application was implementing client-side routing logic for the component detail pages. Since the application uses vanilla JavaScript rather than a framework, handling different URL paths and rendering the appropriate content required manually parsing the URL and determining whether to render the component list or a specific component.

Another challenge was organizing the project structure so that static assets such as images and scripts were correctly served from the client while data and routes were handled by the server.

---

## License

Copyright 2026 Osmani Hernandez

Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License. You may obtain a copy of the License at

http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under the License is distributed on an **"AS IS" BASIS**, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the specific language governing permissions and limitations under the License.
