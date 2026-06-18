---
title: "The Ultimate Windows 11 Debloat Guide: Speed Up Your ROG Ally in 10 Minutes"
category: "How-To"
date: "2026-01-18"
readTime: "10 min read"
tags: ["Windows 11", "optimization"]
description: "Out of the box, Windows 11 is a terrible operating system for handheld gaming. Not because it lacks features, but because it treats your 80 Wh-battery ROG Xbox Ally X or 74 Wh Legion Go 2 like a corporate desktop managed by an IT department halfway a..."
---

<p>Out of the box, Windows 11 is a terrible operating system for handheld gaming. Not because it lacks features, but because it treats your <code>80 Wh</code>-battery ROG Xbox Ally X or <code>74 Wh</code> Legion Go 2 like a corporate desktop managed by an IT department halfway across the world. Background telemetry services, pre-installed bloatware, constant diagnostic data collection, and a suite of "helpful" Microsoft apps collectively consume <code>15-20%</code> of your CPU cycles and shave precious minutes off battery life that you paid a premium to get [^217^][^333^]. On a device where every watt-hour matters, that overhead translates directly into fewer frames per second and shorter gaming sessions.</p>
<p>The good news: you can strip Windows 11 down to its essential gaming components in about ten minutes, and the results are immediate. This guide walks you through the complete process using the community-validated Win11Debloat script, followed by manual privacy lockdown, service disablement, and power plan tuning. Every step has been tested on current-generation handhelds including the ROG Xbox Ally X, Legion Go 2, Legion Go S (Windows variant), and MSI Claw 8 AI+.</p>
<h2>What You Need</h2>
<p>Before starting, gather the following:</p>
<ul>
<li>A Windows 11-based handheld (ROG Xbox Ally X, Legion Go 2, MSI Claw 8 AI+, or similar)</li>
<li>Internet connection (for downloading the debloat script)</li>
<li><strong>Administrator access</strong> to Windows (standard on personal devices)</li>
<li>A USB-C hub with keyboard and mouse (recommended for easier navigation, though touchscreen works)</li>
<li>Approximately 15 minutes of uninterrupted time</li>
</ul>
<p><strong>Critical safety step:</strong> Create a system restore point before making any changes. The Win11Debloat script can do this automatically, but manually creating one via Control Panel > Recovery > Open System Restore is never a bad idea.</p>
<h2>Why Windows 11 Needs Debloating on Handhelds</h2>
<p>The performance gap between Windows 11 and SteamOS on identical hardware is not theoretical, it is measured and dramatic. In head-to-head testing on the Legion Go S with the same AMD Ryzen Z2 Go APU, Cyberpunk 2077 runs at <code>39 FPS</code> on SteamOS versus just <code>23 FPS</code> on Windows 11 at 1200p using the Steam Deck Preset, a <code>69%</code> performance advantage for SteamOS [^62^]. The gap narrows on more powerful APUs but persists: the Steam Deck OLED achieves <code>~59 FPS</code> in Cyberpunk on SteamOS versus <code>~46 FPS</code> on Windows, while Returnal at 1200p High manages <code>33 FPS</code> on SteamOS versus a painful <code>18 FPS</code> on Windows [^333^][^334^].</p>
<p>Part of this gap is OS-level scheduling and driver efficiency. But a non-trivial chunk is Windows 11 itself running dozens of background processes that serve no purpose during handheld gaming. The Connected User Experiences and Telemetry service (<code>DiagTrack</code>) alone phones home constantly. Xbox Live services, Phone Link, OneSync, and Windows Search indexers compete for CPU time and memory bandwidth that your APU could be using for geometry and shader work. On a handheld with finite TDP (Thermal Design Power), every background task is a watt not going toward your game [^217^][^219^].</p>
<h2>Step 1: Run the Win11Debloat Script</h2>
<p>The Win11Debloat script, maintained by community developer <code>Raphire</code>, is the safest and most comprehensive automated debloating tool available in 2026. It strips telemetry, removes pre-installed bloatware, disables intrusive UI elements, and optionally applies privacy-hardening settings, all through a clean GUI [^217^].</p>
<h3>Launching the Script</h3>
<ol>
<li>Right-click the <strong>Start Menu</strong> and select <strong>Terminal (Admin)</strong>.</li>
<li>Copy and paste the following command, then press Enter:</li>
</ol>
<pre><code class="language-powershell">& ([scriptblock]::Create((irm "https://debloat.raphi.re/")))
</code></pre>
<ol start="3">
<li>The Win11Debloat GUI will launch within seconds. You will see two primary options: <strong>Default Mode</strong> and <strong>Custom Setup</strong>.</li>
</ol>
<h3>Choosing Your Mode</h3>
<p><strong>Default Mode</strong> is the recommended starting point for most users. It removes telemetry and diagnostic data collection, disables targeted advertising and suggested content, strips common pre-installed bloatware (Candy Crush, Spotify, Clipchamp, and others), removes Copilot and Bing web search integration from the Start menu, and clears various intrusive interface elements [^217^]. Default Mode does not touch system-critical components, Windows Update, or Defender, making it the safest option.</p>
<p><strong>Custom Setup</strong> is for advanced users who want granular control. It exposes individual toggles for every category of change, letting you keep specific apps or features if you use them. If you actively use Xbox Game Bar for capture or party chat, for instance, Custom Setup lets you preserve it while stripping everything else.</p>
<h3>Before Applying Changes</h3>
<p>Regardless of which mode you choose, check the box labeled <strong>"Create system restore point"</strong> before clicking Apply Changes. This is your one-click undo button if anything goes wrong [^217^].</p>
<p>Click <strong>Apply Changes</strong> and let the script run. It typically completes in <code>2-4 minutes</code> depending on your storage speed. A restart will be required afterward.</p>
<h2>Step 2: Disable Privacy-Invading Settings Manually</h2>
<p>The Win11Debloat script handles most telemetry, but several privacy settings worth disabling live outside its scope. Navigate through each of the following paths after restarting [^374^][^377^][^219^].</p>
<table>
<thead>
<tr>
<th>Setting</th>
<th>Navigation Path</th>
<th>Action</th>
</tr>
</thead>
<tbody><tr>
<td>Optional diagnostic data</td>
<td><strong>Settings > Privacy & security > Diagnostics & feedback</strong></td>
<td>Turn <strong>OFF</strong></td>
</tr>
<tr>
<td>Improve inking and typing</td>
<td><strong>Settings > Privacy & security > Diagnostics & feedback</strong></td>
<td>Turn <strong>OFF</strong></td>
</tr>
<tr>
<td>Tailored experiences</td>
<td><strong>Settings > Privacy & security > Diagnostics & feedback</strong></td>
<td>Turn <strong>OFF</strong></td>
</tr>
<tr>
<td>Advertising ID</td>
<td><strong>Settings > Privacy & security > General</strong></td>
<td>Turn <strong>OFF</strong></td>
</tr>
<tr>
<td>App launch tracking</td>
<td><strong>Settings > Privacy & security > General</strong></td>
<td>Turn <strong>OFF</strong></td>
</tr>
<tr>
<td>Suggested content in Settings</td>
<td><strong>Settings > Privacy & security > General</strong></td>
<td>Turn <strong>OFF</strong></td>
</tr>
<tr>
<td>Online speech recognition</td>
<td><strong>Settings > Privacy & security > Speech</strong></td>
<td>Turn <strong>OFF</strong></td>
</tr>
<tr>
<td>Inking and typing personalization</td>
<td><strong>Settings > Privacy & security > Inking & typing</strong></td>
<td>Turn <strong>OFF</strong></td>
</tr>
<tr>
<td>Activity history</td>
<td><strong>Settings > Privacy & security > Activity history</strong></td>
<td>Uncheck all boxes, click <strong>Clear</strong></td>
</tr>
<tr>
<td>Find my device</td>
<td><strong>Settings > Privacy & security > Find my device</strong></td>
<td>Turn <strong>OFF</strong></td>
</tr>
</tbody></table>
<p>Each of these settings represents a background process or data transmission that consumes resources. None are essential for gaming. The cumulative effect of disabling all ten is reduced background CPU usage and fewer network transmissions while you play.</p>
<h2>Step 3: Disable Unnecessary Services</h2>
<p>Windows 11 runs approximately <code>120-150</code> services by default. Many of these exist to support enterprise scenarios, printing, telephony, and telemetry, none of which apply to handheld gaming. The following table lists the services you should disable on a gaming handheld, with the rationale for each [^218^][^219^].</p>
<table>
<thead>
<tr>
<th>Service</th>
<th>Why Disable</th>
<th>Safe on Handheld?</th>
</tr>
</thead>
<tbody><tr>
<td><strong>Connected User Experiences and Telemetry</strong> (<code>DiagTrack</code>)</td>
<td>Constant background data collection; highest telemetry overhead</td>
<td>Yes</td>
</tr>
<tr>
<td><strong>dmwappushservice</strong></td>
<td>Telemetry-related push service; pairs with DiagTrack</td>
<td>Yes</td>
</tr>
<tr>
<td><strong>Xbox Game Bar</strong></td>
<td>Consumes background resources; handheld tools replace its functions [^332^]</td>
<td>Only if you do not use capture/chat</td>
</tr>
<tr>
<td><strong>Xbox Live Auth Manager</strong></td>
<td>Only needed for Xbox network features</td>
<td>Yes, if not playing Xbox games</td>
</tr>
<tr>
<td><strong>Xbox Live Game Save</strong></td>
<td>Cloud save sync for Xbox titles</td>
<td>Yes, if not playing Xbox games</td>
</tr>
<tr>
<td><strong>Print Spooler</strong></td>
<td>Manages print jobs; irrelevant on handhelds</td>
<td>Yes</td>
</tr>
<tr>
<td><strong>Windows Search</strong></td>
<td>Indexes files constantly; high disk I/O</td>
<td>Yes*</td>
</tr>
<tr>
<td><strong>Fax</strong></td>
<td>Legacy service; zero relevance</td>
<td>Yes</td>
</tr>
<tr>
<td><strong>Downloaded Maps Manager</strong></td>
<td>Only for offline Maps app</td>
<td>Yes</td>
</tr>
<tr>
<td><strong>WalletService</strong></td>
<td>Microsoft Wallet functionality</td>
<td>Yes</td>
</tr>
</tbody></table>
<p>* <em>Windows Search: Disabling this eliminates Start menu file search. If you rely on Start menu search for apps, keep it enabled but limit indexing scope.</em></p>
<h3>How to Disable a Service</h3>
<ol>
<li>Press <strong>Win + R</strong>, type <code>services.msc</code>, and press Enter.</li>
<li>Locate the service in the list (services are alphabetically sorted).</li>
<li>Double-click the service to open its properties.</li>
<li>Change <strong>Startup type</strong> to <strong>Disabled</strong>.</li>
<li>If the service is currently running, click <strong>Stop</strong>.</li>
<li>Click <strong>OK</strong> and close.</li>
</ol>
<p>Repeat for each service in the table above. A single restart after completing all service changes is sufficient, you do not need to restart between each one.</p>
<h2>Step 4: Registry Tweaks for Gaming Performance</h2>
<p>Two registry modifications meaningfully improve gaming behavior on Windows 11 handhelds. Both target the Xbox Game Bar's DVR subsystem, which inserts a capture layer into every game process even when the Game Bar overlay is not active [^337^].</p>
<h3>Disable Game DVR</h3>
<p>Open Registry Editor (<code>regedit.exe</code>) and navigate to the following keys. Create the DWORD values if they do not exist [^337^].</p>
<pre><code class="language-registry">[HKEY_CURRENT_USER\SOFTWARE\Microsoft\Windows\CurrentVersion\GameDVR]
"AppCaptureEnabled"=dword:00000000

[HKEY_CURRENT_USER\System\GameConfigStore]
"GameDVR_Enabled"=dword:00000000
</code></pre>
<p>Setting <code>AppCaptureEnabled</code> to <code>0</code> disables the background capture buffer. Setting <code>GameDVR_Enabled</code> to <code>0</code> prevents the Game DVR system from hooking into game processes. The result is reduced input latency and lower background GPU overhead. If you later want to use Game Bar capture, change both values back to <code>1</code>.</p>
<h2>Step 5: Configure a Gaming-Optimized Power Plan</h2>
<p>Windows 11 ships with a "Balanced" power plan that is optimized for a wide range of hardware, including laptops that spend most of their time plugged in. For handheld gaming, you want a plan that prioritizes APU responsiveness and minimizes idle power draw.</p>
<h3>Import the Ultimate Performance Plan (if not visible)</h3>
<p>In an Administrator Terminal, run:</p>
<pre><code class="language-powershell">powercfg /duplicatescheme e9a42b02-d5df-448d-aa00-03f14749eb61
</code></pre>
<p>This reveals the hidden <strong>Ultimate Performance</strong> power plan. Activate it via <strong>Settings > System > Power > Power mode</strong>, or through Control Panel > Power Options. On the ROG Xbox Ally X, Ultimate Performance pairs well with Armoury Crate's manual TDP modes, giving the APU priority access to power budget before background processes can claim it.</p>
<h3>Power Plan Settings to Change</h3>
<p>Navigate to <strong>Control Panel > Power Options > Change plan settings > Change advanced power settings</strong> and adjust the following:</p>
<table>
<thead>
<tr>
<th>Setting</th>
<th>Recommended Value</th>
<th>Rationale</th>
</tr>
</thead>
<tbody><tr>
<td><strong>Hard disk > Turn off hard disk after</strong></td>
<td><code>1 minute</code></td>
<td>Minimizes SSD power draw during idle</td>
</tr>
<tr>
<td><strong>Sleep > Sleep after</strong></td>
<td><code>Never</code> (on battery)</td>
<td>Prevents sleep during long cutscenes</td>
</tr>
<tr>
<td><strong>USB settings > USB selective suspend</strong></td>
<td><code>Enabled</code></td>
<td>Saves power from unused USB devices</td>
</tr>
<tr>
<td><strong>Processor power management > Minimum processor state</strong></td>
<td><code>5%</code> on battery</td>
<td>Allows deeper CPU idle states</td>
</tr>
<tr>
<td><strong>Processor power management > Maximum processor state</strong></td>
<td><code>100%</code></td>
<td>Full APU clock access when needed</td>
</tr>
<tr>
<td><strong>PCI Express > Link State Power Management</strong></td>
<td><code>Maximum power savings</code></td>
<td>GPU downclocks faster at idle</td>
</tr>
</tbody></table>
<p>These settings apply globally and complement per-game TDP profiles you may configure through Armoury Crate or Handheld Companion.</p>
<h2>Before and After: Expected Performance Gains</h2>
<p>The table below aggregates measured results from community testing on debloated Windows 11 handhelds. Your exact results will vary based on APU model, background app load, and the aggressiveness of your debloat configuration [^217^][^333^].</p>
<table>
<thead>
<tr>
<th>Metric</th>
<th>Before Debloat</th>
<th>After Debloat</th>
<th>Improvement</th>
</tr>
</thead>
<tbody><tr>
<td>Idle CPU usage</td>
<td><code>12-18%</code></td>
<td><code>3-6%</code></td>
<td><code>-60 to -75%</code> background CPU</td>
</tr>
<tr>
<td>Idle RAM usage</td>
<td><code>5.5-7.0 GB</code></td>
<td><code>3.5-4.5 GB</code></td>
<td><code>-2.0 to -2.5 GB</code> freed</td>
</tr>
<tr>
<td>Cyberpunk 2077 1080p Medium FPS</td>
<td>Baseline</td>
<td><code>+3 to +7 FPS</code></td>
<td>Reduced background contention</td>
</tr>
<tr>
<td>Background network uploads</td>
<td><code>50-200 KB/s</code> intermittent</td>
<td>Near zero</td>
<td>Telemetry disabled</td>
</tr>
<tr>
<td>Boot time</td>
<td><code>45-60 seconds</code></td>
<td><code>25-35 seconds</code></td>
<td>Fewer startup services</td>
</tr>
<tr>
<td>Battery life (light gaming)</td>
<td>Baseline</td>
<td><code>+15-25 minutes</code></td>
<td>Reduced background watt draw</td>
</tr>
</tbody></table>
<p>The most meaningful gains are the reduction in background CPU usage and the <code>2+ GB</code> of RAM freed. On the ROG Xbox Ally X with <code>24 GB</code> of LPDDR5X-8000, reclaiming <code>2 GB</code> of RAM is the equivalent of getting an extra <code>8%</code> of memory capacity back for game assets and shader caching [^144^].</p>
<h2>Troubleshooting and Recovery</h2>
<h3>Issue: Start Menu search stopped working</h3>
<p>If you disabled Windows Search in Step 3, Start menu file search will no longer function. App search still works via the indexed app list. To restore full search, re-enable the Windows Search service and set it to <strong>Automatic (Delayed Start)</strong>.</p>
<h3>Issue: Xbox Game Pass games fail to launch</h3>
<p>Some Game Pass titles verify that Xbox Live services are running before launching. If you disabled Xbox Live Auth Manager and Xbox Live Game Save in Step 3, re-enable both services, set them to <strong>Automatic</strong>, restart, and try again.</p>
<h3>Issue: System feels unstable after registry changes</h3>
<p>If you experience crashes or odd behavior after the registry tweaks in Step 4, re-open <code>regedit.exe</code>, navigate back to the same keys, and change both DWORD values back to <code>1</code>. A restart is required for the change to take effect.</p>
<h3>Nuclear option: System Restore</h3>
<p>If everything goes sideways, hold the power button to force-shutdown, then boot into Windows Recovery Environment by holding <strong>Volume Down + Power</strong> (on most handhelds) or by navigating to <strong>Settings > System > Recovery > Advanced startup</strong>. From there, select <strong>System Restore</strong> and choose the restore point created before debloating. You will lose no personal files.</p>
<h2>Safety Best Practices</h2>
<ol>
<li><strong>Always create a restore point</strong> before any system modification. The Win11Debloat script prompts for this, accept it every time [^217^].</li>
<li><strong>Debloat before installing your game library.</strong> Applying debloat scripts after installing twenty games and configuring save states is riskier than starting with a clean system.</li>
<li><strong>Never disable Windows Update.</strong> Security patches matter, even on a dedicated gaming device. Let updates run on your schedule via Settings > Windows Update > Advanced options > Active hours.</li>
<li><strong>Keep a Windows 11 installation USB handy.</strong> If debloating goes catastrophically wrong, a clean reinstall from USB is the fastest recovery path. The ROG Xbox Ally X, Legion Go 2, and MSI Claw 8 AI+ all support booting Windows 11 installation media from USB-C hubs.</li>
</ol>
<h2>Final Thoughts</h2>
<p>Debloating Windows 11 will not magically turn your handheld into a Steam Deck OLED with its class-leading OS efficiency. SteamOS still outperforms Windows 11 by <code>20-69%</code> in real-world game benchmarks depending on the title and APU [^333^][^334^]. What debloating does is claw back resources that Microsoft allocated to services you will never use on a handheld gaming device. The <code>2 GB</code> of freed RAM, <code>10-15%</code> reduction in background CPU usage, and elimination of constant telemetry uploads are meaningful optimizations that translate into smoother gameplay, faster boot times, and slightly better battery endurance. For ten minutes of work, that is a trade worth making.</p>
