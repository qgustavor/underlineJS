# underline.js

`A javascript library that sets out to do one simple job: draw and animate the most perfect and playful text underline`


## Demo

[http://wentin.github.io/underlineJS/](http://wentin.github.io/underlineJS/)

The project is currently under development.

## Features

Underline.js has following features:
 1. It doesn't have ghost pixels. It is not just pixel perfect, but also pixel perfect on half pixel level for retina display
![pixel-perfect](https://cloud.githubusercontent.com/assets/2474904/6017363/fdf6ab3c-ab5a-11e4-936a-f7657532df50.png)
 2. It has an optimized thin stroke-width. It is always 1/4 of width of the period mark.
![optimal-stroke-width](https://cloud.githubusercontent.com/assets/2474904/6017364/fdf7ca62-ab5a-11e4-976e-285dd759b59b.png)
 3. It sits on the optimal Y position between the baseline and descender line, that optimal Y positon is the golden ratio point.
![golden-ratio](https://cloud.githubusercontent.com/assets/2474904/6017362/fdf60510-ab5a-11e4-9965-4e8a6b0a9f4c.png)
 4. It has holes around descenders. Completely respect the type's shape. If you ask, the size of the holes are also optimized to the perfection.
![descender-holes](https://cloud.githubusercontent.com/assets/2474904/6017361/fdf3f4f0-ab5a-11e4-89a4-f6e6e0588c2b.png)

## CSS4 Propasal to W3C

Underline.js is not designed to be the most useful javascript library. It is more exploratory, and it is trying to push the boundary of web typography. I want to propose these new css rules to W3C for css4 edition:

``` 
text-underline-color: #000000; 
// auto means the same color as the text color, or hex value

text-underline-position: auto; 
// could be ratio or px or auto


text-underline-skip: true; 
// true to set holes around descenders, false to turn it off

text-underline-width: auto; 
// could be auto or px or ratio

text-underline-animation: true 
// true or false, this one is only for underline.js
```
## Reference

[Marcin Wichary on crafting Medium.com's unserline](https://medium.com/designing-medium/crafting-link-underlines-on-medium-7c03a9274f9)

##Contact
* Follow [@DesignJokes](http://twitter.com/DesignJokes) on Twitter
* Email <zhangwenting111@gmail.com>
* Visit [wentin.co](http://wentin.co)
