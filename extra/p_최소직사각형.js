function solution(sizes) {
    const width = [];
    const height = [];
    sizes.forEach(size => {
        if (size[0] >= size[1]) {
            width.push(size[0]);
            height.push(size[1]);
        } else {
            width.push(size[1]);
            height.push(size[0]);
        }
    });

    width.sort((a, b) => {return b-a});
    height.sort((a, b) => {return b-a});

    return width[0] * height[0];
}


// testCase
console.log(solution([[60, 50], [30, 70], [60, 30], [80, 40]]));
console.log(solution([[10, 7], [12, 3], [8, 15], [14, 7], [5, 15]]));
console.log(solution([[14, 4], [19, 6], [6, 16], [18, 7], [7, 11]]));