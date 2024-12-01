document.getElementById('envelope').addEventListener('click', function() {
                  this.classList.toggle('open');
              });
            
            
              document.getElementById('no').addEventListener('mouseover', function() {
                var letter = document.getElementById('letter');
                var maxX = letter.clientWidth - this.offsetWidth;
                var maxY = letter.clientHeight - this.offsetHeight;
                var randomX = Math.random() * maxX;
                var randomY = Math.random() * maxY;
                this.style.position = 'absolute';
                this.style.left = randomX + 'px';
                this.style.top = randomY + 'px';
            });
            
            document.getElementById('yes').addEventListener('click', function() {
                document.getElementById('envelope').style.display = 'none';
                document.getElementById('celebration').style.display = 'block';
                
                // Show the turtle after a delay
                setTimeout(function() {
                    document.getElementById('turtle').style.display = 'block';
                    document.getElementById('turtleSound').play(); // Play the sound effect
                }, 1500); // 3-second delay (adjust as needed)
            });
            
            
              
              