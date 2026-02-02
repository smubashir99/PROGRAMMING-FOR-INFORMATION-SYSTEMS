function dolt() {
    // Get input values and convert to integer arrays
    let fInput = document.getElementById('fArray').value.split(',');
    let mInput = document.getElementById('mArray').value.split(',');

    // Show alert with first values (student-style debugging)
    alert("First value of f: " + fInput[0]);
    alert("First value of m: " + mInput[0]);

    let f = fInput.map(x => parseInt(x.trim()));
    let m = mInput.map(x => parseInt(x.trim()));

    let sum = 0;

    // Loop through each element in m
    for (let mi of m) {
        for (let fi of f) {
            if (fi !== 0 && mi % fi === 0) {
                sum += mi;
                break; // count each mi only once
            }
        }
    }

    // Show sum in output div and alert (extra student-style)
    document.getElementById('output').innerText = sum;
    alert("The sum of multiples is: " + sum);
}
