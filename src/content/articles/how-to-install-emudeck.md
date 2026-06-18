---
title: "How to Install EmuDeck on Your Handheld"
category: "How-To"
date: "2026-02-01"
readTime: "10 min read"
tags: ["EmuDeck", "Steam Deck", "Emulation"]
description: "Step-by-step guide to installing EmuDeck on Steam Deck and other handheld PCs for retro gaming."
---

<p>EmuDeck is the closest thing handheld PC gaming has to a universal emulation installer. Instead of manually configuring a dozen emulators, hunting down BIOS files, mapping controllers for each system, and scraping metadata one game at a time, EmuDeck automates the entire process into a single script that runs in under fifteen minutes . It installs and pre-configures emulators for more than thirty gaming systems, places your ROMs in the correct folder structure, handles controller mapping through Steam Input, and integrates everything into your Steam library via Steam ROM Manager so your retro games appear alongside your Steam titles in Gaming Mode.</p>
<p>Whether you want to play GameCube classics at full speed on a Steam Deck OLED, revisit PS2 exclusives on the ROG Xbox Ally X, or experiment with Switch emulation on a Legion Go 2, this guide walks you through every step from a blank storage device to a fully operational emulation library.</p>
<h2>What You Need</h2>
<h3>Hardware</h3>
<ul>
<li>A Steam Deck (LCD or OLED), ROG Xbox Ally X, Legion Go 2, or Legion Go S</li>
<li>At least <code>50 GB</code> of free storage (internal SSD or microSD card)</li>
<li>A microSD card reader or USB-C hub with USB-A ports (for transferring ROMs from a PC)</li>
<li>An active internet connection during installation</li>
</ul>
<h3>Software Prerequisites</h3>
<ul>
<li><strong>SteamOS</strong> (EmuDeck&#39;s primary target and best-supported platform) or <strong>Windows 11</strong> (with Desktop Mode access for Steam Deck)</li>
<li>Your own legally obtained <strong>ROM files</strong> and <strong>BIOS dumps</strong> from consoles you own</li>
<li>A <strong>microSD card formatted to ext4</strong> (for Steam Deck) or <strong>exFAT/NTFS</strong> (for Windows handhelds); U3/A2 speed class recommended minimum</li>
</ul>
<p><strong>Important legal note:</strong> EmuDeck does not provide ROMs or BIOS files. You must supply your own, dumped from hardware you legally own. Downloading copyrighted ROMs from the internet is piracy regardless of whether you own the original cartridge or disc.</p>
<h3>Storage Recommendations</h3>
<table>
<thead>
<tr>
<th>Use Case</th>
<th>Minimum Storage</th>
<th>Recommended</th>
<th>Format</th>
</tr>
</thead>
<tbody><tr>
<td>8-bit/16-bit systems only (NES through PS1)</td>
<td><code>16 GB</code></td>
<td><code>64 GB</code> microSD</td>
<td>ext4 (SteamOS) / exFAT (Windows)</td>
</tr>
<tr>
<td>Through GameCube/PS2/PSP</td>
<td><code>128 GB</code></td>
<td><code>256 GB</code> microSD</td>
<td>ext4 (SteamOS) / exFAT (Windows)</td>
</tr>
<tr>
<td>Through Wii U/Switch/PS3</td>
<td><code>512 GB</code></td>
<td><code>1 TB</code> microSD or internal SSD</td>
<td>ext4 (SteamOS) / NTFS (Windows)</td>
</tr>
<tr>
<td>Full library (all 30+ systems)</td>
<td><code>1 TB</code></td>
<td><code>2 TB</code> internal SSD</td>
<td>ext4 (SteamOS) / NTFS (Windows)</td>
</tr>
</tbody></table>
<h2>Step 1: Prepare Your Storage</h2>
<p>EmuDeck can install to internal storage or a microSD card. For Steam Deck users, a high-quality microSD card is the most practical choice because it keeps your emulation library portable and preserves precious internal SSD space for AAA PC games.</p>
<h3>Formatting a microSD Card on Steam Deck</h3>
<ol>
<li>Insert the microSD card into the slot on the top of the Steam Deck.</li>
<li>Switch to <strong>Desktop Mode</strong> (instructions in Step 2).</li>
<li>Open <strong>KDE Partition Manager</strong> from the application menu.</li>
<li>Select your microSD card from the device list (check the capacity to confirm you have the right device).</li>
<li>Delete any existing partitions, then create a new partition table (GPT) and a single ext4 partition.</li>
<li>Apply changes and wait for formatting to complete.</li>
</ol>
<p>The ext4 format is required on SteamOS because certain emulators and Steam ROM Manager have compatibility issues with exFAT&#39;s file permission model .</p>
<h2>Step 2: Enter Desktop Mode</h2>
<p>EmuDeck cannot be installed from SteamOS Gaming Mode. You must switch to Desktop Mode, which provides a full KDE Plasma desktop environment.</p>
<ol>
<li>Press the <strong>Steam button</strong> on the left side of the Deck.</li>
<li>Navigate to <strong>Power &gt; Switch to Desktop</strong>.</li>
<li>The Steam Deck will exit Gaming Mode and load the KDE desktop. This may take <code>20-30 seconds</code>.</li>
</ol>
<p>If you are using a Windows handheld (ROG Ally X, Legion Go 2), simply log into Windows Desktop as normal. The EmuDeck installer has a Windows-specific version available from the same website .</p>
<h2>Step 3: Download and Run the EmuDeck Installer</h2>
<ol>
<li>Open the <strong>Chrome</strong> browser from the KDE desktop taskbar (or any browser on Windows).</li>
<li>Navigate to <strong><a href="https://www.emudeck.com">https://www.emudeck.com</a></strong>.</li>
<li>Click the download button for <strong>SteamOS</strong> (or Windows, depending on your device).</li>
<li>The installer downloads as an <code>.AppImage</code> file (SteamOS) or <code>.exe</code> (Windows).</li>
<li>Run the installer. On SteamOS, right-click the downloaded <code>.AppImage</code> and select <strong>Properties &gt; Permissions</strong>, then check <strong>&quot;Is executable.&quot;</strong> Double-click to launch.</li>
</ol>
<p>The EmuDeck installer window will appear with two primary options: <strong>Easy Mode</strong> and <strong>Custom Mode</strong> .</p>
<h3>Easy Mode vs. Custom Mode</h3>
<p><strong>Easy Mode</strong> installs all supported emulators with recommended settings, uses internal storage as the default ROM path, applies community-validated controller configurations, and enables all available features including Steam ROM Manager. This is the fastest path to a working setup and is recommended for first-time users .</p>
<p><strong>Custom Mode</strong> gives you granular control over:</p>
<ul>
<li>Storage location (internal vs. microSD)</li>
<li>Which specific emulators to install</li>
<li>Individual emulator settings (resolution, widescreen patches, rewind)</li>
<li>Controller mapping preferences</li>
<li>Whether to enable Steam ROM Manager integration</li>
<li>Additional tools like the Game Compressor</li>
</ul>
<p>If you have specific performance targets or want to skip emulators for systems you do not plan to play, Custom Mode is worth the extra five minutes of configuration.</p>
<h2>Step 4: Configure Storage Location and Emulator Selection</h2>
<p>During Custom Mode setup (or after Easy Mode completes), you will be prompted to select your storage device. Choose the microSD card you formatted earlier, or select internal storage if you have sufficient free space.</p>
<p>EmuDeck then presents a list of supported systems. A checkmark beside a system means its emulator will be installed and configured. The 2026 EmuDeck installer includes the following emulators by default :</p>
<table>
<thead>
<tr>
<th>System(s)</th>
<th>Emulator</th>
<th>Default Selection</th>
</tr>
</thead>
<tbody><tr>
<td>NES, SNES, GB, GBC, GBA, Genesis, Saturn, PS1, N64, Neo Geo</td>
<td>RetroArch (multiple cores)</td>
<td>Yes</td>
</tr>
<tr>
<td>GameCube, Wii</td>
<td>Dolphin</td>
<td>Yes</td>
</tr>
<tr>
<td>Wii U</td>
<td>Cemu</td>
<td>Yes</td>
</tr>
<tr>
<td>Nintendo Switch</td>
<td>Ryujinx</td>
<td>Yes</td>
</tr>
<tr>
<td>PS2</td>
<td>PCSX2-Qt</td>
<td>Yes</td>
</tr>
<tr>
<td>PS3</td>
<td>RPCS3</td>
<td>Yes (optional, large install)</td>
</tr>
<tr>
<td>Nintendo 3DS</td>
<td>Lime3DS/Citra</td>
<td>Yes</td>
</tr>
<tr>
<td>PS Vita</td>
<td>Vita3K</td>
<td>Yes</td>
</tr>
<tr>
<td>Xbox (original)</td>
<td>Xemu</td>
<td>No</td>
</tr>
<tr>
<td>Dreamcast</td>
<td>Flycast</td>
<td>Yes</td>
</tr>
<tr>
<td>Nintendo DS</td>
<td>melonDS</td>
<td>Yes</td>
</tr>
<tr>
<td>DOS/ScummVM games</td>
<td>ScummVM</td>
<td>Yes</td>
</tr>
<tr>
<td>Arcade (MAME)</td>
<td>MAME (various cores)</td>
<td>Yes</td>
</tr>
<tr>
<td>PSP</td>
<td>PPSSPP</td>
<td>Yes</td>
</tr>
</tbody></table>
<p>Leave the defaults unless you are certain you will not play a particular system. Disk space for the emulators themselves is modest (<code>2-3 GB</code> total); the bulk of your storage will go to ROMs and game assets.</p>
<h2>Step 5: Install Emulators and Complete Setup</h2>
<p>Click <strong>Install</strong> and wait. The script downloads each emulator, extracts it to the correct location, installs required dependencies (including Flatpak runtimes on SteamOS), configures controller profiles, and sets up the folder structure for ROMs and BIOS files .</p>
<p>Installation time varies by internet speed and system:</p>
<table>
<thead>
<tr>
<th>Device</th>
<th>Approximate Install Time</th>
</tr>
</thead>
<tbody><tr>
<td>Steam Deck OLED</td>
<td><code>10-15 minutes</code></td>
</tr>
<tr>
<td>ROG Xbox Ally X</td>
<td><code>8-12 minutes</code></td>
</tr>
<tr>
<td>Legion Go 2</td>
<td><code>8-12 minutes</code></td>
</tr>
</tbody></table>
<p>When complete, EmuDeck will prompt you to add ROMs and run Steam ROM Manager.</p>
<h2>Step 6: Add Your ROMs and BIOS Files</h2>
<p>EmuDeck creates a standardized folder structure in <code>/run/media/mmcblk0p1/emulation/roms/</code> (if using microSD on SteamOS) or the equivalent path on your chosen storage device. Each system has its own subfolder .</p>
<h3>ROM Folder Structure</h3>
<pre><code>emulation/
├── roms/
│ ├── gb/ (Game Boy)
│ ├── gba/ (Game Boy Advance)
│ ├── gbc/ (Game Boy Color)
│ ├── genesis/ (Sega Genesis/Mega Drive)
│ ├── n64/ (Nintendo 64)
│ ├── nds/ (Nintendo DS)
│ ├── nes/ (NES/Famicom)
│ ├── psx/ (PlayStation 1)
│ ├── ps2/ (PlayStation 2)
│ ├── ps3/ (PlayStation 3)
│ ├── psp/ (PlayStation Portable)
│ ├── saturn/ (Sega Saturn)
│ ├── snes/ (Super NES)
│ ├── switch/ (Nintendo Switch)
│ ├── wii/ (Nintendo Wii)
│ ├── wiiu/ (Wii U)
│ └── ... (additional systems)
└── bios/ (BIOS files for all systems)
</code></pre>
<h3>Transferring ROMs</h3>
<p>Use one of these methods to copy your ROM files:</p>
<ol>
<li><strong>SFTP/SCP:</strong> From a PC on the same network, SFTP to the Steam Deck&#39;s IP address (visible in Desktop Mode network settings). User: <code>deck</code>, password: your SteamOS password.</li>
<li><strong>USB drive:</strong> Copy ROMs to a USB drive on your PC, then plug it into the Steam Deck via a USB-C hub and copy files using the Dolphin file manager.</li>
<li><strong>SMB/Samba:</strong> Share a folder from your PC and mount it in Dolphin (requires enabling Samba in SteamOS).</li>
</ol>
<p>Place ROM files in the appropriate subfolder. File extensions vary by system: <code>.iso</code> and <code>.chd</code> for PS2/GameCube, <code>.nsp</code> and <code>.xci</code> for Switch, <code>.3ds</code> and <code>.cia</code> for 3DS, <code>.zip</code> or individual ROM files for RetroArch cores .</p>
<h3>BIOS Files</h3>
<p>Many emulators require original console BIOS files to function. Place all BIOS files in the <code>/emulation/bios/</code> folder. EmuDeck&#39;s 2026 release includes a <strong>BIOS Checker</strong> tool that verifies your BIOS files are correct and complete . Run it from the EmuDeck application menu to see which systems have valid BIOS dumps and which are missing files.</p>
<table>
<thead>
<tr>
<th>System</th>
<th>Required BIOS File(s)</th>
<th>Notes</th>
</tr>
</thead>
<tbody><tr>
<td>PlayStation 1</td>
<td><code>scph5501.bin</code> (NA), <code>scph5502.bin</code> (EU)</td>
<td>Region must match your ROMs</td>
</tr>
<tr>
<td>PlayStation 2</td>
<td><code>PS2 Bios 30004R V6 Pal.bin</code> (various)</td>
<td>Multiple versions supported</td>
</tr>
<tr>
<td>Sega Saturn</td>
<td><code>sega_101.bin</code> (JP), <code>mpr-17933.bin</code> (US)</td>
<td>Required for most games</td>
</tr>
<tr>
<td>Game Boy Advance</td>
<td><code>gba_bios.bin</code></td>
<td>Optional but improves accuracy</td>
</tr>
<tr>
<td>Nintendo DS</td>
<td><code>bios7.bin</code>, <code>bios9.bin</code>, <code>firmware.bin</code></td>
<td>Required for melonDS</td>
</tr>
</tbody></table>
<h2>Step 7: Configure Steam ROM Manager</h2>
<p>Steam ROM Manager (SRM) is what makes EmuDeck feel like a native console feature. It parses your ROM folders, downloads artwork and metadata, and adds each game to your Steam library as a non-Steam shortcut. The result is that your retro games appear in Gaming Mode with cover art, just like your Steam purchases .</p>
<h3>Running Steam ROM Manager</h3>
<ol>
<li>From Desktop Mode, launch <strong>Steam ROM Manager</strong> (installed automatically by EmuDeck).</li>
<li>The left panel lists all configured parsers (one per emulator/system).</li>
<li>Click <strong>Preview</strong> in the top-right.</li>
<li>Steam ROM Manager will scan your ROM folders and match games against its databases.</li>
<li>Review the matches. Most will be correct; some may need manual correction if your ROM filenames are non-standard.</li>
<li>Click <strong>Parse</strong> to generate the Steam shortcuts.</li>
<li>Click <strong>Save to Steam</strong> to write the entries to your Steam library.</li>
<li>Exit Steam ROM Manager and return to Gaming Mode. Your emulated games will now appear in the library.</li>
</ol>
<h3>Artwork and Metadata</h3>
<p>Steam ROM Manager pulls artwork from <strong>SteamGridDB</strong>, a community database of high-resolution cover art, banners, and logos for non-Steam games. If a game shows no artwork, you can manually search SteamGridDB from within SRM and assign art. Alternatively, the <strong>Decky SteamGridDB</strong> plugin lets you change artwork directly from Gaming Mode after the games are added .</p>
<h2>Step 8: Per-System Emulator Configuration</h2>
<p>While EmuDeck applies sensible defaults, each emulator has settings you may want to tweak for your specific handheld&#39;s performance characteristics.</p>
<h3>Dolphin (GameCube &amp; Wii)</h3>
<p>On Steam Deck OLED and ROG Xbox Ally X, Dolphin runs at full speed for virtually all GameCube and Wii titles at <code>2x</code> internal resolution (<code>1280x1056</code> for GameCube, <code>1584x1320</code> for Wii). The Legion Go 2 can push <code>3x</code> resolution thanks to the RDNA 3.5 GPU .</p>
<p>Key settings to adjust:</p>
<ul>
<li><strong>Graphics &gt; Internal Resolution:</strong> <code>2x</code> for Steam Deck, <code>2-3x</code> for Z2 Extreme handhelds</li>
<li><strong>Graphics &gt; Aspect Ratio:</strong> Auto (or Force 16:9 for widescreen hack-compatible games)</li>
<li><strong>Graphics &gt; Backend:</strong> Vulkan (default; best performance on AMD APUs)</li>
</ul>
<h3>PCSX2-Qt (PS2)</h3>
<p>PCSX2 performance varies by game complexity. Most titles run full speed on Steam Deck OLED at <code>2x</code> native resolution (<code>1080p</code>). The ROG Xbox Ally X and Legion Go 2 can handle <code>3x</code> (<code>1440p</code>) for many games .</p>
<p>Key settings:</p>
<ul>
<li><strong>Graphics &gt; Renderer:</strong> Vulkan</li>
<li><strong>Graphics &gt; Internal Resolution:</strong> <code>2x</code> (Steam Deck), <code>3x</code> (Z2 Extreme)</li>
<li><strong>Graphics &gt; Anisotropic Filtering:</strong> <code>8x</code> or <code>16x</code> (minimal performance impact)</li>
<li><strong>System &gt; Emulation Settings &gt; Preset:</strong> Safe (default) or Switch to Unsafe for problematic games</li>
</ul>
<h3>RPCS3 (PS3)</h3>
<p>PS3 emulation is the most demanding system EmuDeck supports. Not all games are playable, but community testing has validated a growing list of titles that run at full speed on modern handhelds .</p>
<table>
<thead>
<tr>
<th>Game</th>
<th>Performance on Steam Deck</th>
<th>Notes</th>
</tr>
</thead>
<tbody><tr>
<td>God of War (HD)</td>
<td>Flawless, locked <code>60 FPS</code></td>
<td>One of the best-performing titles</td>
</tr>
<tr>
<td>God of War 2 (HD)</td>
<td>Flawless, locked <code>60 FPS</code></td>
<td>Same engine, same performance</td>
</tr>
<tr>
<td>MGS HD Collection</td>
<td>Flawless, locked <code>60 FPS</code></td>
<td>All three games solid</td>
</tr>
<tr>
<td>Bayonetta</td>
<td><code>50-60 FPS</code></td>
<td>Occasional minor dips</td>
</tr>
<tr>
<td>Skate 3</td>
<td><code>50-60 FPS</code></td>
<td>Very playable</td>
</tr>
<tr>
<td>Tekken 6 / Tag 2</td>
<td>Flawless, locked <code>60 FPS</code></td>
<td>Fighting games run well</td>
</tr>
<tr>
<td>Soul Calibur IV/V</td>
<td>Flawless, locked <code>60 FPS</code></td>
<td>Excellent performance</td>
</tr>
<tr>
<td>Resident Evil 4 HD</td>
<td>Flawless, locked <code>30 FPS</code></td>
<td>30 FPS cap in original</td>
</tr>
<tr>
<td>God of War 3</td>
<td>Unplayable</td>
<td><code>10-15 FPS</code>; too demanding</td>
</tr>
<tr>
<td>Gran Turismo 6</td>
<td>Unplayable</td>
<td>Slideshow, crashes</td>
</tr>
</tbody></table>
<p>Key RPCS3 settings for handhelds :</p>
<ul>
<li><strong>CPU &gt; PPU Decoder:</strong> LLVM Recompiler</li>
<li><strong>CPU &gt; SPU Decoder:</strong> LLVM Recompiler or ASMJIT (test both per-game)</li>
<li><strong>GPU &gt; Renderer:</strong> Vulkan</li>
<li><strong>GPU &gt; Resolution Scale:</strong> <code>100%</code> (higher scales tank performance)</li>
<li><strong>Advanced &gt; Enable SPU thread optimization:</strong> Checked (improves Steam Deck performance)</li>
<li>Some games require <strong>&quot;Write Color Buffer&quot;</strong> enabled in GPU settings</li>
</ul>
<h3>Cemu (Wii U)</h3>
<p>Cemu requires games in <code>.wua</code> format for best performance. Convert your <code>.rpx</code> or <code>.wud</code> dumps using the Cemu built-in tool or external utilities. Performance is generally good across all current handhelds at <code>1080p</code> render resolution .</p>
<h3>Ryujinx (Nintendo Switch)</h3>
<p>Switch emulation remains the most legally and technically complex system. You need your own <code>prod.keys</code> and <code>title.keys</code> dumped from a Switch console, plus firmware files. Ryujinx on Steam Deck runs 2D titles at full speed but struggles with demanding 3D games. The ROG Xbox Ally X and Legion Go 2 with Z2 Extreme APUs handle a broader library at playable speeds .</p>
<h2>Step 9: Controller Mapping and Hotkeys</h2>
<p>EmuDeck configures Steam Input profiles for each emulator, mapping the Steam Deck&#39;s physical controls (and by extension, other handheld controls) to the emulated console&#39;s inputs. The default profiles are community-tuned and work well for most games .</p>
<h3>Universal EmuDeck Hotkeys (Steam Deck)</h3>
<table>
<thead>
<tr>
<th>Button Combination</th>
<th>Function</th>
</tr>
</thead>
<tbody><tr>
<td><strong>L4 + R4</strong> (back paddles)</td>
<td>Open emulator quick menu</td>
</tr>
<tr>
<td><strong>Steam + Left D-Pad</strong></td>
<td>Save state</td>
</tr>
<tr>
<td><strong>Steam + Right D-Pad</strong></td>
<td>Load state</td>
</tr>
<tr>
<td><strong>Steam + Up D-Pad</strong></td>
<td>Increase save state slot</td>
</tr>
<tr>
<td><strong>Steam + Down D-Pad</strong></td>
<td>Decrease save state slot</td>
</tr>
<tr>
<td><strong>Steam + A</strong></td>
<td>Fast-forward toggle</td>
</tr>
<tr>
<td><strong>Steam + B</strong></td>
<td>Screenshot</td>
</tr>
<tr>
<td><strong>Steam + X</strong></td>
<td>Toggle fullscreen</td>
</tr>
<tr>
<td><strong>... (QAM) + L1</strong></td>
<td>Rewind (if enabled)</td>
</tr>
</tbody></table>
<p>These hotkeys are configured through Steam Input and work across all RetroArch cores and most standalone emulators. If a specific emulator does not respond to the hotkeys, open its settings and verify that the Steam Input profile is active.</p>
<p>The 2026 EmuDeck release includes the <strong>MUDI (EmuDecky)</strong> plugin for Steam Deck, which displays a hotkey cheat sheet in the Quick Access Menu and lets you change aspect ratios without leaving a game . Install it from the Decky Loader plugin store after completing EmuDeck setup.</p>
<h2>Step 10: Use the Game Compressor to Save Space</h2>
<p>ISO dumps of GameCube, Wii, and PS2 games are often <code>4.7 GB</code> (single-layer DVD) or <code>8.5 GB</code> (dual-layer). EmuDeck&#39;s built-in <strong>Game Compressor</strong> converts these to CHD (Compressed Hunks of Data) format, which typically reduces file sizes by <code>30-60%</code> with zero impact on loading times or performance .</p>
<p>To use it, open the EmuDeck application from Desktop Mode and select <strong>Game Compressor</strong>. Point it at your ROM folders, choose which systems to compress, and let it run. A <code>4.7 GB</code> GameCube ISO often compresses to <code>1.2-2.0 GB</code> as CHD. On a <code>512 GB</code> microSD card, compression can free up <code>50-100 GB</code> of space depending on your library.</p>
<h2>Performance Expectations by Handheld</h2>
<p>The table below summarizes emulation performance across current-generation handhelds. &quot;Full speed&quot; means the emulator maintains the original console&#39;s target framerate (<code>60 FPS</code> for most systems, <code>30 FPS</code> for some PS2/PS3 titles) .</p>
<table>
<thead>
<tr>
<th>System</th>
<th>Steam Deck OLED</th>
<th>ROG Xbox Ally X</th>
<th>Legion Go 2</th>
<th>MSI Claw 8 AI+</th>
</tr>
</thead>
<tbody><tr>
<td>NES / SNES / GBA</td>
<td>Full speed</td>
<td>Full speed</td>
<td>Full speed</td>
<td>Full speed</td>
</tr>
<tr>
<td>N64</td>
<td>Full speed</td>
<td>Full speed</td>
<td>Full speed</td>
<td>Full speed</td>
</tr>
<tr>
<td>PS1 (DuckStation)</td>
<td>Full speed</td>
<td>Full speed</td>
<td>Full speed</td>
<td>Full speed</td>
</tr>
<tr>
<td>Dreamcast</td>
<td>Full speed</td>
<td>Full speed</td>
<td>Full speed</td>
<td>Full speed</td>
</tr>
<tr>
<td>PSP</td>
<td>Full speed</td>
<td>Full speed</td>
<td>Full speed</td>
<td>Full speed</td>
</tr>
<tr>
<td>DS / 3DS</td>
<td>Full speed</td>
<td>Full speed</td>
<td>Full speed</td>
<td>Full speed</td>
</tr>
<tr>
<td>GameCube (Dolphin)</td>
<td>Full speed (<code>2x</code>)</td>
<td>Full speed (<code>2-3x</code>)</td>
<td>Full speed (<code>3x</code>)</td>
<td>Full speed (<code>2x</code>)</td>
</tr>
<tr>
<td>Wii (Dolphin)</td>
<td>Full speed (<code>2x</code>)</td>
<td>Full speed (<code>2-3x</code>)</td>
<td>Full speed (<code>3x</code>)</td>
<td>Full speed (<code>2x</code>)</td>
</tr>
<tr>
<td>PS2 (PCSX2)</td>
<td>~Full speed*</td>
<td>Full speed</td>
<td>Full speed</td>
<td>Full speed</td>
</tr>
<tr>
<td>Wii U (Cemu)</td>
<td>Good</td>
<td>Better</td>
<td>Better</td>
<td>Good</td>
</tr>
<tr>
<td>Switch (Ryujinx)</td>
<td>Partial (2D titles)</td>
<td>Good</td>
<td>Good</td>
<td>Partial</td>
</tr>
<tr>
<td>PS3 (RPCS3)</td>
<td>Select titles</td>
<td>More titles</td>
<td>More titles</td>
<td>Select titles</td>
</tr>
</tbody></table>
<p>*Most PS2 games run full speed on Steam Deck OLED; some demanding titles may need slight resolution reduction.</p>
<h2>Troubleshooting</h2>
<h3>Steam ROM Manager shows no games</h3>
<p>Verify your ROM files are in the correct subfolders under <code>/emulation/roms/</code>. Files in the wrong folder will not be detected by the parser. Also check that the parser for that system is enabled in SRM&#39;s left panel.</p>
<h3>Emulator crashes on launch</h3>
<p>The most common cause is missing BIOS files. Run the <strong>BIOS Checker</strong> from the EmuDeck application menu to identify which systems need BIOS files . Another frequent issue is incorrect file permissions on ext4-formatted microSD cards; ensure the <code>deck</code> user owns the files.</p>
<h3>Poor performance in specific games</h3>
<p>Try the following in order:</p>
<ol>
<li>Reduce internal resolution by one step (e.g., <code>2x</code> to <code>1x</code>).</li>
<li>Switch graphics backend between Vulkan and OpenGL (rarely helps on AMD, but some games prefer one).</li>
<li>Enable the emulator&#39;s built-in frame skip if available.</li>
<li>For RPCS3, try toggling <strong>SPU thread optimization</strong> and testing both LLVM and ASMJIT SPU decoders .</li>
</ol>
<h3>Controller not responding in emulator</h3>
<p>Open Steam Input configuration for that game&#39;s shortcut and verify the EmuDeck controller profile is selected. Some standalone emulators override Steam Input; check the emulator&#39;s own controller settings and manually bind inputs if necessary.</p>
<h2>Final Thoughts</h2>
<p>EmuDeck removes virtually every pain point that made emulation tedious on PC. In under twenty minutes, you go from a blank storage device to a unified retro gaming library with <code>30+</code> systems, proper controller mapping, artwork, and Steam integration . The 2026 additions, Game Compressor, BIOS Checker, MUDI plugin, and EmuVirtual symlinks, address the few remaining rough edges of the previous versions. For Steam Deck owners especially, EmuDeck is practically mandatory software. For Windows handheld users, it is the most polished and automated path to a comprehensive emulation setup without spending hours in individual emulator configuration menus. Dump your ROMs, install EmuDeck, and enjoy four decades of gaming history in a device that fits in your hands.</p>
