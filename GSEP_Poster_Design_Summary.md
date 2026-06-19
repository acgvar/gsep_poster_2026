# GSEP A0 Promotional Poster Draft & Canva Toolkit

This document contains a complete reference of the design work, statistical data, and replication guidelines compiled for the **Global Scientists and Engineers Program (GSEP)** promotional poster at the **Institute of Science Tokyo**. 

All visual drafts, copy blocks, and extracted media are saved in this folder: `/Users/varquez/Documents/GSEP/promotion_presentation/Poster/`.

---

## 1. Quick Start: Launching the Poster Workspace Dashboard

We built a local, interactive web application where you can preview the poster in three visual themes, edit text in-place, copy statistics to your clipboard, and export layout mockups as PNG or print-ready PDF.

To run the application locally:
1. Open your terminal in this directory.
2. Spin up a lightweight local server:
   ```bash
   python3 -m http.server 8080
   ```
3. Navigate to **`http://localhost:8080`** in your web browser.

### Key Application Features:
* **Theme Swapping:** Toggle between **Cyber Tokyo** (dark neon cyan/orange), **Sakura Tech** (light cherry blossom pink), and **Classic Gold** (prestigious navy/gold).
* **Live Text Editor:** Double-click any header or body paragraph directly on the poster to customize the wording. The canvas adjusts font flow instantly.
* **Canva Copy Center:** A dedicated sidebar drawer with "Copy to Clipboard" buttons next to every text block, color hex code, and layout metric.
* **Export Center:** Save the poster instantly to **high-resolution PNG** (at 2x scale: `1682 x 2378 px` print quality) or trigger **Print/PDF** mode (custom print CSS automatically hides the dashboard shell, centering the A0 poster ready to save as vector PDF).

---

## 2. Extracted Original Assets (Located in `./assets/`)

The following assets were extracted from the GSEP Overview PDF and renamed for easy usage in Canva. You can upload them directly into your Canva file uploads:

* **Logo:** `logo_sciencetokyo.png` (Transparent header logo, `780 x 158 px`)
* **Graduation Group:** `photo_graduation.jpg` (High-res banner photo of GSEP grads, `2048 x 769 px`)
* **TSE Lab Activity:** `photo_lab_activity.jpg` (Vertical photo of hands-on student lab work, `1114 x 1348 px`)
* **Student Events Group:** `photo_event_group.jpg` (Student event cohort photo, `1798 x 1214 px`)
* **Curriculum Diagram:** `photo_curriculum.png` (TSE curriculum timeline, `1126 x 1356 px`)
* **QR Codes:** 
  * `qr_website.png` (Links to GSEP home website)
  * `qr_admissions.png` (Links directly to the Admissions Application Guide)
  * `qr_facebook.png` (Links to GSEP Facebook Page)

---

## 3. Compiled GSEP Statistics & Data (from `statistics.pdf`)

These values are populated as visual infographics in your poster dashboard:

### A. Student Profile & Nationalities
* **Accepted Students (since April 2016):** 151+ students
* **Gender Balance:** 70% Male | 30% Female
* **Nationality Breakdown:**
  * Thailand: **37%**
  * Indonesia: **13%**
  * Mongolia: **11%**
  * Vietnam: **10%**
  * India: **5%**
  * Korea: **4%**
  * Philippines: **3%**
  * China: **2%**
  * Malaysia: **2%**
  * Bangladesh: **2%**
  * Others (UK, Germany, USA, Canada, Turkey, Kazakhstan, Myanmar, UAE, Sri Lanka, Pakistan, Norway, Nepal): **1% each (combined 20%)**

### B. Post-Graduation Paths
* **Graduate Studies (Continuing Education):** **65.5%**
  * Graduate School at Science Tokyo: **51.7%**
  * Graduate School at Other Universities: **13.8%**
* **Employed / Joined Global Industry:** **34.5%**

### C. 4th Year Research Interests (Independent Research Projects)
* Civil Engineering: **24%**
* Social Sciences & Management: **16%**
* Energy & Environment: **16%**
* Electronic & Communication Engineering: **15%**
* Nuclear Engineering: **14%**
* Mechanical Engineering: **13%**
* Life Sciences: **2%**

---

## 4. Canva Replication Spec Sheet

Use these dimensions, margin ratios, typography setups, and color values to rebuild the design inside Canva:

### A. Dimensions & Layout Grid
* **Document Dimensions:** Choose custom size **2384 x 3370 pt** (equivalent to A0 portrait at 72 DPI) or select the standard **A0 Poster** template (`84.1 x 118.9 cm`).
* **Margins:** Set all margins to **5% of width** (120 pt in Canva). Keep all important textual components inside this safe margin.
* **Layout Structure:**
  1. **Top Header:** University name (gold/cyan/pink) + Logo on the left, "GSEP" Display Title on the right.
  2. **Hero Subtitle:** Bold tagline displaying the program slogan ("Engineers of Tomorrow, United in Tokyo") followed by the degree title and April Intake.
  3. **Core Pillars:** 3 horizontal columns showing the core program pillars.
  4. **Middle Split Grid (Left Column - 38% width):** Global community demographics (151 accepted, 70/30 gender bar, top nationality list) + Graduation Paths.
  5. **Middle Split Grid (Right Column - 58% width):** Scholarships & Funding (MEXT tuition exemptions + JASSO stipends) + Research Interests bar charts.
  6. **Timeline Roadmap:** Horizontal milestone bar displaying Application (Mid-August) $\rightarrow$ Screening (September) $\rightarrow$ Interviews (October) $\rightarrow$ Results (November) $\rightarrow$ April Intake Start.
  7. **Footer:** Contact details and Website + Admissions QR code modules.

### B. Theme Color Palettes (Hex Values for Canva)

| Theme Style | Background Hex | Card/Pane Hex | Primary Accent | Secondary Accent | Typography Hex |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **Cyber Tokyo (Light)** | `#f8fafc` | `#ffffff` | `#0284c7` (Blue) | `#ea580c` (Orange) | `#0f172a` / `#475569` |
| **Sakura Tech** | `#fff5f7` | `#ffffff` | `#db2777` (Deep Pink) | `#f43f5e` (Rose) | `#3c091f` / `#831843` |
| **Classic Gold (Ivory)** | `#faf9f5` | `#ffffff` | `#b8901c` (Gold) | `#d97706` (Amber) | `#0f1c3f` / `#3a506b` |

### C. Suggested Typography (Points scaled for Canva A0)
* **Main Program Title:** **80pt to 90pt** (Font suggestion: *Space Grotesk Bold* or *Outfit Extra Bold*)
* **Hero Slogan Tagline / Sub-headers:** **24pt to 28pt** (Font suggestion: *Space Grotesk Medium*)
* **Section Titles:** **24pt to 28pt** (Font suggestion: *Outfit Bold*)
* **Infographic Data Callouts (Large numbers):** **24pt to 30pt** (Font suggestion: *Space Grotesk Semi-Bold*)
* **Body Copy:** **16pt to 18pt** (Font suggestion: *Plus Jakarta Sans Regular* or *Inter*)
* **Milestones / Footers:** **12pt to 14pt** (Font suggestion: *Inter*)

---

## 5. AI Prompt Generator for Canva Visuals

If you want to generate customized background textures or illustrations inside Canva's **Magic Media** generator, use these prompts:

* **Background Abstract Prompt:**
  > Minimalistic dark tech background with glowing cyan and orange network connections, binary code matrices, clean grid overlays, soft radial light sources, vector style, high resolution --ar 1:1.414
* **Student/Lab Illustration Prompt:**
  > A modern diverse group of global engineering students collaborating in an advanced robotics and electronics laboratory, whiteboard with formulas behind them, warm light, flat vectors, clean design --ar 16:9
