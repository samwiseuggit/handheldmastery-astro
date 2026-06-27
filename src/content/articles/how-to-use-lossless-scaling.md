---
title: "How to Use Lossless Scaling: Doubling Your FPS Using AI Frame Generation"
category: "How-To"
date: "2026-03-10"
readTime: "7 min read"
tags: ["Lossless Scaling", "FPS"]
description: "Frame generation used to be a luxury reserved for desktop GPUs with dedicated AI accelerators. NVIDIA's DLSS 3 Frame Generation requires RTX 40-series..."
---

<p>Frame generation used to be a luxury reserved for desktop GPUs with dedicated AI accelerators. NVIDIA's DLSS 3 Frame Generation requires RTX 40-series hardware. AMD's FSR 3 Frame Generation requires game-specific integration. But what if you could apply frame generation to any game on any handheld, regardless of the GPU or whether the developer implemented support? Lossless Scaling Frame Generation (LSFG) does exactly that. It is a $6-7 tool on Steam that intercepts the final rendered output and interpolates synthetic frames between the real ones, effectively doubling or tripling the perceived framerate [^202^][^372^]. For handhelds where every watt and every frame counts, LSFG can be the difference between a stuttery 30 FPS experience and a fluid 60 FPS one.</p>
<hr>
<h2>What Is LSFG and How Does It Work?</h2>
<p>Lossless Scaling Frame Generation operates at the display level rather than the engine level. Unlike DLSS 3 or FSR 3, which require the game engine to provide motion vectors and depth buffers, LSFG works purely from the final 2D image stream. It analyzes consecutive frames, detects motion, and generates intermediate frames using AI-driven interpolation [^202^].</p>
<table>
<thead>
<tr>
<th>Mode</th>
<th>Multiplier</th>
<th>Input FPS</th>
<th>Output FPS</th>
<th>Use Case</th>
</tr>
</thead>
<tbody><tr>
<td><strong>2x</strong></td>
<td>Double</td>
<td>30 FPS</td>
<td>60 FPS</td>
<td>Standard handheld gaming; best balance</td>
</tr>
<tr>
<td><strong>3x</strong></td>
<td>Triple</td>
<td>20 FPS</td>
<td>60 FPS</td>
<td>Heavy AAA titles that struggle to hit 30</td>
</tr>
<tr>
<td><strong>4x</strong></td>
<td>Quadruple</td>
<td>15 FPS</td>
<td>60 FPS</td>
<td>Aggressive; high artifact risk on handhelds</td>
</tr>
</tbody></table>
<p>Because LSFG operates at the final output stage, it is agnostic to the game, the engine, the API (DirectX, Vulkan, OpenGL), and the GPU vendor. An RDNA 2 Steam Deck benefits as much as an RDNA 3.5 ROG Ally X or an Intel Arc-powered MSI Claw [^202^][^372^].</p>
<p>The tool also includes upscaling options — FSR 1.0, NIS (NVIDIA Image Scaling), and nearest-neighbor scaling — that can be combined with frame generation for additional performance headroom [^372^].</p>
<hr>
<h2>Prerequisites</h2>
<table>
<thead>
<tr>
<th>Requirement</th>
<th>Notes</th>
</tr>
</thead>
<tbody><tr>
<td><strong>Steam Deck or Windows handheld</strong></td>
<td>LSFG works on any GPU architecture</td>
</tr>
<tr>
<td><strong>Lossless Scaling purchased on Steam</strong></td>
<td>~$6-7; must be installed on internal storage for Decky plugin</td>
</tr>
<tr>
<td><strong>Decky Loader installed</strong></td>
<td>For Steam Deck method (see below)</td>
</tr>
<tr>
<td><strong>Game running in windowed or borderless mode</strong></td>
<td>LSFG captures the output buffer; some games need specific display modes</td>
</tr>
<tr>
<td><strong>Target game at stable framerate</strong></td>
<td>LSFG works best when the base framerate is consistent, not fluctuating wildly</td>
</tr>
</tbody></table>
<p><strong>Important</strong>: LSFG adds latency. It is a frame interpolation technique — the generated frames are always one frame behind the real ones. This makes it ideal for single-player RPGs, strategy games, and exploration titles. It is not suitable for competitive multiplayer where input lag determines outcomes [^202^][^372^].</p>
<hr>
<h2>Performance Gains: What to Expect</h2>
<p>The effectiveness of LSFG varies by title, base framerate stability, and the complexity of on-screen motion. Here are community-tested results on Steam Deck hardware:</p>
<table>
<thead>
<tr>
<th>Game</th>
<th>Native FPS</th>
<th>With LSFG 2x</th>
<th>Perceived FPS</th>
<th>Quality Notes</th>
</tr>
</thead>
<tbody><tr>
<td>Ghost of Tsushima</td>
<td>~37 FPS</td>
<td>~60 FPS</td>
<td>60 FPS</td>
<td>Smooth with minor ghosting on fast camera pans [^382^]</td>
</tr>
<tr>
<td>Clear Obscure</td>
<td>~30 FPS</td>
<td>60+ FPS</td>
<td>60 FPS</td>
<td>Flow Scale 0.65 recommended for clean output [^382^]</td>
</tr>
<tr>
<td>Cyberpunk 2077</td>
<td>Variable</td>
<td>Improved</td>
<td>45-60 FPS</td>
<td>Inconsistent base FPS causes artifacting; cap framerate first [^382^]</td>
</tr>
<tr>
<td>General 30 FPS titles</td>
<td>30 FPS</td>
<td>60 FPS</td>
<td>60 FPS</td>
<td>Excellent results when base framerate is rock-solid</td>
</tr>
<tr>
<td>General 60 FPS titles</td>
<td>60 FPS</td>
<td>120 FPS</td>
<td>120 FPS</td>
<td>Requires 120Hz display (ROG Ally 120Hz mode)</td>
</tr>
</tbody></table>
<p>The pattern is clear: LSFG shines when the game maintains a stable base framerate. A game fluctuating between 25-45 FPS will produce uneven results because the interpolation algorithm cannot predict timing for irregular frame delivery. Cap your game's framerate to a stable target (30 or 60) before enabling LSFG for best results.</p>
<hr>
<h2>Method A: Steam Deck via Decky Loader (Recommended)</h2>
<p>The Decky LSFG-VK plugin integrates Lossless Scaling directly into SteamOS Gaming Mode, allowing frame generation without switching to Desktop Mode [^372^][^378^][^379^].</p>
<h3>Step 1: Install Lossless Scaling</h3>
<ol>
<li>Purchase <strong>Lossless Scaling</strong> on Steam (search for it in the Steam Store).</li>
<li>Install it to the <strong>internal SSD</strong>, not a microSD card. The Decky plugin needs fast access to the binary.</li>
</ol>
<h3>Step 2: Install the Decky LSFG-VK Plugin</h3>
<ol>
<li>If Decky Loader is not already installed, switch to Desktop Mode, visit decky.xyz, and run the installer [^188^].</li>
<li>Return to Gaming Mode.</li>
<li>Press the <strong>... (Quick Access Menu)</strong> button.</li>
<li>Navigate to the <strong>Decky</strong> plug icon.</li>
<li>Open the <strong>Plugin Store</strong> (shopping bag icon).</li>
<li>Search for <strong>"Decky LSFG-VK"</strong> and install it.</li>
<li>Within the plugin settings, click <strong>"Download LSFG-VK"</strong> to fetch the Vulkan backend [^372^][^379^].</li>
</ol>
<h3>Step 3: Configure Per-Game Settings</h3>
<ol>
<li>In Gaming Mode, highlight the game you want to enhance.</li>
<li>Press the Options button > <strong>Properties</strong>.</li>
<li>Navigate to the <strong>Decky LSFG-VK</strong> tab (or copy the launch option from the plugin's settings page).</li>
<li>Paste the provided launch command into the game's <strong>Launch Options</strong> field.</li>
<li>Set the <strong>frame generation multiplier</strong>:<ul>
<li><strong>2x</strong>: Recommended for most games (30 → 60 FPS).</li>
<li><strong>3x</strong>: For games that cannot hold 30 FPS base (20 → 60 FPS).</li>
</ul>
</li>
<li>Adjust <strong>Flow Scale</strong> if available:<ul>
<li>Default (1.0): Standard motion interpolation.</li>
<li>Lower values (0.5-0.7): Reduce motion blur/ghosting at the cost of some smoothness.</li>
<li>Higher values: More interpolated motion, more potential artifacts [^382^].</li>
</ul>
</li>
</ol>
<h3>Step 4: Launch and Verify</h3>
<ol>
<li>Start the game from Gaming Mode.</li>
<li>The LSFG-VK overlay appears briefly in the corner, confirming activation.</li>
<li>Use the Quick Access Menu (Decky tab) to toggle frame generation on/off in real time for comparison.</li>
<li>Verify perceived framerate by feel or enable Steam's FPS counter (Steam > Settings > In-Game > In-Game FPS Counter).</li>
</ol>
<hr>
<h2>Method B: Windows Handhelds (Direct LSFG)</h2>
<p>On Windows-based handhelds like the ROG Ally X, Legion Go 2, and MSI Claw, you run Lossless Scaling directly without a plugin wrapper.</p>
<h3>Step 1: Install and Configure</h3>
<ol>
<li>Purchase and install <strong>Lossless Scaling</strong> from Steam.</li>
<li>Launch Lossless Scaling before your game.</li>
<li>In the LSFG window, configure:<ul>
<li><strong>Mode</strong>: LSFG 2.0 or LSFG 1.1 (2.0 is newer, slightly lower latency).</li>
<li><strong>Multiplier</strong>: 2x for most use cases.</li>
<li><strong>Rendering</strong>: Select your game's window from the dropdown, or use Auto-detect.</li>
<li><strong>Scale</strong>: If your game runs below native resolution, enable FSR or NIS upscaling here.</li>
</ul>
</li>
</ol>
<h3>Step 2: Launch Your Game</h3>
<ol>
<li>Start your game in <strong>windowed</strong> or <strong>borderless windowed</strong> mode.</li>
<li>Alt-tab back to Lossless Scaling and confirm it has captured the game window.</li>
<li>The tool automatically begins generating frames.</li>
<li>Press the hotkey (default F11) to toggle the LSFG overlay, showing input FPS and output FPS.</li>
</ol>
<h3>Step 3: Fine-Tune Settings</h3>
<table>
<thead>
<tr>
<th>Setting</th>
<th>Recommended Value</th>
<th>Notes</th>
</tr>
</thead>
<tbody><tr>
<td><strong>Frame Generation</strong></td>
<td>LSFG 2.0</td>
<td>Lower latency than 1.1</td>
</tr>
<tr>
<td><strong>Multiplier</strong></td>
<td>2x</td>
<td>Best quality-to-latency ratio</td>
</tr>
<tr>
<td><strong>Upscaling</strong></td>
<td>FSR 1.0 Performance</td>
<td>Only if game runs below native res</td>
</tr>
<tr>
<td><strong>VSync</strong></td>
<td>Off in LSFG, cap FPS in game</td>
<td>Avoid double VSync for minimum latency</td>
</tr>
<tr>
<td><strong>Capture mode</strong></td>
<td>Auto</td>
<td>Fallback to BitBlt if Window fails</td>
</tr>
</tbody></table>
<hr>
<h2>Input Lag Considerations</h2>
<p>Frame generation inherently adds latency because each interpolated frame is synthesized from previously rendered frames. At 2x mode, the minimum added latency is one frame (8.3ms at 120Hz output, 16.7ms at 60Hz output). In practice, total added latency is typically 1.5-2.5 frames [^202^][^372^].</p>
<table>
<thead>
<tr>
<th>Scenario</th>
<th>Base Latency</th>
<th>LSFG 2x Added Latency</th>
<th>Total (Estimated)</th>
</tr>
</thead>
<tbody><tr>
<td>30 FPS game → 60 FPS output</td>
<td>~50ms (20ms render + 30ms display)</td>
<td>+25-40ms</td>
<td>~75-90ms</td>
</tr>
<tr>
<td>60 FPS game → 120 FPS output</td>
<td>~25ms</td>
<td>+12-20ms</td>
<td>~37-45ms</td>
</tr>
</tbody></table>
<p><strong>Mitigation strategies:</strong></p>
<ol>
<li><strong>Use the highest stable base framerate</strong>: A 60 FPS base with 2x LSFG to 120 FPS has less total latency than a 30 FPS base with 2x to 60 FPS, even though both deliver the same perceived smoothness.</li>
<li><strong>Enable low-latency modes</strong>: In-game settings like NVIDIA Reflex or AMD Anti-Lag reduce the render queue depth, minimizing the pipeline delay before LSFG receives frames.</li>
<li><strong>Avoid 3x/4x modes on handhelds</strong>: The latency penalty scales with the multiplier. 3x mode at 20 FPS base adds 2-3 frames of latency — noticeable in any game requiring reflexes.</li>
<li><strong>Combine with capped framerates</strong>: Set the in-game cap slightly below your average sustained FPS to maintain a stable input cadence. For example, if a game fluctuates between 32-40 FPS, cap it at 30 FPS and use 2x LSFG for clean 60 FPS output.</li>
</ol>
<hr>
<h2>When NOT to Use Lossless Scaling</h2>
<p>LSFG is a powerful tool with specific limitations. Do not use it in these scenarios:</p>
<ol>
<li><strong>Competitive multiplayer games</strong>: The added 1.5-2.5 frames of latency puts you at a measurable disadvantage in FPS multiplayer, fighting games, and rhythm games.</li>
<li><strong>Games with native frame generation</strong>: Running LSFG on top of DLSS 3 or FSR 3 Frame Generation produces severe visual artifacts, double-counted frames, and unstable output. Use one or the other, never both [^202^].</li>
<li><strong>Games with highly variable framerates</strong>: If your base FPS swings between 20 and 50, LSFG cannot produce consistent output. The interpolation algorithm needs stable input timing.</li>
<li><strong>2D pixel-art games at native framerate</strong>: If you are already at 60 FPS locked, LSFG offers no visual benefit and adds unnecessary latency.</li>
<li><strong>Cutscene-heavy games with letterboxing</strong>: LSFG can produce artifacts at the border between letterbox bars and active video content.</li>
</ol>
<hr>
<h2>Visual Quality and Artifacts</h2>
<p>LSFG 2.0 is a significant improvement over the original implementation, but it is not flawless. The most common artifact is <strong>ghosting</strong> — a faint trail behind fast-moving objects caused by the interpolation algorithm carrying motion data across multiple frames. This is most visible in:</p>
<ul>
<li>Rapid camera rotations (first-person games)</li>
<li>Fast UI element animations</li>
<li>Particle effects with high velocity</li>
</ul>
<p>The <strong>Flow Scale</strong> parameter controls the trade-off between smoothness and ghosting. Lower values reduce ghosting but can make motion appear slightly more stuttery. The optimal setting varies by game and personal preference. Community testing suggests <strong>Flow Scale 0.65</strong> works well for most titles on Steam Deck hardware [^382^].</p>
<hr>
<h2>Troubleshooting</h2>
<table>
<thead>
<tr>
<th>Problem</th>
<th>Cause</th>
<th>Fix</th>
</tr>
</thead>
<tbody><tr>
<td><strong>LSFG overlay not appearing</strong></td>
<td>Decky plugin not loaded</td>
<td>Restart Steam Deck; verify Decky and plugin are updated</td>
</tr>
<tr>
<td><strong>Black screen in game</strong></td>
<td>Capture mode incompatibility</td>
<td>Switch capture method in LSFG settings (Window → BitBlt)</td>
</tr>
<tr>
<td><strong>Severe artifacting/ghosting</strong></td>
<td>Flow Scale too high or base FPS unstable</td>
<td>Reduce Flow Scale; cap in-game framerate</td>
</tr>
<tr>
<td><strong>Game crashes on launch</strong></td>
<td>Launch option conflict</td>
<td>Remove other launch options; add LSFG command last</td>
</tr>
<tr>
<td><strong>No performance change</strong></td>
<td>Game already GPU-bound beyond display refresh</td>
<td>LSFG cannot exceed display max; check if you are already at 60/120</td>
</tr>
<tr>
<td><strong>Audio desync</strong></td>
<td>Frame generation altering timing</td>
<td>Enable audio sync option in LSFG; cap base framerate</td>
</tr>
</tbody></table>
<hr>
<h2>Expected Results</h2>
<p>After completing this guide, you will have:</p>
<ul>
<li>Lossless Scaling configured on your handheld with optimal settings for your target games.</li>
<li>Frame generation active in Gaming Mode (Steam Deck) or directly on Windows handhelds.</li>
<li>A stable 2x multiplier delivering perceived 60 FPS from a 30 FPS base in compatible titles.</li>
<li>Realistic expectations about latency trade-offs and artifact behavior.</li>
<li>A workflow for evaluating new games: test native performance first, enable LSFG second, tune Flow Scale last.</li>
</ul>
<p>The $7 cost of Lossless Scaling pays for itself in a single game that moves from "unplayable on handheld" to "smooth enough to finish." Combined with the Decky LSFG-VK plugin on Steam Deck, it is the most impactful performance upgrade available for zero hardware cost [^372^][^379^].</p>
