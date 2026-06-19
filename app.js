// GSEP Poster App Logic

const themePalettes = {
  cyber: [
    { name: "Light Background", hex: "#f8fafc" },
    { name: "Card Soft White", hex: "#ffffff" },
    { name: "Blue Accent", hex: "#0284c7" },
    { name: "Orange Accent", hex: "#ea580c" },
    { name: "Text Dark Slate", hex: "#0f172a" },
    { name: "Text Muted Slate", hex: "#475569" }
  ],
  sakura: [
    { name: "Sakura Background", hex: "#fff5f7" },
    { name: "Card Soft White", hex: "#ffffff" },
    { name: "Deep Pink Accent", hex: "#db2777" },
    { name: "Rose Accent", hex: "#f43f5e" },
    { name: "Text Deep Plum", hex: "#3c091f" },
    { name: "Text Pinkish Muted", hex: "#831843" }
  ],
  classic: [
    { name: "Ivory Background", hex: "#faf9f5" },
    { name: "Card Soft White", hex: "#ffffff" },
    { name: "Gold Accent", hex: "#b8901c" },
    { name: "Warm Amber Accent", hex: "#d97706" },
    { name: "Text Dark Navy", hex: "#0f1c3f" },
    { name: "Text Muted Slate", hex: "#3a506b" }
  ]
};

// Map of editable poster elements to their sidebar copy IDs
const syncMappings = [
  { posterSelector: ".poster-slogan", sidebarId: "copyTextSlogan" },
  { posterSelector: ".poster-tagline", sidebarId: "copyTextTagline" },
  { posterSelector: ".poster-pillars .pillar-card:nth-child(1) .pillar-desc", sidebarId: "copyTextPillar1" },
  { posterSelector: ".poster-pillars .pillar-card:nth-child(2) .pillar-desc", sidebarId: "copyTextPillar2" },
  { posterSelector: ".poster-pillars .pillar-card:nth-child(3) .pillar-desc", sidebarId: "copyTextPillar3" },
  { posterSelector: ".scholarship-row", sidebarId: "copyTextScholarships", extractHTML: false },
  { posterSelector: ".poster-left-panel .quote-bubble:nth-child(2)", sidebarId: "copyTextTestimonial1", extractHTML: false },
  { posterSelector: ".poster-left-panel .quote-bubble:nth-child(3)", sidebarId: "copyTextTestimonial2", extractHTML: false },
  { posterSelector: ".support-grid", sidebarId: "copyTextSupport", extractHTML: false },
  { posterSelector: ".timeline", sidebarId: "copyTextTimeline", extractHTML: false }
];

let currentTheme = "cyber";

document.addEventListener("DOMContentLoaded", () => {
  // Initialize zoom
  adjustZoom(0.75);
  
  // Initialize colors
  populateColors("cyber");
  
  // Make poster elements editable and set up sync
  setupPosterEditing();
});

// Switch between Sidebar tabs (Copy Center, Assets, Canva Specs)
function switchTab(tabId) {
  // Reset tabs
  document.querySelectorAll(".tab-btn").forEach(btn => btn.classList.remove("active"));
  document.querySelectorAll(".tab-pane").forEach(pane => pane.classList.remove("active"));
  
  // Activate selected
  const capitalized = tabId.charAt(0).toUpperCase() + tabId.slice(1);
  document.getElementById(`tabBtn${capitalized}`).classList.add("active");
  document.getElementById(`pane${capitalized}`).classList.add("active");
}

// Set active theme of the poster
function setTheme(themeName) {
  const body = document.body;
  
  // Update buttons state
  document.querySelectorAll(".theme-selector .theme-btn").forEach(btn => {
    btn.classList.remove("active");
    if (btn.innerText.toLowerCase().includes(themeName)) {
      btn.classList.add("active");
    } else if (themeName === "cyber" && btn.innerText.toLowerCase().includes("cyber")) {
      btn.classList.add("active");
    }
  });
  
  // Apply theme to poster container
  if (themeName === "cyber") {
    body.removeAttribute("data-theme");
  } else {
    body.setAttribute("data-theme", themeName);
  }
  
  currentTheme = themeName;
  populateColors(themeName);
}

// Adjust poster preview zoom
function adjustZoom(value) {
  const s = parseFloat(value);
  const draft = document.getElementById("posterDraft");
  const viewport = document.getElementById("posterViewport");
  
  if (draft && viewport) {
    draft.style.transform = `scale(${s})`;
    draft.style.transformOrigin = "top left";
    draft.style.position = "absolute";
    
    viewport.style.width = (841 * s) + "px";
    viewport.style.height = (1189 * s) + "px";
  }
  
  document.getElementById("zoomPercent").innerText = Math.round(s * 100) + "%";
}

// Populate the theme colors swatch table in Asset Hub tab
function populateColors(themeName) {
  const container = document.getElementById("themeColorsContainer");
  if (!container) return;
  
  container.innerHTML = "";
  const colors = themePalettes[themeName] || themePalettes.cyber;
  
  colors.forEach(color => {
    const card = document.createElement("div");
    card.className = "color-swatch-card";
    card.onclick = () => copyTextToClipboard(color.hex, `Copied color hex: ${color.hex}`);
    
    card.innerHTML = `
      <div class="color-preview" style="background-color: ${color.hex}"></div>
      <div class="color-swatch-name">${color.name}</div>
      <div class="color-swatch-hex">
        <span>${color.hex}</span>
        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/></svg>
      </div>
    `;
    
    container.appendChild(card);
  });
}

// Make poster text sections content-editable and sync edits to the sidebar copy center
function setupPosterEditing() {
  syncMappings.forEach(mapping => {
    const posterEl = document.querySelector(mapping.posterSelector);
    const sidebarEl = document.getElementById(mapping.sidebarId);
    
    if (posterEl && sidebarEl) {
      // Add visual edit cue
      posterEl.style.cursor = "edit";
      posterEl.setAttribute("contenteditable", "true");
      posterEl.setAttribute("title", "Double-click to edit text");
      
      // Prevent bubble dragging or other browser defaults
      posterEl.addEventListener("focus", () => {
        posterEl.style.outline = "2px dashed var(--poster-accent)";
        posterEl.style.outlineOffset = "4px";
      });
      
      posterEl.addEventListener("blur", () => {
        posterEl.style.outline = "none";
        
        // Sync values
        let updatedText = "";
        if (mapping.extractHTML === false) {
          // Plain clean representation of text
          updatedText = posterEl.innerText.trim();
        } else {
          updatedText = posterEl.textContent.trim();
        }
        
        sidebarEl.innerText = updatedText;
      });
    }
  });
}

// Copy text directly from elements in sidebar
function copyToClipboard(elementId, btn) {
  const el = document.getElementById(elementId);
  if (!el) return;
  
  const text = el.innerText || el.textContent;
  copyTextToClipboard(text, "Text copied to clipboard! Ready to paste in Canva.", btn);
}

// Helper to write to clipboard and show toast
function copyTextToClipboard(text, successMsg, buttonEl) {
  navigator.clipboard.writeText(text).then(() => {
    // Show toast
    const toast = document.getElementById("toastMsg");
    toast.innerHTML = `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M20 6L9 17l-5-5"/></svg> ${successMsg}`;
    toast.classList.add("show");
    
    // Auto hide toast
    setTimeout(() => {
      toast.classList.remove("show");
    }, 2500);
    
    // Animate button if provided
    if (buttonEl) {
      const originalText = buttonEl.innerHTML;
      buttonEl.innerHTML = `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20 6L9 17l-5-5"/></svg> Copied!`;
      buttonEl.classList.add("copied");
      
      setTimeout(() => {
        buttonEl.innerHTML = originalText;
        buttonEl.classList.remove("copied");
      }, 1500);
    }
  }).catch(err => {
    console.error("Could not copy text: ", err);
  });
}

// Export poster draft as high-resolution PNG using html2canvas
function exportPNG() {
  const toast = document.getElementById("toastMsg");
  toast.innerHTML = `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><circle cx="12" cy="12" r="10"/><path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83"/></svg> Generating high-res PNG... Please wait.`;
  toast.classList.add("show");

  // Dynamically load html2canvas if not present
  if (typeof html2canvas === "undefined") {
    const script = document.createElement("script");
    script.src = "https://cdnjs.cloudflare.com/ajax/libs/html2canvas/1.4.1/html2canvas.min.js";
    script.onload = () => {
      triggerHtml2Canvas();
    };
    script.onerror = () => {
      toast.innerHTML = `Failed to load export library.`;
      setTimeout(() => toast.classList.remove("show"), 2000);
    };
    document.head.appendChild(script);
  } else {
    triggerHtml2Canvas();
  }
}

function triggerHtml2Canvas() {
  const draft = document.getElementById("posterDraft");
  const originalTransform = draft.style.transform;
  const originalPosition = draft.style.position;
  const originalTop = draft.style.top;
  const originalLeft = draft.style.left;
  
  // Temporarily reset zoom to 1 to render canvas at native resolution
  draft.style.transform = "none";
  draft.style.position = "relative";
  draft.style.top = "0";
  draft.style.left = "0";
  
  // Add class to fix text gradients/rendering issues in html2canvas
  draft.classList.add("html2canvas-export");
  
  // Trigger html2canvas with scale multiplier of 2 for high quality print resolution
  html2canvas(draft, {
    scale: 2,
    useCORS: true,
    allowTaint: false,
    backgroundColor: null
  }).then(canvas => {
    // Restore original zoom positioning
    draft.style.transform = originalTransform;
    draft.style.position = originalPosition;
    draft.style.top = originalTop;
    draft.style.left = originalLeft;
    
    // Remove temporary class
    draft.classList.remove("html2canvas-export");
    
    try {
      // Download logic
      const link = document.createElement("a");
      link.download = `GSEP_Poster_Draft_${currentTheme}.png`;
      link.href = canvas.toDataURL("image/png");
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      
      // Show completion toast
      const toast = document.getElementById("toastMsg");
      toast.innerHTML = `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M20 6L9 17l-5-5"/></svg> PNG exported successfully!`;
      setTimeout(() => {
        toast.classList.remove("show");
      }, 2500);
    } catch (err) {
      console.error("Error generating data URL or triggering download:", err);
      const toast = document.getElementById("toastMsg");
      toast.innerHTML = `Export failed: Canvas security error or browser limitation.`;
      setTimeout(() => {
        toast.classList.remove("show");
      }, 3000);
    }
  }).catch(err => {
    // Restore original zoom positioning in case of rendering error
    draft.style.transform = originalTransform;
    draft.style.position = originalPosition;
    draft.style.top = originalTop;
    draft.style.left = originalLeft;
    
    // Remove temporary class
    draft.classList.remove("html2canvas-export");
    
    console.error("html2canvas error:", err);
    const toast = document.getElementById("toastMsg");
    toast.innerHTML = `Export failed: ${err.message || 'Rendering error'}`;
    setTimeout(() => {
      toast.classList.remove("show");
    }, 3000);
  });
}

// Print and save as vector PDF
function exportPDF() {
  window.print();
}
