$(function(){
				
					var index = 0;
					var str = document.getElementById("string").innerHTML;
			function type() {
					if(index == str.length) {
					//index = 0;
					 window.clearInterval(interval);
			}
					document.getElementById("showStr").innerText = str.substring(0, index++);
			}
					var interval = setInterval(type, 200); 
				$('#a,#b,#c,#d,#e').click(function(){
					$(this).addClass('size');
					$(this).siblings().removeClass('size');
					$(this).siblings().removeClass('bigsize');
					$(this).siblings().removeClass('saturn-text');
					$(this).siblings().removeClass('suntext');
			})
					$('#A,#B').click(function(){
					$(this).addClass('bigsize');
					$(this).siblings().removeClass('bigsize');
					$(this).siblings().removeClass('size');
					$(this).siblings().removeClass('saturn-text');
					$(this).siblings().removeClass('suntext');
			})
					$('#C').click(function(){
					$(this).addClass('saturn-text');
					$(this).siblings().removeClass('bigsize');
					$(this).siblings().removeClass('size');
					$(this).siblings().removeClass('saturn-text');
					$(this).siblings().removeClass('suntext');
			})
					$('#D').click(function(){
					$(this).addClass('suntext');
					$(this).siblings().removeClass('bigsize');
					$(this).siblings().removeClass('size');
					$(this).siblings().removeClass('saturn-text');
					$(this).siblings().removeClass('suntext');
			})
			})

			var waypoint = new Waypoint({
				element: document.querySelector('#tran2').querySelector('tran1'),
				handler: function(direction) {
				  console.log('Scrolled to waypoint!');
				  runAnimation(this.element, ["rGlass","cGlass","lGlass"]);
				},
				offset:100
			  });

			  function fetchData() {
				fetch('../includes/connect,php?spaceUniverse=RSB')
				.then(res => res.json())
				.then(data => console.log(data))
				.catch(function(error) {
					console.error(error);
				});
			}