function calculateTriangleArea() {
    const triangleBaseInput = document.getElementById('triangle-base');
    const triangleBaseText = triangleBaseInput.value;
    const base = parseFloat(triangleBaseText)
    console.log(base)
    const triangleHeightInput = document.getElementById('triangle-height');
    const triangleHeightText = triangleHeightInput.value;
    const height = parseFloat(triangleHeightText)
    console.log(height)

    //    calculate area

    const area = 0.5 * base * height;
    console.log('The area is:',area);

    const triangleAreaSpan = document.getElementById('triangle-area');
    triangleAreaSpan.innerText = area;
}

function calculateRectangleArea(){
   const rectangleWidthInput = document.getElementById('rectangle-width')
   const rectangleWidthText = rectangleWidthInput.value;
   const width = parseFloat(rectangleWidthText)
   console.log(width)

   const rectangleLengthInput = document.getElementById('rectangle-length');
   const rectangleLengthText = rectangleLengthInput.value;
   const length = parseFloat(rectangleLengthText);
   console.log(length);

   const area = width * length;
   console.log('The area is:',area);

   const rectangleAreaSpan = document.getElementById('rectangle-area');
   rectangleAreaSpan.innerText = area;
}

function calculateParallelogramArea(){
    const parallelogramBaseInput = document.getElementById('parallelogram-base');
    const parallelogramBaseText = parallelogramBaseInput.value;
    const base = parseFloat(parallelogramBaseText);
    console.log(base);
    const parallelogramHeightInput = document.getElementById('parallelogram-base');
    const parallelogramHeightText = parallelogramHeightInput.value;
    const height = parseFloat(parallelogramHeightText);
    console.log(height);

    const area = base * height;
   console.log('The area is:',area);

   const rectangleAreaSpan = document.getElementById('parallelogram-area');
   rectangleAreaSpan.innerText = area;


}

function calculateRhombusArea(){
    const RhombusBaseInput = document.getElementById('rhombus-diagonals1');
    const RhombusBaseText = RhombusBaseInput.value;
    const diagonals1= parseFloat(RhombusBaseText);
    console.log(diagonals1);
    const RhombusHeightInput = document.getElementById('rhombus-diagonals2');
    const RhombusHeightText = RhombusHeightInput.value;
    const diagonals2= parseFloat(RhombusHeightText);
    console.log(diagonals2);

    const area = 0.5 * diagonals1 * diagonals2 ;
   console.log('The area is:',area);

   const rhombusAreaSpan = document.getElementById('rhombus-area');
   rhombusAreaSpan.innerText = area;

}

function calculatePentagonArea() {
    const pentagonBaseInput = document.getElementById('pentagon-base');
    const pentagonBaseText = pentagonBaseInput.value;
    const base = parseFloat(pentagonBaseText)
    console.log(base)
    const pentagonHeightInput = document.getElementById('pentagon-height');
    const pentagonHeightText = pentagonHeightInput.value;
    const height = parseFloat(pentagonHeightText)
    console.log(height)

    //    calculate area

    const area = 0.5 * base * height;
    console.log('The area is:',area);

    const pentagonAreaSpan = document.getElementById('pentagon-area');
    pentagonAreaSpan.innerText = area;
}

function calculateEllipseArea() {
    const ellipseBaseInput = document.getElementById('ellipse-base');
    const ellipseBaseText = ellipseBaseInput.value;
    const base = parseFloat(ellipseBaseText)
    console.log(base)
    const ellipseHeightInput = document.getElementById('ellipse-height');
    const ellipseHeightText =  ellipseHeightInput.value;
    const height = parseFloat(ellipseHeightText)
    console.log(height)

    //    calculate area

    const area = 3.1416 * base * height;
    console.log('The area is:',area);

    const ellipseAreaSpan = document.getElementById('ellipse-area');
    ellipseAreaSpan.innerText = area;
}

