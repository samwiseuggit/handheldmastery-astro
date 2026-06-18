---
title: "How to Dual-Boot SteamOS and Windows: Getting the Best of Both Worlds"
category: "How-To"
date: "2026-02-24"
readTime: "13 min read"
tags: ["dual-boot", "SteamOS"]
description: "The Linux-vs-Windows debate is not theoretical for handheld PC gamers — it is a practical question you face every time you launch a game. SteamOS delivers battery life and performance that Windows 11 cannot match on identical hardware: in Dead Cells,..."
---

<p>The Linux-vs-Windows debate is not theoretical for handheld PC gamers — it is a practical question you face every time you launch a game. SteamOS delivers battery life and performance that Windows 11 cannot match on identical hardware: in <em>Dead Cells</em>, the Steam Deck OLED runs over 6 hours on SteamOS versus just 2h45m on Windows 11 [^333^]. In <em>Cyberpunk 2077</em> at the same preset, SteamOS pushes ~59 FPS where Windows manages only ~46 FPS [^333^]. The Legion Go S running SteamOS achieves a staggering 69% higher FPS in <em>Cyberpunk 2077</em> compared to its Windows counterpart [^62^]. But Windows 11 remains the only way to run Xbox Game Pass natively, play titles with kernel-level anti-cheat, and access the full breadth of PC game launchers. Dual-booting resolves this conflict without forcing a compromise. This guide walks through the complete dual-boot setup on Steam Deck and compatible handhelds, with data-backed context for every decision.</p>
<hr>
<h2>Prerequisites</h2>
<table>
<thead>
<tr>
<th>Requirement</th>
<th>Minimum Spec</th>
<th>Notes</th>
</tr>
</thead>
<tbody><tr>
<td><strong>Storage</strong></td>
<td>256GB SSD (512GB+ recommended)</td>
<td>Windows needs 64GB minimum; leave room for games per OS</td>
</tr>
<tr>
<td><strong>USB-C Hub</strong></td>
<td>3× USB-A, USB-C PD pass-through, HDMI</td>
<td>Required for keyboard, mouse, and external display during setup</td>
</tr>
<tr>
<td><strong>Input Devices</strong></td>
<td>USB keyboard and mouse</td>
<td>Bluetooth devices will not work during Windows installation</td>
</tr>
<tr>
<td><strong>USB Drive</strong></td>
<td>8GB+ (USB 3.0 recommended)</td>
<td>For both SteamOS recovery and Windows 11 installation media</td>
</tr>
<tr>
<td><strong>microSD Card</strong></td>
<td>64GB+ (optional but recommended)</td>
<td>Can substitute for USB drive; also useful for cross-OS game storage</td>
</tr>
<tr>
<td><strong>Windows 11 ISO</strong></td>
<td>64-bit, latest build</td>
<td>Download from Microsoft's official Media Creation Tool</td>
</tr>
<tr>
<td><strong>SteamOS Recovery Image</strong></td>
<td>Latest from Valve</td>
<td>Download from Steam Deck recovery page</td>
</tr>
</tbody></table>
<p><strong>Supported Devices</strong>: Steam Deck LCD, Steam Deck OLED, Legion Go S, Legion Go 2 [^162^]. Other SteamOS-compatible handhelds may work with minor adjustments.</p>
<hr>
<h2>Why Dual-Boot Instead of Picking One OS</h2>
<p>The performance gap between SteamOS and Windows 11 is not marginal — it is transformative for a battery-constrained device. Beyond the raw FPS advantage, SteamOS offers console-like suspend/resume that Windows 11 still cannot replicate consistently [^333^]. <em>Returnal</em> at 1200p High settings runs at 33 FPS on SteamOS versus a stutter-prone 18 FPS on Windows 11 [^334^]. <em>The Witcher 3</em> hits 76 FPS on SteamOS compared to 66 FPS on Windows [^333^].</p>
<p>But Windows 11 holds exclusive access to:</p>
<ul>
<li><strong>Xbox Game Pass</strong> native app and downloadable titles</li>
<li><strong>Kernel-level anti-cheat games</strong> (Valorant, Fortnite, Apex Legends with certain AC systems)</li>
<li><strong>Epic Games Store, GOG Galaxy, Battle.net</strong> and other non-Steam launchers without Proton compatibility concerns</li>
<li><strong>Full PC productivity software</strong> (Adobe suite, Office, development tools)</li>
<li><strong>Modding tools and utilities</strong> that lack Linux versions</li>
</ul>
<p>Dual-booting gives you SteamOS for portable, battery-optimized Steam gaming, and Windows 11 for everything else. The 30-second reboot to switch OSs is faster than juggling two separate handhelds.</p>
<hr>
<h2>Step 1: Set a SteamOS User Password</h2>
<p>Before making any system-level changes, you need root access in SteamOS Desktop Mode.</p>
<ol>
<li>Switch to <strong>Desktop Mode</strong>: Press the Steam button, navigate to Power, select Switch to Desktop.</li>
<li>Open <strong>Settings</strong> > <strong>Users</strong> > <strong>Change Password</strong>.</li>
<li>Set a secure password and confirm.</li>
<li>This password will be required for <code>sudo</code> commands in the terminal [^162^].</li>
</ol>
<hr>
<h2>Step 2: Create SteamOS Recovery Media</h2>
<p>The recovery image is your safety net. If anything goes wrong during partitioning or Windows installation, you can boot from this drive to restore SteamOS.</p>
<ol>
<li>Download the <strong>SteamOS recovery image</strong> from Valve's official Steam Deck recovery page.</li>
<li>Flash the image to your USB drive:<ul>
<li><strong>From Windows</strong>: Use <strong>Rufus</strong> (select the <code>.img</code> file, write in DD mode).</li>
<li><strong>From Linux/macOS</strong>: Use <strong>Balena Etcher</strong> [^162^].</li>
</ul>
</li>
<li>Verify the flash completed without errors. A corrupted recovery image is a disaster waiting to happen.</li>
</ol>
<hr>
<h2>Step 3: Install the rEFInd Boot Manager</h2>
<p>This is the most critical step. Without rEFInd, Windows 11 will overwrite the bootloader during installation and SteamOS will become unbootable. rEFInd presents a graphical OS selection menu every time you power on the device.</p>
<ol>
<li>In SteamOS Desktop Mode, open <strong>Konsole</strong> (the terminal).</li>
<li>Run the following commands to download and install rEFInd:</li>
</ol>
<pre><code class="language-bash">cd $HOME
rm -rf $HOME/SteamDeck_rEFInd/
git clone https://github.com/jlobue10/SteamDeck_rEFInd
cd SteamDeck_rEFInd
chmod +x install-GUI.sh
./install-GUI.sh
</code></pre>
<ol start="3">
<li><p>The rEFInd GUI installer opens. Configure the following:</p>
<ul>
<li>Set <strong>SteamOS as the default boot entry</strong>.</li>
<li>Set a <strong>timeout value</strong> (10 seconds is recommended — long enough to select Windows, short enough for daily SteamOS booting).</li>
<li>Enable the graphical menu theme if desired [^162^].</li>
</ul>
</li>
<li><p>Click <strong>Install</strong> to write rEFInd to the EFI partition.</p>
</li>
</ol>
<p><strong>Why rEFInd specifically?</strong> The Steam Deck uses a custom EFI partition layout that standard GRUB or Windows Boot Manager cannot handle correctly. rEFInd autodetects all bootable OSs on the system and provides a maintenance-free menu. The SteamDeck_rEFInd fork includes Steam Deck-specific configurations and icons [^162^].</p>
<hr>
<h2>Step 4: Resize the Internal Drive Partition</h2>
<p>You need unallocated space to install Windows 11. KDE Partition Manager, included in SteamOS Desktop Mode, handles this safely.</p>
<ol>
<li><p><strong>Boot from your SteamOS recovery USB</strong>:</p>
<ul>
<li>Power off the device completely.</li>
<li>Insert the recovery USB.</li>
<li>Hold <strong>Volume Down + Power</strong> until the boot menu appears.</li>
<li>Select the USB drive from the boot menu [^162^].</li>
</ul>
</li>
<li><p>In the recovery environment, open <strong>KDE Partition Manager</strong>.</p>
</li>
<li><p>Locate the internal SSD (usually <code>/dev/nvme0n1</code>).</p>
</li>
<li><p>Identify the large <code>ext4</code> home partition (typically the last partition, labeled <code>home</code>).</p>
</li>
<li><p>Right-click the home partition > <strong>Resize/Move</strong>.</p>
</li>
<li><p>Drag the left edge to the right, or enter a new size, leaving at least <strong>64GB of unallocated space</strong> (128GB+ recommended for a usable Windows install).</p>
</li>
<li><p>Click <strong>Apply</strong> and wait for the resize operation to complete. This may take 10-30 minutes depending on how full the drive is.</p>
</li>
<li><p>In the unallocated space, create a new <strong>NTFS</strong> partition. You can leave it unformatted — the Windows installer will format it [^162^].</p>
</li>
</ol>
<p><strong>Critical</strong>: Do not touch the EFI system partition, the boot partition, or any partition labeled with cryptic names like <code>rootfs</code>. Only resize the large <code>home</code> partition.</p>
<hr>
<h2>Step 5: Install Windows 11</h2>
<p>With space prepared and rEFInd protecting your bootloader, you can now install Windows.</p>
<ol>
<li><p>Create a <strong>Windows 11 installation USB</strong> using Microsoft's Media Creation Tool on another PC.</p>
</li>
<li><p>Insert the Windows 11 USB into your handheld (use the USB-C hub if needed).</p>
</li>
<li><p>Boot from the Windows USB:</p>
<ul>
<li>Power off the device.</li>
<li>Hold <strong>Volume Down + Power</strong> to access the boot menu.</li>
<li>Select the Windows USB drive [^162^].</li>
</ul>
</li>
<li><p>The Windows installer loads. Select your language/region, then choose:</p>
<ul>
<li><strong>Custom: Install Windows only (advanced)</strong>.</li>
</ul>
</li>
<li><p>You will see a list of partitions. Select the <strong>unallocated space</strong> you created in Step 4.</p>
</li>
<li><p>Click <strong>New</strong> to let Windows create its required partitions (System Reserved, MSR, Windows, Recovery).</p>
</li>
<li><p>Select the primary Windows partition (the largest one) and click <strong>Next</strong>.</p>
</li>
</ol>
<p><strong>CRITICAL</strong>: Never select Delete on any existing partition. Do not click the large "Drive 0 Unallocated Space" and then "Delete." Only select the new NTFS space you deliberately created. Deleting the wrong partition will wipe SteamOS entirely [^162^].</p>
<ol start="8">
<li>Windows will install and reboot several times. When the installer finishes and reboots, let it boot back into the setup process. Complete the Windows OOBE (Out-of-Box Experience) setup.</li>
</ol>
<hr>
<h2>Step 6: Install Windows Drivers</h2>
<p>Steam Deck hardware requires specific drivers that are not included in the Windows 11 installation media. Download the official <strong>Steam Deck Windows drivers</strong> from Valve's support site [^162^].</p>
<p>Install the following driver packages in this order:</p>
<table>
<thead>
<tr>
<th>Driver</th>
<th>File Name</th>
<th>Purpose</th>
</tr>
</thead>
<tbody><tr>
<td><strong>Chipset/AMD APU</strong></td>
<td><code>APU_Drivers</code></td>
<td>Core graphics, CPU power management</td>
</tr>
<tr>
<td><strong>Audio</strong></td>
<td><code>Audio_Drivers</code></td>
<td>Built-in speakers and 3.5mm jack</td>
</tr>
<tr>
<td><strong>Wi-Fi</strong></td>
<td><code>WiFi_Drivers</code></td>
<td>Qualcomm or MediaTek Wi-Fi 6E</td>
</tr>
<tr>
<td><strong>Bluetooth</strong></td>
<td><code>BT_Drivers</code></td>
<td>Bluetooth 5.0 connectivity</td>
</tr>
<tr>
<td><strong>SD Card Reader</strong></td>
<td><code>SDCard_Reader</code></td>
<td>microSD slot functionality</td>
</tr>
</tbody></table>
<p><strong>Important</strong>: Steam Deck LCD and OLED models use different driver packages. Download the correct set for your hardware revision. The OLED model has a different audio codec and display controller that the LCD drivers will not support [^162^].</p>
<hr>
<h2>Step 7: Install the Dual Boot Fix Tool</h2>
<p>Windows 11 aggressively attempts to take over the boot process on every major update. The <strong>Dual Boot Fix</strong> tool prevents this by restoring rEFInd after Windows updates overwrite the bootloader.</p>
<ol>
<li>Download the <strong>Dual Boot Fix</strong> tool from the same Valve support page as the drivers.</li>
<li>Run it from within Windows 11.</li>
<li>The tool re-registers rEFInd as the primary bootloader after each Windows boot [^162^].</li>
</ol>
<p>Without this tool, a single Windows Update can silently remove your dual-boot menu and boot straight to Windows every time. Reinstalling rEFInd from recovery media is the fix, but prevention is simpler.</p>
<hr>
<h2>Step 8: Final Configuration and Boot Menu Setup</h2>
<p>Return to SteamOS to finalize the dual-boot configuration.</p>
<ol>
<li>Reboot the device. The rEFInd menu should appear with both SteamOS and Windows icons.</li>
<li>Select <strong>SteamOS</strong> to boot back into Linux.</li>
<li>Switch to Desktop Mode.</li>
<li>Open the <strong>rEFInd GUI</strong> (installed in Step 3).</li>
<li>Click <strong>Create Config</strong> > <strong>Install Config</strong> to write the final dual-boot configuration [^162^].</li>
</ol>
<p>In Windows, open <code>msconfig</code> (Win+R, type <code>msconfig</code>) and enable <strong>No GUI boot</strong> under the Boot tab. This eliminates the Windows spinner animation and makes the transition from rEFInd to Windows feel instantaneous.</p>
<hr>
<h2>Switching Between Operating Systems</h2>
<table>
<thead>
<tr>
<th>Method</th>
<th>Action</th>
</tr>
</thead>
<tbody><tr>
<td><strong>At power-on</strong></td>
<td>Hold Volume Down during boot to force the rEFInd menu if it times out too quickly</td>
</tr>
<tr>
<td><strong>From SteamOS</strong></td>
<td>Reboot and select Windows from rEFInd menu</td>
</tr>
<tr>
<td><strong>From Windows</strong></td>
<td>Hold Shift while clicking Restart > Troubleshoot > UEFI Firmware Settings > Restart, then select SteamOS from rEFInd</td>
</tr>
<tr>
<td><strong>Default boot</strong></td>
<td>SteamOS boots automatically after the rEFInd timeout; no action needed for daily use</td>
</tr>
</tbody></table>
<p>The rEFInd menu appears for the configured timeout (10 seconds) on every cold boot. SteamOS is the default. To switch, simply use the D-pad or touchscreen to select the Windows icon and press A. The selected OS then boots directly.</p>
<hr>
<h2>Storage Management Per OS</h2>
<p>Storage is your most constrained resource in a dual-boot setup. Plan your allocation carefully.</p>
<table>
<thead>
<tr>
<th>Storage Strategy</th>
<th>SteamOS Allocation</th>
<th>Windows Allocation</th>
<th>Notes</th>
</tr>
</thead>
<tbody><tr>
<td><strong>Minimal Windows</strong></td>
<td>400-440GB</td>
<td>64-100GB</td>
<td>Windows only for Game Pass and anti-cheat; keep most games on SteamOS</td>
</tr>
<tr>
<td><strong>Balanced</strong></td>
<td>350GB</td>
<td>150GB</td>
<td>Room for a few large Windows-only titles</td>
</tr>
<tr>
<td><strong>Heavy Windows</strong></td>
<td>250GB</td>
<td>250GB</td>
<td>For users who primarily want Game Pass and anti-cheat titles</td>
</tr>
<tr>
<td><strong>microSD for cross-OS</strong></td>
<td>N/A</td>
<td>N/A</td>
<td>Format as exFAT; stores ROMs, media, documents accessible from both OSs</td>
</tr>
</tbody></table>
<p><strong>Pro tip</strong>: Keep your largest games on SteamOS for maximum battery life. Reserve Windows space for titles that absolutely require it. A 1TB SSD is the practical minimum for comfortable dual-booting with more than a handful of games per OS.</p>
<hr>
<h2>Common Issues and Fixes</h2>
<table>
<thead>
<tr>
<th>Issue</th>
<th>Cause</th>
<th>Fix</th>
</tr>
</thead>
<tbody><tr>
<td><strong>rEFInd menu does not appear</strong></td>
<td>Windows Update overwrote bootloader</td>
<td>Boot from SteamOS recovery USB, reinstall rEFInd via terminal, then run Dual Boot Fix in Windows [^162^]</td>
</tr>
<tr>
<td><strong>Windows cannot see Wi-Fi</strong></td>
<td>Wrong driver package (LCD vs OLED)</td>
<td>Re-download the correct driver set for your model from Valve's site</td>
</tr>
<tr>
<td><strong>Audio not working in Windows</strong></td>
<td>Missing audio driver or incorrect codec</td>
<td>Install audio driver; OLED uses different codec than LCD — verify driver version</td>
</tr>
<tr>
<td><strong>SteamOS boot loops after resize</strong></td>
<td>Partition resize corrupted the home partition</td>
<td>Boot recovery USB, open terminal, run <code>fsck</code> on the home partition</td>
</tr>
<tr>
<td><strong>Windows shows tiny text on 7-inch screen</strong></td>
<td>Windows 11 does not scale well at 800p</td>
<td>Set display scaling to 150% in Windows Display Settings; some dialogs will still be tiny</td>
</tr>
<tr>
<td><strong>Touchscreen does not work in Windows</strong></td>
<td>Missing touch driver</td>
<td>Install all driver packages; touch is included in the APU driver bundle</td>
</tr>
<tr>
<td><strong>Bluetooth devices pair in one OS but not the other</strong></td>
<td>BLE bonding keys are OS-specific</td>
<td>Re-pair devices in each OS separately; this is expected behavior</td>
</tr>
</tbody></table>
<hr>
<h2>Performance Comparison: What You Gain and Lose</h2>
<p>Dual-booting does not inherently reduce performance in either OS. The only trade-off is storage space. Here is what the OS choice means for gaming performance on the same hardware:</p>
<table>
<thead>
<tr>
<th>Title</th>
<th>SteamOS FPS</th>
<th>Windows 11 FPS</th>
<th>SteamOS Advantage</th>
<th>Battery (SteamOS / Windows)</th>
</tr>
</thead>
<tbody><tr>
<td>Cyberpunk 2077 (Deck preset)</td>
<td>~59 FPS [^333^]</td>
<td>~46 FPS [^333^]</td>
<td>+28%</td>
<td>2h10m / ~1h45m</td>
</tr>
<tr>
<td>The Witcher 3 (medium)</td>
<td>76 FPS [^333^]</td>
<td>66 FPS [^333^]</td>
<td>+15%</td>
<td>3-4h / ~2.5h</td>
</tr>
<tr>
<td>Returnal (1200p High)</td>
<td>33 FPS [^334^]</td>
<td>18 FPS [^334^]</td>
<td>+83%</td>
<td>~2h / ~1h20m</td>
</tr>
<tr>
<td>Dead Cells</td>
<td>60 FPS locked</td>
<td>60 FPS locked</td>
<td>Even</td>
<td>6h+ / 2h45m [^333^]</td>
</tr>
</tbody></table>
<p>The data is unambiguous: for Steam games that work on both platforms, SteamOS is the superior choice. Reserve Windows for the exclusives that require it. That is the philosophy that makes dual-booting worthwhile.</p>
<hr>
<h2>When Not to Dual-Boot</h2>
<p>Dual-booting adds complexity that not every user needs. Skip it if:</p>
<ul>
<li>You exclusively play Steam games and emulation — SteamOS handles both natively with better efficiency.</li>
<li>Your handheld has only 64GB or 128GB of internal storage — there is simply not enough room for two OSs plus games.</li>
<li>You rely heavily on cloud saves and frequent OS switching — the reboot cycle becomes tedious if you switch more than once per day.</li>
<li>You are not comfortable with terminal commands and partition management — a mistake can brick your SteamOS installation.</li>
</ul>
<p>For those users, consider <strong>Bazzite</strong> as a SteamOS alternative with broader hardware support and similar gaming performance [^190^], or simply run Windows 11 with Handheld Companion for TDP control and performance overlay [^199^].</p>
<hr>
<h2>Expected Results</h2>
<p>After completing this guide, you will have:</p>
<ul>
<li>A graphical rEFInd boot menu appearing on every cold boot, with SteamOS as default.</li>
<li>Both operating systems fully functional with correct drivers and hardware support.</li>
<li>Protected bootloader that survives Windows Updates via the Dual Boot Fix tool.</li>
<li>Storage partitioned to support game libraries on both OSs, with a strategy for managing space.</li>
<li>The ability to reboot and select your OS in under 30 seconds based on what you want to play.</li>
</ul>
<p>The dual-boot setup, when done correctly, is maintenance-free. The rEFInd menu becomes part of your muscle memory — one extra button press to access the full breadth of PC gaming on a handheld device.</p>
