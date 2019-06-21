//initialization for fullpage
new fullpage('#fullpage', {
navigation: false,
});
fullpage_api.setAllowScrolling(true);

//initialization for animsition
$(document).ready(function() {
  $(".animsition").animsition({
    inClass: 'zoom-in-sm',
    outClass: 'zoom-out-sm',
    inDuration: 500,
    outDuration: 500,
    linkElement: '.animsition-link',
    loading: true,
    loadingParentElement: 'body',
    loadingClass: 'animsition-loading',
    loadingInner: '',
    timeout: false,
    timeoutCountdown: 5000,
    onLoadEvent: true,
    browser: [ 'animation-duration', '-webkit-animation-duration'],
    overlay : false,
    overlayClass : 'animsition-overlay-slide',
    overlayParentElement : 'html',
    transition: function(url){ window.location.href = url; }
  });
});

//initialization for particles
particlesJS("particles-js", {
"particles": {
  "number": {
    "value": 80,
    "density": {
      "enable": true,
      "value_area": 5000
    }
  },
  "color": {
    "value": ["#e4e4e4"]
  },
  "shape": {
    "type": "circle",
    "stroke": {
      "width": 0,
      "color": "whitesmoke"
    },
    "polygon": {
      "nb_sides": 5
    },
    "image": {
      "src": " ",
      "width": 100,
      "height": 100
    }
  },
  "opacity": {
    "value": 1,
    "random": true,
    "anim": {
      "enable": true,
      "speed": 0.05,
      "opacity_min": 0,
      "sync": false
    }
  },
  "size": {
    "value": 100,
    "random": true,
    "anim": {
      "enable": true,
      "speed": 0.1,
      "size_min": 10,
      "sync": false
    }
  },
  "line_linked": {
    "enable": false,
    "distance": 150,
    "color": "#ffffff",
    "opacity": 0.4,
    "width": 1
  },
  "move": {
    "enable": true,
    "speed": 1,
    "direction": "top",
    "random": true,
    "straight": false,
    "out_mode": "out",
    "bounce": false,
    "attract": {
      "enable": false,
      "rotateX": 600,
      "rotateY": 600
    }
  }
},
"interactivity": {
  "detect_on": "canvas",
  "events": {
    "onhover": {
      "enable": false,
      "mode": "bubble"
    },
    "onclick": {
      "enable": false,
      "mode": "repulse"
    },
    "resize": true
  },
  "modes": {
    "grab": {
      "distance": 400,
      "line_linked": {
        "opacity": 1
      }
    },
    "bubble": {
      "distance": 250,
      "size": 0,
      "duration": 2,
      "opacity": 0,
      "speed": 3
    },
    "repulse": {
      "distance": 400,
      "duration": 0.4
    },
    "push": {
      "particles_nb": 4
    },
    "remove": {
      "particles_nb": 2
    }
  }
},
"retina_detect": true
});
