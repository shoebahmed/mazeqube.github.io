"use strict";

(function($, global, $scope) {
  $scope.SCROLL_SPEED = 1.0;
  $scope.NOISE_SPEED = 0.004;
  $scope.NOISE_AMOUNT = 5;
  $scope.CANVAS_WIDTH = 2690;

  $scope.bubbles = [
    { s: 0.6, x: 1134, y: 45, link: 'https://mysql.com/' },
    { s: 0.6, x: 1620, y: 271, link: 'https://teams.microsoft.com/' },
    { s: 0.6, x: 1761, y: 372, link: 'https://zoom.us/' },
    { s: 0.6, x: 2499, y: 79, link: 'https://flutter.dev/' },
    { s: 0.6, x: 2704, y: 334, link: 'https://play.google.com/' },
    { s: 0.6, x: 2271, y: 356, link: 'https://spring.io/' },
    { s: 0.6, x: 795, y: 226, link: 'https://react.dev/' },
    { s: 0.6, x: 276, y: 256, link: 'https://web.whatsapp.com/' },
    { s: 0.6, x: 1210, y: 365, link: 'https://slack.com/' },
    { s: 0.6, x: 444, y: 193 },
    { s: 0.6, x: 2545, y: 387, link: 'https://facebook.com/' },
    { s: 0.8, x: 1303, y: 193, link: 'https://airbyte.com/' },
    { s: 0.8, x: 907, y: 88, link: 'https://dropbox.com/' },
    { s: 0.8, x: 633, y: 320, link: 'https://sublimetext.com/' },
    { s: 0.8, x: 323, y: 60, link: 'https://github.com/' },
    { s: 0.8, x: 129, y: 357, link: 'https://adobe.com/' },
    { s: 0.8, x: 1440, y: 342, link: 'https://azure.microsoft.com/' },
    { s: 0.8, x: 1929, y: 293, link: 'https://python.org/' },
    { s: 0.8, x: 2135, y: 198, link: 'https://www.berkeleypayment.com/' },
    { s: 0.8, x: 2276, y: 82, link: 'https://zoho.com/' },
    { s: 0.8, x: 2654, y: 182, link: 'https://wetransfer.com/' },
    { s: 0.8, x: 2783, y: 60, link: 'https://postman.com/' },
    { x: 1519, y: 118, link: 'https://google.com/' },
    { x: 1071, y: 233, link: 'https://javascript.com/' },
    { x: 1773, y: 148, link: 'https://docker.com/' },
    { x: 2098, y: 385, link: 'https://openai.com/' },
    { x: 2423, y: 244, link: 'https://elavon.com/' },
    { x: 901, y: 385, link: 'https://java.com/' },
    { x: 624, y: 111, link: 'https://hubspot.com/' },
    { x: 75, y: 103, link: 'https://authorize.net/' },
    { x: 413, y: 367, link: 'https://aws.amazon.com/' },
    { x: 2895, y: 271, link: 'https://docusign.com/' },
    { x: 1990, y: 75, link: 'https://stripe.com/' },
    { s: 0.6, x: -50, y: 3, link: 'https://apple.com/in/app-store/' },
    { s: 0.6, x: 470, y: 30, link: 'https://adobe.com/' },
    { s: 0.6, x: 770, y: 3, link: 'https://linux.org/' },
    { s: 0.6, x: 1290, y: 3, link: 'https://microsoft.com/' },
    { s: 0.6, x: 1600, y: 2, link: 'https://apple.com/' },
    { s: 0.6, x: 1800, y: 12, link: 'https:// .com/' },
    { s: 0.6, x: 2150, y: 25, link: 'https://mongodb.com/' },
    { s: 0.6, x: 2400, y: 1, link: 'https://angularjs.org/' },
    { s: 0.6, x: 2650, y: 1, link: 'https://airflow.apache.com/' },
  ];

  $scope.bubblesEl = document.querySelector(".bubbles-container");

  // For perlin noise
  $scope.noise = new Noise(Math.floor(Math.random() * 64000));

  function Bubbles(specs) {
    var instance = this;
    instance.bubbles = [];

    specs.forEach(function(spec, index) {
      instance.bubbles.push(new Bubble(index, spec.x, spec.y, spec.s, spec.link));
    });

    requestAnimationFrame(instance.update.bind(instance));
  }

  function Bubble(index, x, y, s, link) {
    if (s === undefined) {
      s = 1;
    }

    this.index = index;
    this.x = x;
    this.y = y;
    this.scale = s;

    this.noiseSeedX = Math.floor(Math.random() * 64000);
    this.noiseSeedY = Math.floor(Math.random() * 64000);

    this.el = document.createElement("div");
    this.el.className = "bubble bubble-" + (this.index + 1);

    // Add the link as a data attribute if it exists
    if (link) {
      this.el.setAttribute("data-link", link);
    }

    $scope.bubblesEl.appendChild(this.el);
  }

  Bubbles.prototype.update = function() {
    this.bubbles.forEach(function(bubble) {
      bubble.update();
    });
    this.raf = requestAnimationFrame(this.update.bind(this));
  };

  Bubble.prototype.update = function() {
    this.noiseSeedX += $scope.NOISE_SPEED;
    this.noiseSeedY += $scope.NOISE_SPEED;
    var randomX = $scope.noise.simplex2(this.noiseSeedX, 0);
    var randomY = $scope.noise.simplex2(this.noiseSeedY, 0);

    this.x += $scope.SCROLL_SPEED;
    this.xWithNoise = this.x + randomX * $scope.NOISE_AMOUNT;
    this.yWithNoise = this.y + randomY * $scope.NOISE_AMOUNT;

    if (this.xWithNoise > $scope.CANVAS_WIDTH + 200) {
      this.x = -100;
    }

    this.el.style.transform =
      "translate(" +
      this.xWithNoise +
      "px, " +
      this.yWithNoise +
      "px) scale(" +
      this.scale +
      ")";
  };

  $(function() {
    if ($scope.bubblesEl) {
      new Bubbles($scope.bubbles);
    }
  });
})(jQuery, this, {});
