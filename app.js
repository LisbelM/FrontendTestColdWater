new Glide('.glide', {
    type: 'slider',
    startAt: 0,
    perView: 3,
    gap : 10,
    breakpoints: {
        800: {
            perView: 1
        }
    }
}).mount()