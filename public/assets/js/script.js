$(document).ready(function(){
    var input_selector = 'input[type=text], input[type=password], input[type=email], input[type=url], input[type=tel], input[type=number], input[type=search], input[type=date], input[type=time], textarea';
    $(input_selector).each(function (element, index) {
      var $this = $(this);
      $this.blur(function(){
      	if($this.val() === ""){
            $this.siblings('label').removeClass('active');
            $this.siblings('.form-inline-bottom').removeClass('active');
      	}
      }).focus(function(){
              $this.siblings('label').addClass('active');
              $this.siblings('.form-inline-bottom').addClass('active');
      })
    });
})