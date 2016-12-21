var activeBullets = $('.slide');
var currentInput = $('[name=slider-input]');
currentInput.change(function() {
    var self = $(this)[0];
    var dot = "dot";
    var id = self.id;
    var res = id.split("slide");
    var newId = dot.concat(res[1]);
    var bullet = $("#" + newId);
    activeBullets.removeClass('active-slide');
    if (self.checked === true) {
        bullet.addClass('active-slide');
    }
    else {
        bullet.removeClass("active-slide");
    }
});
