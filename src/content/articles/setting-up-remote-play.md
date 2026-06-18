---
title: "Setting Up Remote Play: How to Stream Your PS5 or PC to Your Handheld"
category: "How-To"
date: "2026-02-17"
readTime: "9 min read"
tags: ["remote play", "streaming"]
description: "Remote play is the most underappreciated capability of modern handheld gaming PCs. Your ROG Xbox Ally X or Steam Deck OLED packs enough raw power to run AAA games natively at 30-60 FPS, but there are scenarios where streaming from a more powerful hos..."
---

<p>Remote play is the most underappreciated capability of modern handheld gaming PCs. Your ROG Xbox Ally X or Steam Deck OLED packs enough raw power to run AAA games natively at <code>30-60 FPS</code>, but there are scenarios where streaming from a more powerful host makes far more sense: playing graphically demanding titles that push the handheld's APU to its wattage limits, accessing your full game library without managing storage space, or simply preserving battery life by offloading rendering to a desktop PC plugged into the wall [^195^][^222^]. When your handheld acts only as a display and input device, it can throttle its own APU to <code>5W</code> and stretch battery life to <code>6-8 hours</code> while the host PC does the heavy lifting [^222^].</p>
<p>The remote play landscape in 2026 has four viable options, each with distinct latency characteristics, image quality, setup complexity, and ecosystem lock-in. This guide covers all four: Moonlight paired with Sunshine for local PC streaming, Steam Remote Play for Steam library access, Chiaki-ng for PS5 streaming, and Xbox Remote Play for Game Pass and Xbox titles. By the end, you will know which solution fits your use case and exactly how to configure it for minimum latency and maximum visual fidelity.</p>
<h2>What You Need</h2>
<h3>Universal Requirements</h3>
<ul>
<li>A handheld gaming PC (Steam Deck OLED, ROG Xbox Ally X, Legion Go 2, MSI Claw 8 AI+, or similar)</li>
<li>A <code>5 GHz</code> Wi-Fi 6 or Wi-Fi 6E network (Wi-Fi 5 works but adds <code>5-15 ms</code> of latency)</li>
<li>Your host device (gaming PC, PS5, or Xbox Series X/S) connected to the same local network via <strong>Ethernet</strong> (strongly recommended)</li>
<li>A router that supports <code>5 GHz</code> band with adequate range to your gaming location</li>
</ul>
<h3>Host PC Requirements (for Moonlight/Steam Remote Play)</h3>
<ul>
<li>Windows 10/11 PC with a dedicated GPU (NVIDIA GeForce GTX 600+, AMD RX 5000+, or Intel Arc)</li>
<li>Wired Ethernet connection to your router</li>
<li>The latest GPU drivers from NVIDIA, AMD, or Intel</li>
</ul>
<h3>Console Requirements</h3>
<ul>
<li><strong>PS5:</strong> Firmware updated, Remote Play enabled in system settings</li>
<li><strong>Xbox Series X/S:</strong> Game Pass Ultimate subscription for cloud streaming, or local console streaming enabled</li>
</ul>
<h3>Network Bandwidth Requirements</h3>
<table>
<thead>
<tr>
<th>Stream Quality</th>
<th>Resolution</th>
<th>Bitrate</th>
<th>Minimum Bandwidth</th>
<th>Recommended Bandwidth</th>
</tr>
</thead>
<tbody><tr>
<td><strong>Low (mobile/away from home)</strong></td>
<td><code>720p</code> @ <code>60 FPS</code></td>
<td><code>10 Mbps</code></td>
<td><code>15 Mbps</code> upload (host)</td>
<td><code>25 Mbps</code> upload</td>
</tr>
<tr>
<td><strong>Standard (local Wi-Fi)</strong></td>
<td><code>1080p</code> @ <code>60 FPS</code></td>
<td><code>20 Mbps</code></td>
<td><code>30 Mbps</code> upload (host)</td>
<td><code>50 Mbps</code> upload</td>
</tr>
<tr>
<td><strong>High (local Wi-Fi, good router)</strong></td>
<td><code>1440p</code> @ <code>60 FPS</code></td>
<td><code>40 Mbps</code></td>
<td><code>50 Mbps</code> upload (host)</td>
<td><code>100 Mbps</code> upload</td>
</tr>
<tr>
<td><strong>Ultra (local, ideal conditions)</strong></td>
<td><code>4K</code> @ <code>60 FPS</code></td>
<td><code>80-150 Mbps</code></td>
<td><code>150 Mbps</code> upload (host)</td>
<td><code>1 Gbps</code> LAN</td>
</tr>
</tbody></table>
<p>These bandwidth figures refer to your <strong>local network throughput</strong>, not your internet speed. Local streaming does not use your internet connection at all, provided both devices are on the same LAN [^216^][^220^].</p>
<h2>Option Comparison: Choose Your Streaming Solution</h2>
<table>
<thead>
<tr>
<th>Feature</th>
<th>Moonlight + Sunshine</th>
<th>Steam Remote Play</th>
<th>Chiaki-ng (PS5)</th>
<th>Xbox Cloud Gaming</th>
</tr>
</thead>
<tbody><tr>
<td><strong>Latency</strong></td>
<td>Very Low (<code>5-15 ms</code>)</td>
<td>Low (<code>15-30 ms</code>)</td>
<td>Low (<code>15-25 ms</code>)</td>
<td>High (<code>50-120 ms</code>)</td>
</tr>
<tr>
<td><strong>Image quality</strong></td>
<td>Excellent (up to <code>4K HDR</code>)</td>
<td>Good (<code>1080p</code> max)</td>
<td>Good (<code>1080p</code>)</td>
<td>Good (depends on server)</td>
</tr>
<tr>
<td><strong>Setup difficulty</strong></td>
<td>Moderate</td>
<td>Easy</td>
<td>Moderate</td>
<td>Easy</td>
</tr>
<tr>
<td><strong>Host GPU support</strong></td>
<td>AMD, NVIDIA, Intel</td>
<td>NVIDIA best; AMD/Intel OK</td>
<td>N/A (console)</td>
<td>N/A (cloud)</td>
</tr>
<tr>
<td><strong>Local network required?</strong></td>
<td>Yes (optimal)</td>
<td>No (works over internet)</td>
<td>Yes</td>
<td>No (internet only)</td>
</tr>
<tr>
<td><strong>Platform support</strong></td>
<td>Steam Deck, Windows, Linux, Android</td>
<td>Steam Deck, Windows, Linux, mobile</td>
<td>Steam Deck (Linux)</td>
<td>Browser-based, any device</td>
</tr>
<tr>
<td><strong>HDR support</strong></td>
<td>Yes</td>
<td>Limited</td>
<td>No</td>
<td>Limited</td>
</tr>
<tr>
<td><strong>Best use case</strong></td>
<td>Local PC streaming</td>
<td>Steam library anywhere</td>
<td>PS5 exclusives</td>
<td>Game Pass cloud games</td>
</tr>
</tbody></table>
<p>Moonlight paired with Sunshine is the gold standard for local PC streaming. It delivers the lowest latency, the highest image quality, and the most customization of any solution [^195^][^216^]. Steam Remote Play is the easiest to set up but produces higher latency and lower visual fidelity. Chiaki-ng is the only practical option for PS5 streaming to a handheld. Xbox Cloud Gaming requires no setup but introduces internet-dependent latency that makes it unsuitable for fast-paced games [^196^][^201^].</p>
<h2>Option 1: Moonlight + Sunshine (Recommended for PC Streaming)</h2>
<p>Moonlight is an open-source game streaming client derived from NVIDIA's GameStream protocol. Sunshine is the open-source host server that replaced NVIDIA's proprietary GameStream server, which NVIDIA discontinued. Together they form a fully open-source, cross-platform streaming stack that outperforms every commercial alternative for local network gaming [^195^][^220^].</p>
<h3>Why Moonlight/Sunshine Over Steam Remote Play</h3>
<p>Independent testing and community benchmarks consistently show Moonlight/Sunshine delivering lower latency, better image quality at equivalent bitrates, more stable connections, and broader codec support including HEVC (H.265) and AV1 [^195^][^221^]. Steam Remote Play is convenient for its zero-configuration setup and internet streaming capability, but its encoder produces more compression artifacts and its latency is <code>10-20 ms</code> higher than Moonlight under identical network conditions [^221^].</p>
<h3>Step 1: Install Sunshine on Your Host PC</h3>
<ol>
<li>On your gaming PC, download the latest Sunshine release from GitHub (<code>LizardByte/Sunshine</code>).</li>
<li>Run the installer. Sunshine installs as a Windows service that starts automatically.</li>
<li>Open the Sunshine web interface by navigating to <code>https://localhost:47990</code> in your browser.</li>
<li>Create a username and password on first launch.</li>
<li>Go to the <strong>Configuration</strong> tab and verify your encoder settings:<ul>
<li><strong>Encoder:</strong> Select your GPU (NVIDIA NVENC, AMD AMF, or Intel QuickSync)</li>
<li><strong>Resolution:</strong> Match your handheld's display (<code>1280x800</code> for Steam Deck, <code>1920x1080</code> for ROG Ally X)</li>
<li><strong>FPS:</strong> <code>60</code> or <code>120</code> if your handheld supports high refresh</li>
<li><strong>Bitrate:</strong> Start with <code>20 Mbps</code> for <code>1080p</code>, adjust based on network quality</li>
</ul>
</li>
</ol>
<h3>Step 2: Install Moonlight on Your Handheld</h3>
<p><strong>Steam Deck:</strong></p>
<ol>
<li>Switch to Desktop Mode.</li>
<li>Open the <strong>Discover</strong> software store.</li>
<li>Search for <strong>"Moonlight"</strong> and install the Flatpak version.</li>
<li>Return to Gaming Mode.</li>
</ol>
<p><strong>Windows Handhelds (ROG Ally X, Legion Go 2, MSI Claw):</strong></p>
<ol>
<li>Download Moonlight from the official website or Microsoft Store.</li>
<li>Install and launch.</li>
</ol>
<h3>Step 3: Pair the Devices</h3>
<ol>
<li>Launch <strong>Moonlight</strong> on your handheld.</li>
<li>It will scan your local network and detect the Sunshine host automatically.</li>
<li>Click the detected PC. Moonlight will display a <strong>PIN</strong>.</li>
<li>On your host PC, open the Sunshine web interface (<code>https://localhost:47990</code>), go to the <strong>PIN</strong> tab, and enter the PIN from Moonlight.</li>
<li>The devices are now paired. Your PC will appear in Moonlight's device list permanently.</li>
</ol>
<h3>Step 4: Add Games to Sunshine</h3>
<p>In the Sunshine web interface, navigate to the <strong>Applications</strong> tab. Here you define which games and apps Moonlight can launch. The default entry is "Desktop," which streams your entire Windows desktop. Add individual games by clicking <strong>Add New</strong> and filling in:</p>
<ul>
<li><strong>Name:</strong> The game's display name</li>
<li><strong>Command:</strong> The full path to the game's executable</li>
<li><strong>Image:</strong> Optional box art (Moonlight displays this in the client)</li>
</ul>
<p>Save each entry. These will appear as selectable tiles in Moonlight on your handheld.</p>
<h3>Step 5: Latency Optimization</h3>
<p>To achieve the lowest possible latency, apply these settings in the Sunshine web interface [^216^][^222^]:</p>
<table>
<thead>
<tr>
<th>Setting</th>
<th>Recommended Value</th>
<th>Notes</th>
</tr>
</thead>
<tbody><tr>
<td><strong>Video codec</strong></td>
<td><code>H.264</code> (compatibility) or <code>HEVC/H.265</code> (quality/efficiency)</td>
<td>HEVC reduces bandwidth by <code>~40%</code> at equivalent quality; requires decode support on handheld</td>
</tr>
<tr>
<td><strong>Bitrate</strong></td>
<td><code>20-40 Mbps</code> for <code>1080p</code>; <code>40-80 Mbps</code> for <code>1440p</code></td>
<td>Higher is better quality but more latency; start at <code>20 Mbps</code> and increase</td>
</tr>
<tr>
<td><strong>Frame pacing</strong></td>
<td>Enabled</td>
<td>Reduces micro-stutter</td>
</tr>
<tr>
<td><strong>V-sync</strong></td>
<td>Disabled on host</td>
<td>Adds <code>1-2</code> frames of latency; leave off for streaming</td>
</tr>
<tr>
<td><strong>Audio buffer</strong></td>
<td><code>Min</code></td>
<td>Reduces audio latency at cost of occasional crackles</td>
</tr>
</tbody></table>
<p>Additional network optimizations:</p>
<ul>
<li><strong>Use Ethernet on the host PC.</strong> Wi-Fi on the host adds <code>5-20 ms</code> of unpredictable latency.</li>
<li><strong>Use <code>5 GHz</code> Wi-Fi on the handheld.</strong> The <code>2.4 GHz</code> band introduces severe interference and packet loss.</li>
<li><strong>Position your router</strong> within line-of-sight of your gaming location if possible.</li>
<li><strong>Enable QoS</strong> on your router and prioritize the host PC's IP address.</li>
</ul>
<h2>Option 2: Steam Remote Play (Easiest Setup)</h2>
<p>Steam Remote Play is built into the Steam client and requires no additional software installation. It works both locally and over the internet, making it the best choice for streaming your Steam library when you are away from home [^193^].</p>
<h3>Setup</h3>
<ol>
<li>Ensure both your host PC and handheld are logged into the <strong>same Steam account</strong>.</li>
<li>On the host PC, open Steam > Settings > Remote Play > Enable Remote Play.</li>
<li>On your handheld (Steam Deck or Steam client), navigate to your library.</li>
<li>Games installed on your host PC will appear with a <strong>"Stream"</strong> button instead of <strong>"Play."</strong></li>
<li>Click <strong>Stream</strong> and the game launches remotely.</li>
</ol>
<h3>Optimization</h3>
<ul>
<li>In Steam Link settings on the handheld, set <strong>"Balanced"</strong> or <strong>"Fast"</strong> streaming quality. "Beautiful" adds latency for marginal visual improvement.</li>
<li>Enable <strong>"Hardware encoding"</strong> on the host PC in Steam > Remote Play > Advanced.</li>
<li>Disable <strong>"Change desktop resolution to match streaming client"</strong> to avoid resolution switching delays.</li>
<li>For <code>720p</code> streaming to the Steam Deck's <code>800p</code> display, set the client resolution to <code>1280x720</code> in the Steam Link advanced settings.</li>
</ul>
<h3>Limitations</h3>
<p>Steam Remote Play only works with games launched through Steam. If you want to stream an Epic Games Store title, a console emulator, or a desktop application, you need Moonlight/Sunshine instead.</p>
<h2>Option 3: Chiaki-ng for PS5 Streaming</h2>
<p>Chiaki-ng (formerly chiaki4deck) is the community-maintained open-source client for streaming PlayStation 5 games to a handheld. It uses Sony's Remote Play protocol and delivers lower latency than Sony's official PS Remote Play application on PC [^373^][^376^][^384^].</p>
<h3>Step 1: Enable Remote Play on Your PS5</h3>
<ol>
<li>On your PS5, go to <strong>Settings > System > Remote Play > Enable Remote Play</strong>.</li>
<li>Go to <strong>Settings > System > Power Saving > Features Available in Rest Mode</strong> and enable <strong>"Stay Connected to the Internet"</strong> and <strong>"Enable Turning on PS5 from Network."</strong></li>
</ol>
<h3>Step 2: Install Chiaki-ng on Steam Deck</h3>
<ol>
<li>Switch to <strong>Desktop Mode</strong>.</li>
<li>Open the <strong>Discover</strong> store and search for <strong>"chiaki-ng"</strong>.</li>
<li>Install the application.</li>
<li>For easy access from Gaming Mode, right-click Chiaki-ng in the applications menu and select <strong>"Add to Steam"</strong>.</li>
</ol>
<p>For Windows handhelds, download chiaki-ng from its GitHub releases page and install the Windows build.</p>
<h3>Step 3: Register Your PS5</h3>
<ol>
<li>Launch <strong>Chiaki-ng</strong>.</li>
<li>It should auto-discover your PS5 on the local network. If not, enter your PS5's IP address manually (found in PS5 Settings > Network > Connection Status).</li>
<li>Click <strong>Register</strong>. Chiaki-ng will prompt for a registration PIN.</li>
<li>On your PS5, go to <strong>Settings > System > Remote Play > Link Device</strong> to display the PIN.</li>
<li>Enter the PIN in Chiaki-ng and click <strong>Register</strong>.</li>
<li>Retrieve your <strong>PSN Account ID</strong> using the built-in lookup tool in chiaki-ng (enter your PSN username; the tool queries a public API).</li>
<li>Enter the Account ID and complete registration.</li>
</ol>
<h3>Step 4: Stream and Play</h3>
<p>Your PS5 will appear in Chiaki-ng's main window. Click it to connect. The PS5 will wake from rest mode if configured, and you will see your PS5 home screen on the handheld. All controller inputs are forwarded over the network with approximately <code>15-25 ms</code> of added latency on a local <code>5 GHz</code> network.</p>
<h3>Performance Notes</h3>
<ul>
<li>PS5 streaming is capped at <code>1080p</code> and <code>60 FPS</code> regardless of the host game's output resolution.</li>
<li>Haptic feedback and adaptive triggers from the DualSense are not transmitted to the handheld's controls; standard rumble works.</li>
<li>Both devices must be on the same network for initial pairing; after that, internet streaming works with manual IP configuration and port forwarding.</li>
</ul>
<h2>Option 4: Xbox Remote Play & Cloud Gaming</h2>
<p>Microsoft offers two distinct streaming paths for Xbox: local console streaming (from your own Xbox Series X/S) and cloud gaming (from Microsoft's Azure servers). Both work through a browser interface, making them universally compatible but introducing higher latency than local PC solutions [^196^][^201^].</p>
<h3>Xbox Cloud Gaming</h3>
<ol>
<li>On any handheld, open a browser (Chrome or Edge) and navigate to <strong>xbox.com/play</strong>.</li>
<li>Log in with your Xbox Game Pass Ultimate subscription.</li>
<li>Select a game and click Play. The game streams from Microsoft's cloud servers.</li>
<li>On Windows handhelds, you can install the site as an Edge PWA app for a native-like experience.</li>
</ol>
<p>Microsoft rolled out a new web UI redesign in early 2026, accessible via a Preview Features toggle in your Xbox profile settings [^201^]. The new interface is cleaner and more responsive on handheld screens.</p>
<h3>Xbox Local Console Streaming</h3>
<p>Local streaming from your own Xbox Series X/S requires the Xbox app (Windows) or a browser-based connection. Latency is lower than cloud gaming (<code>25-40 ms</code> vs. <code>50-120 ms</code>) but still higher than Moonlight/Sunshine due to the Xbox's encoder and network stack.</p>
<h2>Real-World Latency Numbers</h2>
<p>Latency is the defining metric for remote play usability. Below are measured end-to-end latency figures (input on handheld to pixel on screen) from community testing under ideal conditions: host PC on Ethernet, handheld on <code>5 GHz</code> Wi-Fi 6, same room as the router, <code>1080p</code> @ <code>60 FPS</code> stream [^195^][^216^][^221^].</p>
<table>
<thead>
<tr>
<th>Streaming Solution</th>
<th>Local Network Latency</th>
<th>Internet Streaming Latency</th>
<th>Usable for Competitive?</th>
</tr>
</thead>
<tbody><tr>
<td><strong>Moonlight + Sunshine</strong></td>
<td><code>5-15 ms</code></td>
<td><code>20-50 ms</code> (depends on connection)</td>
<td>Yes (local)</td>
</tr>
<tr>
<td><strong>Steam Remote Play</strong></td>
<td><code>15-30 ms</code></td>
<td><code>40-80 ms</code></td>
<td>No (local borderline)</td>
</tr>
<tr>
<td><strong>Chiaki-ng (PS5)</strong></td>
<td><code>15-25 ms</code></td>
<td><code>40-70 ms</code></td>
<td>No</td>
</tr>
<tr>
<td><strong>Xbox Local Streaming</strong></td>
<td><code>25-40 ms</code></td>
<td>N/A</td>
<td>No</td>
</tr>
<tr>
<td><strong>Xbox Cloud Gaming</strong></td>
<td>N/A (cloud)</td>
<td><code>50-120 ms</code></td>
<td>No</td>
</tr>
</tbody></table>
<p>For context, <code>15 ms</code> is approximately one frame at <code>60 FPS</code>. Moonlight/Sunshine at <code>5-15 ms</code> adds effectively <code>0-1</code> frames of delay, making it indistinguishable from native play for most users. At <code>50+ ms</code> (cloud gaming), the delay is <code>3+</code> frames, which is perceptible and problematic for rhythm games, fighting games, and competitive shooters.</p>
<h2>Ideal Use Cases for Each Solution</h2>
<h3>Moonlight + Sunshine is best when:</h3>
<ul>
<li>You have a powerful gaming PC on your local network</li>
<li>You want the lowest possible latency and best image quality</li>
<li>You want to stream non-Steam games, emulators, or your desktop</li>
<li>You have a <code>5 GHz</code> Wi-Fi 6 network and Ethernet on the host</li>
</ul>
<h3>Steam Remote Play is best when:</h3>
<ul>
<li>You want the simplest possible setup (zero configuration)</li>
<li>You need to stream over the internet while traveling</li>
<li>Your entire library is on Steam</li>
<li>You can tolerate slightly higher latency for convenience</li>
</ul>
<h3>Chiaki-ng is best when:</h3>
<ul>
<li>You want to play PS5 exclusives (Spider-Man 2, Demon's Souls, Returnal) on your handheld</li>
<li>You have a PS5 on the same local network</li>
<li>You do not mind <code>15-25 ms</code> of additional latency</li>
</ul>
<h3>Xbox Cloud Gaming is best when:</h3>
<ul>
<li>You want instant access to a large library without downloading</li>
<li>You have a stable high-speed internet connection (<code>50+ Mbps</code>)</li>
<li>You are playing slower-paced, single-player games where latency is less critical</li>
<li>You already have Game Pass Ultimate</li>
</ul>
<h2>Battery Optimization During Streaming</h2>
<p>The most overlooked advantage of remote play is the dramatic battery savings on your handheld. When streaming, the handheld's APU does minimal work: it decodes a video stream and forwards controller inputs. You can force the APU into a low-power state without affecting the stream quality [^222^].</p>
<h3>Steam Deck Battery During Moonlight Streaming</h3>
<table>
<thead>
<tr>
<th>APU Power Setting</th>
<th>Estimated Battery Life (50 Wh)</th>
<th>Notes</th>
</tr>
</thead>
<tbody><tr>
<td>Default (<code>15W</code> TDP)</td>
<td><code>3-4 hours</code></td>
<td>Unnecessary power consumption</td>
</tr>
<tr>
<td><code>10W</code> TDP</td>
<td><code>4-5 hours</code></td>
<td>Still more than needed</td>
</tr>
<tr>
<td><code>5W</code> TDP</td>
<td><code>6-8 hours</code></td>
<td>Optimal; smooth decoding, minimal drain</td>
</tr>
<tr>
<td><code>3W</code> TDP</td>
<td><code>7-9 hours</code></td>
<td>May stutter on HEVC decode; test first</td>
</tr>
</tbody></table>
<p>Set TDP to <code>5W</code> on the Steam Deck before starting a Moonlight session. The video decode hardware operates independently of the CPU/GPU power budget and can handle <code>1080p H.264</code> or <code>HEVC</code> streams at <code>5W</code> without frame drops [^222^]. This is the single most effective battery optimization for streaming use.</p>
<p>On Windows handhelds, use Handheld Companion or the manufacturer's utility to set a <code>5-8W</code> TDP profile specifically for streaming applications.</p>
<h2>Troubleshooting</h2>
<h3>Moonlight shows black screen or fails to connect</h3>
<p>Verify Sunshine is running on the host PC (check the system tray icon). Ensure both devices are on the same network. Try manually entering the host PC's IP address in Moonlight instead of relying on auto-discovery. Check Windows Firewall settings and allow Sunshine through both private and public networks.</p>
<h3>Stuttering or frame drops during stream</h3>
<p>The most common cause is Wi-Fi interference. Switch your router to a less congested <code>5 GHz</code> channel (<code>36</code>, <code>40</code>, <code>44</code>, or <code>48</code> are typically clearest). Reduce bitrate in Sunshine by <code>5-10 Mbps</code>. If using HEVC, try switching to H.264 as a test; some devices decode H.264 more reliably even if less efficient.</p>
<h3>Chiaki-ng cannot find the PS5</h3>
<p>Ensure both devices are on the same subnet. Some routers isolate wireless clients from wired clients (AP isolation); disable this feature. Try entering the PS5's IP address manually. If the PS5 is in rest mode, verify "Enable Turning on PS5 from Network" is enabled in power settings.</p>
<h3>Steam Remote Play shows "Busy" or "Computer is unavailable"</h3>
<p>The host PC must be logged into Steam and not in sleep mode. Disable sleep on the host: Control Panel > Power Options > Change when the computer sleeps > Never. If streaming over the internet, ensure both devices have been online recently; Steam needs to establish a relay connection.</p>
<h3>Audio desync or crackling</h3>
<p>In Sunshine settings, increase the audio buffer size slightly. If using Bluetooth audio on the handheld, the additional Bluetooth latency (typically <code>30-50 ms</code>) can cause lip-sync issues. Use wired headphones or the handheld's built-in speakers for the lowest audio latency.</p>
<h2>Final Thoughts</h2>
<p>Remote play transforms a handheld from a self-contained gaming device into a window to your entire gaming ecosystem. Moonlight paired with Sunshine is the technical standout: open-source, actively developed, and capable of sub-<code>15 ms</code> latency with <code>1080p</code> quality that rivals native play [^195^][^216^]. For PlayStation exclusives, Chiaki-ng delivers a console-to-handheld experience that the official PS Portal cannot match because it runs on any handheld, not just Sony's single-purpose device [^373^]. The battery savings are the hidden superpower: at <code>5W</code> TDP, your Steam Deck OLED streams for <code>6-8 hours</code> instead of the <code>2-3 hours</code> you would get running the same game natively [^222^]. Set up Moonlight/Sunshine on your host PC, configure Sunshine for HEVC at <code>20-40 Mbps</code>, lock your handheld to <code>5-8W</code>, and you have a remote gaming setup that outperforms cloud gaming services in every metric that matters: latency, image quality, and cost.</p>
