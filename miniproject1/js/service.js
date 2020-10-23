        var service = document.querySelector('.ser-main');

$(document).ready(function(){
    var service = $('.ser-main');
    if(service){
        service.empty()
    }
    $('#btn1').click(function(){
      $('.ser-main').load('../text_file/temp.txt');
      console.log('aaaaaaaaaaaaa')
    })

    $('#btn2').click(function(){
        $('.ser-main').load('../text_file/pressure.txt');
        console.log('aaaaaaaaaaaaa')
      })

      $('#btn3').click(function(){
        $('.ser-main').load('../text_file/humidity.txt');
        console.log('aaaaaaaaaaaaa')
      })

      $('#btn4').click(function(){
        $('.ser-main').load('../text_file/other.txt');
        console.log('aaaaaaaaaaaaa')
      })
  })