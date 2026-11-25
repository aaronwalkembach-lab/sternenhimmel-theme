// The night sky drawn behind the conversation: a violet Milky Way and two spiral galaxies.
export const SKY = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1600 1000" preserveAspectRatio="xMidYMid slice">
<defs>
<linearGradient id="sky" x1="0" y1="0" x2="0.3" y2="1">
<stop offset="0" stop-color="#06041a"/><stop offset="0.5" stop-color="#120a33"/><stop offset="1" stop-color="#26114a"/>
</linearGradient>
<radialGradient id="n1"><stop offset="0" stop-color="#9b5cff" stop-opacity="0.28"/><stop offset="1" stop-color="#9b5cff" stop-opacity="0"/></radialGradient>
<radialGradient id="n2"><stop offset="0" stop-color="#d36bff" stop-opacity="0.2"/><stop offset="1" stop-color="#d36bff" stop-opacity="0"/></radialGradient>
<radialGradient id="n3"><stop offset="0" stop-color="#5a7dff" stop-opacity="0.18"/><stop offset="1" stop-color="#5a7dff" stop-opacity="0"/></radialGradient>
<radialGradient id="n4"><stop offset="0" stop-color="#ff6fb5" stop-opacity="0.14"/><stop offset="1" stop-color="#ff6fb5" stop-opacity="0"/></radialGradient>
<radialGradient id="core"><stop offset="0" stop-color="#fff8f0" stop-opacity="1"/><stop offset="0.18" stop-color="#ffd9f2" stop-opacity="0.8"/><stop offset="0.5" stop-color="#b57bff" stop-opacity="0.3"/><stop offset="1" stop-color="#7a4dff" stop-opacity="0"/></radialGradient>
<radialGradient id="halo"><stop offset="0" stop-color="#a070ff" stop-opacity="0.35"/><stop offset="0.6" stop-color="#6a3fd0" stop-opacity="0.12"/><stop offset="1" stop-color="#6a3fd0" stop-opacity="0"/></radialGradient>
<radialGradient id="arm"><stop offset="0" stop-color="#c79bff" stop-opacity="0.22"/><stop offset="1" stop-color="#c79bff" stop-opacity="0"/></radialGradient>
<radialGradient id="armb"><stop offset="0" stop-color="#7fa8ff" stop-opacity="0.18"/><stop offset="1" stop-color="#7fa8ff" stop-opacity="0"/></radialGradient>
<radialGradient id="glow"><stop offset="0" stop-color="#ffffff" stop-opacity="0.9"/><stop offset="0.25" stop-color="#e6d6ff" stop-opacity="0.35"/><stop offset="1" stop-color="#e6d6ff" stop-opacity="0"/></radialGradient>
<linearGradient id="trail" x1="0" y1="0" x2="1" y2="0"><stop offset="0" stop-color="#ffffff" stop-opacity="0.95"/><stop offset="1" stop-color="#e0ccff" stop-opacity="0"/></linearGradient>
</defs>
<style>
.tw{animation:tw ease-in-out infinite alternate}
@keyframes tw{from{opacity:1}to{opacity:0.25}}
.a{animation-duration:3.2s}.b{animation-duration:4.6s}.c{animation-duration:6.1s}.d{animation-duration:7.7s}
.neb{animation:breathe 30s ease-in-out infinite alternate}
@keyframes breathe{from{opacity:0.7}to{opacity:1}}
.spin{animation:spin 900s linear infinite}
.spinr{animation:spin 1300s linear infinite reverse}
@keyframes spin{from{transform:rotate(0deg)}to{transform:rotate(360deg)}}
.pulse{animation:breathe 9s ease-in-out infinite alternate}
.shoot{opacity:0;animation:shoot 14s linear infinite}
.shoot2{opacity:0;animation:shoot 23s linear 8s infinite}
@keyframes shoot{0%{opacity:0;transform:translate(0,0)}1%{opacity:1}7%{opacity:0;transform:translate(-520px,260px)}100%{opacity:0;transform:translate(-520px,260px)}}
@media (max-aspect-ratio: 1/1){.gA{transform:translate(-330px,40px)}.gB{transform:translate(380px,-40px)}}
</style>
<rect width="1600" height="1000" fill="url(#sky)"/>
<g class="neb">
<ellipse cx="-125" cy="931" rx="232" ry="148" fill="url(#n1)" transform="rotate(-30 -125 931)"/>
<ellipse cx="-13" cy="862" rx="254" ry="108" fill="url(#n4)" transform="rotate(-30 -13 862)"/>
<ellipse cx="100" cy="831" rx="288" ry="174" fill="url(#n4)" transform="rotate(-30 100 831)"/>
<ellipse cx="165" cy="772" rx="372" ry="152" fill="url(#n4)" transform="rotate(-30 165 772)"/>
<ellipse cx="309" cy="821" rx="309" ry="112" fill="url(#n1)" transform="rotate(-30 309 821)"/>
<ellipse cx="418" cy="703" rx="269" ry="173" fill="url(#n4)" transform="rotate(-30 418 703)"/>
<ellipse cx="491" cy="653" rx="280" ry="149" fill="url(#n1)" transform="rotate(-30 491 653)"/>
<ellipse cx="580" cy="523" rx="299" ry="148" fill="url(#n1)" transform="rotate(-30 580 523)"/>
<ellipse cx="786" cy="523" rx="278" ry="122" fill="url(#n3)" transform="rotate(-30 786 523)"/>
<ellipse cx="808" cy="511" rx="312" ry="147" fill="url(#n1)" transform="rotate(-30 808 511)"/>
<ellipse cx="1011" cy="447" rx="317" ry="107" fill="url(#n2)" transform="rotate(-30 1011 447)"/>
<ellipse cx="1066" cy="312" rx="244" ry="144" fill="url(#n2)" transform="rotate(-30 1066 312)"/>
<ellipse cx="1106" cy="326" rx="312" ry="179" fill="url(#n4)" transform="rotate(-30 1106 326)"/>
<ellipse cx="1250" cy="273" rx="299" ry="172" fill="url(#n4)" transform="rotate(-30 1250 273)"/>
<ellipse cx="1322" cy="133" rx="296" ry="160" fill="url(#n2)" transform="rotate(-30 1322 133)"/>
<ellipse cx="1427" cy="161" rx="379" ry="174" fill="url(#n4)" transform="rotate(-30 1427 161)"/>
<ellipse cx="1564" cy="60" rx="224" ry="142" fill="url(#n2)" transform="rotate(-30 1564 60)"/>
<ellipse cx="1654" cy="-34" rx="255" ry="126" fill="url(#n1)" transform="rotate(-30 1654 -34)"/>
</g>
<circle cx="1077" cy="385" r="0.8" fill="#e9dcff" opacity="0.41"/>
<circle cx="1006" cy="347" r="1.0" fill="#dfe6ff" opacity="0.50"/>
<circle cx="358" cy="783" r="0.9" fill="#e9dcff" opacity="0.42"/>
<circle cx="960" cy="422" r="0.8" fill="#dfe6ff" opacity="0.46"/>
<circle cx="592" cy="794" r="1.1" fill="#f3d6ff" opacity="0.49"/>
<circle cx="117" cy="841" r="1.0" fill="#f3d6ff" opacity="0.39"/>
<circle cx="714" cy="670" r="0.5" fill="#e9dcff" opacity="0.59"/>
<circle cx="782" cy="630" r="0.6" fill="#f3d6ff" opacity="0.30"/>
<circle cx="70" cy="897" r="1.0" fill="#f3d6ff" opacity="0.38"/>
<circle cx="1153" cy="339" r="0.8" fill="#e9dcff" opacity="0.55"/>
<circle cx="1592" cy="47" r="0.6" fill="#e9dcff" opacity="0.51"/>
<circle cx="1103" cy="287" r="0.8" fill="#e9dcff" opacity="0.58"/>
<circle cx="915" cy="558" r="0.5" fill="#f3d6ff" opacity="0.35"/>
<circle cx="1195" cy="452" r="0.8" fill="#e9dcff" opacity="0.37"/>
<circle cx="204" cy="740" r="0.9" fill="#f3d6ff" opacity="0.53"/>
<circle cx="1369" cy="134" r="0.8" fill="#dfe6ff" opacity="0.51"/>
<circle cx="187" cy="746" r="1.0" fill="#f3d6ff" opacity="0.60"/>
<circle cx="1579" cy="108" r="0.6" fill="#e9dcff" opacity="0.37"/>
<circle cx="885" cy="506" r="0.5" fill="#f3d6ff" opacity="0.37"/>
<circle cx="1079" cy="326" r="0.7" fill="#f3d6ff" opacity="0.51"/>
<circle cx="826" cy="656" r="0.7" fill="#f3d6ff" opacity="0.39"/>
<circle cx="751" cy="550" r="0.6" fill="#e9dcff" opacity="0.26"/>
<circle cx="842" cy="440" r="0.9" fill="#f3d6ff" opacity="0.59"/>
<circle cx="1020" cy="436" r="0.6" fill="#e9dcff" opacity="0.53"/>
<circle cx="1320" cy="368" r="0.6" fill="#e9dcff" opacity="0.54"/>
<circle cx="279" cy="848" r="0.6" fill="#f3d6ff" opacity="0.36"/>
<circle cx="895" cy="431" r="0.9" fill="#dfe6ff" opacity="0.48"/>
<circle cx="1209" cy="181" r="1.0" fill="#e9dcff" opacity="0.44"/>
<circle cx="933" cy="488" r="0.6" fill="#e9dcff" opacity="0.52"/>
<circle cx="244" cy="928" r="0.6" fill="#e9dcff" opacity="0.36"/>
<circle cx="693" cy="432" r="0.6" fill="#f3d6ff" opacity="0.27"/>
<circle cx="282" cy="806" r="0.8" fill="#e9dcff" opacity="0.52"/>
<circle cx="1433" cy="145" r="0.8" fill="#f3d6ff" opacity="0.32"/>
<circle cx="245" cy="706" r="0.8" fill="#e9dcff" opacity="0.49"/>
<circle cx="1539" cy="115" r="0.8" fill="#e9dcff" opacity="0.54"/>
<circle cx="213" cy="912" r="0.5" fill="#e9dcff" opacity="0.40"/>
<circle cx="269" cy="817" r="1.0" fill="#f3d6ff" opacity="0.48"/>
<circle cx="558" cy="675" r="0.8" fill="#f3d6ff" opacity="0.58"/>
<circle cx="360" cy="618" r="1.0" fill="#e9dcff" opacity="0.50"/>
<circle cx="610" cy="682" r="0.7" fill="#dfe6ff" opacity="0.40"/>
<circle cx="1049" cy="585" r="1.0" fill="#e9dcff" opacity="0.28"/>
<circle cx="434" cy="689" r="1.0" fill="#dfe6ff" opacity="0.55"/>
<circle cx="1199" cy="302" r="0.8" fill="#f3d6ff" opacity="0.45"/>
<circle cx="1186" cy="323" r="0.9" fill="#dfe6ff" opacity="0.56"/>
<circle cx="420" cy="726" r="0.7" fill="#f3d6ff" opacity="0.55"/>
<circle cx="81" cy="845" r="0.7" fill="#f3d6ff" opacity="0.40"/>
<circle cx="1530" cy="84" r="0.9" fill="#e9dcff" opacity="0.59"/>
<circle cx="454" cy="908" r="0.9" fill="#f3d6ff" opacity="0.52"/>
<circle cx="369" cy="702" r="0.7" fill="#e9dcff" opacity="0.60"/>
<circle cx="67" cy="956" r="1.1" fill="#f3d6ff" opacity="0.42"/>
<circle cx="517" cy="570" r="0.7" fill="#f3d6ff" opacity="0.36"/>
<circle cx="295" cy="830" r="1.0" fill="#f3d6ff" opacity="0.47"/>
<circle cx="612" cy="615" r="0.6" fill="#e9dcff" opacity="0.47"/>
<circle cx="1458" cy="147" r="0.9" fill="#dfe6ff" opacity="0.55"/>
<circle cx="1094" cy="398" r="0.7" fill="#dfe6ff" opacity="0.31"/>
<circle cx="465" cy="724" r="0.7" fill="#f3d6ff" opacity="0.36"/>
<circle cx="6" cy="907" r="0.6" fill="#dfe6ff" opacity="0.38"/>
<circle cx="697" cy="523" r="0.8" fill="#e9dcff" opacity="0.28"/>
<circle cx="1441" cy="284" r="0.7" fill="#dfe6ff" opacity="0.36"/>
<circle cx="229" cy="703" r="1.0" fill="#f3d6ff" opacity="0.56"/>
<circle cx="1193" cy="145" r="0.9" fill="#dfe6ff" opacity="0.30"/>
<circle cx="1188" cy="265" r="1.0" fill="#f3d6ff" opacity="0.47"/>
<circle cx="1239" cy="232" r="0.8" fill="#f3d6ff" opacity="0.45"/>
<circle cx="1492" cy="213" r="1.0" fill="#f3d6ff" opacity="0.49"/>
<circle cx="1151" cy="336" r="0.6" fill="#dfe6ff" opacity="0.59"/>
<circle cx="552" cy="627" r="0.5" fill="#f3d6ff" opacity="0.49"/>
<circle cx="933" cy="513" r="0.9" fill="#f3d6ff" opacity="0.56"/>
<circle cx="813" cy="372" r="0.6" fill="#e9dcff" opacity="0.33"/>
<circle cx="911" cy="397" r="0.5" fill="#f3d6ff" opacity="0.35"/>
<circle cx="919" cy="512" r="0.9" fill="#f3d6ff" opacity="0.45"/>
<circle cx="1064" cy="216" r="0.7" fill="#f3d6ff" opacity="0.35"/>
<circle cx="768" cy="265" r="0.8" fill="#dfe6ff" opacity="0.59"/>
<circle cx="1467" cy="174" r="0.7" fill="#e9dcff" opacity="0.57"/>
<circle cx="1240" cy="342" r="0.9" fill="#f3d6ff" opacity="0.43"/>
<circle cx="1479" cy="70" r="1.0" fill="#dfe6ff" opacity="0.39"/>
<circle cx="309" cy="788" r="0.7" fill="#f3d6ff" opacity="0.30"/>
<circle cx="453" cy="799" r="0.5" fill="#dfe6ff" opacity="0.54"/>
<circle cx="236" cy="805" r="1.0" fill="#dfe6ff" opacity="0.34"/>
<circle cx="165" cy="842" r="1.0" fill="#dfe6ff" opacity="0.29"/>
<circle cx="1358" cy="373" r="0.6" fill="#dfe6ff" opacity="0.40"/>
<circle cx="490" cy="530" r="0.8" fill="#e9dcff" opacity="0.53"/>
<circle cx="1208" cy="270" r="0.8" fill="#f3d6ff" opacity="0.28"/>
<circle cx="1481" cy="146" r="0.6" fill="#dfe6ff" opacity="0.42"/>
<circle cx="1492" cy="88" r="0.7" fill="#dfe6ff" opacity="0.35"/>
<circle cx="1296" cy="261" r="0.9" fill="#dfe6ff" opacity="0.42"/>
<circle cx="1193" cy="421" r="0.5" fill="#f3d6ff" opacity="0.57"/>
<circle cx="829" cy="684" r="1.1" fill="#dfe6ff" opacity="0.40"/>
<circle cx="888" cy="507" r="0.8" fill="#dfe6ff" opacity="0.33"/>
<circle cx="204" cy="657" r="0.9" fill="#dfe6ff" opacity="0.38"/>
<circle cx="1259" cy="329" r="1.0" fill="#dfe6ff" opacity="0.35"/>
<circle cx="1072" cy="331" r="0.7" fill="#e9dcff" opacity="0.38"/>
<circle cx="996" cy="391" r="1.0" fill="#e9dcff" opacity="0.29"/>
<circle cx="679" cy="419" r="1.1" fill="#dfe6ff" opacity="0.25"/>
<circle cx="747" cy="534" r="1.0" fill="#dfe6ff" opacity="0.34"/>
<circle cx="155" cy="961" r="0.9" fill="#f3d6ff" opacity="0.50"/>
<circle cx="1452" cy="145" r="1.0" fill="#e9dcff" opacity="0.52"/>
<circle cx="426" cy="698" r="0.7" fill="#e9dcff" opacity="0.47"/>
<circle cx="717" cy="528" r="0.6" fill="#dfe6ff" opacity="0.43"/>
<circle cx="903" cy="460" r="0.9" fill="#e9dcff" opacity="0.44"/>
<circle cx="1416" cy="278" r="0.8" fill="#e9dcff" opacity="0.59"/>
<circle cx="1162" cy="320" r="0.8" fill="#f3d6ff" opacity="0.48"/>
<circle cx="58" cy="991" r="0.7" fill="#dfe6ff" opacity="0.26"/>
<circle cx="395" cy="717" r="0.6" fill="#dfe6ff" opacity="0.51"/>
<circle cx="871" cy="711" r="0.7" fill="#e9dcff" opacity="0.33"/>
<circle cx="303" cy="697" r="1.1" fill="#dfe6ff" opacity="0.46"/>
<circle cx="1328" cy="137" r="0.5" fill="#f3d6ff" opacity="0.30"/>
<circle cx="661" cy="826" r="0.6" fill="#e9dcff" opacity="0.50"/>
<circle cx="104" cy="845" r="0.7" fill="#e9dcff" opacity="0.60"/>
<circle cx="1551" cy="134" r="1.1" fill="#f3d6ff" opacity="0.41"/>
<circle cx="436" cy="520" r="1.1" fill="#dfe6ff" opacity="0.31"/>
<circle cx="175" cy="905" r="1.0" fill="#dfe6ff" opacity="0.28"/>
<circle cx="1205" cy="403" r="0.8" fill="#dfe6ff" opacity="0.38"/>
<circle cx="1364" cy="176" r="0.5" fill="#e9dcff" opacity="0.53"/>
<circle cx="22" cy="949" r="0.9" fill="#dfe6ff" opacity="0.35"/>
<circle cx="1575" cy="16" r="0.9" fill="#dfe6ff" opacity="0.57"/>
<circle cx="415" cy="582" r="1.0" fill="#e9dcff" opacity="0.26"/>
<circle cx="110" cy="789" r="1.1" fill="#dfe6ff" opacity="0.53"/>
<circle cx="1562" cy="61" r="0.8" fill="#e9dcff" opacity="0.53"/>
<circle cx="1294" cy="140" r="0.9" fill="#dfe6ff" opacity="0.55"/>
<circle cx="754" cy="426" r="0.8" fill="#dfe6ff" opacity="0.51"/>
<circle cx="366" cy="751" r="0.8" fill="#dfe6ff" opacity="0.31"/>
<circle cx="694" cy="591" r="0.9" fill="#e9dcff" opacity="0.28"/>
<circle cx="774" cy="412" r="0.6" fill="#dfe6ff" opacity="0.41"/>
<circle cx="1514" cy="230" r="1.0" fill="#e9dcff" opacity="0.52"/>
<circle cx="417" cy="764" r="0.7" fill="#dfe6ff" opacity="0.32"/>
<circle cx="347" cy="791" r="1.0" fill="#f3d6ff" opacity="0.32"/>
<circle cx="16" cy="982" r="0.8" fill="#f3d6ff" opacity="0.53"/>
<circle cx="1115" cy="351" r="0.8" fill="#e9dcff" opacity="0.54"/>
<circle cx="1024" cy="385" r="1.0" fill="#dfe6ff" opacity="0.46"/>
<circle cx="1290" cy="228" r="0.9" fill="#f3d6ff" opacity="0.47"/>
<circle cx="260" cy="806" r="0.6" fill="#dfe6ff" opacity="0.26"/>
<circle cx="1352" cy="197" r="1.0" fill="#dfe6ff" opacity="0.49"/>
<circle cx="211" cy="855" r="1.0" fill="#f3d6ff" opacity="0.42"/>
<circle cx="670" cy="468" r="0.6" fill="#f3d6ff" opacity="0.28"/>
<circle cx="165" cy="741" r="0.7" fill="#dfe6ff" opacity="0.40"/>
<circle cx="789" cy="599" r="1.0" fill="#f3d6ff" opacity="0.32"/>
<circle cx="1213" cy="290" r="1.0" fill="#dfe6ff" opacity="0.29"/>
<circle cx="1310" cy="258" r="0.6" fill="#dfe6ff" opacity="0.28"/>
<circle cx="951" cy="456" r="0.6" fill="#dfe6ff" opacity="0.31"/>
<circle cx="286" cy="849" r="1.0" fill="#e9dcff" opacity="0.36"/>
<circle cx="1588" cy="227" r="0.7" fill="#f3d6ff" opacity="0.57"/>
<circle cx="696" cy="541" r="1.0" fill="#e9dcff" opacity="0.47"/>
<circle cx="1357" cy="77" r="0.6" fill="#dfe6ff" opacity="0.31"/>
<circle cx="210" cy="831" r="0.7" fill="#e9dcff" opacity="0.30"/>
<circle cx="1561" cy="25" r="0.9" fill="#dfe6ff" opacity="0.29"/>
<circle cx="866" cy="368" r="0.7" fill="#dfe6ff" opacity="0.36"/>
<circle cx="286" cy="793" r="0.8" fill="#e9dcff" opacity="0.26"/>
<circle cx="952" cy="390" r="1.0" fill="#dfe6ff" opacity="0.54"/>
<circle cx="1333" cy="220" r="0.7" fill="#dfe6ff" opacity="0.28"/>
<circle cx="671" cy="554" r="0.9" fill="#e9dcff" opacity="0.57"/>
<circle cx="458" cy="645" r="1.0" fill="#dfe6ff" opacity="0.48"/>
<circle cx="1343" cy="232" r="0.9" fill="#f3d6ff" opacity="0.54"/>
<circle cx="347" cy="783" r="1.1" fill="#e9dcff" opacity="0.49"/>
<circle cx="1227" cy="446" r="0.9" fill="#dfe6ff" opacity="0.31"/>
<circle cx="1489" cy="274" r="0.6" fill="#f3d6ff" opacity="0.59"/>
<circle cx="666" cy="455" r="0.6" fill="#dfe6ff" opacity="0.26"/>
<circle cx="333" cy="974" r="0.9" fill="#dfe6ff" opacity="0.31"/>
<circle cx="1391" cy="296" r="0.9" fill="#dfe6ff" opacity="0.59"/>
<circle cx="587" cy="528" r="1.0" fill="#dfe6ff" opacity="0.60"/>
<circle cx="914" cy="469" r="0.7" fill="#dfe6ff" opacity="0.45"/>
<circle cx="557" cy="543" r="0.6" fill="#f3d6ff" opacity="0.59"/>
<circle cx="361" cy="688" r="1.1" fill="#f3d6ff" opacity="0.57"/>
<circle cx="269" cy="882" r="0.8" fill="#dfe6ff" opacity="0.56"/>
<circle cx="155" cy="976" r="0.5" fill="#e9dcff" opacity="0.45"/>
<circle cx="343" cy="673" r="0.7" fill="#dfe6ff" opacity="0.46"/>
<circle cx="199" cy="716" r="0.6" fill="#e9dcff" opacity="0.50"/>
<circle cx="755" cy="566" r="0.9" fill="#dfe6ff" opacity="0.39"/>
<circle cx="498" cy="735" r="0.8" fill="#dfe6ff" opacity="0.46"/>
<circle cx="859" cy="363" r="0.8" fill="#e9dcff" opacity="0.57"/>
<circle cx="466" cy="805" r="0.5" fill="#f3d6ff" opacity="0.48"/>
<circle cx="167" cy="844" r="0.9" fill="#f3d6ff" opacity="0.47"/>
<circle cx="1397" cy="264" r="0.7" fill="#e9dcff" opacity="0.60"/>
<circle cx="1099" cy="299" r="0.7" fill="#dfe6ff" opacity="0.51"/>
<circle cx="733" cy="440" r="0.6" fill="#e9dcff" opacity="0.34"/>
<circle cx="1187" cy="487" r="1.1" fill="#dfe6ff" opacity="0.50"/>
<circle cx="293" cy="694" r="1.0" fill="#f3d6ff" opacity="0.59"/>
<circle cx="594" cy="618" r="0.6" fill="#f3d6ff" opacity="0.26"/>
<circle cx="381" cy="870" r="1.1" fill="#f3d6ff" opacity="0.57"/>
<circle cx="157" cy="870" r="0.7" fill="#f3d6ff" opacity="0.57"/>
<circle cx="740" cy="525" r="0.5" fill="#f3d6ff" opacity="0.33"/>
<circle cx="1513" cy="48" r="0.9" fill="#f3d6ff" opacity="0.57"/>
<circle cx="200" cy="848" r="1.1" fill="#dfe6ff" opacity="0.59"/>
<circle cx="1207" cy="316" r="0.9" fill="#e9dcff" opacity="0.49"/>
<circle cx="1330" cy="318" r="0.7" fill="#f3d6ff" opacity="0.56"/>
<circle cx="146" cy="778" r="1.1" fill="#e9dcff" opacity="0.34"/>
<circle cx="469" cy="829" r="1.0" fill="#f3d6ff" opacity="0.28"/>
<circle cx="1187" cy="187" r="0.6" fill="#f3d6ff" opacity="0.32"/>
<circle cx="459" cy="682" r="0.7" fill="#dfe6ff" opacity="0.27"/>
<circle cx="1391" cy="173" r="0.9" fill="#dfe6ff" opacity="0.55"/>
<circle cx="1099" cy="403" r="0.8" fill="#e9dcff" opacity="0.37"/>
<circle cx="1111" cy="290" r="1.0" fill="#e9dcff" opacity="0.45"/>
<circle cx="322" cy="745" r="0.7" fill="#e9dcff" opacity="0.25"/>
<circle cx="632" cy="517" r="0.6" fill="#dfe6ff" opacity="0.46"/>
<circle cx="1512" cy="50" r="0.6" fill="#e9dcff" opacity="0.58"/>
<circle cx="418" cy="931" r="1.0" fill="#dfe6ff" opacity="0.53"/>
<circle class="tw d" style="animation-delay:-7.1s" cx="1115" cy="787" r="1.4" fill="#e6e0ff" opacity="0.68"/>
<circle class="tw d" style="animation-delay:-7.2s" cx="1192" cy="422" r="1.4" fill="#ffffff" opacity="0.69"/>
<circle class="tw a" style="animation-delay:-2.8s" cx="802" cy="379" r="1.4" fill="#ffffff" opacity="0.97"/>
<circle cx="523" cy="155" r="1.7" fill="#fff3d6" opacity="0.83"/>
<circle class="tw d" style="animation-delay:-5.1s" cx="271" cy="439" r="1.7" fill="#e6e0ff" opacity="0.79"/>
<circle cx="1115" cy="508" r="0.9" fill="#e6e0ff" opacity="0.88"/>
<circle cx="988" cy="723" r="0.8" fill="#ffd9f0" opacity="0.66"/>
<circle cx="257" cy="328" r="0.8" fill="#e6e0ff" opacity="0.99"/>
<circle cx="163" cy="962" r="0.6" fill="#ffffff" opacity="0.69"/>
<circle cx="1272" cy="733" r="1.0" fill="#e6e0ff" opacity="0.60"/>
<circle class="tw d" style="animation-delay:-5.5s" cx="171" cy="206" r="1.0" fill="#fff3d6" opacity="0.52"/>
<circle cx="801" cy="632" r="1.0" fill="#ffffff" opacity="0.57"/>
<circle cx="648" cy="741" r="1.7" fill="#fff3d6" opacity="0.85"/>
<circle cx="1036" cy="846" r="1.4" fill="#ffd9f0" opacity="0.83"/>
<circle class="tw d" style="animation-delay:-2.5s" cx="1027" cy="584" r="0.8" fill="#ffd9f0" opacity="0.59"/>
<circle cx="1005" cy="98" r="1.0" fill="#ffffff" opacity="0.89"/>
<circle cx="1007" cy="250" r="1.0" fill="#fff3d6" opacity="0.73"/>
<circle class="tw a" style="animation-delay:-3.1s" cx="655" cy="675" r="1.7" fill="#ffffff" opacity="0.95"/>
<circle class="tw b" style="animation-delay:-4.2s" cx="784" cy="975" r="0.6" fill="#e6e0ff" opacity="0.77"/>
<circle cx="162" cy="575" r="1.2" fill="#ffffff" opacity="0.86"/>
<circle cx="1023" cy="829" r="1.2" fill="#e6e0ff" opacity="0.71"/>
<circle class="tw c" style="animation-delay:-5.1s" cx="336" cy="684" r="1.0" fill="#d9d0ff" opacity="0.88"/>
<circle cx="404" cy="382" r="0.6" fill="#ffffff" opacity="0.54"/>
<circle class="tw d" style="animation-delay:-7.5s" cx="1006" cy="675" r="1.2" fill="#e6e0ff" opacity="0.55"/>
<circle class="tw a" style="animation-delay:-6.5s" cx="843" cy="219" r="1.7" fill="#fff3d6" opacity="0.73"/>
<circle cx="1015" cy="469" r="1.2" fill="#ffd9f0" opacity="0.61"/>
<circle class="tw b" style="animation-delay:-6.2s" cx="565" cy="639" r="1.7" fill="#fff3d6" opacity="0.73"/>
<circle cx="751" cy="784" r="0.8" fill="#e6e0ff" opacity="0.85"/>
<circle cx="1573" cy="679" r="1.0" fill="#ffffff" opacity="0.90"/>
<circle cx="573" cy="654" r="0.9" fill="#fff3d6" opacity="0.74"/>
<circle class="tw c" style="animation-delay:-6.3s" cx="137" cy="897" r="0.8" fill="#e6e0ff" opacity="0.93"/>
<circle class="tw a" style="animation-delay:-5.2s" cx="225" cy="831" r="1.4" fill="#d9d0ff" opacity="0.51"/>
<circle cx="400" cy="102" r="0.8" fill="#ffffff" opacity="0.59"/>
<circle cx="1256" cy="209" r="1.0" fill="#d9d0ff" opacity="0.58"/>
<circle cx="973" cy="781" r="1.4" fill="#d9d0ff" opacity="0.89"/>
<circle class="tw a" style="animation-delay:-4.4s" cx="316" cy="693" r="1.2" fill="#ffffff" opacity="0.87"/>
<circle class="tw d" style="animation-delay:-7.2s" cx="423" cy="234" r="0.8" fill="#fff3d6" opacity="0.75"/>
<circle cx="1121" cy="247" r="0.8" fill="#d9d0ff" opacity="0.80"/>
<circle class="tw d" style="animation-delay:-3.0s" cx="257" cy="321" r="1.4" fill="#d9d0ff" opacity="0.75"/>
<circle cx="670" cy="961" r="0.6" fill="#ffffff" opacity="0.82"/>
<circle class="tw a" style="animation-delay:-4.1s" cx="46" cy="610" r="1.4" fill="#ffd9f0" opacity="0.97"/>
<circle cx="775" cy="898" r="0.6" fill="#ffffff" opacity="0.86"/>
<circle cx="542" cy="862" r="0.9" fill="#e6e0ff" opacity="0.74"/>
<circle cx="1233" cy="211" r="1.0" fill="#e6e0ff" opacity="0.71"/>
<circle cx="1323" cy="293" r="1.7" fill="#fff3d6" opacity="0.70"/>
<circle class="tw b" style="animation-delay:-2.5s" cx="435" cy="506" r="0.8" fill="#ffd9f0" opacity="0.75"/>
<circle class="tw d" style="animation-delay:-4.4s" cx="479" cy="586" r="1.4" fill="#ffffff" opacity="0.89"/>
<circle cx="80" cy="300" r="0.6" fill="#ffffff" opacity="0.59"/>
<circle cx="974" cy="658" r="1.7" fill="#d9d0ff" opacity="0.95"/>
<circle cx="987" cy="627" r="1.4" fill="#ffd9f0" opacity="0.80"/>
<circle class="tw b" style="animation-delay:-7.0s" cx="340" cy="667" r="1.0" fill="#ffd9f0" opacity="0.88"/>
<circle cx="675" cy="101" r="1.4" fill="#ffffff" opacity="0.68"/>
<circle class="tw a" style="animation-delay:-3.4s" cx="1258" cy="562" r="0.9" fill="#e6e0ff" opacity="0.59"/>
<circle class="tw a" style="animation-delay:-6.2s" cx="1027" cy="934" r="0.6" fill="#fff3d6" opacity="0.78"/>
<circle cx="674" cy="696" r="1.0" fill="#fff3d6" opacity="0.53"/>
<circle class="tw a" style="animation-delay:-0.7s" cx="950" cy="993" r="1.4" fill="#ffffff" opacity="0.74"/>
<circle class="tw a" style="animation-delay:-7.9s" cx="756" cy="896" r="1.4" fill="#ffffff" opacity="0.71"/>
<circle class="tw b" style="animation-delay:-3.6s" cx="1374" cy="218" r="0.6" fill="#ffffff" opacity="0.74"/>
<circle cx="1191" cy="923" r="0.9" fill="#ffd9f0" opacity="0.86"/>
<circle cx="1168" cy="84" r="1.4" fill="#d9d0ff" opacity="0.85"/>
<circle class="tw a" style="animation-delay:-3.1s" cx="1492" cy="254" r="0.6" fill="#ffd9f0" opacity="0.52"/>
<circle class="tw d" style="animation-delay:-3.8s" cx="500" cy="600" r="1.7" fill="#fff3d6" opacity="0.80"/>
<circle class="tw d" style="animation-delay:-3.8s" cx="266" cy="966" r="0.6" fill="#e6e0ff" opacity="0.98"/>
<circle class="tw c" style="animation-delay:-7.0s" cx="1245" cy="453" r="0.9" fill="#d9d0ff" opacity="0.67"/>
<circle cx="1161" cy="16" r="0.8" fill="#d9d0ff" opacity="0.92"/>
<circle cx="1562" cy="246" r="1.0" fill="#ffd9f0" opacity="0.69"/>
<circle class="tw b" style="animation-delay:-4.7s" cx="375" cy="451" r="1.4" fill="#ffffff" opacity="0.66"/>
<circle cx="1306" cy="887" r="0.6" fill="#e6e0ff" opacity="0.92"/>
<circle cx="1388" cy="572" r="0.9" fill="#d9d0ff" opacity="0.84"/>
<circle class="tw b" style="animation-delay:-2.5s" cx="555" cy="85" r="1.2" fill="#fff3d6" opacity="0.90"/>
<circle cx="92" cy="395" r="1.4" fill="#ffffff" opacity="0.96"/>
<circle class="tw a" style="animation-delay:-1.9s" cx="15" cy="385" r="1.2" fill="#ffffff" opacity="0.77"/>
<circle cx="927" cy="897" r="1.7" fill="#d9d0ff" opacity="0.66"/>
<circle class="tw c" style="animation-delay:-3.2s" cx="323" cy="213" r="0.6" fill="#ffffff" opacity="0.90"/>
<circle class="tw d" style="animation-delay:-6.3s" cx="828" cy="149" r="0.6" fill="#fff3d6" opacity="0.69"/>
<circle class="tw a" style="animation-delay:-1.6s" cx="250" cy="597" r="0.9" fill="#e6e0ff" opacity="0.76"/>
<circle cx="1393" cy="565" r="1.2" fill="#d9d0ff" opacity="0.61"/>
<circle cx="448" cy="97" r="1.0" fill="#d9d0ff" opacity="0.91"/>
<circle class="tw a" style="animation-delay:-4.5s" cx="406" cy="38" r="0.8" fill="#ffffff" opacity="0.69"/>
<circle cx="1393" cy="458" r="1.7" fill="#ffffff" opacity="0.93"/>
<circle class="tw a" style="animation-delay:-7.7s" cx="1475" cy="706" r="0.6" fill="#e6e0ff" opacity="0.66"/>
<circle class="tw b" style="animation-delay:-1.4s" cx="1072" cy="393" r="1.0" fill="#ffffff" opacity="0.69"/>
<circle cx="1507" cy="941" r="0.6" fill="#d9d0ff" opacity="0.95"/>
<circle cx="75" cy="786" r="1.4" fill="#ffd9f0" opacity="0.82"/>
<circle cx="89" cy="145" r="1.7" fill="#ffffff" opacity="0.97"/>
<circle class="tw c" style="animation-delay:-3.1s" cx="478" cy="591" r="1.7" fill="#ffd9f0" opacity="0.55"/>
<circle cx="600" cy="380" r="1.0" fill="#ffffff" opacity="0.90"/>
<circle cx="1427" cy="468" r="0.8" fill="#ffffff" opacity="0.58"/>
<circle class="tw a" style="animation-delay:-7.4s" cx="124" cy="619" r="0.9" fill="#ffd9f0" opacity="0.57"/>
<circle class="tw b" style="animation-delay:-3.8s" cx="616" cy="22" r="0.6" fill="#fff3d6" opacity="0.99"/>
<circle cx="1005" cy="143" r="0.8" fill="#ffd9f0" opacity="0.53"/>
<circle class="tw b" style="animation-delay:-0.2s" cx="885" cy="145" r="1.7" fill="#ffffff" opacity="0.63"/>
<circle class="tw d" style="animation-delay:-7.2s" cx="914" cy="297" r="1.7" fill="#ffffff" opacity="0.63"/>
<circle cx="183" cy="979" r="0.6" fill="#ffd9f0" opacity="0.95"/>
<circle class="tw c" style="animation-delay:-3.5s" cx="338" cy="477" r="0.9" fill="#ffffff" opacity="0.63"/>
<circle class="tw b" style="animation-delay:-0.5s" cx="418" cy="239" r="0.8" fill="#ffffff" opacity="0.70"/>
<circle cx="1162" cy="294" r="1.4" fill="#ffffff" opacity="0.72"/>
<circle class="tw a" style="animation-delay:-7.3s" cx="817" cy="443" r="1.7" fill="#d9d0ff" opacity="0.64"/>
<circle class="tw b" style="animation-delay:-1.6s" cx="349" cy="571" r="0.8" fill="#ffffff" opacity="0.76"/>
<circle class="tw b" style="animation-delay:-1.1s" cx="127" cy="87" r="1.2" fill="#ffd9f0" opacity="0.75"/>
<circle class="tw d" style="animation-delay:-6.7s" cx="1072" cy="628" r="0.8" fill="#d9d0ff" opacity="0.65"/>
<circle cx="1466" cy="518" r="0.9" fill="#e6e0ff" opacity="0.64"/>
<circle cx="1513" cy="90" r="1.0" fill="#fff3d6" opacity="0.57"/>
<circle class="tw a" style="animation-delay:-2.8s" cx="397" cy="563" r="0.9" fill="#ffffff" opacity="0.58"/>
<circle class="tw c" style="animation-delay:-6.2s" cx="1491" cy="969" r="0.6" fill="#ffffff" opacity="0.68"/>
<circle cx="1389" cy="576" r="0.6" fill="#e6e0ff" opacity="0.94"/>
<circle class="tw a" style="animation-delay:-1.8s" cx="792" cy="513" r="1.2" fill="#d9d0ff" opacity="0.57"/>
<circle class="tw a" style="animation-delay:-7.4s" cx="292" cy="103" r="0.9" fill="#d9d0ff" opacity="0.91"/>
<circle cx="1182" cy="261" r="1.7" fill="#d9d0ff" opacity="0.82"/>
<circle class="tw a" style="animation-delay:-3.7s" cx="381" cy="444" r="0.9" fill="#ffffff" opacity="0.86"/>
<circle cx="937" cy="762" r="0.6" fill="#ffffff" opacity="0.56"/>
<circle cx="867" cy="227" r="0.8" fill="#ffffff" opacity="0.83"/>
<circle class="tw a" style="animation-delay:-3.2s" cx="635" cy="948" r="0.6" fill="#ffd9f0" opacity="0.69"/>
<circle class="tw d" style="animation-delay:-6.7s" cx="1506" cy="777" r="0.9" fill="#fff3d6" opacity="0.62"/>
<circle class="tw b" style="animation-delay:-7.7s" cx="903" cy="986" r="0.9" fill="#fff3d6" opacity="0.92"/>
<circle class="tw b" style="animation-delay:-0.6s" cx="1495" cy="249" r="1.0" fill="#ffd9f0" opacity="0.82"/>
<circle cx="693" cy="505" r="0.6" fill="#ffffff" opacity="0.57"/>
<circle cx="1243" cy="937" r="1.4" fill="#ffffff" opacity="0.90"/>
<circle cx="1415" cy="34" r="1.4" fill="#d9d0ff" opacity="0.63"/>
<circle class="tw a" style="animation-delay:-3.5s" cx="437" cy="542" r="0.6" fill="#d9d0ff" opacity="0.55"/>
<circle class="tw c" style="animation-delay:-0.7s" cx="1521" cy="288" r="0.9" fill="#e6e0ff" opacity="0.82"/>
<circle cx="944" cy="932" r="1.0" fill="#ffffff" opacity="0.76"/>
<circle cx="1465" cy="577" r="0.9" fill="#ffffff" opacity="0.87"/>
<circle class="tw c" style="animation-delay:-3.7s" cx="459" cy="454" r="1.4" fill="#d9d0ff" opacity="0.61"/>
<circle class="tw b" style="animation-delay:-4.1s" cx="877" cy="613" r="1.0" fill="#e6e0ff" opacity="0.52"/>
<circle cx="613" cy="586" r="0.6" fill="#e6e0ff" opacity="0.58"/>
<circle class="tw a" style="animation-delay:-6.2s" cx="518" cy="325" r="0.9" fill="#e6e0ff" opacity="0.94"/>
<circle class="tw d" style="animation-delay:-6.7s" cx="254" cy="67" r="1.7" fill="#e6e0ff" opacity="0.72"/>
<circle cx="567" cy="763" r="1.2" fill="#ffffff" opacity="0.99"/>
<circle class="tw c" style="animation-delay:-6.6s" cx="1494" cy="417" r="1.4" fill="#e6e0ff" opacity="0.57"/>
<circle cx="828" cy="739" r="1.4" fill="#fff3d6" opacity="0.63"/>
<circle cx="1011" cy="704" r="1.0" fill="#ffffff" opacity="0.50"/>
<circle cx="937" cy="498" r="1.2" fill="#ffffff" opacity="0.71"/>
<circle class="tw c" style="animation-delay:-2.3s" cx="1396" cy="607" r="1.0" fill="#fff3d6" opacity="0.85"/>
<circle cx="625" cy="555" r="1.0" fill="#ffd9f0" opacity="0.66"/>
<circle class="tw b" style="animation-delay:-3.5s" cx="1359" cy="500" r="1.0" fill="#e6e0ff" opacity="0.59"/>
<circle cx="603" cy="232" r="1.7" fill="#e6e0ff" opacity="0.66"/>
<circle cx="1341" cy="959" r="0.8" fill="#fff3d6" opacity="0.95"/>
<circle cx="41" cy="257" r="1.0" fill="#e6e0ff" opacity="0.96"/>
<circle class="tw d" style="animation-delay:-2.9s" cx="862" cy="998" r="1.2" fill="#d9d0ff" opacity="0.86"/>
<circle class="tw d" style="animation-delay:-3.0s" cx="952" cy="351" r="0.6" fill="#ffd9f0" opacity="0.53"/>
<circle cx="641" cy="561" r="1.2" fill="#ffffff" opacity="0.94"/>
<circle cx="779" cy="440" r="1.2" fill="#d9d0ff" opacity="0.67"/>
<circle cx="1305" cy="171" r="0.9" fill="#e6e0ff" opacity="0.99"/>
<circle cx="820" cy="111" r="0.9" fill="#ffd9f0" opacity="0.67"/>
<circle cx="814" cy="971" r="1.4" fill="#ffffff" opacity="0.76"/>
<circle cx="332" cy="893" r="1.0" fill="#ffffff" opacity="0.53"/>
<circle cx="171" cy="570" r="1.4" fill="#ffd9f0" opacity="0.86"/>
<circle cx="17" cy="3" r="1.4" fill="#ffd9f0" opacity="0.78"/>
<circle class="tw c" style="animation-delay:-7.0s" cx="636" cy="98" r="0.6" fill="#ffd9f0" opacity="0.51"/>
<circle cx="1433" cy="514" r="0.8" fill="#d9d0ff" opacity="0.60"/>
<circle class="tw d" style="animation-delay:-6.6s" cx="233" cy="518" r="1.2" fill="#ffffff" opacity="0.51"/>
<circle cx="981" cy="807" r="0.6" fill="#ffd9f0" opacity="0.51"/>
<circle class="tw a" style="animation-delay:-6.9s" cx="517" cy="715" r="0.9" fill="#e6e0ff" opacity="0.58"/>
<circle class="tw b" style="animation-delay:-7.1s" cx="1516" cy="63" r="0.8" fill="#fff3d6" opacity="0.81"/>
<circle class="tw a" style="animation-delay:-1.3s" cx="932" cy="960" r="1.0" fill="#ffffff" opacity="0.81"/>
<circle cx="939" cy="174" r="0.6" fill="#fff3d6" opacity="0.65"/>
<circle cx="1536" cy="496" r="0.6" fill="#ffffff" opacity="0.84"/>
<circle cx="936" cy="413" r="1.0" fill="#ffd9f0" opacity="0.74"/>
<circle cx="389" cy="173" r="0.9" fill="#fff3d6" opacity="0.59"/>
<circle class="tw d" style="animation-delay:-5.2s" cx="465" cy="562" r="0.6" fill="#e6e0ff" opacity="0.77"/>
<circle class="tw c" style="animation-delay:-2.8s" cx="1538" cy="422" r="0.9" fill="#d9d0ff" opacity="0.62"/>
<circle class="tw b" style="animation-delay:-0.7s" cx="697" cy="279" r="0.6" fill="#e6e0ff" opacity="0.90"/>
<circle cx="431" cy="835" r="0.8" fill="#d9d0ff" opacity="0.72"/>
<circle class="tw b" style="animation-delay:-2.4s" cx="1288" cy="159" r="0.9" fill="#ffffff" opacity="0.86"/>
<circle cx="762" cy="204" r="1.7" fill="#fff3d6" opacity="0.84"/>
<circle cx="1597" cy="596" r="1.0" fill="#d9d0ff" opacity="0.99"/>
<circle class="tw c" style="animation-delay:-5.9s" cx="647" cy="510" r="0.8" fill="#ffffff" opacity="0.84"/>
<circle class="tw a" style="animation-delay:-5.6s" cx="1224" cy="29" r="1.4" fill="#d9d0ff" opacity="0.57"/>
<circle class="tw c" style="animation-delay:-6.4s" cx="1242" cy="232" r="0.8" fill="#ffd9f0" opacity="0.95"/>
<circle class="tw d" style="animation-delay:-2.3s" cx="1214" cy="193" r="1.4" fill="#e6e0ff" opacity="0.54"/>
<circle cx="645" cy="909" r="1.7" fill="#ffd9f0" opacity="0.94"/>
<circle cx="211" cy="277" r="0.6" fill="#e6e0ff" opacity="0.84"/>
<circle class="tw d" style="animation-delay:-2.8s" cx="562" cy="413" r="1.4" fill="#ffd9f0" opacity="0.85"/>
<circle cx="1006" cy="182" r="0.6" fill="#e6e0ff" opacity="0.96"/>
<circle class="tw c" style="animation-delay:-1.2s" cx="1140" cy="40" r="0.6" fill="#d9d0ff" opacity="0.58"/>
<circle cx="1181" cy="552" r="1.4" fill="#ffd9f0" opacity="0.97"/>
<circle cx="364" cy="498" r="1.2" fill="#e6e0ff" opacity="0.96"/>
<circle class="tw a" style="animation-delay:-7.8s" cx="920" cy="936" r="0.6" fill="#ffd9f0" opacity="0.64"/>
<circle class="tw a" style="animation-delay:-3.3s" cx="1090" cy="37" r="0.9" fill="#ffffff" opacity="0.89"/>
<circle class="tw d" style="animation-delay:-3.5s" cx="1190" cy="998" r="1.2" fill="#ffffff" opacity="0.64"/>
<circle cx="544" cy="503" r="1.4" fill="#ffd9f0" opacity="0.81"/>
<circle cx="1083" cy="206" r="1.4" fill="#d9d0ff" opacity="0.92"/>
<circle cx="783" cy="189" r="1.4" fill="#d9d0ff" opacity="0.63"/>
<circle class="tw c" style="animation-delay:-2.8s" cx="1551" cy="638" r="1.2" fill="#e6e0ff" opacity="0.62"/>
<circle cx="148" cy="637" r="0.8" fill="#ffffff" opacity="0.84"/>
<circle class="tw c" style="animation-delay:-5.6s" cx="772" cy="706" r="0.6" fill="#d9d0ff" opacity="0.85"/>
<circle cx="213" cy="708" r="1.2" fill="#d9d0ff" opacity="0.62"/>
<circle cx="189" cy="425" r="0.8" fill="#ffd9f0" opacity="0.83"/>
<circle class="tw c" style="animation-delay:-3.9s" cx="738" cy="766" r="1.7" fill="#ffffff" opacity="0.56"/>
<circle class="tw a" style="animation-delay:-1.3s" cx="69" cy="896" r="0.9" fill="#ffffff" opacity="0.56"/>
<circle class="tw d" style="animation-delay:-7.9s" cx="712" cy="569" r="0.9" fill="#ffffff" opacity="0.78"/>
<circle cx="1201" cy="84" r="1.4" fill="#e6e0ff" opacity="0.99"/>
<circle cx="174" cy="489" r="1.0" fill="#fff3d6" opacity="0.59"/>
<circle cx="13" cy="920" r="1.4" fill="#e6e0ff" opacity="0.81"/>
<circle class="tw d" style="animation-delay:-6.7s" cx="1044" cy="251" r="0.8" fill="#ffffff" opacity="0.57"/>
<circle cx="474" cy="186" r="1.4" fill="#d9d0ff" opacity="0.92"/>
<circle class="tw b" style="animation-delay:-5.2s" cx="270" cy="785" r="1.7" fill="#e6e0ff" opacity="0.87"/>
<circle cx="570" cy="230" r="0.8" fill="#d9d0ff" opacity="0.96"/>
<circle cx="406" cy="58" r="0.6" fill="#d9d0ff" opacity="0.90"/>
<circle cx="1600" cy="403" r="0.6" fill="#ffffff" opacity="0.75"/>
<circle cx="252" cy="300" r="1.2" fill="#ffd9f0" opacity="0.54"/>
<circle cx="262" cy="443" r="1.0" fill="#ffffff" opacity="0.99"/>
<circle cx="767" cy="218" r="0.9" fill="#ffffff" opacity="0.52"/>
<circle class="tw d" style="animation-delay:-7.1s" cx="1334" cy="511" r="0.8" fill="#e6e0ff" opacity="0.54"/>
<circle class="tw c" style="animation-delay:-0.0s" cx="100" cy="9" r="1.7" fill="#ffffff" opacity="0.95"/>
<circle cx="1287" cy="675" r="1.2" fill="#ffffff" opacity="0.73"/>
<circle cx="827" cy="428" r="1.2" fill="#ffd9f0" opacity="0.93"/>
<circle class="tw c" style="animation-delay:-4.5s" cx="1539" cy="620" r="1.7" fill="#ffffff" opacity="0.86"/>
<circle cx="674" cy="369" r="1.4" fill="#ffd9f0" opacity="0.57"/>
<circle cx="849" cy="634" r="1.7" fill="#ffffff" opacity="0.61"/>
<circle cx="1106" cy="147" r="1.2" fill="#e6e0ff" opacity="0.78"/>
<circle class="tw b" style="animation-delay:-4.4s" cx="576" cy="240" r="1.0" fill="#fff3d6" opacity="0.63"/>
<circle cx="180" cy="862" r="0.9" fill="#ffd9f0" opacity="0.55"/>
<circle cx="402" cy="489" r="1.2" fill="#fff3d6" opacity="0.61"/>
<circle class="tw a" style="animation-delay:-6.4s" cx="181" cy="513" r="1.2" fill="#d9d0ff" opacity="0.54"/>
<circle cx="215" cy="503" r="1.2" fill="#ffd9f0" opacity="0.92"/>
<circle cx="1003" cy="960" r="1.2" fill="#ffffff" opacity="0.73"/>
<circle class="tw c" style="animation-delay:-6.2s" cx="871" cy="968" r="0.8" fill="#d9d0ff" opacity="0.74"/>
<circle cx="92" cy="237" r="0.9" fill="#ffffff" opacity="0.51"/>
<circle cx="341" cy="300" r="1.4" fill="#ffffff" opacity="0.71"/>
<circle cx="994" cy="872" r="1.2" fill="#ffffff" opacity="0.96"/>
<circle cx="269" cy="745" r="0.9" fill="#ffd9f0" opacity="0.84"/>
<circle cx="196" cy="373" r="1.4" fill="#d9d0ff" opacity="0.97"/>
<circle cx="70" cy="604" r="0.6" fill="#e6e0ff" opacity="0.77"/>
<circle class="tw d" style="animation-delay:-0.2s" cx="181" cy="925" r="1.4" fill="#ffffff" opacity="0.63"/>
<circle class="tw c" style="animation-delay:-1.5s" cx="1582" cy="440" r="1.7" fill="#ffffff" opacity="0.74"/>
<circle class="tw c" style="animation-delay:-4.3s" cx="887" cy="290" r="1.4" fill="#ffd9f0" opacity="0.69"/>
<circle cx="1103" cy="808" r="1.0" fill="#ffffff" opacity="0.51"/>
<circle cx="779" cy="484" r="0.6" fill="#ffffff" opacity="0.54"/>
<circle cx="1031" cy="600" r="1.7" fill="#fff3d6" opacity="0.98"/>
<circle class="tw b" style="animation-delay:-2.5s" cx="718" cy="229" r="1.2" fill="#d9d0ff" opacity="0.54"/>
<circle cx="209" cy="625" r="0.8" fill="#ffffff" opacity="0.91"/>
<circle cx="530" cy="468" r="0.9" fill="#e6e0ff" opacity="0.50"/>
<circle class="tw b" style="animation-delay:-2.2s" cx="534" cy="21" r="1.0" fill="#d9d0ff" opacity="0.52"/>
<circle cx="437" cy="500" r="0.9" fill="#e6e0ff" opacity="0.78"/>
<circle class="tw b" style="animation-delay:-6.2s" cx="1531" cy="992" r="0.6" fill="#d9d0ff" opacity="0.95"/>
<circle class="tw b" style="animation-delay:-5.5s" cx="1013" cy="635" r="0.9" fill="#e6e0ff" opacity="0.90"/>
<circle cx="486" cy="763" r="1.4" fill="#e6e0ff" opacity="0.75"/>
<circle class="tw c" style="animation-delay:-7.1s" cx="561" cy="551" r="1.0" fill="#e6e0ff" opacity="0.53"/>
<circle class="tw b" style="animation-delay:-0.1s" cx="1252" cy="504" r="0.8" fill="#ffffff" opacity="1.00"/>
<circle class="tw b" style="animation-delay:-4.7s" cx="1394" cy="453" r="1.0" fill="#fff3d6" opacity="0.78"/>
<circle cx="230" cy="720" r="0.9" fill="#ffd9f0" opacity="0.79"/>
<circle cx="1545" cy="74" r="0.8" fill="#d9d0ff" opacity="0.96"/>
<circle cx="487" cy="353" r="1.0" fill="#e6e0ff" opacity="0.99"/>
<circle class="tw c" style="animation-delay:-4.4s" cx="1154" cy="922" r="1.7" fill="#fff3d6" opacity="0.66"/>
<circle class="tw d" style="animation-delay:-1.6s" cx="1214" cy="626" r="0.8" fill="#ffd9f0" opacity="0.51"/>
<circle cx="965" cy="864" r="1.4" fill="#ffffff" opacity="0.60"/>
<circle cx="1541" cy="601" r="0.6" fill="#ffffff" opacity="0.90"/>
<circle cx="546" cy="137" r="0.8" fill="#e6e0ff" opacity="0.77"/>
<circle cx="1024" cy="923" r="0.8" fill="#e6e0ff" opacity="0.66"/>
<circle cx="1038" cy="405" r="1.4" fill="#e6e0ff" opacity="0.59"/>
<circle cx="1274" cy="87" r="1.2" fill="#e6e0ff" opacity="0.89"/>
<circle class="tw c" style="animation-delay:-0.4s" cx="639" cy="940" r="1.7" fill="#ffffff" opacity="0.51"/>
<circle class="tw b" style="animation-delay:-4.2s" cx="982" cy="724" r="0.9" fill="#ffffff" opacity="0.55"/>
<circle cx="1345" cy="358" r="0.9" fill="#fff3d6" opacity="0.67"/>
<circle cx="1385" cy="153" r="1.2" fill="#d9d0ff" opacity="0.67"/>
<circle class="tw d" style="animation-delay:-4.5s" cx="413" cy="711" r="1.7" fill="#ffffff" opacity="0.89"/>
<circle cx="578" cy="530" r="0.9" fill="#ffffff" opacity="0.63"/>
<circle class="tw a" style="animation-delay:-7.5s" cx="160" cy="809" r="0.9" fill="#ffffff" opacity="0.99"/>
<g class="gA"><g transform="translate(1290 230) rotate(-24) scale(1 0.45)">
<circle r="310" fill="url(#halo)"/>
<g class="spin">
<circle cx="21" cy="17" r="69" fill="url(#armb)"/>
<circle cx="22" cy="36" r="66" fill="url(#arm)"/>
<circle cx="10" cy="56" r="63" fill="url(#arm)"/>
<circle cx="-12" cy="70" r="61" fill="url(#armb)"/>
<circle cx="-43" cy="74" r="58" fill="url(#arm)"/>
<circle cx="-77" cy="63" r="56" fill="url(#arm)"/>
<circle cx="-108" cy="37" r="53" fill="url(#armb)"/>
<circle cx="-129" cy="-3" r="50" fill="url(#arm)"/>
<circle cx="-133" cy="-53" r="48" fill="url(#arm)"/>
<circle cx="-117" cy="-106" r="45" fill="url(#armb)"/>
<circle cx="-79" cy="-153" r="43" fill="url(#arm)"/>
<circle cx="-23" cy="-185" r="40" fill="url(#arm)"/>
<circle cx="46" cy="-196" r="37" fill="url(#armb)"/>
<circle cx="119" cy="-179" r="35" fill="url(#arm)"/>
<circle cx="-21" cy="-17" r="69" fill="url(#armb)"/>
<circle cx="-22" cy="-36" r="66" fill="url(#arm)"/>
<circle cx="-10" cy="-56" r="63" fill="url(#arm)"/>
<circle cx="12" cy="-70" r="61" fill="url(#armb)"/>
<circle cx="43" cy="-74" r="58" fill="url(#arm)"/>
<circle cx="77" cy="-63" r="56" fill="url(#arm)"/>
<circle cx="108" cy="-37" r="53" fill="url(#armb)"/>
<circle cx="129" cy="3" r="50" fill="url(#arm)"/>
<circle cx="133" cy="53" r="48" fill="url(#arm)"/>
<circle cx="117" cy="106" r="45" fill="url(#armb)"/>
<circle cx="79" cy="153" r="43" fill="url(#arm)"/>
<circle cx="23" cy="185" r="40" fill="url(#arm)"/>
<circle cx="-46" cy="196" r="37" fill="url(#armb)"/>
<circle cx="-119" cy="179" r="35" fill="url(#arm)"/>
<circle cx="-100" cy="-119" r="1.5" fill="#e0c8ff" opacity="0.65"/>
<circle cx="17" cy="60" r="1.0" fill="#fff4e6" opacity="0.84"/>
<circle cx="-101" cy="6" r="1.1" fill="#a9c2ff" opacity="0.63"/>
<circle cx="157" cy="-161" r="1.3" fill="#a9c2ff" opacity="0.64"/>
<circle cx="3" cy="91" r="0.6" fill="#b48cff" opacity="0.46"/>
<circle cx="-76" cy="-162" r="0.9" fill="#e0c8ff" opacity="1.00"/>
<circle cx="9" cy="55" r="1.6" fill="#e0c8ff" opacity="0.53"/>
<circle cx="-46" cy="69" r="1.3" fill="#e0c8ff" opacity="0.78"/>
<circle cx="-97" cy="65" r="0.6" fill="#e0c8ff" opacity="0.88"/>
<circle cx="-106" cy="32" r="0.8" fill="#c9a8ff" opacity="0.95"/>
<circle cx="21" cy="58" r="1.3" fill="#ffe0f0" opacity="0.50"/>
<circle cx="-64" cy="31" r="1.2" fill="#c9a8ff" opacity="0.56"/>
<circle cx="-112" cy="-124" r="0.7" fill="#ffffff" opacity="0.46"/>
<circle cx="173" cy="-174" r="1.1" fill="#b48cff" opacity="0.45"/>
<circle cx="-14" cy="60" r="1.0" fill="#ffc4ec" opacity="0.72"/>
<circle cx="119" cy="-196" r="0.7" fill="#ffffff" opacity="0.84"/>
<circle cx="32" cy="7" r="1.6" fill="#ffffff" opacity="0.60"/>
<circle cx="-78" cy="64" r="1.6" fill="#a9c2ff" opacity="0.93"/>
<circle cx="-103" cy="-150" r="1.4" fill="#a9c2ff" opacity="0.93"/>
<circle cx="45" cy="-172" r="1.3" fill="#e0c8ff" opacity="0.85"/>
<circle cx="193" cy="-108" r="1.5" fill="#c9a8ff" opacity="0.48"/>
<circle cx="-110" cy="-153" r="0.6" fill="#ffc4ec" opacity="0.86"/>
<circle cx="11" cy="-202" r="1.4" fill="#ffffff" opacity="0.93"/>
<circle cx="-109" cy="34" r="0.7" fill="#e0c8ff" opacity="0.89"/>
<circle cx="-57" cy="-135" r="0.9" fill="#ffffff" opacity="0.77"/>
<circle cx="-126" cy="-81" r="1.1" fill="#b48cff" opacity="0.90"/>
<circle cx="-43" cy="84" r="1.5" fill="#ffffff" opacity="0.47"/>
<circle cx="-83" cy="35" r="1.0" fill="#e0c8ff" opacity="0.65"/>
<circle cx="-120" cy="-120" r="1.6" fill="#e0c8ff" opacity="0.83"/>
<circle cx="-109" cy="53" r="0.7" fill="#ffffff" opacity="0.72"/>
<circle cx="-112" cy="-113" r="0.8" fill="#ffc4ec" opacity="0.76"/>
<circle cx="27" cy="30" r="0.9" fill="#fff4e6" opacity="0.69"/>
<circle cx="-124" cy="-9" r="1.2" fill="#e0c8ff" opacity="0.65"/>
<circle cx="20" cy="1" r="1.0" fill="#ffe0f0" opacity="0.78"/>
<circle cx="-27" cy="96" r="1.2" fill="#ffffff" opacity="0.48"/>
<circle cx="-10" cy="64" r="1.1" fill="#a9c2ff" opacity="0.95"/>
<circle cx="2" cy="-184" r="1.0" fill="#a9c2ff" opacity="0.71"/>
<circle cx="39" cy="-208" r="0.8" fill="#ffffff" opacity="0.56"/>
<circle cx="-127" cy="-54" r="0.7" fill="#a9c2ff" opacity="0.57"/>
<circle cx="28" cy="24" r="1.1" fill="#ffffff" opacity="0.90"/>
<circle cx="4" cy="74" r="0.7" fill="#ffc4ec" opacity="0.67"/>
<circle cx="21" cy="24" r="1.6" fill="#fff4e6" opacity="0.60"/>
<circle cx="-21" cy="74" r="1.5" fill="#ffc4ec" opacity="0.82"/>
<circle cx="-66" cy="83" r="0.8" fill="#e0c8ff" opacity="0.48"/>
<circle cx="-154" cy="-22" r="1.5" fill="#e0c8ff" opacity="0.64"/>
<circle cx="-108" cy="20" r="1.0" fill="#c9a8ff" opacity="0.76"/>
<circle cx="-71" cy="96" r="1.2" fill="#ffc4ec" opacity="0.67"/>
<circle cx="-47" cy="-164" r="0.6" fill="#c9a8ff" opacity="0.92"/>
<circle cx="28" cy="10" r="1.1" fill="#fff4e6" opacity="0.82"/>
<circle cx="-99" cy="-145" r="0.8" fill="#ffffff" opacity="0.51"/>
<circle cx="-1" cy="16" r="1.3" fill="#ffe0f0" opacity="0.69"/>
<circle cx="-98" cy="5" r="0.9" fill="#a9c2ff" opacity="0.58"/>
<circle cx="-137" cy="-54" r="1.1" fill="#e0c8ff" opacity="0.57"/>
<circle cx="132" cy="-174" r="1.2" fill="#b48cff" opacity="0.57"/>
<circle cx="-130" cy="-79" r="1.0" fill="#ffffff" opacity="0.47"/>
<circle cx="-73" cy="58" r="0.9" fill="#c9a8ff" opacity="0.64"/>
<circle cx="-102" cy="-143" r="1.2" fill="#e0c8ff" opacity="0.75"/>
<circle cx="34" cy="22" r="1.2" fill="#fff4e6" opacity="0.61"/>
<circle cx="-128" cy="-71" r="0.7" fill="#e0c8ff" opacity="0.63"/>
<circle cx="-130" cy="32" r="1.4" fill="#e0c8ff" opacity="0.85"/>
<circle cx="-113" cy="21" r="0.6" fill="#c9a8ff" opacity="0.73"/>
<circle cx="16" cy="20" r="1.3" fill="#ffe0f0" opacity="0.85"/>
<circle cx="-66" cy="63" r="0.9" fill="#a9c2ff" opacity="0.59"/>
<circle cx="24" cy="44" r="1.1" fill="#ffe0f0" opacity="0.54"/>
<circle cx="-136" cy="-10" r="1.6" fill="#b48cff" opacity="0.95"/>
<circle cx="-76" cy="-156" r="1.1" fill="#c9a8ff" opacity="0.89"/>
<circle cx="-128" cy="-61" r="1.6" fill="#e0c8ff" opacity="0.68"/>
<circle cx="-93" cy="-124" r="0.8" fill="#b48cff" opacity="0.78"/>
<circle cx="-13" cy="-176" r="0.6" fill="#c9a8ff" opacity="0.79"/>
<circle cx="-66" cy="-155" r="0.6" fill="#b48cff" opacity="0.97"/>
<circle cx="-105" cy="59" r="0.8" fill="#ffffff" opacity="0.89"/>
<circle cx="-6" cy="-217" r="1.6" fill="#c9a8ff" opacity="0.89"/>
<circle cx="-112" cy="33" r="0.7" fill="#ffffff" opacity="0.93"/>
<circle cx="15" cy="-4" r="0.8" fill="#ffffff" opacity="0.98"/>
<circle cx="-84" cy="-149" r="1.3" fill="#c9a8ff" opacity="0.91"/>
<circle cx="-20" cy="-197" r="0.9" fill="#ffc4ec" opacity="0.98"/>
<circle cx="-117" cy="-50" r="1.4" fill="#e0c8ff" opacity="0.92"/>
<circle cx="4" cy="61" r="1.5" fill="#ffffff" opacity="0.48"/>
<circle cx="-128" cy="-122" r="1.0" fill="#a9c2ff" opacity="0.50"/>
<circle cx="-100" cy="-136" r="0.6" fill="#e0c8ff" opacity="0.72"/>
<circle cx="9" cy="13" r="0.7" fill="#ffe0f0" opacity="0.75"/>
<circle cx="37" cy="23" r="0.8" fill="#ffe0f0" opacity="0.94"/>
<circle cx="-94" cy="64" r="1.4" fill="#a9c2ff" opacity="0.55"/>
<circle cx="-41" cy="80" r="1.5" fill="#ffc4ec" opacity="0.98"/>
<circle cx="-47" cy="86" r="1.0" fill="#b48cff" opacity="0.45"/>
<circle cx="67" cy="-196" r="1.0" fill="#ffffff" opacity="0.51"/>
<circle cx="-128" cy="-56" r="1.3" fill="#e0c8ff" opacity="0.49"/>
<circle cx="-164" cy="-43" r="1.3" fill="#ffffff" opacity="0.97"/>
<circle cx="49" cy="-189" r="0.7" fill="#c9a8ff" opacity="0.91"/>
<circle cx="-110" cy="-139" r="1.2" fill="#ffffff" opacity="0.70"/>
<circle cx="145" cy="-173" r="1.2" fill="#b48cff" opacity="0.77"/>
<circle cx="25" cy="3" r="0.9" fill="#fff4e6" opacity="0.75"/>
<circle cx="-110" cy="-4" r="1.1" fill="#a9c2ff" opacity="0.99"/>
<circle cx="-80" cy="41" r="1.4" fill="#c9a8ff" opacity="0.64"/>
<circle cx="38" cy="43" r="1.3" fill="#fff4e6" opacity="0.95"/>
<circle cx="-103" cy="-103" r="0.9" fill="#e0c8ff" opacity="0.97"/>
<circle cx="12" cy="75" r="0.9" fill="#a9c2ff" opacity="0.89"/>
<circle cx="-140" cy="-44" r="1.2" fill="#a9c2ff" opacity="0.88"/>
<circle cx="-86" cy="70" r="1.0" fill="#ffffff" opacity="0.49"/>
<circle cx="-82" cy="36" r="0.9" fill="#c9a8ff" opacity="0.87"/>
<circle cx="-4" cy="17" r="1.6" fill="#ffe0f0" opacity="0.94"/>
<circle cx="122" cy="-191" r="0.7" fill="#ffffff" opacity="0.62"/>
<circle cx="-78" cy="-152" r="1.4" fill="#a9c2ff" opacity="0.88"/>
<circle cx="-1" cy="-194" r="1.5" fill="#ffffff" opacity="0.74"/>
<circle cx="-115" cy="1" r="1.5" fill="#c9a8ff" opacity="0.49"/>
<circle cx="-5" cy="2" r="0.9" fill="#ffffff" opacity="0.91"/>
<circle cx="-2" cy="-196" r="0.7" fill="#ffc4ec" opacity="0.61"/>
<circle cx="4" cy="12" r="1.3" fill="#ffffff" opacity="0.84"/>
<circle cx="-135" cy="-106" r="1.2" fill="#e0c8ff" opacity="0.95"/>
<circle cx="-45" cy="86" r="1.3" fill="#c9a8ff" opacity="0.49"/>
<circle cx="36" cy="-199" r="1.1" fill="#e0c8ff" opacity="0.99"/>
<circle cx="-137" cy="-77" r="0.8" fill="#a9c2ff" opacity="0.80"/>
<circle cx="-67" cy="94" r="0.9" fill="#b48cff" opacity="0.99"/>
<circle cx="-120" cy="-54" r="1.0" fill="#e0c8ff" opacity="0.48"/>
<circle cx="-116" cy="-93" r="1.0" fill="#ffc4ec" opacity="0.82"/>
<circle cx="103" cy="-180" r="0.7" fill="#e0c8ff" opacity="0.71"/>
<circle cx="30" cy="31" r="1.2" fill="#ffe0f0" opacity="0.51"/>
<circle cx="12" cy="49" r="1.4" fill="#fff4e6" opacity="0.86"/>
<circle cx="-0" cy="-207" r="1.5" fill="#c9a8ff" opacity="0.85"/>
<circle cx="-31" cy="-172" r="1.3" fill="#ffffff" opacity="0.75"/>
<circle cx="-134" cy="-27" r="0.6" fill="#c9a8ff" opacity="0.55"/>
<circle cx="-86" cy="37" r="1.5" fill="#c9a8ff" opacity="0.65"/>
<circle cx="66" cy="-192" r="1.4" fill="#b48cff" opacity="0.74"/>
<circle cx="-23" cy="67" r="1.3" fill="#b48cff" opacity="0.97"/>
<circle cx="119" cy="-185" r="0.7" fill="#a9c2ff" opacity="0.46"/>
<circle cx="18" cy="63" r="1.1" fill="#c9a8ff" opacity="0.47"/>
<circle cx="71" cy="-186" r="1.1" fill="#a9c2ff" opacity="0.80"/>
<circle cx="-6" cy="87" r="1.5" fill="#ffc4ec" opacity="0.97"/>
<circle cx="-99" cy="46" r="1.2" fill="#c9a8ff" opacity="0.85"/>
<circle cx="105" cy="-212" r="1.2" fill="#ffffff" opacity="0.83"/>
<circle cx="-141" cy="-30" r="1.4" fill="#b48cff" opacity="0.94"/>
<circle cx="-1" cy="12" r="0.6" fill="#ffffff" opacity="0.50"/>
<circle cx="173" cy="-146" r="1.4" fill="#b48cff" opacity="0.47"/>
<circle cx="-128" cy="-30" r="1.4" fill="#a9c2ff" opacity="0.51"/>
<circle cx="158" cy="-158" r="0.9" fill="#ffc4ec" opacity="0.73"/>
<circle cx="109" cy="-208" r="1.4" fill="#ffffff" opacity="0.73"/>
<circle cx="-131" cy="-63" r="1.2" fill="#ffc4ec" opacity="0.70"/>
<circle cx="-105" cy="-116" r="0.8" fill="#a9c2ff" opacity="0.84"/>
<circle cx="-82" cy="-137" r="1.0" fill="#ffc4ec" opacity="0.50"/>
<circle cx="-13" cy="-159" r="0.9" fill="#e0c8ff" opacity="0.61"/>
<circle cx="-126" cy="11" r="0.7" fill="#c9a8ff" opacity="0.83"/>
<circle cx="-147" cy="-56" r="0.8" fill="#ffffff" opacity="0.87"/>
<circle cx="-22" cy="-177" r="1.3" fill="#ffffff" opacity="0.92"/>
<circle cx="-104" cy="17" r="0.7" fill="#ffffff" opacity="0.88"/>
<circle cx="83" cy="-183" r="1.3" fill="#ffffff" opacity="0.71"/>
<circle cx="-111" cy="-85" r="1.0" fill="#c9a8ff" opacity="0.46"/>
<circle cx="-32" cy="61" r="1.5" fill="#b48cff" opacity="0.89"/>
<circle cx="-132" cy="-68" r="0.7" fill="#e0c8ff" opacity="0.52"/>
<circle cx="-128" cy="8" r="1.5" fill="#a9c2ff" opacity="0.74"/>
<circle cx="-45" cy="-160" r="1.3" fill="#c9a8ff" opacity="0.69"/>
<circle cx="8" cy="33" r="0.9" fill="#ffffff" opacity="0.67"/>
<circle cx="-69" cy="53" r="1.6" fill="#ffc4ec" opacity="0.80"/>
<circle cx="-130" cy="-65" r="1.3" fill="#c9a8ff" opacity="0.74"/>
<circle cx="19" cy="17" r="1.3" fill="#ffffff" opacity="0.60"/>
<circle cx="-20" cy="-183" r="0.8" fill="#ffffff" opacity="0.99"/>
<circle cx="96" cy="-170" r="1.4" fill="#a9c2ff" opacity="0.57"/>
<circle cx="67" cy="-177" r="0.7" fill="#b48cff" opacity="0.50"/>
<circle cx="-27" cy="-178" r="0.7" fill="#a9c2ff" opacity="0.99"/>
<circle cx="-77" cy="61" r="0.9" fill="#c9a8ff" opacity="0.96"/>
<circle cx="114" cy="-192" r="0.9" fill="#ffffff" opacity="0.65"/>
<circle cx="-132" cy="-51" r="1.5" fill="#a9c2ff" opacity="0.47"/>
<circle cx="-68" cy="-139" r="0.9" fill="#a9c2ff" opacity="0.45"/>
<circle cx="29" cy="37" r="0.7" fill="#ffe0f0" opacity="0.70"/>
<circle cx="-62" cy="-168" r="1.0" fill="#b48cff" opacity="0.48"/>
<circle cx="7" cy="77" r="0.7" fill="#c9a8ff" opacity="0.57"/>
<circle cx="-83" cy="-149" r="0.7" fill="#c9a8ff" opacity="0.69"/>
<circle cx="19" cy="10" r="0.9" fill="#ffe0f0" opacity="0.96"/>
<circle cx="-125" cy="15" r="0.9" fill="#b48cff" opacity="0.88"/>
<circle cx="13" cy="18" r="1.3" fill="#ffffff" opacity="0.73"/>
<circle cx="10" cy="-1" r="1.3" fill="#ffe0f0" opacity="0.53"/>
<circle cx="-72" cy="92" r="1.3" fill="#e0c8ff" opacity="0.81"/>
<circle cx="-47" cy="-175" r="0.9" fill="#c9a8ff" opacity="0.99"/>
<circle cx="32" cy="-203" r="1.3" fill="#c9a8ff" opacity="0.46"/>
<circle cx="137" cy="-173" r="1.3" fill="#a9c2ff" opacity="0.57"/>
<circle cx="118" cy="-174" r="0.8" fill="#e0c8ff" opacity="0.98"/>
<circle cx="-54" cy="81" r="1.4" fill="#e0c8ff" opacity="0.58"/>
<circle cx="72" cy="-203" r="1.3" fill="#ffc4ec" opacity="0.53"/>
<circle cx="-46" cy="78" r="0.7" fill="#ffc4ec" opacity="0.63"/>
<circle cx="-10" cy="-184" r="0.9" fill="#a9c2ff" opacity="0.76"/>
<circle cx="-14" cy="76" r="0.7" fill="#c9a8ff" opacity="0.95"/>
<circle cx="14" cy="51" r="1.0" fill="#fff4e6" opacity="0.74"/>
<circle cx="60" cy="-179" r="1.1" fill="#b48cff" opacity="0.74"/>
<circle cx="-122" cy="-137" r="1.5" fill="#ffc4ec" opacity="0.76"/>
<circle cx="10" cy="58" r="0.9" fill="#ffc4ec" opacity="0.90"/>
<circle cx="-34" cy="-168" r="1.0" fill="#c9a8ff" opacity="0.64"/>
<circle cx="29" cy="-175" r="1.6" fill="#b48cff" opacity="0.50"/>
<circle cx="139" cy="-170" r="1.3" fill="#e0c8ff" opacity="0.65"/>
<circle cx="-94" cy="-125" r="0.7" fill="#e0c8ff" opacity="0.73"/>
<circle cx="36" cy="-193" r="1.2" fill="#e0c8ff" opacity="0.65"/>
<circle cx="-92" cy="-151" r="1.4" fill="#ffffff" opacity="0.67"/>
<circle cx="17" cy="27" r="1.3" fill="#fff4e6" opacity="0.98"/>
<circle cx="1" cy="68" r="1.1" fill="#ffc4ec" opacity="0.82"/>
<circle cx="37" cy="-191" r="0.9" fill="#ffc4ec" opacity="0.49"/>
<circle cx="20" cy="3" r="1.5" fill="#ffe0f0" opacity="0.88"/>
<circle cx="-17" cy="73" r="0.9" fill="#a9c2ff" opacity="0.74"/>
<circle cx="-49" cy="87" r="0.9" fill="#c9a8ff" opacity="0.60"/>
<circle cx="25" cy="40" r="0.9" fill="#ffe0f0" opacity="0.72"/>
<circle cx="-3" cy="56" r="1.0" fill="#ffffff" opacity="0.61"/>
<circle cx="9" cy="3" r="0.8" fill="#fff4e6" opacity="0.84"/>
<circle cx="22" cy="-181" r="1.0" fill="#ffc4ec" opacity="0.46"/>
<circle cx="143" cy="-175" r="1.0" fill="#ffc4ec" opacity="0.74"/>
<circle cx="-10" cy="-175" r="1.3" fill="#ffffff" opacity="0.70"/>
<circle cx="2" cy="85" r="0.8" fill="#b48cff" opacity="0.57"/>
<circle cx="14" cy="-177" r="1.0" fill="#e0c8ff" opacity="0.74"/>
<circle cx="-51" cy="71" r="0.8" fill="#b48cff" opacity="0.96"/>
<circle cx="60" cy="-196" r="1.5" fill="#ffc4ec" opacity="0.83"/>
<circle cx="-136" cy="-2" r="1.1" fill="#a9c2ff" opacity="0.59"/>
<circle cx="-108" cy="-144" r="1.0" fill="#ffffff" opacity="0.70"/>
<circle cx="164" cy="-136" r="1.5" fill="#ffffff" opacity="0.52"/>
<circle cx="106" cy="-170" r="0.9" fill="#c9a8ff" opacity="0.49"/>
<circle cx="-27" cy="-166" r="1.3" fill="#c9a8ff" opacity="0.85"/>
<circle cx="-4" cy="2" r="0.8" fill="#ffe0f0" opacity="0.74"/>
<circle cx="47" cy="-206" r="1.0" fill="#e0c8ff" opacity="0.94"/>
<circle cx="-104" cy="17" r="1.5" fill="#ffffff" opacity="0.71"/>
<circle cx="117" cy="-174" r="1.4" fill="#ffffff" opacity="0.86"/>
<circle cx="29" cy="-212" r="0.9" fill="#c9a8ff" opacity="0.71"/>
<circle cx="216" cy="-104" r="1.4" fill="#ffffff" opacity="0.83"/>
<circle cx="-100" cy="-124" r="1.2" fill="#e0c8ff" opacity="0.94"/>
<circle cx="128" cy="-205" r="0.9" fill="#e0c8ff" opacity="0.79"/>
<circle cx="-101" cy="69" r="1.4" fill="#ffffff" opacity="0.76"/>
<circle cx="135" cy="-156" r="1.4" fill="#b48cff" opacity="0.90"/>
<circle cx="-13" cy="64" r="1.3" fill="#ffc4ec" opacity="0.82"/>
<circle cx="10" cy="22" r="1.5" fill="#ffffff" opacity="0.75"/>
<circle cx="132" cy="-161" r="1.4" fill="#a9c2ff" opacity="0.88"/>
<circle cx="80" cy="-195" r="1.5" fill="#e0c8ff" opacity="0.95"/>
<circle cx="19" cy="3" r="1.2" fill="#ffe0f0" opacity="0.62"/>
<circle cx="-127" cy="21" r="1.5" fill="#e0c8ff" opacity="0.85"/>
<circle cx="-53" cy="62" r="0.7" fill="#ffc4ec" opacity="0.70"/>
<circle cx="7" cy="10" r="1.3" fill="#ffffff" opacity="0.52"/>
<circle cx="143" cy="-149" r="1.6" fill="#a9c2ff" opacity="0.55"/>
<circle cx="30" cy="-75" r="1.4" fill="#ffc4ec" opacity="0.57"/>
<circle cx="-125" cy="179" r="0.8" fill="#a9c2ff" opacity="0.62"/>
<circle cx="52" cy="-68" r="1.5" fill="#ffffff" opacity="0.78"/>
<circle cx="84" cy="-30" r="1.2" fill="#ffffff" opacity="0.87"/>
<circle cx="-16" cy="222" r="1.5" fill="#ffc4ec" opacity="0.84"/>
<circle cx="67" cy="178" r="1.2" fill="#b48cff" opacity="0.89"/>
<circle cx="101" cy="-37" r="1.2" fill="#ffc4ec" opacity="0.48"/>
<circle cx="3" cy="179" r="0.9" fill="#ffc4ec" opacity="0.73"/>
<circle cx="-18" cy="-31" r="0.7" fill="#ffffff" opacity="0.70"/>
<circle cx="126" cy="107" r="1.5" fill="#a9c2ff" opacity="0.69"/>
<circle cx="-20" cy="-38" r="0.8" fill="#ffe0f0" opacity="0.57"/>
<circle cx="154" cy="13" r="1.0" fill="#a9c2ff" opacity="0.69"/>
<circle cx="47" cy="-65" r="1.1" fill="#c9a8ff" opacity="0.55"/>
<circle cx="107" cy="-58" r="1.1" fill="#a9c2ff" opacity="0.71"/>
<circle cx="130" cy="8" r="1.0" fill="#c9a8ff" opacity="0.64"/>
<circle cx="111" cy="-53" r="1.1" fill="#ffc4ec" opacity="0.47"/>
<circle cx="48" cy="174" r="1.2" fill="#a9c2ff" opacity="0.54"/>
<circle cx="100" cy="116" r="1.5" fill="#ffffff" opacity="0.89"/>
<circle cx="134" cy="65" r="1.3" fill="#a9c2ff" opacity="0.61"/>
<circle cx="-10" cy="-41" r="1.1" fill="#ffe0f0" opacity="0.65"/>
<circle cx="-63" cy="203" r="0.7" fill="#a9c2ff" opacity="0.59"/>
<circle cx="151" cy="50" r="1.0" fill="#c9a8ff" opacity="0.95"/>
<circle cx="144" cy="37" r="1.0" fill="#ffffff" opacity="0.49"/>
<circle cx="1" cy="-56" r="0.9" fill="#a9c2ff" opacity="0.85"/>
<circle cx="-16" cy="160" r="1.4" fill="#c9a8ff" opacity="0.53"/>
<circle cx="-79" cy="179" r="1.5" fill="#ffffff" opacity="0.86"/>
<circle cx="124" cy="93" r="0.9" fill="#c9a8ff" opacity="0.83"/>
<circle cx="-14" cy="-48" r="1.0" fill="#fff4e6" opacity="0.99"/>
<circle cx="117" cy="-23" r="1.3" fill="#ffffff" opacity="0.55"/>
<circle cx="-3" cy="-68" r="1.2" fill="#ffc4ec" opacity="0.95"/>
<circle cx="82" cy="168" r="1.2" fill="#c9a8ff" opacity="0.64"/>
<circle cx="110" cy="-16" r="1.1" fill="#b48cff" opacity="0.83"/>
<circle cx="-8" cy="-45" r="1.4" fill="#fff4e6" opacity="0.65"/>
<circle cx="62" cy="165" r="1.6" fill="#a9c2ff" opacity="0.96"/>
<circle cx="132" cy="110" r="1.4" fill="#ffffff" opacity="0.90"/>
<circle cx="-164" cy="142" r="0.9" fill="#ffc4ec" opacity="0.77"/>
<circle cx="114" cy="86" r="0.7" fill="#c9a8ff" opacity="0.87"/>
<circle cx="95" cy="96" r="1.2" fill="#c9a8ff" opacity="0.52"/>
<circle cx="77" cy="-30" r="0.7" fill="#e0c8ff" opacity="0.70"/>
<circle cx="103" cy="-26" r="0.9" fill="#e0c8ff" opacity="0.65"/>
<circle cx="-196" cy="84" r="1.4" fill="#ffffff" opacity="0.70"/>
<circle cx="6" cy="218" r="1.4" fill="#ffffff" opacity="0.90"/>
<circle cx="19" cy="-89" r="1.2" fill="#e0c8ff" opacity="0.66"/>
<circle cx="19" cy="-70" r="0.8" fill="#c9a8ff" opacity="0.78"/>
<circle cx="-97" cy="176" r="1.2" fill="#b48cff" opacity="0.87"/>
<circle cx="103" cy="136" r="1.1" fill="#b48cff" opacity="0.88"/>
<circle cx="36" cy="-72" r="1.2" fill="#c9a8ff" opacity="0.74"/>
<circle cx="-30" cy="194" r="0.7" fill="#ffffff" opacity="0.66"/>
<circle cx="132" cy="106" r="1.3" fill="#ffc4ec" opacity="0.75"/>
<circle cx="101" cy="-38" r="1.2" fill="#e0c8ff" opacity="0.50"/>
<circle cx="124" cy="35" r="1.6" fill="#a9c2ff" opacity="0.99"/>
<circle cx="-32" cy="-19" r="1.4" fill="#ffe0f0" opacity="0.62"/>
<circle cx="112" cy="18" r="1.3" fill="#ffffff" opacity="0.71"/>
<circle cx="-168" cy="168" r="1.2" fill="#b48cff" opacity="0.62"/>
<circle cx="-181" cy="170" r="0.7" fill="#ffc4ec" opacity="0.73"/>
<circle cx="99" cy="131" r="1.6" fill="#c9a8ff" opacity="0.82"/>
<circle cx="42" cy="174" r="1.5" fill="#e0c8ff" opacity="0.83"/>
<circle cx="143" cy="2" r="0.8" fill="#ffc4ec" opacity="0.55"/>
<circle cx="-104" cy="199" r="1.6" fill="#ffc4ec" opacity="0.82"/>
<circle cx="87" cy="-54" r="0.7" fill="#a9c2ff" opacity="0.86"/>
<circle cx="34" cy="-91" r="1.6" fill="#c9a8ff" opacity="0.79"/>
<circle cx="84" cy="149" r="0.9" fill="#e0c8ff" opacity="0.53"/>
<circle cx="-7" cy="-66" r="1.2" fill="#ffffff" opacity="0.50"/>
<circle cx="131" cy="-32" r="0.8" fill="#b48cff" opacity="0.87"/>
<circle cx="27" cy="-60" r="1.0" fill="#a9c2ff" opacity="0.71"/>
<circle cx="12" cy="-5" r="1.5" fill="#fff4e6" opacity="0.78"/>
<circle cx="-5" cy="-57" r="0.7" fill="#ffffff" opacity="0.86"/>
<circle cx="-16" cy="-17" r="0.9" fill="#ffe0f0" opacity="0.95"/>
<circle cx="92" cy="153" r="1.2" fill="#ffffff" opacity="0.54"/>
<circle cx="94" cy="134" r="1.3" fill="#ffffff" opacity="0.56"/>
<circle cx="109" cy="-37" r="1.5" fill="#b48cff" opacity="0.45"/>
<circle cx="11" cy="-67" r="0.9" fill="#e0c8ff" opacity="0.60"/>
<circle cx="93" cy="141" r="0.7" fill="#b48cff" opacity="0.48"/>
<circle cx="-14" cy="-67" r="0.8" fill="#e0c8ff" opacity="0.82"/>
<circle cx="134" cy="12" r="0.7" fill="#a9c2ff" opacity="0.49"/>
<circle cx="121" cy="-10" r="0.6" fill="#ffffff" opacity="0.84"/>
<circle cx="-19" cy="199" r="0.9" fill="#ffffff" opacity="0.54"/>
<circle cx="29" cy="212" r="0.6" fill="#b48cff" opacity="0.50"/>
<circle cx="36" cy="177" r="0.7" fill="#ffffff" opacity="0.89"/>
<circle cx="-24" cy="-32" r="1.6" fill="#ffe0f0" opacity="0.63"/>
<circle cx="-127" cy="151" r="1.4" fill="#ffffff" opacity="0.91"/>
<circle cx="140" cy="30" r="1.1" fill="#e0c8ff" opacity="0.77"/>
<circle cx="0" cy="-80" r="1.2" fill="#ffffff" opacity="0.47"/>
<circle cx="57" cy="-68" r="0.8" fill="#a9c2ff" opacity="0.96"/>
<circle cx="131" cy="14" r="1.1" fill="#e0c8ff" opacity="0.85"/>
<circle cx="-9" cy="-63" r="1.3" fill="#e0c8ff" opacity="0.56"/>
<circle cx="10" cy="-66" r="0.6" fill="#ffffff" opacity="0.75"/>
<circle cx="52" cy="-90" r="1.4" fill="#e0c8ff" opacity="0.58"/>
<circle cx="92" cy="-61" r="0.8" fill="#e0c8ff" opacity="0.94"/>
<circle cx="-36" cy="-5" r="1.0" fill="#ffe0f0" opacity="0.62"/>
<circle cx="-179" cy="164" r="0.9" fill="#b48cff" opacity="0.92"/>
<circle cx="-69" cy="194" r="0.7" fill="#c9a8ff" opacity="0.60"/>
<circle cx="109" cy="85" r="1.0" fill="#b48cff" opacity="0.46"/>
<circle cx="77" cy="-60" r="0.8" fill="#b48cff" opacity="0.77"/>
<circle cx="130" cy="58" r="0.8" fill="#b48cff" opacity="0.77"/>
<circle cx="129" cy="76" r="0.7" fill="#ffc4ec" opacity="0.70"/>
<circle cx="-24" cy="-80" r="0.7" fill="#b48cff" opacity="0.99"/>
<circle cx="16" cy="-68" r="1.1" fill="#c9a8ff" opacity="0.75"/>
<circle cx="28" cy="-86" r="1.0" fill="#ffffff" opacity="0.58"/>
<circle cx="91" cy="99" r="1.6" fill="#c9a8ff" opacity="0.87"/>
<circle cx="-25" cy="187" r="0.6" fill="#ffffff" opacity="0.50"/>
<circle cx="-37" cy="-27" r="0.9" fill="#ffffff" opacity="0.65"/>
<circle cx="44" cy="181" r="0.8" fill="#ffc4ec" opacity="0.93"/>
<circle cx="74" cy="-81" r="1.2" fill="#c9a8ff" opacity="0.84"/>
<circle cx="25" cy="216" r="1.4" fill="#ffffff" opacity="0.64"/>
<circle cx="107" cy="-16" r="0.8" fill="#ffffff" opacity="0.74"/>
<circle cx="85" cy="-69" r="1.4" fill="#e0c8ff" opacity="0.48"/>
<circle cx="89" cy="-41" r="1.1" fill="#ffc4ec" opacity="0.56"/>
<circle cx="-16" cy="-33" r="1.3" fill="#fff4e6" opacity="0.87"/>
<circle cx="74" cy="132" r="1.2" fill="#ffffff" opacity="0.52"/>
<circle cx="32" cy="-76" r="1.4" fill="#ffc4ec" opacity="0.82"/>
<circle cx="59" cy="171" r="1.6" fill="#ffc4ec" opacity="0.90"/>
<circle cx="98" cy="154" r="1.3" fill="#ffc4ec" opacity="0.60"/>
<circle cx="-82" cy="201" r="1.0" fill="#b48cff" opacity="0.91"/>
<circle cx="132" cy="122" r="1.2" fill="#e0c8ff" opacity="0.52"/>
<circle cx="88" cy="-55" r="0.9" fill="#ffffff" opacity="0.60"/>
<circle cx="-150" cy="130" r="1.2" fill="#e0c8ff" opacity="0.45"/>
<circle cx="-17" cy="-20" r="1.2" fill="#ffe0f0" opacity="0.92"/>
<circle cx="-15" cy="-43" r="1.5" fill="#fff4e6" opacity="0.57"/>
<circle cx="49" cy="-59" r="0.8" fill="#c9a8ff" opacity="0.57"/>
<circle cx="-129" cy="191" r="1.4" fill="#ffffff" opacity="0.84"/>
<circle cx="128" cy="-44" r="1.1" fill="#b48cff" opacity="0.53"/>
<circle cx="-75" cy="198" r="0.8" fill="#ffffff" opacity="0.76"/>
<circle cx="-97" cy="200" r="1.2" fill="#ffc4ec" opacity="0.57"/>
<circle cx="118" cy="25" r="1.2" fill="#ffc4ec" opacity="0.76"/>
<circle cx="-89" cy="183" r="1.0" fill="#ffffff" opacity="0.71"/>
<circle cx="-23" cy="184" r="1.1" fill="#b48cff" opacity="0.53"/>
<circle cx="17" cy="-57" r="1.4" fill="#ffc4ec" opacity="0.54"/>
<circle cx="127" cy="97" r="1.0" fill="#b48cff" opacity="0.94"/>
<circle cx="103" cy="125" r="1.3" fill="#ffffff" opacity="0.58"/>
<circle cx="128" cy="52" r="0.8" fill="#ffffff" opacity="0.62"/>
<circle cx="34" cy="-52" r="0.8" fill="#c9a8ff" opacity="0.56"/>
<circle cx="28" cy="-65" r="0.8" fill="#a9c2ff" opacity="0.58"/>
<circle cx="-25" cy="211" r="0.7" fill="#ffffff" opacity="0.83"/>
<circle cx="2" cy="191" r="1.3" fill="#a9c2ff" opacity="0.74"/>
<circle cx="-2" cy="-86" r="1.0" fill="#ffffff" opacity="0.87"/>
<circle cx="-22" cy="207" r="0.8" fill="#a9c2ff" opacity="0.48"/>
<circle cx="35" cy="-56" r="0.7" fill="#c9a8ff" opacity="0.65"/>
<circle cx="-92" cy="182" r="1.1" fill="#b48cff" opacity="0.52"/>
<circle cx="39" cy="-54" r="0.6" fill="#ffffff" opacity="0.61"/>
<circle cx="81" cy="-48" r="1.3" fill="#c9a8ff" opacity="0.61"/>
<circle cx="22" cy="197" r="1.2" fill="#ffffff" opacity="1.00"/>
<circle cx="38" cy="-63" r="1.1" fill="#ffffff" opacity="0.68"/>
<circle cx="-19" cy="-34" r="1.5" fill="#ffe0f0" opacity="0.66"/>
<circle cx="-25" cy="-57" r="0.9" fill="#ffc4ec" opacity="0.51"/>
<circle cx="-22" cy="5" r="0.9" fill="#ffffff" opacity="0.53"/>
<circle cx="148" cy="-28" r="0.6" fill="#ffc4ec" opacity="0.49"/>
<circle cx="129" cy="67" r="0.7" fill="#c9a8ff" opacity="0.89"/>
<circle cx="85" cy="-80" r="0.7" fill="#a9c2ff" opacity="0.46"/>
<circle cx="111" cy="-14" r="0.7" fill="#c9a8ff" opacity="0.90"/>
<circle cx="115" cy="-42" r="1.6" fill="#ffffff" opacity="0.75"/>
<circle cx="113" cy="133" r="1.3" fill="#ffc4ec" opacity="0.77"/>
<circle cx="75" cy="180" r="1.1" fill="#e0c8ff" opacity="0.63"/>
<circle cx="138" cy="35" r="0.8" fill="#e0c8ff" opacity="0.51"/>
<circle cx="127" cy="-13" r="0.9" fill="#ffc4ec" opacity="0.99"/>
<circle cx="-162" cy="145" r="1.4" fill="#ffc4ec" opacity="0.52"/>
<circle cx="134" cy="85" r="0.8" fill="#ffffff" opacity="0.59"/>
<circle cx="119" cy="112" r="1.4" fill="#ffffff" opacity="0.55"/>
<circle cx="142" cy="85" r="1.0" fill="#a9c2ff" opacity="0.68"/>
<circle cx="67" cy="-61" r="1.0" fill="#ffc4ec" opacity="0.67"/>
<circle cx="106" cy="-31" r="1.4" fill="#c9a8ff" opacity="0.58"/>
<circle cx="62" cy="138" r="1.5" fill="#e0c8ff" opacity="0.70"/>
<circle cx="31" cy="-77" r="1.3" fill="#ffc4ec" opacity="0.54"/>
<circle cx="-21" cy="-43" r="0.7" fill="#fff4e6" opacity="0.75"/>
<circle cx="-175" cy="108" r="1.0" fill="#b48cff" opacity="0.46"/>
<circle cx="120" cy="-35" r="0.7" fill="#c9a8ff" opacity="0.97"/>
<circle cx="107" cy="-46" r="1.1" fill="#ffffff" opacity="0.59"/>
<circle cx="67" cy="-65" r="1.4" fill="#c9a8ff" opacity="0.77"/>
<circle cx="131" cy="64" r="0.8" fill="#a9c2ff" opacity="0.75"/>
<circle cx="22" cy="-88" r="1.2" fill="#ffffff" opacity="0.78"/>
<circle cx="-135" cy="174" r="1.1" fill="#e0c8ff" opacity="0.47"/>
<circle cx="16" cy="-47" r="1.4" fill="#a9c2ff" opacity="0.69"/>
<circle cx="123" cy="-4" r="0.8" fill="#c9a8ff" opacity="0.83"/>
<circle cx="-112" cy="186" r="1.6" fill="#e0c8ff" opacity="0.70"/>
<circle cx="21" cy="185" r="0.7" fill="#c9a8ff" opacity="0.47"/>
<circle cx="-73" cy="184" r="1.4" fill="#b48cff" opacity="0.77"/>
<circle cx="5" cy="-76" r="0.6" fill="#ffc4ec" opacity="0.47"/>
<circle cx="31" cy="190" r="1.5" fill="#c9a8ff" opacity="0.92"/>
<circle cx="135" cy="-12" r="0.6" fill="#e0c8ff" opacity="0.66"/>
<circle cx="17" cy="-74" r="0.7" fill="#a9c2ff" opacity="0.81"/>
<circle cx="147" cy="-12" r="1.5" fill="#a9c2ff" opacity="0.99"/>
<circle cx="-36" cy="182" r="1.4" fill="#c9a8ff" opacity="0.94"/>
<circle cx="5" cy="-59" r="0.7" fill="#ffc4ec" opacity="0.62"/>
<circle cx="27" cy="-69" r="0.6" fill="#ffffff" opacity="0.70"/>
<circle cx="108" cy="30" r="1.5" fill="#ffffff" opacity="0.47"/>
<circle cx="34" cy="-82" r="0.6" fill="#b48cff" opacity="0.81"/>
<circle cx="-5" cy="212" r="1.6" fill="#ffc4ec" opacity="0.87"/>
<circle cx="107" cy="129" r="1.1" fill="#a9c2ff" opacity="0.66"/>
<circle cx="61" cy="-63" r="0.6" fill="#e0c8ff" opacity="0.60"/>
<circle cx="130" cy="16" r="1.3" fill="#ffc4ec" opacity="0.86"/>
<circle cx="84" cy="-65" r="1.2" fill="#c9a8ff" opacity="0.52"/>
<circle cx="20" cy="180" r="1.5" fill="#b48cff" opacity="0.53"/>
<circle cx="60" cy="-71" r="1.4" fill="#b48cff" opacity="0.80"/>
<circle cx="-56" cy="174" r="1.3" fill="#e0c8ff" opacity="0.67"/>
<circle cx="-14" cy="-45" r="0.7" fill="#fff4e6" opacity="0.92"/>
<circle cx="-99" cy="198" r="1.4" fill="#e0c8ff" opacity="0.62"/>
<circle cx="-47" cy="-35" r="1.0" fill="#fff4e6" opacity="0.50"/>
<circle cx="110" cy="-42" r="1.0" fill="#ffffff" opacity="0.52"/>
<circle cx="122" cy="32" r="0.9" fill="#a9c2ff" opacity="0.58"/>
<circle cx="8" cy="171" r="1.5" fill="#b48cff" opacity="0.49"/>
<circle cx="105" cy="-38" r="1.5" fill="#b48cff" opacity="0.80"/>
<circle cx="143" cy="-44" r="1.0" fill="#ffc4ec" opacity="0.69"/>
<circle cx="132" cy="-13" r="1.0" fill="#ffc4ec" opacity="0.99"/>
<circle cx="141" cy="-38" r="1.2" fill="#c9a8ff" opacity="0.85"/>
<circle cx="-30" cy="-21" r="1.0" fill="#ffe0f0" opacity="0.71"/>
<circle cx="-174" cy="131" r="0.8" fill="#b48cff" opacity="0.59"/>
<circle cx="125" cy="45" r="1.4" fill="#ffc4ec" opacity="0.66"/>
<circle cx="-54" cy="209" r="1.3" fill="#b48cff" opacity="0.83"/>
<circle cx="-13" cy="-1" r="1.2" fill="#ffe0f0" opacity="0.94"/>
<circle cx="-115" cy="180" r="0.7" fill="#ffc4ec" opacity="0.86"/>
<circle cx="-22" cy="175" r="1.5" fill="#b48cff" opacity="0.78"/>
<circle cx="138" cy="37" r="0.6" fill="#a9c2ff" opacity="0.72"/>
<circle cx="126" cy="1" r="1.5" fill="#c9a8ff" opacity="0.58"/>
<circle cx="52" cy="185" r="0.8" fill="#c9a8ff" opacity="0.56"/>
<circle cx="-25" cy="-42" r="1.2" fill="#fff4e6" opacity="0.81"/>
<circle cx="35" cy="-66" r="1.3" fill="#ffffff" opacity="0.65"/>
<circle cx="-172" cy="166" r="1.5" fill="#ffffff" opacity="0.87"/>
<circle cx="-14" cy="-28" r="1.6" fill="#ffe0f0" opacity="0.82"/>
<circle cx="130" cy="34" r="0.6" fill="#e0c8ff" opacity="0.69"/>
<circle cx="-76" cy="181" r="0.8" fill="#ffffff" opacity="0.56"/>
<circle cx="123" cy="95" r="0.7" fill="#a9c2ff" opacity="0.93"/>
<circle cx="116" cy="55" r="0.9" fill="#ffffff" opacity="0.56"/>
<circle cx="60" cy="174" r="0.9" fill="#b48cff" opacity="0.88"/>
<circle cx="106" cy="166" r="1.2" fill="#ffffff" opacity="0.92"/>
<circle cx="49" cy="-90" r="0.9" fill="#a9c2ff" opacity="0.50"/>
<circle cx="70" cy="-49" r="1.0" fill="#c9a8ff" opacity="0.77"/>
<circle cx="-157" cy="191" r="1.5" fill="#a9c2ff" opacity="0.61"/>
<circle cx="50" cy="181" r="0.6" fill="#ffffff" opacity="0.63"/>
<circle cx="72" cy="-74" r="0.9" fill="#ffffff" opacity="0.46"/>
<circle cx="-93" cy="199" r="1.1" fill="#c9a8ff" opacity="0.68"/>
<circle cx="-124" cy="-91" r="7" fill="url(#n4)"/>
<circle cx="127" cy="-3" r="8" fill="url(#n4)"/>
<circle cx="-123" cy="12" r="10" fill="url(#n4)"/>
<circle cx="126" cy="84" r="7" fill="url(#n4)"/>
<circle cx="-20" cy="195" r="6" fill="url(#n4)"/>
<circle cx="117" cy="105" r="5" fill="url(#n4)"/>
<circle cx="5" cy="-193" r="5" fill="url(#n4)"/>
<circle cx="-71" cy="67" r="8" fill="url(#n4)"/>
</g>
<circle class="pulse" r="87" fill="url(#core)"/>
</g></g>
<g class="gB"><g transform="translate(270 790) rotate(32) scale(1 0.55)">
<circle r="202" fill="url(#halo)"/>
<g class="spinr">
<circle cx="14" cy="11" r="45" fill="url(#armb)"/>
<circle cx="14" cy="24" r="43" fill="url(#arm)"/>
<circle cx="7" cy="36" r="41" fill="url(#arm)"/>
<circle cx="-8" cy="46" r="40" fill="url(#armb)"/>
<circle cx="-28" cy="48" r="38" fill="url(#arm)"/>
<circle cx="-50" cy="41" r="36" fill="url(#arm)"/>
<circle cx="-71" cy="24" r="35" fill="url(#armb)"/>
<circle cx="-84" cy="-2" r="33" fill="url(#arm)"/>
<circle cx="-87" cy="-35" r="31" fill="url(#arm)"/>
<circle cx="-76" cy="-69" r="29" fill="url(#armb)"/>
<circle cx="-52" cy="-100" r="28" fill="url(#arm)"/>
<circle cx="-15" cy="-121" r="26" fill="url(#arm)"/>
<circle cx="30" cy="-128" r="24" fill="url(#armb)"/>
<circle cx="78" cy="-117" r="23" fill="url(#arm)"/>
<circle cx="-14" cy="-11" r="45" fill="url(#armb)"/>
<circle cx="-14" cy="-24" r="43" fill="url(#arm)"/>
<circle cx="-7" cy="-36" r="41" fill="url(#arm)"/>
<circle cx="8" cy="-46" r="40" fill="url(#armb)"/>
<circle cx="28" cy="-48" r="38" fill="url(#arm)"/>
<circle cx="50" cy="-41" r="36" fill="url(#arm)"/>
<circle cx="71" cy="-24" r="35" fill="url(#armb)"/>
<circle cx="84" cy="2" r="33" fill="url(#arm)"/>
<circle cx="87" cy="35" r="31" fill="url(#arm)"/>
<circle cx="76" cy="69" r="29" fill="url(#armb)"/>
<circle cx="52" cy="100" r="28" fill="url(#arm)"/>
<circle cx="15" cy="121" r="26" fill="url(#arm)"/>
<circle cx="-30" cy="128" r="24" fill="url(#armb)"/>
<circle cx="-78" cy="117" r="23" fill="url(#arm)"/>
<circle cx="-73" cy="-13" r="1.0" fill="#b48cff" opacity="0.99"/>
<circle cx="3" cy="40" r="1.1" fill="#b48cff" opacity="0.94"/>
<circle cx="79" cy="-112" r="0.8" fill="#e0c8ff" opacity="0.87"/>
<circle cx="-88" cy="-1" r="0.6" fill="#e0c8ff" opacity="0.72"/>
<circle cx="-84" cy="-11" r="1.4" fill="#a9c2ff" opacity="0.86"/>
<circle cx="-54" cy="-86" r="1.2" fill="#ffffff" opacity="0.65"/>
<circle cx="13" cy="25" r="1.1" fill="#ffe0f0" opacity="0.90"/>
<circle cx="-32" cy="49" r="1.3" fill="#e0c8ff" opacity="0.68"/>
<circle cx="141" cy="-41" r="0.6" fill="#ffffff" opacity="0.52"/>
<circle cx="-91" cy="14" r="1.0" fill="#c9a8ff" opacity="0.76"/>
<circle cx="-92" cy="-13" r="0.7" fill="#b48cff" opacity="0.94"/>
<circle cx="-79" cy="-75" r="1.0" fill="#c9a8ff" opacity="0.83"/>
<circle cx="-89" cy="-34" r="1.0" fill="#c9a8ff" opacity="0.52"/>
<circle cx="-5" cy="-126" r="1.5" fill="#ffc4ec" opacity="0.68"/>
<circle cx="-27" cy="49" r="1.1" fill="#ffc4ec" opacity="0.55"/>
<circle cx="-87" cy="-19" r="1.0" fill="#c9a8ff" opacity="0.47"/>
<circle cx="28" cy="-145" r="0.9" fill="#a9c2ff" opacity="0.85"/>
<circle cx="8" cy="36" r="1.2" fill="#e0c8ff" opacity="0.56"/>
<circle cx="-51" cy="30" r="1.3" fill="#ffffff" opacity="0.81"/>
<circle cx="-31" cy="-119" r="0.9" fill="#ffffff" opacity="0.45"/>
<circle cx="-91" cy="-37" r="1.0" fill="#c9a8ff" opacity="0.76"/>
<circle cx="-58" cy="58" r="1.0" fill="#c9a8ff" opacity="0.63"/>
<circle cx="18" cy="21" r="0.6" fill="#ffffff" opacity="0.93"/>
<circle cx="86" cy="-120" r="1.4" fill="#b48cff" opacity="0.58"/>
<circle cx="-13" cy="40" r="0.8" fill="#b48cff" opacity="0.89"/>
<circle cx="-15" cy="-133" r="1.5" fill="#a9c2ff" opacity="0.98"/>
<circle cx="-88" cy="21" r="0.7" fill="#ffc4ec" opacity="0.83"/>
<circle cx="3" cy="-18" r="0.8" fill="#ffffff" opacity="0.64"/>
<circle cx="-93" cy="-42" r="1.1" fill="#ffffff" opacity="0.98"/>
<circle cx="4" cy="-121" r="0.8" fill="#ffc4ec" opacity="0.73"/>
<circle cx="12" cy="-124" r="1.2" fill="#ffc4ec" opacity="0.95"/>
<circle cx="-96" cy="-9" r="0.9" fill="#b48cff" opacity="0.84"/>
<circle cx="-4" cy="41" r="0.9" fill="#ffffff" opacity="0.67"/>
<circle cx="-48" cy="-112" r="1.0" fill="#c9a8ff" opacity="0.96"/>
<circle cx="-26" cy="38" r="1.4" fill="#e0c8ff" opacity="0.52"/>
<circle cx="101" cy="-89" r="0.8" fill="#b48cff" opacity="0.63"/>
<circle cx="-60" cy="-98" r="1.6" fill="#c9a8ff" opacity="0.50"/>
<circle cx="9" cy="18" r="1.4" fill="#ffe0f0" opacity="0.82"/>
<circle cx="-29" cy="-116" r="0.6" fill="#ffc4ec" opacity="0.54"/>
<circle cx="-5" cy="46" r="1.1" fill="#b48cff" opacity="0.75"/>
<circle cx="-41" cy="-111" r="1.0" fill="#c9a8ff" opacity="0.88"/>
<circle cx="-40" cy="-125" r="1.2" fill="#ffc4ec" opacity="0.82"/>
<circle cx="-25" cy="51" r="1.0" fill="#ffc4ec" opacity="0.77"/>
<circle cx="-83" cy="-87" r="1.1" fill="#ffffff" opacity="0.61"/>
<circle cx="-67" cy="-57" r="1.1" fill="#ffc4ec" opacity="0.75"/>
<circle cx="-11" cy="-108" r="1.3" fill="#c9a8ff" opacity="0.91"/>
<circle cx="6" cy="12" r="1.6" fill="#ffffff" opacity="0.73"/>
<circle cx="-1" cy="28" r="0.7" fill="#fff4e6" opacity="0.54"/>
<circle cx="-79" cy="20" r="1.0" fill="#a9c2ff" opacity="0.88"/>
<circle cx="-86" cy="-11" r="1.2" fill="#ffc4ec" opacity="0.80"/>
<circle cx="17" cy="-126" r="0.6" fill="#a9c2ff" opacity="0.50"/>
<circle cx="2" cy="34" r="0.7" fill="#c9a8ff" opacity="0.87"/>
<circle cx="-61" cy="-88" r="1.3" fill="#a9c2ff" opacity="0.47"/>
<circle cx="-31" cy="47" r="1.3" fill="#ffffff" opacity="0.67"/>
<circle cx="37" cy="-116" r="1.4" fill="#c9a8ff" opacity="0.62"/>
<circle cx="29" cy="31" r="0.9" fill="#ffffff" opacity="0.95"/>
<circle cx="0" cy="37" r="0.7" fill="#ffffff" opacity="0.82"/>
<circle cx="-57" cy="-77" r="1.3" fill="#c9a8ff" opacity="0.86"/>
<circle cx="57" cy="-134" r="1.2" fill="#ffffff" opacity="0.98"/>
<circle cx="50" cy="-113" r="1.3" fill="#ffc4ec" opacity="0.72"/>
<circle cx="-33" cy="-135" r="1.2" fill="#ffc4ec" opacity="0.81"/>
<circle cx="-24" cy="43" r="1.4" fill="#ffc4ec" opacity="0.53"/>
<circle cx="-45" cy="49" r="1.1" fill="#ffffff" opacity="0.95"/>
<circle cx="-84" cy="-2" r="0.7" fill="#ffffff" opacity="0.95"/>
<circle cx="-0" cy="-122" r="1.1" fill="#e0c8ff" opacity="0.92"/>
<circle cx="118" cy="-91" r="0.7" fill="#ffffff" opacity="0.68"/>
<circle cx="122" cy="-57" r="1.0" fill="#c9a8ff" opacity="0.61"/>
<circle cx="13" cy="-6" r="0.9" fill="#ffffff" opacity="0.85"/>
<circle cx="-59" cy="-88" r="0.7" fill="#c9a8ff" opacity="0.97"/>
<circle cx="-23" cy="48" r="1.5" fill="#a9c2ff" opacity="0.58"/>
<circle cx="-47" cy="49" r="1.0" fill="#e0c8ff" opacity="0.86"/>
<circle cx="100" cy="-104" r="0.8" fill="#b48cff" opacity="0.98"/>
<circle cx="-87" cy="-56" r="1.5" fill="#b48cff" opacity="0.51"/>
<circle cx="-61" cy="22" r="0.7" fill="#c9a8ff" opacity="0.74"/>
<circle cx="-62" cy="-98" r="1.5" fill="#a9c2ff" opacity="0.59"/>
<circle cx="42" cy="-124" r="0.6" fill="#e0c8ff" opacity="0.48"/>
<circle cx="-94" cy="-18" r="1.3" fill="#ffc4ec" opacity="0.64"/>
<circle cx="-6" cy="36" r="1.6" fill="#fff4e6" opacity="0.96"/>
<circle cx="-88" cy="-24" r="1.4" fill="#ffffff" opacity="0.59"/>
<circle cx="-78" cy="-33" r="1.1" fill="#ffc4ec" opacity="0.77"/>
<circle cx="7" cy="33" r="0.9" fill="#ffffff" opacity="0.56"/>
<circle cx="-41" cy="-90" r="1.5" fill="#ffc4ec" opacity="0.93"/>
<circle cx="-8" cy="35" r="0.7" fill="#fff4e6" opacity="0.59"/>
<circle cx="-14" cy="45" r="0.7" fill="#b48cff" opacity="0.57"/>
<circle cx="-79" cy="9" r="1.4" fill="#b48cff" opacity="0.71"/>
<circle cx="9" cy="34" r="1.1" fill="#fff4e6" opacity="0.95"/>
<circle cx="8" cy="14" r="1.3" fill="#ffffff" opacity="0.68"/>
<circle cx="107" cy="-112" r="0.9" fill="#a9c2ff" opacity="0.50"/>
<circle cx="-79" cy="-59" r="0.8" fill="#ffffff" opacity="0.70"/>
<circle cx="23" cy="-119" r="0.8" fill="#b48cff" opacity="0.64"/>
<circle cx="120" cy="-79" r="1.6" fill="#ffffff" opacity="0.93"/>
<circle cx="-86" cy="21" r="1.5" fill="#ffc4ec" opacity="0.52"/>
<circle cx="-33" cy="-113" r="1.1" fill="#b48cff" opacity="0.59"/>
<circle cx="3" cy="-114" r="0.7" fill="#ffc4ec" opacity="0.82"/>
<circle cx="2" cy="1" r="1.4" fill="#ffffff" opacity="0.86"/>
<circle cx="-56" cy="34" r="0.7" fill="#a9c2ff" opacity="0.47"/>
<circle cx="4" cy="-118" r="1.1" fill="#ffc4ec" opacity="0.61"/>
<circle cx="99" cy="-99" r="1.1" fill="#c9a8ff" opacity="0.92"/>
<circle cx="-38" cy="-112" r="0.6" fill="#e0c8ff" opacity="0.50"/>
<circle cx="40" cy="-109" r="1.3" fill="#c9a8ff" opacity="0.78"/>
<circle cx="-73" cy="-79" r="1.6" fill="#b48cff" opacity="0.88"/>
<circle cx="89" cy="-112" r="1.6" fill="#e0c8ff" opacity="0.67"/>
<circle cx="13" cy="-139" r="1.3" fill="#b48cff" opacity="0.74"/>
<circle cx="-30" cy="-130" r="0.9" fill="#b48cff" opacity="0.92"/>
<circle cx="-51" cy="-104" r="0.7" fill="#c9a8ff" opacity="0.75"/>
<circle cx="-82" cy="-8" r="1.3" fill="#c9a8ff" opacity="0.90"/>
<circle cx="-84" cy="-72" r="1.2" fill="#b48cff" opacity="0.64"/>
<circle cx="-75" cy="-7" r="0.8" fill="#e0c8ff" opacity="0.58"/>
<circle cx="-45" cy="32" r="1.0" fill="#ffc4ec" opacity="0.45"/>
<circle cx="114" cy="-90" r="1.2" fill="#ffffff" opacity="0.91"/>
<circle cx="0" cy="47" r="0.6" fill="#ffe0f0" opacity="0.59"/>
<circle cx="-12" cy="56" r="1.1" fill="#c9a8ff" opacity="0.62"/>
<circle cx="-78" cy="-38" r="0.8" fill="#ffffff" opacity="0.90"/>
<circle cx="78" cy="-118" r="0.8" fill="#e0c8ff" opacity="0.75"/>
<circle cx="4" cy="30" r="1.4" fill="#b48cff" opacity="0.93"/>
<circle cx="103" cy="-98" r="1.2" fill="#b48cff" opacity="0.98"/>
<circle cx="101" cy="-96" r="1.3" fill="#c9a8ff" opacity="0.58"/>
<circle cx="-72" cy="22" r="0.8" fill="#e0c8ff" opacity="0.81"/>
<circle cx="13" cy="21" r="0.8" fill="#fff4e6" opacity="0.55"/>
<circle cx="-56" cy="55" r="0.7" fill="#b48cff" opacity="0.96"/>
<circle cx="6" cy="-2" r="1.4" fill="#fff4e6" opacity="0.58"/>
<circle cx="-85" cy="-39" r="1.2" fill="#a9c2ff" opacity="1.00"/>
<circle cx="-34" cy="-117" r="1.6" fill="#c9a8ff" opacity="0.87"/>
<circle cx="4" cy="49" r="1.3" fill="#b48cff" opacity="0.49"/>
<circle cx="-25" cy="-113" r="1.4" fill="#a9c2ff" opacity="0.60"/>
<circle cx="-98" cy="-54" r="1.3" fill="#c9a8ff" opacity="0.54"/>
<circle cx="24" cy="-131" r="1.0" fill="#a9c2ff" opacity="0.64"/>
<circle cx="-84" cy="6" r="0.7" fill="#ffc4ec" opacity="0.65"/>
<circle cx="3" cy="30" r="0.7" fill="#fff4e6" opacity="0.98"/>
<circle cx="77" cy="-119" r="1.2" fill="#ffc4ec" opacity="0.98"/>
<circle cx="-85" cy="-50" r="1.1" fill="#b48cff" opacity="0.77"/>
<circle cx="7" cy="4" r="1.0" fill="#ffffff" opacity="0.60"/>
<circle cx="53" cy="-125" r="1.5" fill="#c9a8ff" opacity="0.71"/>
<circle cx="67" cy="-118" r="0.7" fill="#c9a8ff" opacity="0.94"/>
<circle cx="-46" cy="29" r="1.5" fill="#e0c8ff" opacity="0.95"/>
<circle cx="9" cy="24" r="0.8" fill="#ffffff" opacity="0.71"/>
<circle cx="-78" cy="-8" r="1.4" fill="#ffc4ec" opacity="0.61"/>
<circle cx="24" cy="34" r="1.2" fill="#fff4e6" opacity="0.79"/>
<circle cx="86" cy="-111" r="0.9" fill="#ffc4ec" opacity="0.61"/>
<circle cx="97" cy="-102" r="1.0" fill="#e0c8ff" opacity="0.59"/>
<circle cx="-31" cy="-115" r="0.8" fill="#a9c2ff" opacity="0.62"/>
<circle cx="-32" cy="60" r="0.6" fill="#a9c2ff" opacity="0.79"/>
<circle cx="14" cy="11" r="0.8" fill="#fff4e6" opacity="0.48"/>
<circle cx="18" cy="19" r="1.3" fill="#ffffff" opacity="0.90"/>
<circle cx="18" cy="13" r="1.4" fill="#fff4e6" opacity="0.83"/>
<circle cx="13" cy="32" r="1.6" fill="#fff4e6" opacity="0.93"/>
<circle cx="-7" cy="19" r="1.1" fill="#ffffff" opacity="0.57"/>
<circle cx="-43" cy="-110" r="0.7" fill="#c9a8ff" opacity="0.55"/>
<circle cx="-88" cy="-58" r="1.2" fill="#b48cff" opacity="0.78"/>
<circle cx="-2" cy="-5" r="0.7" fill="#fff4e6" opacity="0.55"/>
<circle cx="-8" cy="-9" r="1.0" fill="#ffe0f0" opacity="0.98"/>
<circle cx="93" cy="50" r="1.1" fill="#a9c2ff" opacity="0.66"/>
<circle cx="88" cy="50" r="1.3" fill="#c9a8ff" opacity="0.46"/>
<circle cx="97" cy="0" r="0.7" fill="#ffffff" opacity="0.51"/>
<circle cx="-9" cy="-26" r="1.0" fill="#fff4e6" opacity="0.59"/>
<circle cx="-62" cy="106" r="1.2" fill="#ffffff" opacity="0.46"/>
<circle cx="-47" cy="140" r="1.0" fill="#a9c2ff" opacity="0.88"/>
<circle cx="65" cy="91" r="0.9" fill="#c9a8ff" opacity="0.81"/>
<circle cx="83" cy="-19" r="0.9" fill="#e0c8ff" opacity="0.71"/>
<circle cx="-87" cy="116" r="0.6" fill="#ffc4ec" opacity="0.75"/>
<circle cx="52" cy="-40" r="1.2" fill="#a9c2ff" opacity="0.81"/>
<circle cx="87" cy="21" r="0.9" fill="#c9a8ff" opacity="0.82"/>
<circle cx="-3" cy="-28" r="1.6" fill="#ffffff" opacity="0.99"/>
<circle cx="27" cy="-45" r="1.3" fill="#ffc4ec" opacity="0.45"/>
<circle cx="-18" cy="-9" r="1.2" fill="#fff4e6" opacity="0.63"/>
<circle cx="-16" cy="103" r="0.8" fill="#ffffff" opacity="0.53"/>
<circle cx="-12" cy="-11" r="0.9" fill="#fff4e6" opacity="0.95"/>
<circle cx="-9" cy="119" r="1.3" fill="#e0c8ff" opacity="0.84"/>
<circle cx="85" cy="-15" r="0.9" fill="#b48cff" opacity="0.65"/>
<circle cx="62" cy="-28" r="0.9" fill="#ffffff" opacity="0.50"/>
<circle cx="81" cy="21" r="1.0" fill="#ffc4ec" opacity="0.89"/>
<circle cx="-7" cy="-40" r="1.5" fill="#e0c8ff" opacity="0.76"/>
<circle cx="76" cy="13" r="1.3" fill="#c9a8ff" opacity="0.66"/>
<circle cx="10" cy="-45" r="0.9" fill="#b48cff" opacity="0.89"/>
<circle cx="80" cy="68" r="1.4" fill="#ffc4ec" opacity="0.91"/>
<circle cx="6" cy="-46" r="1.3" fill="#ffc4ec" opacity="0.72"/>
<circle cx="80" cy="40" r="0.7" fill="#ffc4ec" opacity="0.82"/>
<circle cx="-23" cy="126" r="1.6" fill="#ffffff" opacity="0.60"/>
<circle cx="92" cy="31" r="1.4" fill="#a9c2ff" opacity="0.65"/>
<circle cx="30" cy="-54" r="1.3" fill="#c9a8ff" opacity="0.83"/>
<circle cx="4" cy="-36" r="1.5" fill="#e0c8ff" opacity="0.63"/>
<circle cx="4" cy="-1" r="0.8" fill="#fff4e6" opacity="0.85"/>
<circle cx="83" cy="10" r="1.2" fill="#e0c8ff" opacity="0.86"/>
<circle cx="-1" cy="-25" r="1.3" fill="#ffe0f0" opacity="0.75"/>
<circle cx="-28" cy="115" r="0.7" fill="#e0c8ff" opacity="0.71"/>
<circle cx="22" cy="122" r="0.9" fill="#a9c2ff" opacity="0.49"/>
<circle cx="-81" cy="118" r="1.5" fill="#ffffff" opacity="0.75"/>
<circle cx="11" cy="107" r="0.7" fill="#b48cff" opacity="0.73"/>
<circle cx="8" cy="125" r="0.6" fill="#ffffff" opacity="0.81"/>
<circle cx="-14" cy="-41" r="0.9" fill="#ffe0f0" opacity="0.89"/>
<circle cx="-63" cy="113" r="0.8" fill="#e0c8ff" opacity="0.64"/>
<circle cx="57" cy="-41" r="0.9" fill="#b48cff" opacity="0.74"/>
<circle cx="18" cy="-49" r="1.2" fill="#a9c2ff" opacity="0.64"/>
<circle cx="63" cy="83" r="0.8" fill="#e0c8ff" opacity="0.55"/>
<circle cx="90" cy="81" r="1.1" fill="#b48cff" opacity="0.84"/>
<circle cx="32" cy="115" r="1.4" fill="#ffc4ec" opacity="0.75"/>
<circle cx="19" cy="110" r="0.7" fill="#c9a8ff" opacity="0.88"/>
<circle cx="-31" cy="135" r="1.5" fill="#b48cff" opacity="0.49"/>
<circle cx="-53" cy="128" r="1.4" fill="#b48cff" opacity="0.46"/>
<circle cx="-8" cy="-31" r="0.7" fill="#ffe0f0" opacity="0.77"/>
<circle cx="72" cy="85" r="1.5" fill="#ffc4ec" opacity="0.61"/>
<circle cx="99" cy="52" r="1.4" fill="#ffc4ec" opacity="0.48"/>
<circle cx="-3" cy="-33" r="0.9" fill="#ffffff" opacity="0.89"/>
<circle cx="13" cy="-41" r="1.0" fill="#a9c2ff" opacity="0.73"/>
<circle cx="56" cy="-31" r="0.6" fill="#ffc4ec" opacity="0.94"/>
<circle cx="96" cy="52" r="1.5" fill="#a9c2ff" opacity="0.48"/>
<circle cx="79" cy="71" r="0.6" fill="#ffc4ec" opacity="0.46"/>
<circle cx="-4" cy="-27" r="0.8" fill="#ffffff" opacity="0.68"/>
<circle cx="-33" cy="117" r="0.8" fill="#c9a8ff" opacity="0.67"/>
<circle cx="-15" cy="-12" r="1.1" fill="#ffffff" opacity="0.50"/>
<circle cx="69" cy="-31" r="1.4" fill="#ffc4ec" opacity="0.87"/>
<circle cx="105" cy="60" r="1.1" fill="#e0c8ff" opacity="0.46"/>
<circle cx="81" cy="-13" r="1.3" fill="#a9c2ff" opacity="0.75"/>
<circle cx="-54" cy="125" r="0.7" fill="#b48cff" opacity="0.94"/>
<circle cx="16" cy="-54" r="0.6" fill="#ffc4ec" opacity="0.65"/>
<circle cx="20" cy="122" r="0.7" fill="#ffffff" opacity="0.83"/>
<circle cx="-80" cy="110" r="1.1" fill="#c9a8ff" opacity="0.86"/>
<circle cx="61" cy="88" r="1.5" fill="#b48cff" opacity="0.55"/>
<circle cx="26" cy="-53" r="1.0" fill="#a9c2ff" opacity="0.68"/>
<circle cx="-11" cy="-41" r="1.4" fill="#a9c2ff" opacity="0.57"/>
<circle cx="52" cy="-28" r="0.8" fill="#c9a8ff" opacity="0.53"/>
<circle cx="-28" cy="134" r="1.3" fill="#b48cff" opacity="0.55"/>
<circle cx="-79" cy="123" r="1.2" fill="#c9a8ff" opacity="0.50"/>
<circle cx="92" cy="18" r="1.1" fill="#ffc4ec" opacity="0.68"/>
<circle cx="-14" cy="-13" r="1.4" fill="#ffe0f0" opacity="0.73"/>
<circle cx="-80" cy="110" r="1.1" fill="#e0c8ff" opacity="0.74"/>
<circle cx="54" cy="110" r="1.6" fill="#ffffff" opacity="0.65"/>
<circle cx="-135" cy="60" r="0.8" fill="#c9a8ff" opacity="0.86"/>
<circle cx="-2" cy="1" r="1.0" fill="#ffe0f0" opacity="0.51"/>
<circle cx="16" cy="122" r="1.2" fill="#b48cff" opacity="0.74"/>
<circle cx="-8" cy="-33" r="0.7" fill="#ffe0f0" opacity="0.65"/>
<circle cx="-77" cy="130" r="1.5" fill="#b48cff" opacity="0.97"/>
<circle cx="75" cy="72" r="0.7" fill="#c9a8ff" opacity="0.90"/>
<circle cx="15" cy="-49" r="1.6" fill="#c9a8ff" opacity="0.54"/>
<circle cx="-57" cy="123" r="1.0" fill="#ffc4ec" opacity="0.93"/>
<circle cx="49" cy="119" r="1.4" fill="#ffffff" opacity="0.84"/>
<circle cx="-72" cy="131" r="0.7" fill="#a9c2ff" opacity="0.90"/>
<circle cx="-39" cy="130" r="1.4" fill="#c9a8ff" opacity="0.59"/>
<circle cx="-17" cy="5" r="1.2" fill="#ffe0f0" opacity="0.85"/>
<circle cx="76" cy="81" r="1.1" fill="#e0c8ff" opacity="0.54"/>
<circle cx="45" cy="-48" r="0.6" fill="#ffc4ec" opacity="0.69"/>
<circle cx="-113" cy="101" r="0.6" fill="#b48cff" opacity="0.89"/>
<circle cx="-8" cy="119" r="1.3" fill="#a9c2ff" opacity="0.99"/>
<circle cx="51" cy="-43" r="1.4" fill="#c9a8ff" opacity="0.59"/>
<circle cx="-92" cy="104" r="1.5" fill="#ffc4ec" opacity="0.85"/>
<circle cx="-10" cy="-10" r="1.4" fill="#ffe0f0" opacity="0.69"/>
<circle cx="13" cy="-41" r="1.0" fill="#c9a8ff" opacity="0.52"/>
<circle cx="-85" cy="111" r="1.2" fill="#ffc4ec" opacity="0.48"/>
<circle cx="86" cy="21" r="1.0" fill="#ffffff" opacity="0.62"/>
<circle cx="53" cy="101" r="1.2" fill="#ffffff" opacity="0.98"/>
<circle cx="-33" cy="130" r="0.7" fill="#c9a8ff" opacity="0.93"/>
<circle cx="82" cy="62" r="1.5" fill="#ffffff" opacity="0.61"/>
<circle cx="32" cy="-58" r="1.3" fill="#b48cff" opacity="0.46"/>
<circle cx="-14" cy="135" r="0.8" fill="#b48cff" opacity="0.99"/>
<circle cx="69" cy="55" r="0.9" fill="#ffc4ec" opacity="0.50"/>
<circle cx="-8" cy="-34" r="1.4" fill="#ffe0f0" opacity="0.81"/>
<circle cx="43" cy="-42" r="0.7" fill="#b48cff" opacity="0.90"/>
<circle cx="65" cy="83" r="1.3" fill="#e0c8ff" opacity="0.58"/>
<circle cx="90" cy="2" r="0.8" fill="#ffc4ec" opacity="0.63"/>
<circle cx="62" cy="71" r="1.1" fill="#ffc4ec" opacity="0.60"/>
<circle cx="78" cy="16" r="0.8" fill="#ffffff" opacity="0.74"/>
<circle cx="59" cy="93" r="1.5" fill="#a9c2ff" opacity="0.73"/>
<circle cx="11" cy="124" r="0.8" fill="#e0c8ff" opacity="0.98"/>
<circle cx="81" cy="-8" r="0.8" fill="#e0c8ff" opacity="0.80"/>
<circle cx="-72" cy="132" r="1.1" fill="#b48cff" opacity="0.78"/>
<circle cx="74" cy="-32" r="1.4" fill="#ffc4ec" opacity="0.55"/>
<circle cx="59" cy="-28" r="1.1" fill="#a9c2ff" opacity="0.84"/>
<circle cx="71" cy="90" r="1.4" fill="#b48cff" opacity="0.93"/>
<circle cx="40" cy="-47" r="0.6" fill="#ffffff" opacity="0.58"/>
<circle cx="-9" cy="-17" r="0.7" fill="#ffffff" opacity="0.98"/>
<circle cx="14" cy="112" r="1.4" fill="#c9a8ff" opacity="0.85"/>
<circle cx="6" cy="-42" r="1.6" fill="#b48cff" opacity="0.54"/>
<circle cx="-16" cy="-26" r="0.9" fill="#ffffff" opacity="0.94"/>
<circle cx="6" cy="126" r="1.0" fill="#b48cff" opacity="0.83"/>
<circle cx="5" cy="128" r="1.1" fill="#ffc4ec" opacity="0.59"/>
<circle cx="23" cy="111" r="1.0" fill="#ffffff" opacity="0.70"/>
<circle cx="-3" cy="-29" r="1.5" fill="#ffe0f0" opacity="0.81"/>
<circle cx="85" cy="18" r="0.8" fill="#a9c2ff" opacity="0.89"/>
<circle cx="1" cy="6" r="1.4" fill="#fff4e6" opacity="0.52"/>
<circle cx="75" cy="15" r="1.2" fill="#ffffff" opacity="0.81"/>
<circle cx="51" cy="-31" r="0.7" fill="#ffffff" opacity="0.75"/>
<circle cx="92" cy="28" r="0.8" fill="#b48cff" opacity="0.50"/>
<circle cx="48" cy="98" r="1.2" fill="#e0c8ff" opacity="0.95"/>
<circle cx="-18" cy="-19" r="0.9" fill="#fff4e6" opacity="0.85"/>
<circle cx="-13" cy="-12" r="1.5" fill="#ffffff" opacity="0.97"/>
<circle cx="51" cy="-39" r="1.0" fill="#ffffff" opacity="0.99"/>
<circle cx="-15" cy="-44" r="0.6" fill="#c9a8ff" opacity="0.52"/>
<circle cx="-28" cy="127" r="1.1" fill="#c9a8ff" opacity="0.56"/>
<circle cx="6" cy="-49" r="1.2" fill="#c9a8ff" opacity="0.49"/>
<circle cx="82" cy="51" r="1.0" fill="#ffc4ec" opacity="0.99"/>
<circle cx="52" cy="97" r="0.7" fill="#a9c2ff" opacity="0.67"/>
<circle cx="-23" cy="123" r="1.4" fill="#e0c8ff" opacity="0.86"/>
<circle cx="55" cy="-35" r="1.6" fill="#b48cff" opacity="0.62"/>
<circle cx="-114" cy="94" r="1.5" fill="#e0c8ff" opacity="0.79"/>
<circle cx="-48" cy="118" r="1.2" fill="#ffffff" opacity="0.88"/>
<circle cx="-11" cy="-40" r="1.6" fill="#fff4e6" opacity="0.64"/>
<circle cx="8" cy="-58" r="1.5" fill="#a9c2ff" opacity="0.79"/>
<circle cx="1" cy="-45" r="1.5" fill="#ffc4ec" opacity="0.76"/>
<circle cx="-88" cy="102" r="1.5" fill="#ffc4ec" opacity="0.56"/>
<circle cx="10" cy="148" r="1.6" fill="#b48cff" opacity="1.00"/>
<circle cx="86" cy="12" r="8" fill="url(#n4)"/>
<circle cx="-85" cy="-44" r="8" fill="url(#n4)"/>
<circle cx="29" cy="-128" r="9" fill="url(#n4)"/>
<circle cx="41" cy="108" r="10" fill="url(#n4)"/>
<circle cx="59" cy="92" r="8" fill="url(#n4)"/>
<circle cx="-79" cy="-62" r="8" fill="url(#n4)"/>
<circle cx="-56" cy="38" r="10" fill="url(#n4)"/>
<circle cx="54" cy="97" r="9" fill="url(#n4)"/>
</g>
<circle class="pulse" r="57" fill="url(#core)"/>
</g></g>
<g transform="translate(140 150) rotate(20) scale(1 0.4)"><circle r="41.6" fill="url(#halo)"/><circle r="16" fill="url(#core)"/></g>
<g transform="translate(1480 680) rotate(-40) scale(1 0.4)"><circle r="35.2" fill="url(#halo)"/><circle r="13" fill="url(#core)"/></g>
<g transform="translate(980 110) rotate(60) scale(1 0.4)"><circle r="22.400000000000002" fill="url(#halo)"/><circle r="8" fill="url(#core)"/></g>
<g transform="translate(560 930) rotate(-15) scale(1 0.4)"><circle r="25.6" fill="url(#halo)"/><circle r="10" fill="url(#core)"/></g>
<g transform="translate(1520 930) rotate(10) scale(1 0.4)"><circle r="28.8" fill="url(#halo)"/><circle r="11" fill="url(#core)"/></g>
<g transform="translate(60 520) rotate(45) scale(1 0.4)"><circle r="19.200000000000003" fill="url(#halo)"/><circle r="7" fill="url(#core)"/></g>
<g class="tw d" style="animation-delay:-7.4s"><circle cx="1492" cy="494" r="16" fill="url(#glow)"/><path d="M1481 494H1502M1492 484V504" stroke="#f1eaff" stroke-width="0.6" stroke-opacity="0.7"/><circle cx="1492" cy="494" r="1.8" fill="#ffffff"/></g>
<g class="tw c" style="animation-delay:-5.6s"><circle cx="45" cy="623" r="18" fill="url(#glow)"/><path d="M34 623H57M45 612V635" stroke="#f1eaff" stroke-width="0.6" stroke-opacity="0.7"/><circle cx="45" cy="623" r="1.8" fill="#ffffff"/></g>
<g class="tw c" style="animation-delay:-6.5s"><circle cx="195" cy="877" r="18" fill="url(#glow)"/><path d="M184 877H206M195 866V888" stroke="#f1eaff" stroke-width="0.6" stroke-opacity="0.7"/><circle cx="195" cy="877" r="1.8" fill="#ffffff"/></g>
<g class="tw d" style="animation-delay:-1.8s"><circle cx="1367" cy="868" r="23" fill="url(#glow)"/><path d="M1353 868H1381M1367 854V883" stroke="#f1eaff" stroke-width="0.6" stroke-opacity="0.7"/><circle cx="1367" cy="868" r="1.8" fill="#ffffff"/></g>
<g class="tw d" style="animation-delay:-4.4s"><circle cx="1367" cy="698" r="20" fill="url(#glow)"/><path d="M1354 698H1379M1367 686V711" stroke="#f1eaff" stroke-width="0.6" stroke-opacity="0.7"/><circle cx="1367" cy="698" r="1.8" fill="#ffffff"/></g>
<g class="tw c" style="animation-delay:-3.5s"><circle cx="1445" cy="640" r="16" fill="url(#glow)"/><path d="M1435 640H1455M1445 630V650" stroke="#f1eaff" stroke-width="0.6" stroke-opacity="0.7"/><circle cx="1445" cy="640" r="1.8" fill="#ffffff"/></g>
<g class="tw d" style="animation-delay:-2.7s"><circle cx="144" cy="449" r="17" fill="url(#glow)"/><path d="M133 449H154M144 439V460" stroke="#f1eaff" stroke-width="0.6" stroke-opacity="0.7"/><circle cx="144" cy="449" r="1.8" fill="#ffffff"/></g>
<g class="tw d" style="animation-delay:-0.8s"><circle cx="393" cy="424" r="21" fill="url(#glow)"/><path d="M380 424H406M393 411V437" stroke="#f1eaff" stroke-width="0.6" stroke-opacity="0.7"/><circle cx="393" cy="424" r="1.8" fill="#ffffff"/></g>
<g class="tw d" style="animation-delay:-3.4s"><circle cx="296" cy="783" r="15" fill="url(#glow)"/><path d="M287 783H305M296 774V792" stroke="#f1eaff" stroke-width="0.6" stroke-opacity="0.7"/><circle cx="296" cy="783" r="1.8" fill="#ffffff"/></g>
<g class="tw c" style="animation-delay:-0.8s"><circle cx="1349" cy="748" r="20" fill="url(#glow)"/><path d="M1336 748H1361M1349 735V760" stroke="#f1eaff" stroke-width="0.6" stroke-opacity="0.7"/><circle cx="1349" cy="748" r="1.8" fill="#ffffff"/></g>
<g class="shoot"><path d="M1000 70 l-130 65" stroke="url(#trail)" stroke-width="2" stroke-linecap="round"/></g>
<g class="shoot2"><path d="M760 40 l-110 55" stroke="url(#trail)" stroke-width="1.6" stroke-linecap="round"/></g>
</svg>`
