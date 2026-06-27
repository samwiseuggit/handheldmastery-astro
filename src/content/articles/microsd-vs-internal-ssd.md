---
title: "microSD vs Internal SSD: Storage for Handhelds"
category: "Guides"
date: "2026-03-10"
readTime: "8 min read"
tags: ["Storage", "microSD", "SSD"]
description: "Compare microSD cards and internal SSD upgrades for handheld gaming consoles."
---

<p>Storage is the first upgrade every handheld owner confronts. Modern AAA titles routinely exceed 100 GB — <em>Baldur&#39;s Gate 3</em> demands ~150 GB, <em>Cyberpunk 2077</em> with updates pushes past 90 GB, and even &quot;smaller&quot; games like <em>Elden Ring</em> sit at 60 GB. A 512 GB internal drive fills quickly, leaving you with two expansion paths: a microSD card (cheap, instant, zero risk) or an internal M.2 2230 SSD replacement (expensive, requires surgery, dramatically faster). The performance gap between these options is not trivial. In the most storage-intensive titles, an SSD can load levels nearly 70% faster than even the best microSD card. But speed isn&#39;t the only variable — cost per gigabyte, installation difficulty, and the reality of how different game types stress storage all factor into the decision. This comparison breaks down the technical differences with real-world loading data, then delivers a concrete recommendation for every type of player.</p>
<h2>The Technical Gap: 35× Theoretical, 20–70% Real-World</h2>
<p>On paper, the speed differential is absurd. A PCIe Gen4 x4 M.2 2230 SSD like the Corsair MP600 Mini delivers sequential read speeds up to 7,000 MB/s . A UHS-I microSD card — the only type the Steam Deck can fully utilize — tops out at 104 MB/s . That&#39;s a 67× bandwidth gap in sequential throughput. UHS-II cards, supported by the ROG Ally X&#39;s microSD slot, raise the ceiling to 312 MB/s theoretical, with the Kingston Canvas React Plus achieving ~292 MB/s in testing . Even then, we&#39;re looking at roughly 24× slower than a Gen4 SSD.</p>
<p>But game loading is not a sequential benchmark. It is a workload dominated by random 4K read IOPS — small, scattered file accesses as the engine pulls textures, shaders, audio, and level data from storage. Here, the gap narrows but remains substantial. A quality A2-rated microSD card guarantees 4,000 IOPS read and 2,000 IOPS write — adequate for game loading but a fraction of the 200,000+ random read IOPS a PCIe 4.0 SSD can deliver. The A2 (Application Performance Class 2) rating was specifically designed to certify microSD cards for app and game loading, and it makes a measurable difference over non-A2 cards, but it cannot close the architectural gap against NVMe.</p>
<h3>Storage Speed Comparison</h3>
<table>
<thead>
<tr>
<th>Storage Type</th>
<th>Max Sequential Read</th>
<th>Random 4K Read (IOPS)</th>
<th>Real-World Game Loading</th>
<th>Price per GB (2026)</th>
</tr>
</thead>
<tbody><tr>
<td>PCIe Gen4 2230 SSD (Corsair MP600 Mini)</td>
<td>~7,000 MB/s </td>
<td>~200,000+ IOPS</td>
<td>Fastest</td>
<td>~$0.11–0.13 </td>
</tr>
<tr>
<td>PCIe Gen4 2230 SSD (Crucial P310)</td>
<td>~7,100 MB/s </td>
<td>~180,000 IOPS</td>
<td>Fastest</td>
<td>~$0.11–0.13 </td>
</tr>
<tr>
<td>PCIe Gen3 2230 SSD (Samsung PM9B1)</td>
<td>~3,480 MB/s </td>
<td>~100,000 IOPS</td>
<td>Very fast</td>
<td>~$0.07–0.10 </td>
</tr>
<tr>
<td>UHS-II microSD (Kingston Canvas React Plus)</td>
<td>~292 MB/s </td>
<td>~4,500 IOPS (A2)</td>
<td>Moderate</td>
<td>~$0.15/GB </td>
</tr>
<tr>
<td>UHS-I microSD (Samsung PRO Ultimate)</td>
<td>~193 MB/s </td>
<td>~4,000 IOPS (A2)</td>
<td>Moderate</td>
<td>~$0.13/GB </td>
</tr>
<tr>
<td>UHS-I microSD (SanDisk Extreme PRO)</td>
<td>~191 MB/s </td>
<td>~4,000 IOPS (A2)</td>
<td>Moderate</td>
<td>~$0.12/GB </td>
</tr>
<tr>
<td>Budget UHS-I microSD (TeamGroup ULTRA A2)</td>
<td>~167 MB/s </td>
<td>~3,800 IOPS (A2)</td>
<td>Acceptable</td>
<td>~$0.08/GB </td>
</tr>
</tbody></table>
<p>The critical detail most buyers miss: <strong>the Steam Deck&#39;s microSD slot is UHS-I only</strong> . Spending premium money on a UHS-II card like the Kingston Canvas React Plus is wasted for Deck owners — the slot physically cannot exceed 104 MB/s. UHS-II cards are backward-compatible and will work, but they run at UHS-I speeds. Only ROG Ally/Ally X owners with UHS-II slots can extract the additional performance .</p>
<h2>Real-World Loading Time Tests</h2>
<p>Synthetic benchmarks tell only part of the story. The following table synthesizes real-world loading measurements across multiple test sources, comparing internal SSD (PCIe 3.0, representative of Steam Deck OLED&#39;s slot) against UHS-I microSD cards .</p>
<h3>Loading Time Comparison: SSD vs. microSD</h3>
<table>
<thead>
<tr>
<th>Game</th>
<th>Internal SSD (PCIe 3.0)</th>
<th>microSD UHS-I (A2-rated)</th>
<th>microSD Penalty</th>
<th>Notes</th>
</tr>
</thead>
<tbody><tr>
<td><strong>No Man&#39;s Sky</strong> (cold boot to menu)</td>
<td>56s</td>
<td>95s</td>
<td>+69% slower </td>
<td>Open-world asset streaming hammers microSD</td>
</tr>
<tr>
<td><strong>Cyberpunk 2077</strong> (fast travel)</td>
<td>12s</td>
<td>19s</td>
<td>+58% slower </td>
<td>City traversal stutters more on microSD</td>
</tr>
<tr>
<td><strong>Horizon Zero Dawn</strong> (area transition)</td>
<td>~60s</td>
<td>~90s</td>
<td>+50% slower</td>
<td>Heavy texture streaming between biomes</td>
</tr>
<tr>
<td><strong>Days Gone</strong> (load save)</td>
<td>22.2s</td>
<td>30–33s</td>
<td>+35–49% slower</td>
<td>Post-apocalyptic open world</td>
</tr>
<tr>
<td><strong>Shadow of the Tomb Raider</strong> (level load)</td>
<td>21.7s</td>
<td>26–27s</td>
<td>+20–24% slower </td>
<td>SanDisk Extreme PRO nearly matched SSD</td>
</tr>
<tr>
<td><strong>GTA V</strong> (story mode load)</td>
<td>27s</td>
<td>33s</td>
<td>+22% slower</td>
<td>Older, well-optimized streaming</td>
</tr>
<tr>
<td><strong>Returnal</strong> (cycle restart)</td>
<td>~25s</td>
<td>~30s</td>
<td>+20% slower</td>
<td>Roguelike structure = frequent loading</td>
</tr>
<tr>
<td><strong>Rollerdrome</strong> (level load)</td>
<td>4.75s</td>
<td>5.4–5.6s</td>
<td>+14–18% slower</td>
<td>Small levels, minimal difference</td>
</tr>
<tr>
<td><strong>Aperture Desk Job</strong> (level load)</td>
<td>~10s</td>
<td>~11s</td>
<td>+10% slower</td>
<td>Light Source engine title</td>
</tr>
<tr>
<td><strong>Hollow Knight</strong> (area transition)</td>
<td>~3s</td>
<td>~4s</td>
<td>+33% slower</td>
<td>2D games load fast regardless</td>
</tr>
</tbody></table>
<p>The pattern is clear: <strong>open-world games with heavy asset streaming suffer the most on microSD</strong>, with 50–70% longer load times in titles like <em>No Man&#39;s Sky</em> and <em>Horizon Zero Dawn</em> . These games continuously stream textures, geometry, and audio data from storage as you traverse the world, and microSD&#39;s limited random IOPS creates visible hitching during fast travel and area transitions. One benchmark noted that <em>Cyberpunk 2077</em> experienced minimum FPS drops to 20 when loading from microSD versus 29 from SSD during benchmark scene transitions — a playable but perceptible stutter .</p>
<p>Linear and indie games show minimal differences. <em>Rollerdrome</em>, <em>Aperture Desk Job</em>, and <em>Hollow Knight</em> all load within seconds on either medium because their level sizes are small and their asset footprints modest . For these titles, microSD is functionally indistinguishable from SSD once gameplay begins. In-game framerates are virtually identical between storage types — the difference appears only during level transitions and asset streaming events .</p>
<p>The SanDisk Extreme PRO deserves special mention. It is the only microSD card tested that consistently approaches — and occasionally beats — the Steam Deck&#39;s internal SSD in select loading tests. In <em>Shadow of the Tomb Raider</em>, it loaded in 15.6 seconds versus the SSD&#39;s 15.9 seconds . This appears to be an outlier driven by particularly efficient random read patterns on that specific card and title, but it demonstrates that the best microSD cards are far from the &quot;unusable&quot; category some enthusiasts claim.</p>
<h2>Price Per GB: The MicroSD&#39;s Killer Advantage</h2>
<p>NAND flash prices roughly doubled since mid-2025 due to AI datacenter demand, with shortages expected into 2027 . This has impacted both SSDs and microSD cards, but the relative pricing structure remains intact.</p>
<h3>Cost Per GB Comparison (2026)</h3>
<table>
<thead>
<tr>
<th>Storage Type</th>
<th>Capacity</th>
<th>Typical Price</th>
<th>Price/GB</th>
<th>Value Rating</th>
</tr>
</thead>
<tbody><tr>
<td>Budget 2230 SSD (Samsung PM9B1)</td>
<td>512GB</td>
<td>$40–55</td>
<td>$0.08–0.11</td>
<td>Excellent </td>
</tr>
<tr>
<td>Budget 2230 SSD (PM9B1)</td>
<td>1TB</td>
<td>$80–100</td>
<td>$0.08–0.10</td>
<td>Excellent </td>
</tr>
<tr>
<td>Mid-range 2230 SSD (Kingston NV3)</td>
<td>1TB</td>
<td>$85–110</td>
<td>$0.09–0.11</td>
<td>Very Good </td>
</tr>
<tr>
<td>Premium 2230 SSD (Corsair MP600 Mini)</td>
<td>1TB</td>
<td>$110–130</td>
<td>$0.11–0.13</td>
<td>Good </td>
</tr>
<tr>
<td>Premium 2230 SSD (WD SN770M)</td>
<td>2TB</td>
<td>$220–265</td>
<td>$0.11–0.13</td>
<td>Good </td>
</tr>
<tr>
<td>microSD Budget (TeamGroup ULTRA A2)</td>
<td>1TB</td>
<td>~$80–90</td>
<td>$0.08–0.09</td>
<td>Excellent </td>
</tr>
<tr>
<td>microSD Budget (Samsung EVO Select)</td>
<td>512GB</td>
<td>$35–45</td>
<td>$0.07–0.09</td>
<td>Excellent</td>
</tr>
<tr>
<td>microSD Budget (Evo Select)</td>
<td>1TB</td>
<td>$70–90</td>
<td>$0.07–0.09</td>
<td>Excellent</td>
</tr>
<tr>
<td>microSD Premium (SanDisk Extreme PRO)</td>
<td>512GB</td>
<td>$52</td>
<td>$0.10</td>
<td>Very Good </td>
</tr>
<tr>
<td>microSD Premium (Lexar Silver Plus)</td>
<td>1TB</td>
<td>$90–100</td>
<td>$0.09–0.10</td>
<td>Very Good </td>
</tr>
<tr>
<td>microSD Premium (Samsung PRO Ultimate)</td>
<td>512GB</td>
<td>$65</td>
<td>$0.13</td>
<td>Good </td>
</tr>
</tbody></table>
<p>At the budget tier, microSD and 2230 SSDs achieve roughly comparable cost per gigabyte — approximately $0.07–0.11/GB. A 1TB microSD runs $70–100; a 1TB budget 2230 SSD lands at $85–110. The SSD costs marginally more but delivers dramatically better performance. Where the math shifts is at higher capacities: 2TB microSD cards remain rare and expensive, while 2TB 2230 SSDs like the Crucial P310 and TeamGroup MP44S offer the best capacity-per-dollar at $140–180 .</p>
<p>The Samsung PM9B1 deserves attention as a special case. Available through AliExpress at ~$38–55 for 512 GB, this OEM drive delivers ~3,480 MB/s reads and 2,950 MB/s writes at a price that undercuts most microSD cards . The trade-off is warranty ambiguity and the need to purchase from marketplace sellers with 98%+ feedback. For technically confident buyers, it represents the best price-to-performance ratio in handheld storage .</p>
<h2>Installation Difficulty: Plug-and-Play vs. Surgery</h2>
<p>The microSD card&#39;s greatest practical advantage is its zero-friction installation. Slide it into the slot, format through SteamOS or Windows, and begin installing games. No tools, no disassembly, no risk. For users uncomfortable opening electronics or concerned about warranty implications, this is the deciding factor.</p>
<p>Internal SSD replacement requires disassembly and carries genuine risk. The Steam Deck OLED&#39;s procedure involves removing eight T6 Torx screws, prying the back cover, disconnecting the battery, transferring an EMI shield to the new drive, and reinstalling SteamOS from a USB recovery image . iFixit rates the procedure as moderate difficulty (7/10). The most commonly reported mistakes include: failing to track screw lengths (the OLED uses five different screw sizes), forgetting to enter Battery Storage Mode before disassembly, and cracking the microSD card if left inserted during opening .</p>
<h3>Installation Difficulty by Handheld</h3>
<table>
<thead>
<tr>
<th>Handheld</th>
<th>SSD Form Factor</th>
<th>Difficulty</th>
<th>Key Risks</th>
</tr>
</thead>
<tbody><tr>
<td>Steam Deck (LCD)</td>
<td>M.2 2230 PCIe 3.0</td>
<td>7/10</td>
<td>Screw tracking, EMI shield transfer, OS reinstall </td>
</tr>
<tr>
<td>Steam Deck OLED</td>
<td>M.2 2230 PCIe 3.0</td>
<td>7/10</td>
<td>T6 Torx screws, Battery Storage Mode, back cover clips </td>
</tr>
<tr>
<td>ROG Ally X / Xbox Ally X</td>
<td>M.2 2280 PCIe 4.0</td>
<td>6–7/10</td>
<td>Ribbon cable between back panel and motherboard </td>
</tr>
<tr>
<td>Legion Go 2</td>
<td>M.2 2230/2242 PCIe 4.0</td>
<td>7/10</td>
<td>Similar to Steam Deck procedure</td>
</tr>
<tr>
<td>MSI Claw 8 AI+</td>
<td>M.2 2230 PCIe 4.0</td>
<td>7/10</td>
<td>Consult MSI service manual </td>
</tr>
</tbody></table>
<p>For the ROG Ally X, the switch to M.2 2280 (standard laptop SSD size) is a significant upgrade — it enables cheaper, higher-capacity drives up to 4 TB, and the physical installation is slightly easier than 2230 because the drives are larger and easier to handle .</p>
<p>Cloning is an alternative to clean installation. Using an M.2 USB enclosure (~$10–15) and software like Macrium Reflect, you can clone your existing drive to the new SSD before swapping, preserving your setup, saves, and configuration . This eliminates the OS reinstallation step but requires disabling BitLocker first to avoid encryption issues.</p>
<h2>The Hybrid Setup: The Smart Play</h2>
<p>For most users, the optimal approach is not choosing one storage type — it&#39;s combining both strategically. A <strong>hybrid setup</strong> pairs an upgraded internal SSD for OS and frequently-played AAA titles with a large microSD for indie games, emulation libraries, and less demanding titles where load times don&#39;t matter.</p>
<h3>Recommended Hybrid Configurations</h3>
<table>
<thead>
<tr>
<th>Budget Tier</th>
<th>Internal SSD</th>
<th>microSD</th>
<th>Total Cost</th>
<th>Total Capacity</th>
<th>Best For</th>
</tr>
</thead>
<tbody><tr>
<td><strong>Tight Budget</strong></td>
<td>Samsung PM9B1 512GB (~$45)</td>
<td>TeamGroup ULTRA A2 512GB (~$40)</td>
<td>~$85</td>
<td>1TB</td>
<td>Maximum capacity per dollar </td>
</tr>
<tr>
<td><strong>Balanced</strong></td>
<td>Kingston NV3 1TB (~$95)</td>
<td>Lexar Silver Plus 1TB (~$95)</td>
<td>~$190</td>
<td>2TB</td>
<td>Good performance + large library </td>
</tr>
<tr>
<td><strong>Premium</strong></td>
<td>Corsair MP600 Mini 2TB (~$220)</td>
<td>Samsung PRO Ultimate 1TB (~$130)</td>
<td>~$350</td>
<td>3TB</td>
<td>AAA on fast SSD, everything else on quality microSD </td>
</tr>
</tbody></table>
<p>The logic is straightforward. Install your &quot;forever games&quot; — <em>Elden Ring</em>, <em>Cyberpunk 2077</em>, <em>Baldur&#39;s Gate 3</em>, <em>Red Dead Redemption 2</em> — on the internal SSD where fast travel and area transitions benefit from NVMe speeds. Use the microSD for indie titles (<em>Hades</em>, <em>Celeste</em>, <em>Hollow Knight</em>), emulation ROMs, and games where you won&#39;t notice the loading difference. This approach gives you 80% of a full-SSD setup&#39;s practical benefit at roughly 50% of the cost .</p>
<h2>When to Choose Each Option</h2>
<h3>Choose microSD expansion if:</h3>
<ul>
<li>You prioritize simplicity and zero-risk installation</li>
<li>Your game library consists primarily of indie titles, 2D games, and older AAA ports where load time differences are 10–20% at most</li>
<li>You frequently swap games in and out and prefer the flexibility of hot-swappable storage</li>
<li>Budget is your primary constraint — a 1TB microSD at $70–90 is the cheapest path to large storage</li>
<li>You own an ROG Ally/Ally X with a UHS-II slot and can leverage cards like the Kingston Canvas React Plus (292 MB/s) </li>
</ul>
<h3>Choose internal SSD replacement if:</h3>
<ul>
<li>You play open-world AAA titles with heavy asset streaming (<em>No Man&#39;s Sky</em>, <em>Horizon Zero Dawn</em>, <em>Starfield</em>, <em>Cyberpunk 2077</em>) where the 50–70% loading penalty on microSD directly impacts your experience </li>
<li>You notice texture pop-in, hitching during fast travel, or FPS drops during area transitions on your current microSD setup</li>
<li>You&#39;re comfortable with moderate electronics disassembly or know someone who is</li>
<li>You want the absolute fastest loading times and are willing to pay the premium for NVMe speeds</li>
<li>You own a handheld with M.2 2280 support (ROG Ally X, Xbox Ally X), where SSD upgrades are cheaper and easier than 2230 </li>
</ul>
<h2>Final Verdict: The Data-Driven Recommendation</h2>
<p>For the <strong>average handheld owner</strong>, start with a high-quality microSD card. The Samsung PRO Ultimate 512GB ($65, 200 MB/s, A2-rated, 10-year warranty) or SanDisk Extreme PRO 512GB ($52, A2-rated, fastest loading in Steam Deck tests) provides ample storage for a diverse library with loading times that are acceptable for all but the most storage-intensive titles. The plug-and-play convenience cannot be overstated — you will spend more time gaming and less time worrying about screwdrivers and OS recovery images.</p>
<p>For the <strong>enthusiast or AAA-focused player</strong>, an internal SSD upgrade is worth the cost and effort. The Corsair MP600 Mini (E27T) at ~$110–130 for 1TB offers Phison E27T controller performance with TLC NAND that won&#39;t slow down when full . The Samsung PM9B1 at ~$40–55 for 512GB via AliExpress is the value champion for budget builders willing to navigate OEM marketplaces . Pair either with a mid-tier microSD for overflow, and you have a two-tier storage system that optimizes performance where it matters and cost where it doesn&#39;t.</p>
<p>The microSD card is not &quot;bad&quot; storage. It is slow storage, and slow storage is perfectly fine for slow-loading games. The internal SSD is not &quot;necessary&quot; for everyone. It is necessary for specific game types and specific player expectations. Match the storage medium to your library, not your ego.</p>
