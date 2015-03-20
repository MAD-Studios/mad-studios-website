<!doctype html>
<!--[if lt IE 9]><html class="lt-ie9"><![endif]-->
<?php
	include('inc/functions.php');
	mobileDetect('m/index3.php');
?>
<html>
<head>
<meta charset="UTF-8">
<title>MAD Test</title>
<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no">
<link href="skroller/examples/fixed-positioning.css" rel="stylesheet" type="text/css" />
<link href="http://reset5.googlecode.com/hg/reset.min.css" rel="stylesheet" />
<link href="css/styles.css" rel="stylesheet" />
<script src="http://modernizr.com/downloads/modernizr-latest.js"></script>
<script src="http://code.jquery.com/jquery-1.10.2.min.js"></script>
<script type="text/javascript" src="//use.typekit.net/vnj5cfk.js"></script>
<script type="text/javascript">try{Typekit.load();}catch(e){}</script>
</head>

<body>
<div id="skrollr-body">
	<div id="debug"></div>
	
	<section id="part-1" data-stretch
		data-0="top: 0%;"
		data-15="top[swing]: 0%;"
		data-600="top[swing]: -100%; display: block;"
		data-900="top: -110; display: none;">
		
		<div id="scroll-down-indicator">
			<p style="text-align: center;">Psst.<br>Scroll down.</p>
			<img src="images/scene/castle/pointinghand.png">
		</div>
	</section>
	
	<section id="scene-castle" data-stretch="1"
		data-0="opacity: 1;"
		data-600=" opacity: 1;
			-webkit-transform:	scale(1);
			-moz-transform:		scale(1);
			-o-transform:		scale(1);
			-ms-transform:		scale(1);
			transform:			scale(1);"
		data-900="top: 0%; opacity: 1;
			-webkit-transform[swing]:	scale(1);
			-moz-transform[swing]:		scale(1);
			-o-transform[swing]:		scale(1);
			-ms-transform[swing]:		scale(1);
			transform[swing]:			scale(1);"
		data-1200="top: 0%; opacity: 1;
			-webkit-transform[swing]:	scale(5);
			-moz-transform[swing]: 		scale(5);
			-o-transform[swing]:		scale(5);
			-ms-transform[swing]:		scale(5);
			transform[swing]: 			scale(5);"
		data-1201="display: block;"
		data-1202="display: none;">
		<div id="castle-bg"
			data-900="
				-webkit-transform[swing]:	scale(1);
				-moz-transform[swing]:		scale(1);
				-o-transform[swing]:		scale(1);
				-ms-transform[swing]:		scale(1);
				transform[swing]:			scale(1);"
			data-1200="
				-webkit-transform[swing]:	scale(0.2);
				-moz-transform[swing]:		scale(0.2);
				-o-transform[swing]:		scale(0.2);
				-ms-transform[swing]:		scale(0.2);
				transform[swing]:			scale(0.2);">
			<div id="castle-bg-parts">
				<img src="images/scene/castle/castle-bg.jpg" style="opacity: 1; width: 100%;">
				<img id="castle-bg-cogs-01a" src="images/scene/castle/gear-animation.gif">
				<img id="castle-bg-cogs-01" src="images/scene/castle/large-left-wheel.png">
				<img id="castle-bg-cogs-02" src="images/scene/castle/small-left-wheel.png">
				<img id="castle-bg-cogs-02a" src="images/scene/castle/small-left-gear.png">
				<img id="castle-bg-switch" src="images/scene/castle/switches-animation.gif">
				<img id="pipe-pump-01" src="images/scene/castle/largepipe-animation.gif">
				<img id="pipe-pump-02" src="images/scene/castle/smallpipe-animation.gif">
				<img id="castle-bg-therm" src="images/scene/castle/thermometer-arrow.gif">
			</div>
		</div>
		<div id="horn-container">
			<img id="horn" src="images/scene/castle/img-horn.png">
			<div id="flag">
				<img id="flag-image" src="images/scene/castle/img-horn-flag2.png">
				<div id="flag-text" class="text-container">
					<!-- <img src="images/scene/castle/txt-flag-header.png" width="100%" alt="Welcome to our Creative Castle" draggable="false"> -->
					<h4>WELCOME TO OUR<br>CREATIVE CASTLE</h4>
					<p>At MAD, we got rid of unnecessary Account Executives and instead give you an entire TEAM. It’s much easier to communicate when you don’t have to wade through a layer of account people.</p>
					<p>That’s how we roll.</p>
				</div>
			</div>
		</div>
		<div id="castle-container"
			data-900="
				-webkit-transform:	scale(1);
				-moz-transform: 	scale(1);
				-o-transform:		scale(1);
				-ms-transform:		scale(1);
				transform:			scale(1);"
			data-1100="background-color: rgba(0,0,0,0);"
			data-1200="background-color: rgba(0,0,0,1);"
			data-1200="
				-webkit-transform:	scale(1.5);
				-moz-transform:		scale(1.5);
				-o-transform:		scale(1.5);
				-ms-transform:		scale(1.5);
				transform:			scale(1.5);">
			<div id="castle-gorilla">
				<img src="images/scene/castle/castle-gorilla-olivier.gif">
			</div>
			<div id="castle-container-parts">
				<img id="water" src="images/scene/castle/water.png">
				<img id="hill" src="images/scene/castle/hill.png">
				<img id="lake-01" class="lake-creatures" src="images/scene/castle/img-shark-ceo-01.png">
				<img id="lake-02" class="lake-creatures" src="images/scene/castle/img-shark-ceo-02.png">
				<img id="lake-04" class="lake-creatures" src="images/scene/castle/img-tentacle-02.png"
					data-60="	margin-bottom:	23.5%;"
					data-120="	margin-bottom:	24.0%;"
					data-200="	margin-bottom:	23.5%;"
					data-230="	margin-bottom:	24.0%;"
					data-480="	margin-bottom:	23.5%;"
					data-500="	margin-bottom:	24.0%;"
					data-600="	margin-bottom:	23.5%;"
					data-700="	margin-bottom:	24.0%;">
				<img id="castle" src="images/scene/castle/img-castle.png">
				<img id="lake-03" class="lake-creatures"src="images/scene/castle/img-tentacle-01.png"
					data-50="	margin-left:	24.5%;"
					data-100="	margin-left:	25.5%;"
					data-200="	margin-left:	24.5%;"
					data-300="	margin-left:	25.5%;"
					data-400="	margin-left:	24.5%;"
					data-500="	margin-left:	25.5%;"
					data-600="	margin-left:	24.5%;"
					data-700="	margin-left:	25.5%;"
					data-900="	margin-left:	24.5%;"
					data-1100="	margin-left:	25.5%;">
				<div id="castle-door-container">
					<img id="castle-door-01" src="images/scene/castle/img-castle-door.png">
					<img id="castle-door-02" src="images/scene/castle/drawbridge-down.png">
				</div>
			</div>
		</div>
	</section>
		
	<div class="fade-to-black"
		data-1099="display: none;"
		data-1150="display: block; background-color: rgba(0,0,0,0.0);"
		data-1200="background-color: rgba(0,0,0,1.0);"
		data-1210="opacity: 1;"
		data-1400="opacity: 0.2;"
		data-1480="opacity[bounce]: 0.5;"
		data-1550="opacity[bounce]: 0.8;"
		data-1600="opacity[bounce]: 0;"
		data-1680="opacity[bounce]: 0.4;"
		data-1700="opacity[bounce]: 0;"
		data-1750="display: block;"
		data-1751="display: none;"></div>
	
	<section id="scene-xray" data-stretch="1"
		data-0="display: none;"
		data-1200="display: block; bottom:0;"
		data-4200="display: block;"
		data-4900="display:none;">
		<div id="ground-mid"
			data-1210="
				-webkit-transform:	scale(1);
				-moz-transform:		scale(1);
				-o-transform:		scale(1);
				-ms-transform:		scale(1);
				transform:			scale(1);"
			data-1700="
				-webkit-transform:	scale(1.1);
				-moz-transform:		scale(1.1);
				-o-transform:		scale(1.1);
				-ms-transform:		scale(1.1);
				transform:			scale(1.1);"
			data-4150="top: 0%"
			data-4500="top: -130%">
			<div id="gears-container-02">
				<img id="gear-02" class="gears gears-cw" src="images/scene/xray/img-gear-02.gif" width="400"
					style="right: 0%; top: 50%;">
				<img id="gear-03" class="gears gears-ccw" src="images/scene/xray/img-gear-01.gif" width="300"
					style="right: 214px; top: -60px;">
				<img id="gear-04" class="gears gears-cw" src="images/scene/xray/img-gear-03.gif" width="200"
					style="right: 120px; top: -220px;">
				<img id="gear-05" class="gears gears-ccw" src="images/scene/xray/img-gear-04.gif" width="400"
					style="right: -240px; top: -470px;">
				<img id="gear-06" class="gears gears-cw" src="images/scene/xray/img-gear-05.gif" width="900"
					style="right: -150%; top: -1380px;">
			</div>
		</div>
		<img id="xray-stage-bg" src="images/scene/xray/bg-pipes.gif"
			data-1210="
				-webkit-transform:	scale(1);
				-moz-transform:		scale(1);
				-o-transform:		scale(1);
				-ms-transform:		scale(1);
				transform:			scale(1);"
			data-1800="
				-webkit-transform:	scale(1.05);
				-moz-transform:		scale(1.05);
				-ms-transform:		scale(1.05);
				-o-transform:		scale(1.05);
				transform:			scale(1.05);">
		<img id="xray-stage-bg-2" src="images/scene/xray/pipes-midground.png"
			data-1400="
				-webkit-transform:	scale(1);
				-moz-transform:		scale(1);
				-o-transform:		scale(1);
				-ms-transform:		scale(1);
				transform:			scale(1);"
			data-1800="
				-webkit-transform:	scale(1.05);
				-moz-transform:		scale(1.05);
				-o-transform:		scale(1.05);
				-ms-transform:		scale(1.05);
				transform:			scale(1.05);">
		<div id="xray-stage-filter"></div>
		<div id="pipes-container"
			data-1210="
				-webkit-transform[swing]:	translate(0%, 3%);
				-moz-transform[swing]:		translate(0%, 3%);
				-o-transform[swing]:		translate(0%, 3%);
				-ms-transform[swing]:		translate(0%, 3%);
				transform[swing]:			translate(0%, 3%);"
			data-1800="
				-webkit-transform[swing]:	translate(0%, 0%);
				-moz-transform[swing]:		translate(0%, 0%);
				-o-transform[swing]:		translate(0%, 0%);
				-ms-transform[swing]:		translate(0%, 0%);
				transform[swing]:			translate(0%, 0%);"
			data-4150="top: 0%"
			data-4500="top: -130%">
			<div id="pedestal-container"
				data-4150="top: 0%"
				data-4500="top: -130%">
				<img id="victorian-man"
					data-2100="
						-webkit-transform:	translate(40%, 0%)	rotate(0deg)	scale(1);
						-moz-transform:		translate(40%, 0%)	rotate(0deg)	scale(1);
						-o-transform:		translate(40%, 0%)	rotate(0deg)	scale(1);
						-ms-transform:		translate(40%, 0%)	rotate(0deg)	scale(1);
						transform:			translate(40%, 0%)	rotate(0deg)	scale(1);"
					data-4000="
						-webkit-transform:	translate(-55%, 0%)	rotate(0deg)	scale(1);
						-moz-transform:		translate(-55%, 0%)	rotate(0deg)	scale(1);
						-o-transform:		translate(-55%, 0%)	rotate(0deg)	scale(1);
						-ms-transform:		translate(-55%, 0%)	rotate(0deg)	scale(1);
						transform:			translate(-55%, 0%)	rotate(0deg)	scale(1);"
					data-4100="
						-webkit-transform:	translate(-130%, 30%)	rotate(0deg)	scale(1);
						-moz-transform:		translate(-130%, 30%)	rotate(0deg)	scale(1);
						-o-transform:		translate(-130%, 30%)	rotate(0deg)	scale(1);
						-ms-transform:		translate(-130%, 30%)	rotate(0deg)	scale(1);
						transform:			translate(-130%, 30%)	rotate(0deg)	scale(1);"
					data-4500="
						-webkit-transform[swing]:	translate(-130%, 600%)	rotate(360deg)	scale(0.8);
						-moz-transform[swing]:		translate(-130%, 600%)	rotate(360deg)	scale(0.8);
						-o-transform[swing]:		translate(-130%, 600%)	rotate(360deg)	scale(0.8);
						-ms-transform[swing]:		translate(-130%, 600%)	rotate(360deg)	scale(0.8);
						transform[swing]:			translate(-130%, 600%)	rotate(360deg)	scale(0.8);"
					data-4700="
						-webkit-transform[swing]:	translate(-130%, 400%)	rotate(360deg)	scale(0.8);
						-moz-transform[swing]:		translate(-130%, 400%)	rotate(360deg)	scale(0.8);
						-o-transform[swing]:		translate(-130%, 400%)	rotate(360deg)	scale(0.8);
						-ms-transform[swing]:		translate(-130%, 400%)	rotate(360deg)	scale(0.8);
						transform[swing]:			translate(-130%, 400%)	rotate(360deg)	scale(0.8);"
					src="images/scene/xray/victorian-man.png">
				<img id="pedestal" src="images/scene/xray/pipe-small.png">
				<img id="pedestal-treadmill" src="images/scene/xray/treadmill-animation.gif">
				<img id="lamp" src="images/scene/xray/lamp.png">
				<div id="xray-monitor">
					<img id="monitor-pipe" src="images/scene/xray/pipe-horizontal.png">
					<img id="monitor-01" src="images/scene/xray/xray-monitor-black.png">
					<img id="monitor-02" src="images/scene/xray/xray-monitor.png">
				</div>
			</div>
			<div id="signage-container">
				<div id="sign-arm"><img src="images/scene/xray/frame-holder.png"></div>
				<div id="sign">
					<div class="text-container">
						<h4>WE<sup>'</sup>LL GET UNDER YOUR SKIN</h4>
						<p>Okay. Stand still. Let’s figure out what’s going on here...Oh!</p>
						<p>When we dig deeper, sometimes we find things we didn't expect. You'll need us to arrange technical specifications for your particular issue.</p>
						<p>Come find out how ...</p>
					</div>
					<img src="images/scene/xray/frame.png">
				</div>
			</div>
			<div id="pipes"
				data-4150="top: 0%"
				data-4500="top: -130%">
				<div id="pipe-01"><img src="images/scene/xray/pipe-small.png"></div>
				<div id="pipe-02">
					<img src="images/scene/xray/pipe-small.png">
				</div>
				<div id="pipe-03"><img src="images/scene/xray/pipe-large.png"></div>
				<div id="pipe-04">
					<div id="pipe-04-bg">
						<img src="images/scene/xray/mid-ground-needle.png">
					</div>
					<img src="images/scene/xray/mid-ground-pipes.png">
				</div>
				<div id="drips-container">
					<img src="http://placehold.it/20x50/&text=D">
				</div>
			</div>
		</div>
	</section>
	
	<section id="scene-lab" data-stretch
		data-4199="display: none;"
		data-4200="display: block; bottom[swing]: -160%;"
		data-4900="bottom[swing]: 0%;"
		data-6250="right[swing]: 0%;"
		data-6999="right[swing]: -200%; opacity: 1; display: block;"
		data-7100="opacity: 0; display: none;">
		<div id="lab-container">
			<img id="lab-bg" src="images/scene/lab/bg-chalkboard-wall.jpg">
			<div id="lab-bg-equations-container">
				<div id="lab-bg-equations">
					<img src="images/scene/lab/equations.png">
					<div id="lab-bg-equations-01"
						data-4780="width: 0%;"
						data-5200="width: 30%;"><img src="images/scene/lab/lab-equation1.png"></div>
					<div id="lab-bg-equations-02"
						data-4650="width: 0%;"
						data-4800="width: 30%;"><img src="images/scene/lab/lab-equation2.png"></div>
					<div id="lab-bg-equations-03"
						data-5000="width: 0%;"
						data-5200="width: 30%;"><img src="images/scene/lab/lab-equation3.png"></div>
					<div id="lab-bg-equations-04"
						data-4900="width: 0%;"
						data-5000="width: 30%;"><img src="images/scene/lab/lab-equation4.png"></div>
					<div id="lab-bg-equations-05"
						data-4750="width: 25%;"
						data-4800="width: 15%;"
						data-4900="width: 33%;"><img src="images/scene/lab/lab-equation5.png"></div>
					<div id="lab-bg-equations-06"
						data-4500="width: 20%;"
						data-4800="width: 25%"
						data-5000="width: 15%;"
						data-5250="width: 31%;"><img src="images/scene/lab/lab-equation6.png"></div>
				</div>
			</div>
			<div id="flask-container">
				<div id="flask-01"
					data-4600="left[swing]: 100%;"
					data-4700="left[swing]: 0%;">
					<img src="images/scene/lab/flask-01.png" draggable="false">
					<div class="flask-smoke">
						<img src="images/scene/lab/smoke-red.png" draggable="false"
							data-5060="
								-webkit-transform:	scale(0, 0);
								-moz-transform:		scale(0, 0);
								-o-transform:		scale(0, 0);
								-ms-transform:		scale(0, 0);
								transform:			scale(0, 0);"
							data-5130="
								-webkit-transform:	scale(0.25, 0.5);
								-moz-transform:		scale(0.25, 0.5);
								-o-transform:		scale(0.25, 0.5);
								-ms-transform:		scale(0.25, 0.5);
								transform:			scale(0.25, 0.5);"
							data-5200="
								-webkit-transform:	scale(1, 1);
								-moz-transform:		scale(1, 1);
								-o-transform:		scale(1, 1);
								-ms-transform:		scale(1, 1);
								transform:			scale(1, 1);">
						<img class="golden-glow" src="images/scene/lab/golden-glow.png"
							data-5060="opacity: 0;"
							data-5200="opacity: 1;">
					</div>
					<img class="lab-victorian-man" src="images/scene/xray/victorian-man.png" draggable="false"
						data-4790="display: none;"
						data-4800="
							display: block;
							-webkit-transform:	translate(0%, -1000%) rotate(10deg);
							-moz-transform:		translate(0%, -1000%) rotate(10deg);
							-o-transform:		translate(0%, -1000%) rotate(10deg);
							-ms-transform:		translate(0%, -1000%) rotate(10deg);
							transform:			translate(0%, -1000%) rotate(10deg);"
						data-5000="
							-webkit-transform:	translate(0%, -100%) rotate(180deg);
							-moz-transform:		translate(0%, -100%) rotate(180deg);
							-o-transform:		translate(0%, -100%) rotate(180deg);
							-ms-transform:		translate(0%, -100%) rotate(180deg);
							transform:			translate(0%, -100%) rotate(180deg);"
						data-5050="
							-webkit-transform:	translate(0%, -80%) rotate(180deg);
							-moz-transform:		translate(0%, -80%) rotate(180deg);
							-o-transform:		translate(0%, -80%) rotate(180deg);
							-ms-transform:		translate(0%, -80%) rotate(180deg);
							transform:			translate(0%, -80%) rotate(180deg);
							opacity: 1;"
						data-5100="
							-webkit-transform:	translate(0%, 0%) rotate(180deg);
							-moz-transform:		translate(0%, 0%) rotate(180deg);
							-o-transform:		translate(0%, 0%) rotate(180deg);
							-ms-transform:		translate(0%, 0%) rotate(180deg);
							transform:			translate(0%, 0%) rotate(180deg);
							opacity: 0;">
					<img class="lab-victorian-man" src="images/scene/lab/victorian-man-red.png" draggable="false"
						data-5050="
							-webkit-transform[swing]:	translate(0px, -80px) rotate(180deg);
							-moz-transform[swing]:		translate(0px, -80px) rotate(180deg);
							-o-transform[swing]:		translate(0px, -80px) rotate(180deg);
							-ms-transform[swing]:		translate(0px, -80px) rotate(180deg);
							transform[swing]:			translate(0px, -80px) rotate(180deg);
							opacity: 0;"
						data-5100="
							-webkit-transform[swing]:	translate(0px, 10px) rotate(190deg);
							-moz-transform[swing]:		translate(0px, 10px) rotate(190deg);
							-o-transform[swing]:		translate(0px, 10px) rotate(190deg);
							-ms-transform[swing]:		translate(0px, 10px) rotate(190deg);
							transform[swing]:			translate(0px, 10px) rotate(190deg);
							opacity: 1;"
						data-5160="
							-webkit-transform[bounce]:	translate(0px, 0px) rotate(175deg);
							-moz-transform[bounce]:		translate(0px, 0px) rotate(175deg);
							-o-transform[bounce]:		translate(0px, 0px) rotate(175deg);
							-ms-transform[bounce]:		translate(0px, 0px) rotate(175deg);
							transform[bounce]:			translate(0px, 0px) rotate(175deg);
							opacity: 0;">
					<img class="flask-mouth-piece" src="images/scene/lab/flask-mouth.png" draggable="false">
				</div>
				<div id="flask-02"
					data-4600="left[swing]: 100%;"
					data-4800="left[swing]: 0%;">
					<img src="images/scene/lab/flask-02.png" draggable="false">
					<div class="flask-smoke">
						<img src="images/scene/lab/smoke-blue.png" draggable="false"
							data-5180="
								-webkit-transform:	scale(0, 0);
								-moz-transform:		scale(0, 0);
								-o-transform:		scale(0, 0);
								-ms-transform:		scale(0, 0);
								transform:			scale(0, 0);"
							data-5230="
								-webkit-transform:	scale(0.25, 0.5);
								-moz-transform:		scale(0.25, 0.5);
								-o-transform:		scale(0.25, 0.5);
								-ms-transform:		scale(0.25, 0.5);
								transform:			scale(0.25, 0.5);"
							data-5280="
								-webkit-transform:	scale(1, 1);
								-moz-transform:		scale(1, 1);
								-o-transform:		scale(1, 1);
								-ms-transform:		scale(1, 1);
								transform:			scale(1, 1);">
						<img class="golden-glow" src="images/scene/lab/golden-glow.png"
							data-5180="opacity: 0;"
							data-5280="opacity: 1;">
						<img id="flask-lightning" src="images/scene/lab/lightning.png"
							data-4800="display: none;"
							data-5280="display: block; opacity[bounce]: 0;"
							data-5500="opacity[bounce]: 1;">
					</div>
					<img class="flask-mouth-piece" src="images/scene/lab/flask-mouth.png" draggable="false">
				</div>
				<div id="flask-03"
					data-4600="left[swing]: 100%;"
					data-4900="left[swing]: 0%;">
					<img src="images/scene/lab/flask-03.png" draggable="false">
					<div class="flask-smoke">
						<img src="images/scene/lab/smoke-yellow.png" draggable="false"
							data-5320="
								-webkit-transform:	scale(0, 0);
								-moz-transform:		scale(0, 0);
								-o-transform:		scale(0, 0);
								-ms-transform:		scale(0, 0);
								transform:			scale(0, 0);"
							data-5420="
								-webkit-transform:	scale(0.06, 0.6);
								-moz-transform:		scale(0.06, 0.6);
								-o-transform:		scale(0.06, 0.6);
								-ms-transform:		scale(0.06, 0.6);
								transform:			scale(0.06, 0.6);"
							data-5480="
								-webkit-transform:	scale(1, 1);
								-moz-transform:		scale(1, 1);
								-o-transform:		scale(1, 1);
								-ms-transform:		scale(1, 1);
								transform:			scale(1, 1);">
						<img class="golden-glow" src="images/scene/lab/golden-glow.png"
							data-5320="opacity: 0;"
							data-5420="opacity: 1;">
					</div>
					<img class="flask-mouth-piece" src="images/scene/lab/flask-mouth.png" draggable="false">
				</div>
			</div>
			<div id="unicorn-container">
				<img id="unicorn-01" src="images/scene/lab/unicorn-down.png"
					data-5649="display: none;"
					data-5650="
						opacity: 0; display: block;
						-webkit-transform:	scale(0);
						-moz-transform:		scale(0);
						-o-transform:		scale(0);
						-ms-transform:		scale(0);
						transform:			scale(0);"
					data-6000="
						opacity: 1;
						-webkit-transform:	scale(1);
						-moz-transform:		scale(1);
						-o-transform:		scale(1);
						-ms-transform:		scale(1);
						transform:			scale(1);"
					data-6199="display: none;">
				<img id="unicorn-02" src="images/scene/lab/unicorn-up.png"
					data-6199="opacity: 0;"
					data-6200="opacity: 1;">
				<div id="rainbow"><img src="images/scene/lab/rainbow.png"
					data-6200="width: 0%;"
					data-7000="width: 100%;"></div>
			</div>
			<div id="clipboard">
				<img src="images/scene/lab/clipboard.png" draggable="false">
				<div class="text-container">
					<h4>MAD LAB</h4>
					<p>This is the part where we exhaustively explore&nbsp;options.</p>
					<p>Mix these prototypes. Stir in some wireframes.<br>Add in lots of comps. Voil&agrave;!</p>
					<p>A great end product is indicative of a well-established&nbsp;foundation.</p>
				</div>
			</div>
			<img id="lab-equipment-bg" src="images/scene/lab/bg-xrayslides.png"
				data-6340="margin-right: 50%;"
				data-7000="margin-right: 20%;">
		</div>
	</section>
	
	<section id="scene-creation" data-stretch
		data-6249="display: none;"
		data-6250="right[swing]: 100%; display: block;"
		data-7000="right[swing]: 0%;"
		data-7650="right: 0%;"
		data-8020="right: -100%;"
		data-_gerbil-1501="display: none;">
		<div id="creation-container-bg"
			data-_gerbil-1200="top[swing]: 0%;"
			data-_gerbil-1500="top[swing]: 200%;">
			<img id="creation-bg" src="images/scene/creation/bg-creation-hamster-alt-small.jpg">
		</div>
		<div id="creation-container">
			<div id="stones-container">
				<div id="stone-01">
					<img class="rubble" src="images/scene/creation/rubble.png"
						data-7215="opacity: 0;"
						data-7230="opacity: 1;">
					<img class="stone" src="images/scene/creation/stone-01.png">
					<div class="smash-sprite"></div>
					<img class="statue" src="images/scene/creation/statue.png"
						data-7215="opacity: 0;"
						data-7230="opacity: 1;"
						data-7760="display: block;"
						data-7761="display: none;">
				</div>
				<div id="stone-02">
					<img class="rubble" src="images/scene/creation/rubble.png">
				</div>
			</div>
			<div id="creation-tools"
				data-7220="opacity: 1;"
				data-7360="opacity: 0;">
				<img id="tool-hammer" src="images/scene/creation/hammer.png"
					data-7010="
						-webkit-transform:	rotate(-9deg);
						-moz-transform:		rotate(-9deg);
						-o-transform:		rotate(-9deg);
						-ms-transform:		rotate(-9deg);
						transform:			rotate(-9deg);"
					data-7175="
						-webkit-transform:	rotate(41deg);
						-moz-transform:		rotate(41deg);
						-o-transform:		rotate(41deg);
						-ms-transform:		rotate(41deg);
						transform:			rotate(41deg);"
					data-7190="
						-webkit-transform:	rotate(-10deg);
						-moz-transform:		rotate(-10deg);
						-o-transform:		rotate(-10deg);
						-ms-transform:		rotate(-10deg);
						transform:			rotate(-10deg);">
				<img id="tool-pick" src="images/scene/creation/pick.png"
					data-7190="
						-webkit-transform:	translate(0%, 0%);
						-moz-transform: 	translate(0%, 0%);
						-o-transform:		translate(0%, 0%);
						-ms-transform:		translate(0%, 0%);
						transform:			translate(0%, 0%);"
					data-7210="
						-webkit-transform:	translate(-27%, 20%);
						-moz-transform: 	translate(-27%, 20%);
						-o-transform:		translate(-27%, 20%);
						-ms-transform:		translate(-27%, 20%);
						transform:			translate(-27%, 20%);">
			</div>
			<div id="rubble-box">
				<div class="text-container">
					<h4>CREATION STATION</h4>
					<p>This is where the magic happens. Get your head out of the gutter...</p>
					<p>Copywriters write. Designers create. Developers code. Coffeemakers brew.</p>
					<p>After rounds of testing, your work of art is ready to make its debut.</p>
				</div>
			</div>
		</div>
	</section>
	
	<section id="scene-gerbil" data-stretch
		data-0="display: none;"
		data-_gerbil="display: block;"
		data-_gerbil-650="right: 100%;"
		data-_gerbil-1020="right: 0%;"
		data-_gerbil-1200="top[swing]: 0%;"
		data-_gerbil-1500="top[swing]: 200%;"
		data-_gerbil-1901="display: block;"
		data-_gerbil-1902="display: none;">
		<div id="gerbil-container"
			data-_gerbil-850="margin-bottom: 0%; margin-left: 0%;"
			data-_gerbil-860="margin-bottom[bounce]: 1%; margin-left: -1%;"
			data-_gerbil-900="margin-bottom: 0%; margin-left: -1%;">
			<img id="gerbil-03" src="images/scene/gerbil/boiler.png">
			<img id="gerbil-02" src="images/scene/gerbil/hamster-wheel-animation.png">
			<img id="gerbil-01" src="images/scene/gerbil/hamster-animation.png">
		</div>
		
		<div id="gorilla-container"
			data-7350="
				-webkit-transform:	translate(80%, -40%) rotate(-27deg);
				-moz-transform:		translate(80%, -40%) rotate(-27deg);
				-o-transform:		translate(80%, -40%) rotate(-27deg);
				-ms-transform:		translate(80%, -40%) rotate(-27deg);
				transform:			translate(80%, -40%) rotate(-27deg);"
			data-7550="
				-webkit-transform:	translate(40%, -30%) rotate(-15deg);
				-moz-transform:		translate(40%, -30%) rotate(-15deg);
				-o-transform:		translate(40%, -30%) rotate(-15deg);
				-ms-transform:		translate(40%, -30%) rotate(-15deg);
				transform:			translate(40%, -30%) rotate(-15deg);"
			data-7850="
				-webkit-transform:	translate(11%, -30%) rotate(27deg);
				-moz-transform:		translate(11%, -30%) rotate(27deg);
				-o-transform:		translate(11%, -30%) rotate(27deg);
				-ms-transform:		translate(11%, -30%) rotate(27deg);
				transform:			translate(11%, -30%) rotate(27deg);"
			data-8200="
				-webkit-transform:	translate(12%, -30%) rotate(34deg);
				-moz-transform:		translate(12%, -30%) rotate(34deg);
				-o-transform:		translate(12%, -30%) rotate(34deg);
				-ms-transform:		translate(12%, -30%) rotate(34deg);
				transform:			translate(12%, -30%) rotate(34deg);"
			data-8201="display: block;"
			data-8202="display: none;">
			<img id="crane" src="images/scene/creation/crane-animation.png"
				data-7850="
					-webkit-transform:	translate(0%, 0%)		rotate(0deg);
					-moz-transform:		translate(0%, 0%)		rotate(0deg);
					-o-transform:		translate(0%, 0%)		rotate(0deg);
					-ms-transform:		translate(0%, 0%)		rotate(0deg);
					transform:			translate(0%, 0%)		rotate(0deg);"
				data-8000="
					-webkit-transform:	translate(-20%, -20%)		rotate(40deg);
					-moz-transform:		translate(-20%, -20%)		rotate(40deg);
					-o-transform:		translate(-20%, -20%)		rotate(40deg);
					-ms-transform:		translate(-20%, -20%)		rotate(40deg);
					transform:			translate(-20%, -20%)		rotate(40deg);">
			<div id="gorilla-statue-group"
				data-7550="
					-webkit-transform:	translate(0%, 0%)		rotate(0deg);
					-moz-transform:		translate(0%, 0%)		rotate(0deg);
					-o-transform:		translate(0%, 0%)		rotate(0deg);
					-ms-transform:		translate(0%, 0%)		rotate(0deg);
					transform:			translate(0%, 0%)		rotate(0deg);"
				data-7790="
					-webkit-transform:	translate(0%, 0%)		rotate(5deg);
					-moz-transform:		translate(0%, 0%)		rotate(5deg);
					-o-transform:		translate(0%, 0%)		rotate(5deg);
					-ms-transform:		translate(0%, 0%)		rotate(5deg);
					transform:			translate(0%, 0%)		rotate(5deg);"
				data-7850="
					-webkit-transform:	translate(0%, 0%)		rotate(10deg);
					-moz-transform:		translate(0%, 0%)		rotate(10deg);
					-o-transform:		translate(0%, 0%)		rotate(10deg);
					-ms-transform:		translate(0%, 0%)		rotate(10deg);
					transform:			translate(0%, 0%)		rotate(10deg);"
				data-8100="
					-webkit-transform:	translate(50%, 1100%)	rotate(15deg);
					-moz-transform:		translate(50%, 1100%)	rotate(15deg);
					-o-transform:		translate(50%, 1100%)	rotate(15deg);
					-ms-transform:		translate(50%, 1100%)	rotate(15deg);
					transform:			translate(50%, 1100%)	rotate(15deg);">
				<img id="gorilla" src="images/scene/creation/gorilla-animation.png">
				<img class="statue" src="images/scene/creation/statue.png"
					data-7760="display: none;"
					data-7761="
						-webkit-transform:	rotate(-14deg);
						-moz-transform:		rotate(-14deg);
						-o-transform:		rotate(-14deg);
						-ms-transform:		rotate(-14deg);
						transform:			rotate(-14deg);
						display: block;"
					data-7780="
						-webkit-transform:	rotate( 46deg);
						-moz-transform:		rotate( 46deg);
						-o-transform:		rotate( 46deg);
						-ms-transform:		rotate( 46deg);
						transform:			rotate( 46deg);
						margin-left: 11%;"
					data-8100="
						-webkit-transform:	rotate( 16deg);
						-moz-transform:		rotate( 16deg);
						-o-transform:		rotate( 16deg);
						-ms-transform:		rotate( 16deg);
						transform:			rotate( 16deg);
						margin-left: 50%;">
			</div>
		</div>
		<div id="boiler-bg-container">
			<div id="steam-container">
				<img id="steam-01" src="images/scene/gerbil/steam-1.png">
				<img id="steam-02" src="images/scene/gerbil/steam-2.png">
				<img id="steam-03" src="images/scene/gerbil/steam-3.png">
				<img id="steam-04" src="images/scene/gerbil/steam-4.png">
			</div>
			<div id="switch-container">
				<img id="boiler-pipes" src="images/scene/gerbil/boiler2.png">
				<img id="needle" src="images/scene/gerbil/needle-boiler-animation.png">
			</div>
		</div>
		<div id="machine-head-container">
			<img id="head-bg" src="images/scene/gerbil/head-gear-bg.png">
			<img id="head-fg" src="images/scene/gerbil/head-gear-bg-animation.gif">
			<img id="head-box" src="images/scene/gerbil/boiler-box.png">
		</div>
		<div id="steam-text">
			<div class="text-container">
				<h4>THE VERDICT</h4>
				<p>We may be MAD, but we aren't insane.</p>
				<p>If the old approach isn't working. Why keep doing it? We're determined to give you fresh, new ideas to conquer your marketing challenges.</p>
				<p>Now that you've seen our process, let's check out the answer to your question...</p>
			</div>
		</div>
		<div id="cogs-container"
			data-8300="
				-webkit-transform:	translate(0%, 0%) scale(1);
				-moz-transform:		translate(0%, 0%) scale(1);
				-o-transform:		translate(0%, 0%) scale(1);
				-ms-transform:		translate(0%, 0%) scale(1);
				transform:			translate(0%, 0%) scale(1);"
			data-8800="
				-webkit-transform:	translate(5%, 3%) scale(1);
				-moz-transform:		translate(5%, 3%) scale(1);
				-o-transform:		translate(5%, 3%) scale(1);
				-ms-transform:		translate(5%, 3%) scale(1);
				transform:			translate(5%, 3%) scale(1);">
		</div>
		<div id="red-transparency"
			data-8209="display: none;"
			data-8220="display: block;">
			<img src="images/scene/gerbil/red-transparency.png">
		</div>
		<img id="gerbil-to-boy-transition" src="images/scene/gerbil/bg-gerbil-transition.jpg">
	</section>
	
	<div id="transition-pipe"
		data-_gerbil-800="display: none;"
		data-_gerbil-1000="display: block;"
		data-_gerbil-1200="top[swing]: -240%;"
		data-_gerbil-1500="top[swing]: 0%;"
		data-_boy-355="
			-webkit-transform:	scale(1);
			-moz-transform:		scale(1);
			-o-transform:		scale(1);
			-ms-transform:		scale(1);
			transform:			scale(1);"
		data-_boy-898="
			-webkit-transform:	scale(5);
			-moz-transform:		scale(5);
			-o-transform:		scale(5);
			-ms-transform:		scale(5);
			transform:			scale(5);"
		data-_boy-899="display: block;"
		data-_boy-900="display: none;">
		<img id="hole" src="images/scene/gerbil/bg-gerbil.jpg">
		<div id="hole-cover"
			data-_boy-250="opacity[bounce]: 1;"
			data-_boy-450="opacity[bounce]: 0;"
			data-_boy-500="opacity[bounce]: 1;"
			data-_boy-550="opacity[bounce]: 0.25;"
			data-_boy-600="opacity[bounce]: 1;"
			data-_boy-800="opacity[bounce]: 0.3;"
			data-_boy-900="opacity[bounce]: 1;"></div>
	</div>
	
	<section id="scene-boy" data-stretch
		data-_boy="display: none;"
		data-_boy-899="display: block;"
		data-_boy-900="
			opacity: 0;
			-webkit-transform[swing]:	scale(12);
			-moz-transform[swing]:		scale(12);
			-o-transform[swing]:		scale(12);
			-ms-transform[swing]:		scale(12);
			transform[swing]:			scale(12);"
		data-_boy-1200="
			opacity: 1;
			-webkit-transform[swing]:	scale(1);
			-moz-transform[swing]:		scale(1);
			-o-transform[swing]:		scale(1);
			-ms-transform[swing]:		scale(1);
			transform[swing]:			scale(1);"
		data-_boy-1500=""
		data-_boy-1800=""
		>
		<div id="storm-bg"></div>
		<div id="storm-container">
			<img id="bolt-1" src="images/scene/boy/lightning-bolt1-animation.gif">
			<img id="bolt-2" src="images/scene/boy/lightning-bolt2-animation.gif">
		</div>
		<div id="boy-container">
			<img id="boy-2" src="images/scene/boy/statue-frame-2.png">
			<img id="boy-1" src="images/scene/boy/statue-frame-1.png">
		</div>
		<div id="behold-container"
			data-_boy-1600="display: block;"
			data-_boy-1700="display: none;">
			<div id="behold"><img src="images/scene/boy/behold.png"></div>
			<div id="behold-text">We present to you the answer to your marketing question:</div>
		</div>
		<div id="cta-container"
			data-_boy-1900="">
			<div class="text-container">
				<h1>"You can increase company morale by hiring a local dance instructor to teach all employees how to twerk."</h1>
				<button>I want a different answer weirdo</button>
				<button style="margin-left: 2% !important;">Um ... thanks, I guess?</button>
			</div>
		</div>
	</section>
	
</div>
<?php include('audio.php'); ?>
<script type="text/javascript" src="skroller/dist/skrollr.min.js"></script>
<script src="scripts/custom.js"></script>
<script src="scripts/audio.js"></script>
</body>
</html>
