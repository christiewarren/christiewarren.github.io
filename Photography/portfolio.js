(function() {
              var body = $('body');
              $('.menu-toggle').bind('click', function(){
                body.toggleClass('menu-open');
                return false;
              });
            })();
            
            $("a[href^='#']").click(function(e) {
                e.preventDefault();

                var position = $($(this).attr("href")).offset().top;

                $("body, html").animate({
                    scrollTop: position
                }, 400, 'linear');
            });
            
            // Make the modal visible and put the img soure into it
            var modal = document.getElementById('myModal');
            var img = document.getElementById('myImg');
            var modalImg = document.getElementById("img01");
            img.onclick = function(){
                modal.style.display = "block";
                modalImg.src = this.src;
            }
            
            // Get the <span> element that closes the modal
            var span = document.getElementsByClassName("close")[0];

            // When the user clicks on <span> (x), close the modal
            span.onclick = function() { 
              modal.style.display = "none";
            }