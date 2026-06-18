---
title: "How to Upgrade Your SSD: A Step-by-Step Guide for Steam Deck & Legion Go"
category: "How-To"
date: "2026-01-25"
readTime: "12 min read"
tags: ["SSD", "upgrade"]
description: "A single modern AAA game now ships with 100-150 GB of assets, textures, and audio. Install three titles like Call of Duty, Baldur's Gate 3, and Forza Motorsport on a base 512 GB Steam Deck OLED, and you have already consumed 60-70% of your internal s..."
---

<p>A single modern AAA game now ships with <code>100-150 GB</code> of assets, textures, and audio. Install three titles like Call of Duty, Baldur's Gate 3, and Forza Motorsport on a base <code>512 GB</code> Steam Deck OLED, and you have already consumed <code>60-70%</code> of your internal storage before accounting for the operating system, shader caches, and save files [^80^]. The ROG Xbox Ally X ships with <code>1 TB</code> of M.2 2280 storage, which is more generous but still tight if you maintain a library of more than eight to ten large games [^144^]. The Legion Go 2 comes with <code>1 TB</code> in an M.2 2242 form factor, a less common size that limits your upgrade options [^55^].</p>
<p>Upgrading the internal SSD is the single most impactful hardware modification you can make to a handheld PC. Unlike external storage over USB-C, an internal NVMe drive runs at full PCIe bandwidth, maintains full power management integration for better battery life, and keeps your game library with the device at all times. This guide covers everything from selecting the right drive to completing the physical swap and getting your system bootable again.</p>
<h2>What You Need</h2>
<h3>Universal Tools</h3>
<ul>
<li>A compatible NVMe SSD (see compatibility table below)</li>
<li>A <strong>PH0 or PH00 precision Phillips screwdriver</strong> (PH00 fits Steam Deck screws perfectly)</li>
<li>Plastic spudger or guitar pick (for prying open cases without scratching)</li>
<li>Tweezers (for handling the tiny M.2 screw)</li>
<li>Anti-static wrist strap (recommended but not mandatory if you work on a non-carpeted surface and ground yourself before handling components)</li>
<li>A USB-C hub with at least one USB-A port and HDMI output</li>
<li>A USB keyboard (for BIOS/UEFI navigation if needed)</li>
</ul>
<h3>Software Prerequisites</h3>
<ul>
<li><strong>SteamOS Recovery Image</strong> (for Steam Deck) or <strong>Windows 11 Installation Media</strong> (for Windows handhelds)</li>
<li>A <code>8 GB</code> or larger USB flash drive for recovery/installation media</li>
<li><strong>DiskGenium</strong> or <strong>Macrium Reflect Free</strong> (if cloning your existing drive)</li>
<li>Optional: <strong>CrystalDiskInfo</strong> and <strong>CrystalDiskMark</strong> for health checks and speed verification post-install</li>
</ul>
<h2>Choosing the Right SSD</h2>
<p>Handhelds use three M.2 form factors, and using the wrong size will either not fit or not screw down properly. The physical dimensions are in the name: <code>2230</code> is <code>22 mm</code> wide by <code>30 mm</code> long; <code>2242</code> is <code>22 mm</code> by <code>42 mm</code>; <code>2280</code> is <code>22 mm</code> by <code>80 mm</code>.</p>
<h3>Form Factor by Handheld</h3>
<table>
<thead>
<tr>
<th>Handheld</th>
<th>M.2 Form Factor</th>
<th>PCIe Generation</th>
<th>Max Capacity Tested</th>
</tr>
</thead>
<tbody><tr>
<td><strong>Steam Deck OLED</strong></td>
<td>M.2 2230</td>
<td>PCIe 3.0 x4 [^80^]</td>
<td>2 TB (confirmed working)</td>
</tr>
<tr>
<td><strong>Steam Deck LCD</strong></td>
<td>M.2 2230</td>
<td>PCIe 3.0 x4</td>
<td>2 TB (confirmed working)</td>
</tr>
<tr>
<td><strong>ROG Xbox Ally X</strong></td>
<td>M.2 2280</td>
<td>PCIe 4.0 x4 [^144^]</td>
<td>4 TB (theoretical, 2 TB tested)</td>
</tr>
<tr>
<td><strong>Legion Go 2</strong></td>
<td>M.2 2242</td>
<td>PCIe 4.0 x4 [^55^]</td>
<td>2 TB</td>
</tr>
<tr>
<td><strong>Legion Go S</strong></td>
<td>M.2 2242</td>
<td>PCIe 4.0</td>
<td>2 TB</td>
</tr>
<tr>
<td><strong>MSI Claw 8 AI+</strong></td>
<td>M.2 2230</td>
<td>PCIe 4.0 x4 [^63^]</td>
<td>2 TB</td>
</tr>
</tbody></table>
<h3>Recommended SSDs by Form Factor</h3>
<p>The table below lists drives that have been community-validated in handhelds as of early 2026. All are DRAM-less HMB (Host Memory Buffer) designs, which is acceptable for gaming loads and necessary to fit within the tight thermal and power budgets of handheld devices.</p>
<table>
<thead>
<tr>
<th>SSD Model</th>
<th>Form Factor</th>
<th>Capacity</th>
<th>PCIe Gen</th>
<th>Sequential Read</th>
<th>Notes</th>
</tr>
</thead>
<tbody><tr>
<td><strong>WD Black SN770M</strong></td>
<td>2230</td>
<td>1 TB / 2 TB</td>
<td>4.0</td>
<td><code>5,150 MB/s</code></td>
<td>Top community pick for Steam Deck; runs cool, excellent endurance [^80^]</td>
</tr>
<tr>
<td><strong>Samsung PM9B1</strong></td>
<td>2230</td>
<td>512 GB / 1 TB</td>
<td>4.0</td>
<td><code>3,500 MB/s</code></td>
<td>Budget option; runs warm but reliable; common OEM drive</td>
</tr>
<tr>
<td><strong>Sabrent Rocket 2230</strong></td>
<td>2230</td>
<td>1 TB / 2 TB</td>
<td>4.0</td>
<td><code>5,000 MB/s</code></td>
<td>Good balance of price and performance; 2 TB model is Steam Deck's sweet spot</td>
</tr>
<tr>
<td><strong>Corsair MP600 Mini</strong></td>
<td>2230</td>
<td>1 TB / 2 TB</td>
<td>4.0</td>
<td><code>4,800 MB/s</code></td>
<td>Higher endurance rating; good for heavy write workloads</td>
</tr>
<tr>
<td><strong>WD Black SN740</strong></td>
<td>2230</td>
<td>1 TB / 2 TB</td>
<td>4.0</td>
<td><code>5,150 MB/s</code></td>
<td>OEM variant of SN770M; widely available as pulls from tablets</td>
</tr>
<tr>
<td><strong>Samsung 990 EVO</strong></td>
<td>2242</td>
<td>1 TB / 2 TB</td>
<td>4.0/5.0</td>
<td><code>5,000 MB/s</code></td>
<td>Excellent for Legion Go 2; dual-interface works in 4.0 slot</td>
</tr>
<tr>
<td><strong>Sabrent Rocket Nano</strong></td>
<td>2242</td>
<td>1 TB / 2 TB</td>
<td>4.0</td>
<td><code>5,000 MB/s</code></td>
<td>purpose-built for 2242; low profile</td>
</tr>
<tr>
<td><strong>WD Blue SN580</strong></td>
<td>2280</td>
<td>1 TB / 2 TB</td>
<td>4.0</td>
<td><code>4,150 MB/s</code></td>
<td>Budget pick for ROG Ally X; runs very cool</td>
</tr>
<tr>
<td><strong>Samsung 980 Pro</strong></td>
<td>2280</td>
<td>1 TB / 2 TB</td>
<td>4.0</td>
<td><code>7,000 MB/s</code></td>
<td>Overkill for Ally X's constraints but fully compatible</td>
</tr>
<tr>
<td><strong>Crucial P3 Plus</strong></td>
<td>2280</td>
<td>2 TB / 4 TB</td>
<td>4.0</td>
<td><code>4,800 MB/s</code></td>
<td>Best value per terabyte; QLC NAND acceptable for game storage</td>
</tr>
</tbody></table>
<p><strong>Thermal note:</strong> M.2 2230 drives installed in the Steam Deck sit directly beneath a thermal pad and EMI shield. There is no heatsink fan specifically for the SSD, so selecting a drive with efficient power consumption matters more than peak sequential speeds. The WD Black SN770M and Sabrent Rocket 2230 are community favorites specifically because they maintain reasonable temperatures under sustained gaming loads without throttling.</p>
<h2>Cloning vs. Clean Install: Which Approach?</h2>
<p>Before you crack open your handheld, decide whether to clone your existing drive or perform a clean operating system installation.</p>
<p><strong>Clone</strong> if you want to preserve your current OS setup, installed games, save files, and configurations exactly as they are. This is faster but requires a USB-C NVMe enclosure or dual-M.2 docking station to connect both drives simultaneously. Tools like Macrium Reflect Free or DiskGenium handle the cloning process with a few clicks.</p>
<p><strong>Clean Install</strong> if your system has accumulated cruft, if you are switching operating systems (e.g., moving from Windows to SteamOS or Bazzite), or if you want the freshest possible start. A clean install takes longer but eliminates any latent configuration issues and ensures your new drive is partitioned optimally for its capacity.</p>
<p>Most users upgrading from <code>512 GB</code> to <code>2 TB</code> should strongly consider a clean install. The time spent redownloading games is offset by the performance benefits of a fresh OS and the elimination of months of accumulated cache files and fragmented data.</p>
<h2>Steam Deck / Steam Deck OLED SSD Replacement</h2>
<p>The Steam Deck's internal layout is well-documented and relatively forgiving for a first-time modder, provided you follow the screw sequence and handle the EMI shield with care.</p>
<h3>Step 1: Prepare the Device</h3>
<p>Power down the Steam Deck completely (hold power button, select Shutdown). Do not put it to sleep. Place the device face-down on a clean, soft surface to prevent scratches on the screen. If you have a case or protective shell, remove it.</p>
<h3>Step 2: Remove the Back Cover Screws</h3>
<p>The Steam Deck has eight screws on the back panel. They are <strong>not</strong> all the same length, and mixing them up will cause problems during reassembly.</p>
<table>
<thead>
<tr>
<th>Screw Location</th>
<th>Length</th>
<th>Thread Type</th>
</tr>
</thead>
<tbody><tr>
<td>Top-left, top-right (near triggers)</td>
<td><code>10 mm</code></td>
<td>Standard Phillips</td>
</tr>
<tr>
<td>Bottom-left, bottom-right (near grips)</td>
<td><code>8 mm</code></td>
<td>Standard Phillips</td>
</tr>
<tr>
<td>Middle-left, middle-right (center of back)</td>
<td><code>6 mm</code></td>
<td>Standard Phillips</td>
</tr>
<tr>
<td>Left-center, right-center (near fan exhaust)</td>
<td><code>6 mm</code></td>
<td>Standard Phillips</td>
</tr>
</tbody></table>
<p>Use a PH00 screwdriver. Apply firm downward pressure to avoid stripping. Keep a magnetic parts tray or labeled containers nearby.</p>
<h3>Step 3: Pry Off the Back Cover</h3>
<p>Starting at the top edge near the fan exhaust, insert a plastic spudger or guitar pick between the back cover and the main chassis. Work your way around the perimeter, releasing the plastic clips as you go. The clips near the grips are the tightest; apply gentle, even pressure rather than forceful prying. The back cover is thick and durable but the clips can break if mishandled.</p>
<h3>Step 4: Locate and Remove the SSD EMI Shield</h3>
<p>With the back cover removed, you will see the mainboard with the battery occupying the left side and the SSD sitting beneath a metal EMI shield on the right side of the board, near the fan. The shield is held down by a single Phillips screw and covered with a thermal pad on its underside.</p>
<ol>
<li>Remove the single screw holding the EMI shield.</li>
<li>Carefully lift the shield straight up. The thermal pad may adhere to the old SSD; peel it away gently.</li>
<li>Do <strong>not</strong> lose the thermal pad. You will reuse it on the new drive.</li>
</ol>
<h3>Step 5: Remove the Existing SSD</h3>
<p>The M.2 2230 SSD is secured by a single small screw at the end opposite the M.2 connector. Remove this screw with tweezers or a precision screwdriver. The SSD will pop up at a <code>30-degree</code> angle. Gently pull it straight out of the M.2 slot.</p>
<h3>Step 6: Install the New SSD</h3>
<ol>
<li>Remove the thermal pad from the old SSD and apply it to the new one, centering it over the controller and NAND chips.</li>
<li>Insert the new M.2 2230 SSD into the slot at a <code>30-degree</code> angle. It should slide in smoothly with minimal force.</li>
<li>Press the SSD flat against the motherboard and reinstall the retaining screw.</li>
<li>Replace the EMI shield over the new SSD and reinstall its screw.</li>
</ol>
<h3>Step 7: Reassemble and Boot</h3>
<p>Replace the back cover, snapping the clips into place starting from the grips and working outward. Reinstall all eight screws in their correct locations. Power on the device.</p>
<p>If you cloned your drive, the Steam Deck should boot normally into SteamOS. If you installed a blank drive, you will need to boot from recovery media (see the Recovery section below).</p>
<h2>Legion Go 2 / Legion Go S SSD Replacement</h2>
<p>The Legion Go 2 uses an M.2 2242 form factor, which is <code>12 mm</code> longer than the Steam Deck's 2230. The disassembly process differs significantly because the Legion Go 2 has detachable controllers and a kickstand.</p>
<h3>Step 1: Detach Controllers and Close Kickstand</h3>
<p>Remove both controllers from the Legion Go 2 (or Go S) by pressing the release buttons on the sides. Close the built-in kickstand so the device lies flat.</p>
<h3>Step 2: Remove the Back Panel Screws</h3>
<p>The Legion Go 2 has <code>10-12</code> screws around the back panel perimeter, hidden beneath small rubber plugs near the grips and kickstand. Remove the rubber plugs with a spudger, then remove all screws with a PH0 screwdriver. Unlike the Steam Deck, most Legion Go screws are the same length, but keep them organized regardless.</p>
<h3>Step 3: Access the SSD Bay</h3>
<p>The Legion Go 2's internal layout separates the SSD into its own bay beneath a secondary metal cover, rather than burying it under the main EMI shield. Pry off the back panel, then locate the small rectangular cover near the center of the board labeled with an SSD icon. Remove the two screws holding this cover, and the M.2 2242 slot is exposed.</p>
<h3>Step 4: Swap the SSD</h3>
<p>The M.2 2242 SSD installs the same way as a 2230: insert at an angle, press flat, secure with the retaining screw. The Legion Go 2 includes a thermal pad pre-installed in the SSD bay; reuse it or replace it with a new <code>1 mm</code> thermal pad if the original is damaged.</p>
<h3>Step 5: Reassemble</h3>
<p>Replace the SSD bay cover, the back panel, and all screws. Reattach the rubber plugs. The process takes roughly <code>15 minutes</code> once you are familiar with the screw layout.</p>
<h2>ROG Xbox Ally X SSD Replacement</h2>
<p>The ROG Xbox Ally X uses the standard M.2 2280 form factor, the most common size in consumer PCs, giving you the widest selection of drives and the easiest physical installation.</p>
<h3>Step 1: Remove the Back Panel</h3>
<p>Power down the Ally X and place it face-down. Remove the <code>8-10</code> perimeter screws with a PH0 screwdriver. The back panel is held on with plastic clips; start prying from the bottom edge near the USB-C ports.</p>
<h3>Step 2: Locate the M.2 2280 Slot</h3>
<p>The SSD sits near the center of the mainboard, beneath a black heatsink held down by two screws. Unlike the Steam Deck's EMI shield, the Ally X uses an actual aluminum heatsink with a pre-applied thermal pad. Remove the two screws, lift the heatsink, and the SSD is exposed.</p>
<h3>Step 3: Install the New Drive</h3>
<p>Remove the old SSD, insert the new M.2 2280 drive, secure with the retaining screw, replace the heatsink, and reinstall both heatsink screws. The thermal pad on the heatsink can be reused if intact; replace it with a new <code>1.5 mm</code> pad if it has torn or lost adhesion.</p>
<h2>SteamOS Recovery (Steam Deck)</h2>
<p>If you installed a blank SSD in your Steam Deck, you need to reinstall SteamOS from recovery media.</p>
<h3>Creating Recovery Media</h3>
<ol>
<li>On a separate PC, download the <strong>SteamOS Recovery Image</strong> from Valve's official Steam Deck support page.</li>
<li>Flash the image to a <code>8 GB</code> or larger USB drive using <strong>Rufus</strong> (Windows) or <strong>Balena Etcher</strong> (any OS).</li>
<li>Connect the USB drive to your Steam Deck via a USB-C hub.</li>
</ol>
<h3>Booting Recovery</h3>
<ol>
<li>Hold <strong>Volume Down</strong> and press the <strong>Power</strong> button.</li>
<li>Continue holding Volume Down until the boot manager appears.</li>
<li>Select your USB drive from the boot menu.</li>
<li>Choose <strong>"Reinstall SteamOS"</strong> from the recovery menu. This preserves the standard partition layout including the home partition for game storage.</li>
<li>Follow the on-screen prompts. Installation takes <code>10-15 minutes</code>.</li>
</ol>
<p>After recovery completes, remove the USB drive and the Steam Deck will boot into a fresh SteamOS installation. You will need to re-run initial setup (WiFi, account login) and reinstall your games.</p>
<h2>Windows 11 Clean Install (Legion Go 2 / MSI Claw 8 AI+)</h2>
<p>For Windows-based handhelds, a clean Windows 11 installation is straightforward but requires specific drivers post-install.</p>
<h3>Installation Steps</h3>
<ol>
<li>Create Windows 11 installation media using Microsoft's <strong>Media Creation Tool</strong> or by downloading the ISO and flashing it with Rufus.</li>
<li>Boot from the USB drive (typically by holding a volume button during power-on; check your device's specific key combination).</li>
<li>Select <strong>"Custom: Install Windows only (advanced)"</strong> and choose your new, unallocated SSD.</li>
<li>Let Windows install. The process takes <code>15-20 minutes</code>.</li>
</ol>
<h3>Post-Install: Install Handheld-Specific Drivers</h3>
<p>A clean Windows 11 install will lack drivers for your handheld's audio, WiFi, Bluetooth, and graphics. Download the driver package from the manufacturer's website before starting:</p>
<table>
<thead>
<tr>
<th>Handheld</th>
<th>Driver Source</th>
<th>Critical Drivers</th>
</tr>
</thead>
<tbody><tr>
<td><strong>Legion Go 2</strong></td>
<td>Lenovo Vantage or Support site</td>
<td>AMD Chipset, Radeon Graphics, Realtek Audio, WiFi 6E, Controller firmware</td>
</tr>
<tr>
<td><strong>Legion Go S</strong></td>
<td>Lenovo Support site</td>
<td>AMD Chipset, Radeon Graphics, Audio, WiFi 6E</td>
</tr>
<tr>
<td><strong>MSI Claw 8 AI+</strong></td>
<td>MSI Center or Support site</td>
<td>Intel Chipset, Arc 140V Graphics, Audio, Thunderbolt, Fingerprint</td>
</tr>
<tr>
<td><strong>ROG Xbox Ally X</strong></td>
<td>MyASUS or Armoury Crate</td>
<td>AMD Chipset, Radeon 890M Graphics, Realtek Audio, WiFi 6E</td>
</tr>
</tbody></table>
<p>Install the graphics drivers first, followed by chipset, then audio and network. Reboot between each major driver category. Once drivers are installed, run Windows Update to catch any missing components.</p>
<h2>Post-Installation Steps for All Handhelds</h2>
<p>Regardless of which device you upgraded, perform these verification steps before declaring the job done.</p>
<h3>Step 1: Verify SSD Health and Speed</h3>
<p>Run <strong>CrystalDiskInfo</strong> to confirm the drive is recognized, shows <strong>"Good"</strong> health status, and is running at the expected temperature (<code>30-50°C</code> at idle is normal for handhelds). Then run <strong>CrystalDiskMark</strong> to verify sequential read speeds are within <code>10%</code> of the manufacturer's specification. A Steam Deck's PCIe 3.0 x4 slot will cap reads around <code>3,500 MB/s</code>; if you see <code>1,700 MB/s</code>, the drive may be running at x2 width instead of x4, indicating a seating issue.</p>
<h3>Step 2: Enable TRIM</h3>
<p>Open an Administrator Command Prompt and run:</p>
<pre><code class="language-cmd">fsutil behavior set DisableDeleteNotify 0
</code></pre>
<p>This ensures TRIM is enabled, which prevents long-term performance degradation on your SSD.</p>
<h3>Step 3: Partition Unallocated Space (if applicable)</h3>
<p>If your new SSD is larger than <code>2 TB</code>, verify that the full capacity is visible in Disk Management. SteamOS handles partitioning automatically, but Windows may leave unallocated space that needs to be extended into the primary partition via Disk Management.</p>
<h3>Step 4: Reinstall Handheld Utilities</h3>
<p>After a clean install, you will need to reinstall your handheld management tools:</p>
<ul>
<li><strong>ROG Xbox Ally X:</strong> Armoury Crate (for TDP, fan curves, button mapping)</li>
<li><strong>Legion Go 2:</strong> Lenovo Legion Space (for controller mode switching, TDP)</li>
<li><strong>MSI Claw 8 AI+:</strong> MSI Center M (for performance profiles)</li>
<li><strong>Any Windows handheld:</strong> Handheld Companion (open-source alternative for TDP, gyro, overlays) [^199^][^225^]</li>
</ul>
<h2>Troubleshooting</h2>
<h3>Issue: Steam Deck won't boot after SSD swap</h3>
<p>Verify the SSD is fully seated in the M.2 slot. A partially inserted drive will not be detected. If the drive was cloned, ensure the EFI partition was included in the clone. If booting from recovery, try a different USB drive or re-flash the recovery image.</p>
<h3>Issue: SSD runs hot and throttles under load</h3>
<p>Check that the thermal pad makes proper contact between the SSD and the EMI shield (Steam Deck) or heatsink (Ally X). A <code>1 mm</code> pad is standard for 2230 drives. If throttling persists, the drive itself may run warm; consider the WD Black SN770M, which is known for cooler operation.</p>
<h3>Issue: Legion Go 2 doesn't recognize the new SSD</h3>
<p>Ensure you purchased an M.2 2242 drive, not a 2280. A 2280 will physically extend past the mounting post and cannot be secured. Also verify the SSD bay cover is not pinching the drive when reinstalled.</p>
<h3>Issue: Windows 11 clean install lacks WiFi drivers</h3>
<p>This is common on the MSI Claw 8 AI+ and Legion Go 2. Use a USB-C Ethernet adapter or tether to your phone via USB to get internet access, then download the WiFi driver from the manufacturer's support site.</p>
<h2>Final Thoughts</h2>
<p>An SSD upgrade transforms a storage-constrained handheld into a proper portable gaming library. The move from <code>512 GB</code> to <code>2 TB</code> costs roughly <code>$120-160</code> as of early 2026 and takes under an hour even for first-timers. The WD Black SN770M in <code>2 TB</code> remains the community's go-to for Steam Deck upgrades, offering the best balance of speed, thermals, and price in the cramped 2230 form factor. For the ROG Xbox Ally X, the M.2 2280 slot opens up budget-friendly options like the Crucial P3 Plus at <code>4 TB</code> for users who want to carry their entire Steam library in their backpack. Whatever drive you choose, take your time with the disassembly, keep track of your screws, and always create recovery media before you start. The ten minutes spent preparing recovery tools will save you hours if something goes sideways.</p>
