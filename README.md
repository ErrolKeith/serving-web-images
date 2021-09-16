
# Serving Optimized Web Images With Node.JS
<hr/>
<br />

## This is a node project to show how to optimize images for the web rendering. 
<br />

<br />
<p style="font-size:1.2rem;">1. The first step is to install the sharp package with npm. Type the following command into terminal, and npm will install the sharp.</p>
<br />

```js
npm install sharp --save
```
<hr />
<br/>
<br />


<p style="font-size:1.2rem;">2. Then, in the app.js file, require in the sharp package and store it in a constant.</p>
<br />

```js
const sharp = require('sharp')
```
<hr />
<br />
<br />

*Steps 1 and 2 set up the sharp package within the project and make it accessible through the sharp constant. For the purposes of this repository, the directories to review are  the `'./public/images'` and `'./server-images'` directories. Also review the app.js file and index.html file in the root directory. All code covered on this page is contained within those files and directories. This repository also assumes you have node and npm installed on your local machine.

<br />

In the `index.html` file you will see the following:

```html
<img style="border-radius:7px;" src="./images/workspace1100x660.jpg" width="1100" height="660" alt="largest and most bestest">
<br>
<img style="border-radius:7px;" src="./images/workspace550x330.jpg" width="550" height="330" alt="test image content is irrelevant">
<br>
<img style="border-radius:7px;" src="./images/workspace225x165.jpg" width=225" height="165" alt="test image 2 content is irrelevant">
```
<br/>

The code in this repository will leverage the Sharp package to render three perfectly sized and optimized .jpg images. One for each of the `<img>` tags in the HTML above. All three files will be visible through the browser and will be generated from a large high definition .jpg image. The original dimensions of the image are `5472 X 3648` pixels and the file size is `5.7MB`. Too large to be served to a webpage without sacrificing performance, especially on mobile. By using Sharp, the image dimensions can be changed and file size drastically reduced automatically. Sharp has additional features, capabilities, and options that are outside the scope of this repository.

<br />
<br />

<p style="font-size:1.2rem;">3. To reduce the file size add the code below to app.js.</p>
<br />

```js
sharp('./server-images/workspace.jpg').resize({height:660,width:1100}).toFile('./public/images/workspace1100x660.jpg');

sharp('./server-images/workspace.jpg').resize({height:330,width:550}).toFile('./public/images/workspace550x330.jpg');

sharp('./server-images/workspace.jpg').resize({height:165,width:225}).toFile('./public/images/workspace225x165.jpg');
```
<br />

*Replace the file path in the `sharp()` function with the path to the .jpg image to be resized. Replace the file path in the `toFile()` function with the destination being `./public/images/` directory with any valid .jpg file name and extension (ex: `'./public/images/newImage.jpg'`). 

<br />
<hr />
