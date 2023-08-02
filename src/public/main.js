const container = document.querySelector('.container')

const wsizeEl = document.querySelector('.wsize')
let wsize = wsizeEl.value

const hsizeEl = document.querySelector('.hsize')
let hsize = wsizeEl.value

const color = document.querySelector('.color')

const resetBtn = document.querySelector('.btn')

let draw = false

var pixels = [];

function initPix(wsize, hsize){
    
    container.style.setProperty('--wsize', wsize)
    container.style.setProperty('--hsize', hsize)

    for (let i = 0; i < wsize; i++) {
        row = [];
        for (let j = 0; j < hsize; j++) {
            const pixel = new Pixel(i, j, color);
            row.push(pixel);
        }
        pixels.push(row);
    }
    console.log(pixels);
}

function populate(wsize, hsize) {
  container.innerHTML = ''
  container.style.setProperty('--wsize', wsize)
  container.style.setProperty('--hsize', hsize)
  for (let i = 0; i < pixels[0].length; i++) {
      for (let j = 0; j < pixels.length; j++) {
        const thispix = pixels[i][j];
        console.log(thispix);

        const div = document.createElement('div')
        div.classList.add('pixel');
        container.style.setProperty('--x', thispix.x)
        container.style.setProperty('--y', thispix.y)
        container.style.setProperty("background-color",thispix.color);

    div.addEventListener('mouseover', function(){
        if(!draw) return
        pixel.color=color.value
        div.style.backgroundColor = color.value
    })
    div.addEventListener('mousedown', function(){
        pixel.color=color.value
        div.style.backgroundColor = color.value
    })

    container.appendChild(div)

  }
}
}


window.addEventListener("mousedown", function(){
    draw = true
})
window.addEventListener("mouseup", function(){
    draw = false
})

function hardreset(){
    container.innerHTML = ''
    pixels = [];
    populate(wsize, hsize)
}

// CHANGE SIZE OF GRID AND REPOPULATE
function changeSize(nwsize, nhsize){
    //height changed
    if (nwsize == wsize){
        var row = [];
        console.log(nhsize, hsize);
        nh = Number(nhsize);
        hdiff = nh - Number(hsize);
        for (let i = 0; i < wsize; i++) {
            for (let j = 0; j < hdiff; j++) {
                const pixel = new Pixel(i, j, color);
                row.push(pixel);
            }
            pixels.push(row);
         }
         hsize = nh;
         console.log(pixels);
    }
    //width changed
    else if (nhsize == hsize){
        console.log(nwsize, wsize);
        nw = Number(nwsize);
        for (let i = 0; i < hsize; i++) {
            const pixel = new Pixel(i, nw-1, color);
            //var rown = i;
            console.log(pixels[i])
            pixels[i].push(pixel);
            console.log(pixels[i])
         }
         console.log(pixels);
         wsize = nw;
    }
     populate(pixels)
}

// function repopulate(pixels) {
//     container.innerHTML = ''
//     container.style.setProperty('--wsize', wsize)
//     container.style.setProperty('--hsize', hsize)
//    // console.log(w,h);
//     for (let i = 0; i < wsize; i++) {
//         for (let j = 0; j < hsize; j++) {
//       var thispixel = pixels[j][i];
//       const div = document.createElement('div')
//       div.classList.add('pixel');
//       container.style.setProperty('--x', thispixel.x)
//       container.style.setProperty('--y', thispixel.y)
//       container.style.setProperty('background-color', thispixel.color)

//             div.addEventListener('mouseover', function(){
//                 if(!draw) return
//                 pixel.color=color.value
//                 div.style.backgroundColor = color.value
//             })
//             div.addEventListener('mousedown', function(){
//                 pixel.color=color.value
//                 div.style.backgroundColor = color.value
//             })

//       container.appendChild(div)
//       console.log(thispixel);

//     }
//   }
//   console.log(pixels);
//   }

class Pixel {
    constructor(x, y, color) {
        this.x = x
        this.y = y
        this.color = color
    }
}

resetBtn.addEventListener('click',hardreset)

wsizeEl.addEventListener('keyup', function(){
    var nWsize = Number(wsizeEl.value)
    changeSize(nWsize, hsize)
})
hsizeEl.addEventListener('keyup', function(){
    var nHsize = Number(hsizeEl.value)
    changeSize(wsize,nHsize)
})

initPix(wsize, hsize);
populate(wsize, hsize)