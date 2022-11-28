# Real Time Bus Trakcer
A project utilizing mapboxgl to create an interactive map centered around Boston and add markers for two bus lines (Line 1 and 9). The async run() function then uses a promise to fetch json data in parallel for both lines from the MTBA api. It also updates the positions of the markers as well as logging the current cordinates of the buses to the console.
# How To Run
Clone this repository, open mapanimation.js file, then add your own mapboxgl access key on line 3 within the quotes (''). Save mapanimation.js with your key included then open index.html and everything should be running as intended

# Future Improvements
Add capability to specify one bus line to track

Scale up amount of bus lines it can track (Currently only lines 1 and 9)

# License 
MIT License

Copyright (c) 2020 John Williams

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.