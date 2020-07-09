function checkImage(img) {
    img.onload = function() {
        return
    };
    img.onerror = function() {
        return img.setAttribute('src', 'https://us.123rf.com/450wm/pavelstasevich/pavelstasevich1811/pavelstasevich181101065/112815953-stock-vector-no-image-available-icon-flat-vector.jpg?ver=6')
    };
}

export default checkImage