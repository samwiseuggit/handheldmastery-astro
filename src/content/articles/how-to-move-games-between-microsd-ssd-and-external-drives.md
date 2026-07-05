---
title: "How to Move Games Between microSD, SSD, and External Drives"
seoTitle: "How to Move Games Between microSD, SSD, and External Drives Safely"
category: "How-To"
date: "2026-07-05"
readTime: "13 min read"
tags: ["Storage", "microSD", "SSD", "External SSD", "Steam Deck", "Windows Handhelds"]
description: "Learn how to move games between microSD and SSD storage on Steam Deck and Windows handhelds, plus when an external SSD makes sense for backup or travel."
type: "how-to"
keyword: "move games between microSD and SSD"
products: ["sandisk-extreme-1tb", "wd-black-sn770m-1tb", "samsung-t7-shield-1tb"]
faq:
  - question: "Can I move Steam games between microSD and SSD without reinstalling them?"
    answer: "Yes. Steam's storage tools let you move installed games between eligible library locations on the same handheld or PC without downloading the whole game again."
  - question: "Should I keep AAA games on microSD or internal SSD?"
    answer: "Keep your most-played or update-heavy AAA games on the internal SSD first, then use microSD for smaller games, backlog titles, emulators, and overflow installs."
  - question: "Is an external SSD good for handheld gaming PCs?"
    answer: "Yes, especially for rotating large installs, backups, or docked play, but it is less convenient than internal storage because you need to manage cables, ports, and safe ejection."
  - question: "Do Xbox app games move as easily as Steam games?"
    answer: "Not always. Some Xbox app titles can use the Drive Compatibility Tool or reinstall flow, while Steam usually gives you a cleaner in-client move option."
  - question: "Will moving a game break my saves?"
    answer: "Usually no, because save locations are typically separate from the main install folder or synced through the launcher, but you should still confirm cloud sync or back up important saves first."
---

If you want to **move games between microSD and SSD** storage without turning your handheld into a reinstall project, use this rule: move launcher-managed games with the launcher, move loose files with the operating system, and use external SSDs for rotation or backup instead of permanent everyday clutter. That applies whether you are using a [Steam Deck OLED](/compare/steam-deck-oled "Steam Deck OLED"), a Windows handheld such as the [ASUS ROG Ally X](/compare/asus-rog-ally-x "ASUS ROG Ally X"), or a docked handheld gaming PC with extra accessories hanging off USB-C.

Valve's current support pages still point Steam users to the **Storage** tab and **Move Install Folder** workflow for relocations, while Microsoft's current Windows storage guidance focuses on **Storage settings**, **Where new content is saved**, and drive management for connected disks. Xbox's current PC support pages also still route compatible external-drive setups through the **Drive Compatibility Tool** inside the Xbox app ([Steam: Moving a Steam Installation and Games](https://help.steampowered.com/en/faqs/view/4BD4-4528-6B2E-8327), [Steam: Managing Steam Downloads & Updates](https://help.steampowered.com/en/faqs/view/71AB-698D-57EB-178C), [Microsoft Storage settings in Windows](https://support.microsoft.com/en-us/windows/experience/storage-filemanagement/storage-settings-in-windows), [Xbox Drive Compatibility Tool](https://support.xbox.com/en-US/help/games-apps/troubleshooting/using-the-drive-compatibility-tool)).

**Estimated time:** 20-30 minutes  
**Difficulty:** Beginner  
**Devices covered:** Steam Deck, SteamOS handhelds, Windows handheld gaming PCs, plus external USB-C SSD workflows

> **Quick outcome:** By the end, you should know which games belong on internal SSD, which belong on microSD, when an external SSD makes sense, and how to move each category without breaking your library.

## Table of Contents

- [Prerequisites](#prerequisites)
- [Step 1: Decide What Should Live on Each Drive](#step-1-decide-what-should-live-on-each-drive)
- [Step 2: Prepare the Target Drive First](#step-2-prepare-the-target-drive-first)
- [Step 3: Move Steam Games the Safe Way](#step-3-move-steam-games-the-safe-way)
- [Step 4: Handle Windows and Xbox App Storage Properly](#step-4-handle-windows-and-xbox-app-storage-properly)
- [Step 5: Use External SSDs Without Making a Mess](#step-5-use-external-ssds-without-making-a-mess)
- [Step 6: Set a Better Default So You Do Not Repeat This Weekly](#step-6-set-a-better-default-so-you-do-not-repeat-this-weekly)
- [Troubleshooting](#troubleshooting)
- [Next Steps](#next-steps)
- [FAQ](#faq)

## Prerequisites

Before you move anything, make sure the destination drive is healthy, empty enough, and already recognized by the system.

| What you need | Why it matters | Good HHM example |
|---|---|---|
| A fast microSD card | Best for overflow installs and lighter portable gaming libraries | [SanDisk Extreme 1TB](/compare/sandisk-extreme-1tb "SanDisk Extreme 1TB") |
| A compatible internal SSD | Best for your main library, heavy updates, and large handheld gaming PC installs | [WD Black SN770M 1TB](/compare/wd-black-sn770m-1tb "WD Black SN770M 1TB") |
| A USB-C external SSD | Best for rotating big games, backups, or docked setups | [Samsung T7 Shield 1TB](/compare/samsung-t7-shield-1tb "Samsung T7 Shield 1TB") |
| 20-30 minutes | Large games can take time even when you are not redownloading them | Time is usually limited by file copy speed |

Valve's current Steam Deck specs page still lists the microSD slot as **UHS-I** and the USB-C port as **USB 3.2 Gen 2**, which is why a good microSD card and a fast external SSD solve different problems instead of overlapping perfectly ([Steam Deck tech specs](https://www.steamdeck.com/en/tech/deck)). Sandisk's current Extreme microSD page still highlights up to **190MB/s read**, **130MB/s write**, and **A2/U3/V30** ratings, while Western Digital's current WD_BLACK SN770M page still positions the 2230 SSD as a **PCIe Gen 4** handheld upgrade with speeds up to **5,150MB/s**. Samsung's current T7 Shield page still lists **1,050MB/s read**, **1,000MB/s write**, and **IP65** durability for the portable SSD ([SanDisk Extreme microSD](https://www.sandisk.com/products/memory-cards/microsd-cards/sandisk-extreme-uhs-i-microsd?sku=SDSQXAV-1T00-GN6MA), [WD_BLACK SN770M](https://www.westerndigital.com/products/internal-drives/wd-black-sn770m-nvme-ssd), [Samsung T7 Shield](https://www.samsung.com/us/memory-storage/portable-ssd/portable-ssd-t7-shield-usb-3-2-1tb-black-sku-mu-pe1t0s-am/)).

If you are still deciding between expansion options, read [microSD vs Internal SSD: Storage for Handhelds](/articles/microsd-vs-internal-ssd "microSD vs Internal SSD: Storage for Handhelds") first. If your real issue is that internal space is permanently too small, jump to [How to Upgrade Your SSD](/articles/how-to-upgrade-ssd-steam-deck "How to Upgrade Your SSD").

[IMAGE PLACEHOLDER: handheld gaming PC on a desk with microSD card, internal SSD box, and external SSD side by side]

## Step 1: Decide What Should Live on Each Drive

Do not start moving files randomly. Pick the right home for each kind of game first.

| Game type | Best home | Why |
|---|---|---|
| Daily AAA games | Internal SSD | Fastest installs, updates, and load behavior |
| Smaller indies and older titles | microSD | Easy space expansion without opening the handheld |
| Temporary large installs | External SSD | Good for rotation, backup, or docked sessions |
| Emulation ROMs, media, screenshots, mod archives | microSD or external SSD | Easier to organize than clogging the main system drive |

Practical handheld rule:

1. Keep the games you launch most often on the fastest internal drive.
2. Keep the games you do not mind waiting on slightly longer on microSD.
3. Keep the games you are "not playing right now but do not want to redownload later" on an external SSD.

> **Pro Tip:** If a game receives giant seasonal patches or shader updates, it usually belongs on the internal SSD first, even if the raw loading difference feels small.

That separation matters more than buying the most dramatic storage spec sheet. A balanced portable gaming setup is usually better than trying to put every game on the same drive.

## Step 2: Prepare the Target Drive First

Moves fail most often because the destination is not ready.

### On Steam Deck and SteamOS handhelds

Valve's current Steam Deck support guide still tells users to format a microSD card through **Steam > Settings > System > Format SD card** before using it for game storage ([Steam Deck basic use and troubleshooting](https://help.steampowered.com/en/faqs/view/69E3-14AF-9764-4C28)). Do that before you attempt any move.

Use this checklist:

1. Insert the microSD card fully.
2. Open **Steam > Settings > System**.
3. Run **Format SD card** if the card is new or was previously used elsewhere.
4. Reopen storage settings and confirm the card appears as a valid install target.

[IMAGE PLACEHOLDER: SteamOS settings screen showing Format SD card option and recognized storage devices]

### On Windows handhelds

Microsoft's current Storage settings documentation still centers drive prep around **Settings > System > Storage**, **Storage used on other drives**, **Disks & volumes**, and **Where new content is saved** ([Microsoft Storage settings in Windows](https://support.microsoft.com/en-us/windows/experience/storage-filemanagement/storage-settings-in-windows)).

Use this checklist:

1. Connect the microSD card or external SSD.
2. Open **Settings > System > Storage**.
3. Confirm the drive appears under your connected storage.
4. If needed, use **Disks & volumes** to format or assign a proper drive letter.
5. Make sure the destination has more free space than the full installed size of the game you plan to move.

If you mainly use Steam, that is usually enough. If you mainly use the Xbox app, do not skip the Xbox-specific prep in Step 4.

> **Warning:** Do not drag a partially installed game folder to a new drive while Steam, the Xbox app, or another launcher is still updating it.

## Step 3: Move Steam Games the Safe Way

Steam is still the cleanest way to move games between microSD and SSD storage because Valve supports relocation directly inside the client.

The current Steam support articles still point to two valid paths:

- **Steam client Settings > Storage** for library and install-location management
- **Right-click game > Properties > Installed Files > Move Install Folder** for per-game moves ([Moving a Steam Installation and Games](https://help.steampowered.com/en/faqs/view/4BD4-4528-6B2E-8327), [Managing Steam Downloads & Updates](https://help.steampowered.com/en/faqs/view/71AB-698D-57EB-178C))

### Move a game on Steam Deck or any Steam-based handheld

1. Open the game entry in your library.
2. Open **Properties**.
3. Go to **Installed Files**.
4. Choose **Move Install Folder**.
5. Pick the target storage location.
6. Wait for the move to complete before closing Steam or putting the handheld to sleep.

[IMAGE PLACEHOLDER: Steam game properties page showing Installed Files and Move Install Folder]

### Move several games in desktop Steam on Windows handhelds

If you are cleaning up a larger library on a Windows handheld gaming PC:

1. Open **Steam > Settings > Storage**.
2. Review which library folder is filling up.
3. Select the games you want to move.
4. Choose the move action to send them to the new library folder.

This is usually faster and less error-prone than creating new folders in File Explorer and dragging live installs around manually.

| Best move method | Use it when | Avoid it when |
|---|---|---|
| Steam `Move Install Folder` | Single game, one clear destination | You need to reorganize an entire library |
| Steam `Settings > Storage` | Multiple games, new default library target | The destination drive is not formatted yet |
| Manual file copy | ROMs, mods, screenshots, non-launcher content | Installed Steam or Xbox app games |

If your Steam Deck still feels messy after the move, revisit [How to Set Up a Steam Deck OLED for the Best First Week](/articles/how-to-set-up-steam-deck-oled "How to Set Up a Steam Deck OLED for the Best First Week") to clean up your default storage behavior.

## Step 4: Handle Windows and Xbox App Storage Properly

Windows handhelds add one extra layer of confusion: the launcher and the OS both matter.

Microsoft's current Windows storage guidance still allows you to choose where new apps and personal content save by default through **Where new content is saved**, and the Xbox support flow still points users to the **Drive Compatibility Tool** inside the Xbox app for external-drive setup and repair on PC ([Microsoft Storage settings in Windows](https://support.microsoft.com/en-us/windows/experience/storage-filemanagement/storage-settings-in-windows), [Game installation issues on PC and handheld devices](https://support.xbox.com/en-US/help/games-apps/game-setup-and-play/game-installation-issues-on-PC), [Xbox Drive Compatibility Tool](https://support.xbox.com/en-US/help/games-apps/troubleshooting/using-the-drive-compatibility-tool)).

### For Steam, GOG, and other launcher-managed PC games

Use the launcher first. If the launcher offers a move or repair option, take that path before touching the folders yourself.

### For Xbox app games

Use this sequence:

1. Open the **Xbox app**.
2. Open **Profile & settings > Support**.
3. Launch the **Drive Compatibility Tool** if the target drive is external or acting strangely.
4. Follow the tool prompts before trying to install or move the game again.

That is especially useful on a docked handheld setup where a portable SSD keeps getting connected to different PCs.

### For loose files and non-launcher content

Use Windows itself:

1. Open **Settings > System > Storage**.
2. Review **Storage used on other drives** to see where your space is actually going.
3. Move ROM folders, screenshots, install archives, and other loose content with File Explorer.
4. Use **Where new content is saved** if you want future non-game content to stop filling the same drive.

> **Pro Tip:** The launcher should own the game install. File Explorer should own the loose files around the game install.

## Step 5: Use External SSDs Without Making a Mess

An external SSD is not the best default for every game, but it is excellent for overflow, travel prep, and dock-first play.

Valve's current Steam Deck specs still list **USB 3.2 Gen 2** over USB-C, and Microsoft's current support guidance still says to eject external storage properly before disconnecting it ([Steam Deck tech specs](https://www.steamdeck.com/en/tech/deck), [Safely remove hardware in Windows](https://support.microsoft.com/en-us/windows/hardware/safely-remove-hardware-in-windows), [Move files with an external storage device](https://support.microsoft.com/en-us/windows/experience/backup-recovery/move-your-files-to-a-new-windows-pc-using-an-external-storage-device)).

Use an external SSD when:

- You rotate big games on and off your handheld often
- You want a backup copy of install files before travel
- You play docked at a desk and do not mind the cable
- You need one portable gaming drive for multiple PCs

Do not use an external SSD as your always-attached handheld storage plan if:

- You play mostly in handheld mode on the couch or in bed
- Your USB-C port is already busy with a dock, charger, or accessories
- You frequently suspend mid-session and toss the handheld into a bag

Safe external-drive workflow:

1. Finish the move completely.
2. Launch the game once from the new drive.
3. Close the game and launcher cleanly.
4. In Windows, use **Safely Remove Hardware and Eject Media** before unplugging the drive.
5. On SteamOS desktop mode, eject the drive from the OS before disconnecting it.

[IMAGE PLACEHOLDER: docked handheld gaming PC with external SSD attached by USB-C]

If you travel often, pair this step with [Flying with a Handheld Gaming PC](/articles/fly-with-handheld-gaming-pc "Flying with a Handheld Gaming PC") so your storage setup and accessories make sense together.

## Step 6: Set a Better Default So You Do Not Repeat This Weekly

The real fix is not just moving one game. The real fix is stopping new installs from piling onto the wrong drive.

On Steam:

1. Add the drive as a library location.
2. Set the default install target you actually want.
3. Keep one rule for yourself, such as "AAA on SSD, backlog on microSD."

On Windows:

1. Review **Where new content is saved** if screenshots, captures, and media keep hitting the wrong drive.
2. Turn on **Storage Sense** if temporary files are quietly eating space in the background ([Microsoft Storage settings in Windows](https://support.microsoft.com/en-us/windows/experience/storage-filemanagement/storage-settings-in-windows)).

Simple target plan:

| Storage target | What should go there |
|---|---|
| Internal SSD | Current favorites, large updates, demanding modern games |
| microSD | Smaller games, emulator libraries, lower-priority installs |
| External SSD | Rotating big installs, backups, travel library, docked overflow |

That plan keeps your handheld gaming PC fast without making every storage problem feel like a full spring-cleaning session.

## Troubleshooting

### The move option is missing in Steam

Confirm that the destination drive is already added as a valid Steam library location. If it is not, Steam has nowhere supported to move the game.

### The microSD card appears but installs still fail

Recheck the card format and free space. On Steam Deck, Valve's current support flow still expects the SD card to be formatted from the device before use ([Steam Deck basic use and troubleshooting](https://help.steampowered.com/en/faqs/view/69E3-14AF-9764-4C28)).

### Xbox app titles refuse to move or install on the external drive

Run the **Drive Compatibility Tool** from the Xbox app support menu first. Some Xbox PC game workflows are stricter than Steam's and may need that repair/configuration step ([Xbox Drive Compatibility Tool](https://support.xbox.com/en-US/help/games-apps/troubleshooting/using-the-drive-compatibility-tool)).

### The external SSD disconnects too easily in handheld mode

Treat that as a setup problem, not a game problem. Shorter cables, a better dock, or moving that game back to internal SSD are better fixes than hoping the connection stays solid.

### Space disappears again right after the move

Check shader caches, launchers, screenshots, and duplicate installs. On Windows handhelds, **Storage used on other drives** and **Storage Sense** are the quickest first checks ([Microsoft Storage settings in Windows](https://support.microsoft.com/en-us/windows/experience/storage-filemanagement/storage-settings-in-windows)).

## Next Steps

Once you can **move games between microSD and SSD** storage confidently, the next upgrade is not usually "buy another drive." It is deciding whether your storage layout matches how you actually play.

If your internal drive is constantly full, read [How to Upgrade Your SSD](/articles/how-to-upgrade-ssd-steam-deck "How to Upgrade Your SSD"). If your handheld still feels noisy or cramped during bigger installs and updates, pair this cleanup with [Best Settings to Use Before You Benchmark a Handheld Gaming PC](/articles/handheld-gaming-pc-benchmark-settings "Best Settings to Use Before You Benchmark a Handheld Gaming PC") so you are testing a stable setup instead of a cluttered one.

The best way to **move games between microSD and SSD** storage is still the boring one: prepare the destination first, let the launcher move launcher-managed installs, use Windows or SteamOS only for loose files, and treat an external SSD as a smart overflow tool instead of a permanent crutch.

## FAQ

### Can I move Steam games between microSD and SSD without reinstalling them?

Yes. Steam's storage tools let you move installed games between eligible library locations on the same handheld or PC without downloading the whole game again.

### Should I keep AAA games on microSD or internal SSD?

Keep your most-played or update-heavy AAA games on the internal SSD first, then use microSD for smaller games, backlog titles, emulators, and overflow installs.

### Is an external SSD good for handheld gaming PCs?

Yes, especially for rotating large installs, backups, or docked play, but it is less convenient than internal storage because you need to manage cables, ports, and safe ejection.

### Do Xbox app games move as easily as Steam games?

Not always. Some Xbox app titles can use the Drive Compatibility Tool or reinstall flow, while Steam usually gives you a cleaner in-client move option.

### Will moving a game break my saves?

Usually no, because save locations are typically separate from the main install folder or synced through the launcher, but you should still confirm cloud sync or back up important saves first.

## Sources

- [Steam: Moving a Steam Installation and Games](https://help.steampowered.com/en/faqs/view/4BD4-4528-6B2E-8327)
- [Steam: Managing Steam Downloads & Updates](https://help.steampowered.com/en/faqs/view/71AB-698D-57EB-178C)
- [Steam Deck basic use and troubleshooting](https://help.steampowered.com/en/faqs/view/69E3-14AF-9764-4C28)
- [Steam Deck tech specs](https://www.steamdeck.com/en/tech/deck)
- [Microsoft Storage settings in Windows](https://support.microsoft.com/en-us/windows/experience/storage-filemanagement/storage-settings-in-windows)
- [Safely remove hardware in Windows](https://support.microsoft.com/en-us/windows/hardware/safely-remove-hardware-in-windows)
- [Move files with an external storage device](https://support.microsoft.com/en-us/windows/experience/backup-recovery/move-your-files-to-a-new-windows-pc-using-an-external-storage-device)
- [Game installation issues on PC and handheld devices](https://support.xbox.com/en-US/help/games-apps/game-setup-and-play/game-installation-issues-on-PC)
- [Xbox Drive Compatibility Tool](https://support.xbox.com/en-US/help/games-apps/troubleshooting/using-the-drive-compatibility-tool)
- [SanDisk Extreme microSD](https://www.sandisk.com/products/memory-cards/microsd-cards/sandisk-extreme-uhs-i-microsd?sku=SDSQXAV-1T00-GN6MA)
- [WD_BLACK SN770M](https://www.westerndigital.com/products/internal-drives/wd-black-sn770m-nvme-ssd)
- [Samsung T7 Shield](https://www.samsung.com/us/memory-storage/portable-ssd/portable-ssd-t7-shield-usb-3-2-1tb-black-sku-mu-pe1t0s-am/)
