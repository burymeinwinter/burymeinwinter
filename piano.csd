src piano9intro
loop


<CsoundSynthesizer>
<CsOptions>
-odac -d
</CsOptions>
<html>
<head> </head>
<body bgcolor="lightblue">
<script>
function onGetControlChannel(value) {
document.getElementById(
'testChannel'
).innerHTML = value;
} // to test csound.getControlChannel with QtWebEngine
</script>
<h2>Minimal Csound-Html5 example</h2>
<br />
<br />
Frequency:
<input
type="range"
id="slider"
oninput='csound.setControlChannel("testChannel",this.value/100.0); '
/>
<br />
<button
id="button"
onclick='csound.readScore("i 1 0 3")'
>
Event
</button>
<br /><br />
Get channel from csound with callback (QtWebchannel):
<label id="getchannel"></label>
<button
onclick='csound.getControlChannel("testChannel", onGetControlChannel)'
>
Get</button
><br />
Value from channel "testChannel":
<label id="testChannel"></label><br />
<br />
Get as return value (QtWebkit)
<button
onclick='alert("TestChannel: "+csound.getControlChannel("testChannel"))'
>
Get as retrun value
</button>
<br />
</body>
</html>
<CsInstruments>
sr = 44100
