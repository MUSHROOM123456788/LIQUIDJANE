

# Create index.html
cat <<EOL > index.html
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<title>LIQUIDJANE</title>
<link href="https://fonts.googleapis.com/css2?family=Permanent+Marker&family=Luckiest+Guy&display=swap" rel="stylesheet">
<link rel="stylesheet" href="style.css">
</head>
<body>

<div id="mainPage" class="page">
  <div class="liquid"></div>
  <h1 class="title" data-target="mainPage">LIQUIDJANE</h1>

  <!-- Bottom instruments -->
  <div class="instrument" style="left:10%;">🎷</div>
  <div class="instrument" style="left:25%;">🎹</div>
  <div class="instrument" style="left:40%;">🥁</div>
  <div class="instrument" style="left:55%;">🎸</div>
  <div class="instrument" style="left:70%;">🎻</div>
  <div class="instrument" style="left:85%;">🎺</div>

  <!-- Six fish orbiting the title -->
  <div class="fish" data-target="page1">🐟</div>
  <div class="fish" data-target="page2">🐠</div>
  <div class="fish" data-target="page3">🐡</div>
  <div class="fish" data-target="page4">🐟</div>
  <div class="fish" data-target="page5">🐠</div>
  <div class="fish" data-target="page6">🐡</div>
</div>

<!-- Individual pages -->
<div class="page" id="page1"><h1 class="title" data-target="mainPage">LIQUIDJANE</h1><div class="melting-layer" style="--green:#013220;"></div></div>
<div class="page" id="page2"><h1 class="title" data-target="mainPage">LIQUIDJANE</h1><div class="melting-layer" style="--green:#014d33;"></div></div>
<div class="page" id="page3"><h1 class="title" data-target="mainPage">LIQUIDJANE</h1><div class="melting-layer" style="--green:#01664d;"></div></div>
<div class="page" id="page4"><h1 class="title" data-target="mainPage">LIQUIDJANE</h1><div class="melting-layer" style="--green:#017a55;"></div></div>
<div class="page" id="page5"><h1 class="title" data-target="mainPage">LIQUIDJANE</h1><div class="melting-layer" style="--green:#018866;"></div></div>
<div class="page" id="page6"><h1 class="title" data-target="mainPage">LIQUIDJANE</h1><div class="melting-layer" style="--green:#019977;"></div></div>

<script src="script.js"></script>
</body>
</html>
EOL

# Create style.css
cat <<EOL > style.css
html, body {
  margin:0; padding:0; width:100%; height:100%;
  overflow:hidden;
  cursor:none;
  font-family:'Impact','Arial Black',sans-serif;
}

.page { position:absolute; top:0; left:0; width:100%; height:100%; display:none; overflow:hidden; }
#mainPage { display:block; }

.cursor {
  position:fixed;
  font-size:40px;
  pointer-events:none;
  z-index:9999;
}

/* Main page liquid background */
.liquid {
  position:absolute; top:0; left:0; width:100%; height:100%;
  background: linear-gradient(270deg, #001f3f, #004080, #66b3ff);
  background-size: 800% 800%;
  animation: moveLiquid 10s ease infinite, meltLiquid 6s ease-in-out infinite alternate;
  z-index:0;
}

/* Individual pages green melting layers */
.melting-layer {
  position:absolute; top:0; left:0; width:100%; height:100%;
  background: linear-gradient(180deg, var(--green), #a6f0c6);
  filter: blur(25px);
  animation: drip 4s infinite alternate ease-in-out, fastGradient 5s ease-in-out infinite alternate;
  opacity:0.6;
}

/* Animations */
@keyframes moveLiquid {0%{background-position:0% 50%;}50%{background-position:100% 50%;}100%{background-position:0% 50%;}}
@keyframes meltLiquid {0%{clip-path: polygon(0 0,100% 0,100% 90%,0 100%);}50%{clip-path: polygon(0 0,100% 0,100% 70%,0 85%);}100%{clip-path: polygon(0 0,100% 0,100% 90%,0 100%);}}
@keyframes drip {0%{transform: translateY(0px) skewY(0deg) scaleX(1);}50%{transform: translateY(20px) skewY(3deg) scaleX(1.05);}100%{transform: translateY(0px) skewY(0deg) scaleX(1);}}
@keyframes fastGradient {0%{background: linear-gradient(180deg,var(--green),#a6f0c6);}50%{background: linear-gradient(180deg,#a6f0c6,var(--green));}100%{background: linear-gradient(180deg,var(--green),#a6f0c6);}}

/* Title */
.title {
  position:absolute; top:20px; left:50%; transform:translateX(-50%);
  font-size:100px; font-family:'Permanent Marker','Luckiest Guy',Impact,Arial Black,sans-serif;
  background: linear-gradient(45deg,#FFB347,#FF9900);
  -webkit-background-clip:text; -webkit-text-fill-color:transparent;
  -webkit-text-stroke:2px #FF69B4;
  text-shadow:2px 2px 5px red,0 0 10px red,0 0 20px red;
  z-index:2; cursor:pointer;
}

/* Instruments bottom line */
.instrument { position:absolute; font-size:60px; bottom:20px; z-index:2; animation: floatZoom 5s ease-in-out infinite alternate; }
@keyframes floatZoom {0%{transform: translateY(0px) scale(1);}50%{transform:translateY(-10px) scale(1.05);}100%{transform:translateY(0px) scale(1);}}

/* Fish orbiting with swim motion */
.fish {
  position:absolute;
  font-size:50px;
  top:50%; left:50%;
  transform-origin:0 -150px;
  animation: orbit 10s linear infinite, swim 2s ease-in-out infinite alternate;
}

.fish:nth-of-type(1){animation-duration:10s,2s;}
.fish:nth-of-type(2){animation-duration:11s,2.2s;}
.fish:nth-of-type(3){animation-duration:12s,2.4s;}
.fish:nth-of-type(4){animation-duration:13s,2.1s;}
.fish:nth-of-type(5){animation-duration:14s,2.3s;}
.fish:nth-of-type(6){animation-duration:15s,2.5s;}

@keyframes orbit {0%{transform:rotate(0deg);}100%{transform:rotate(360deg);}}
@keyframes swim {0%{translate: 0 0;}50%{translate:0 10px;}100%{translate:0 0;}}
EOL

# Create script.js
cat <<EOL > script.js
window.onload = () => {
  const pages = document.querySelectorAll('.page');

  // Title clickable to return home
  document.querySelectorAll('.title').forEach(title=>{
    title.addEventListener('click', ()=>{
      pages.forEach(p=>p.style.display='none');
      document.getElementById('mainPage').style.display='block';
    });
  });

  // Fish click to open respective page
  document.querySelectorAll('.fish').forEach(fish=>{
    fish.addEventListener('click', ()=>{
      const target = fish.dataset.target;
      pages.forEach(p=>p.style.display='none');
      document.getElementById(target).style.display='block';
    });
  });

  // Mermaid cursor
  const cursor = document.createElement('div');
  cursor.classList.add('cursor');
  cursor.innerText = '🧜‍♀️';
  document.body.appendChild(cursor);

  document.addEventListener('mousemove', e=>{
    cursor.style.left = e.clientX + 'px';
    cursor.style.top = e.clientY + 'px';
  });
};
EOL

# Go back one level and zip the folder
cd ..
zip -r LiquidJaneWebsite.zip LiquidJaneWebsite/
