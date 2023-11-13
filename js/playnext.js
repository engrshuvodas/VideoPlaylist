 var videos = [
            "https://s3-us-west-2.amazonaws.com/s.cdpn.io/148422/Vienna-SD.mp4", "http://techslides.com/demos/sample-videos/small.mp4",
        ];

        function playArray(index, ele, array) {
            ele.src = array[index];
            ele.load();
            ele.play();
            index++;
            if (index >= array.length) {
                index = 0;
            }
            ele.addEventListener('ended', function() {
                playArray(index, ele, array);
            }, false);
        }
        playArray(0, document.getElementById('myvid'), videos);