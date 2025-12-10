// --- Data structures -------------------------------------------------------

let originalParticipants = []; // Full list parsed from CSV
let rafflePool = []; // For weighted-ticket raffle mode
let equalPool = []; // For grand prize mode (equal chances)
let raffleWinners = [];
let grandWinners = [];
let mode = "raffle"; // "raffle" or "grand"

// --- DOM references --------------------------------------------------------

const csvInput = document.getElementById("csvInput");
const loadStatus = document.getElementById("loadStatus");

const drawButton = document.getElementById("drawButton");
const resetGrandButton = document.getElementById("resetGrandButton");
const resetRaffleButton = document.getElementById("resetRaffleButton");

const modeLabel = document.getElementById("modeLabel");
const loadingWrapper = document.getElementById("loadingWrapper");
const winnerDisplay = document.getElementById("winnerDisplay");

const statsParticipants = document.getElementById("statsParticipants");
const statsTickets = document.getElementById("statsTickets");
const statsRaffleWinners = document.getElementById("statsRaffleWinners");
const statsGrandWinners = document.getElementById("statsGrandWinners");

const raffleWinnersList = document.getElementById("raffleWinnersList");
const grandWinnersList = document.getElementById("grandWinnersList");

// --- Helpers ---------------------------------------------------------------

function updateStats() {
  const totalTickets = rafflePool.reduce((sum, p) => sum + (p.tickets || 0), 0);
  statsParticipants.textContent = originalParticipants.length;
  statsTickets.textContent = totalTickets;
  statsRaffleWinners.textContent = raffleWinners.length;
  statsGrandWinners.textContent = grandWinners.length;
}

function renderWinnerDisplay(participant, fromMode) {
  if (!participant) {
    winnerDisplay.classList.add("empty");
    winnerDisplay.classList.remove("winner-highlight");
    winnerDisplay.innerHTML = "<p>No winner picked yet.</p>";
    return;
  }

  winnerDisplay.classList.remove("empty");
  const fullName = `${participant.firstName} ${participant.lastName}`.trim();
  const teacherGrade = `${participant.teacher || "Unknown teacher"} • ${
    participant.grade || "Unknown grade"
  }`;
  // Trigger a little pop animation each time a winner is shown
  winnerDisplay.classList.remove("winner-highlight");
  void winnerDisplay.offsetWidth; // force reflow so animation can restart
  winnerDisplay.classList.add("winner-highlight");

  winnerDisplay.innerHTML = `
    <div>
      <div class="winner-main">${fullName}</div>
      <div class="winner-meta">${teacherGrade}</div>
      <div class="winner-tags">
        <span class="tag">${fromMode === "raffle" ? "Raffle Winner" : "Grand Prize Winner"}</span>
        <span class="tag">${participant.teacher || "Teacher N/A"}</span>
        <span class="tag">${participant.grade || "Grade N/A"}</span>
        ${
          fromMode === "raffle"
            ? `<span class="tag tag--tickets">${participant.tickets} ticket${
                participant.tickets === 1 ? "" : "s"
              }</span>`
            : ""
        }
      </div>
    </div>
  `;
}

function appendWinnerToList(participant, listElement, fromMode) {
  const li = document.createElement("li");
  const fullName = `${participant.firstName} ${participant.lastName}`.trim();
  li.innerHTML = `
    <div class="name">${fullName}</div>
    <div class="meta">
      ${participant.teacher || "Teacher N/A"} • ${participant.grade || "Grade N/A"}
      ${
        fromMode === "raffle"
          ? ` • ${participant.tickets} ticket${participant.tickets === 1 ? "" : "s"}`
          : ""
      }
    </div>
  `;
  listElement.insertBefore(li, listElement.firstChild); // newest winner on top
}

function resetPoolsToOriginal() {
  // Deep-ish clone to avoid accidental mutation
  rafflePool = originalParticipants
    .filter((p) => Number(p.tickets) > 0)
    .map((p) => ({ ...p, tickets: Number(p.tickets) || 0 }));

  equalPool = originalParticipants.map((p) => ({ ...p }));
}

function toggleControlsLoaded(loaded) {
  drawButton.disabled = !loaded;
  resetGrandButton.disabled = !loaded;
  resetRaffleButton.disabled = !loaded;
}

// --- CSV parsing -----------------------------------------------------------

function parseCSV(text) {
  const lines = text
    .split(/\r?\n/)
    .map((l) => l.trim())
    .filter((l) => l.length > 0);

  if (lines.length < 2) {
    throw new Error("CSV must include a header row and at least one data row.");
  }

  const header = lines[0].split(",").map((h) => h.trim().toLowerCase());
  const rows = lines.slice(1);

  // Figure out which column index is which, somewhat flexibly
  const findIndex = (...candidates) => {
    return header.findIndex((h) =>
      candidates.some((c) => h.includes(c.toLowerCase()))
    );
  };

  const idxFirst = findIndex("first", "first name");
  const idxLast = findIndex("last", "last name");
  const idxTeacher = findIndex("teacher");
  const idxGrade = findIndex("grade");
  const idxTickets = findIndex("ticket");

  if (idxFirst === -1 || idxLast === -1 || idxTickets === -1) {
    throw new Error(
      "Could not find First Name, Last Name, or Tickets columns. Please make sure your header row includes those."
    );
  }

  const participants = rows.map((line, i) => {
    const cols = line.split(",").map((c) => c.trim());
    const firstName = cols[idxFirst] || "";
    const lastName = cols[idxLast] || "";
    const teacher = idxTeacher !== -1 ? cols[idxTeacher] || "" : "";
    const grade = idxGrade !== -1 ? cols[idxGrade] || "" : "";
    const ticketsRaw = idxTickets !== -1 ? cols[idxTickets] || "0" : "0";
    const tickets = Math.max(0, Math.round(Number(ticketsRaw) || 0));

    return {
      id: i,
      firstName,
      lastName,
      teacher,
      grade,
      tickets,
    };
  });

  return participants;
}

// --- Drawing logic ---------------------------------------------------------

function drawWeightedWinner() {
  if (rafflePool.length === 0) {
    alert("No raffle participants available. Did everyone already win?");
    return null;
  }

  const totalTickets = rafflePool.reduce((sum, p) => sum + p.tickets, 0);
  if (totalTickets <= 0) {
    alert("No tickets remaining for raffle mode.");
    return null;
  }

  let r = Math.random() * totalTickets;
  let winner = null;

  for (const p of rafflePool) {
    r -= p.tickets;
    if (r <= 0) {
      winner = p;
      break;
    }
  }

  if (!winner) {
    // Fallback, should not happen
    winner = rafflePool[rafflePool.length - 1];
  }

  // Remove winner from raffle pool so they can't win again in raffle mode
  rafflePool = rafflePool.filter((p) => p.id !== winner.id);

  return winner;
}

function drawEqualWinner() {
  if (equalPool.length === 0) {
    alert("No participants left for grand prize mode.");
    return null;
  }

  const index = Math.floor(Math.random() * equalPool.length);
  const winner = equalPool[index];

  // Remove so they can't win multiple grand prizes (in case you draw more than once)
  equalPool.splice(index, 1);

  return winner;
}

// --- UI interactions -------------------------------------------------------

csvInput.addEventListener("change", () => {
  const file = csvInput.files && csvInput.files[0];
  if (!file) return;

  const reader = new FileReader();
  reader.onload = (e) => {
    try {
      const text = String(e.target.result);
      const participants = parseCSV(text);

      if (!participants.length) {
        throw new Error("No valid participants found in CSV.");
      }

      originalParticipants = participants;
      raffleWinners = [];
      grandWinners = [];
      raffleWinnersList.innerHTML = "";
      grandWinnersList.innerHTML = "";
      renderWinnerDisplay(null, null);

      resetPoolsToOriginal();
      updateStats();
      toggleControlsLoaded(true);

      mode = "raffle";
      modeLabel.textContent = "Raffle (weighted by tickets)";
      loadStatus.textContent = `Loaded ${participants.length} participants. Raffle mode is ready.`;
      loadStatus.style.color = "#a5b4fc";
    } catch (err) {
      console.error(err);
      loadStatus.textContent = `Error: ${err.message}`;
      loadStatus.style.color = "#fca5a5";
      toggleControlsLoaded(false);
    }
  };

  reader.readAsText(file);
});

drawButton.addEventListener("click", () => {
  if (!originalParticipants.length) return;

  // Show Pac-Man, disable buttons during draw
  loadingWrapper.classList.remove("hidden");
  drawButton.disabled = true;
  resetGrandButton.disabled = true;
  resetRaffleButton.disabled = true;

  // Simulate suspense (Pac-Man animation)
  const LOADING_MS = 2500;

  setTimeout(() => {
    let winner = null;
    if (mode === "raffle") {
      winner = drawWeightedWinner();
      if (winner) {
        raffleWinners.push(winner);
        appendWinnerToList(winner, raffleWinnersList, "raffle");
      }
    } else {
      winner = drawEqualWinner();
      if (winner) {
        grandWinners.push(winner);
        appendWinnerToList(winner, grandWinnersList, "grand");
      }
    }

    if (winner) {
      renderWinnerDisplay(winner, mode);
    }

    updateStats();

    // Hide Pac-Man, re-enable buttons
    loadingWrapper.classList.add("hidden");
    drawButton.disabled = false;
    resetGrandButton.disabled = false;
    resetRaffleButton.disabled = false;
  }, LOADING_MS);
});

resetGrandButton.addEventListener("click", () => {
  if (!originalParticipants.length) return;

  // Reset equalPool from original and switch mode
  equalPool = originalParticipants.map((p) => ({ ...p }));
  mode = "grand";
  modeLabel.textContent = "Grand Prize (everyone equal chance)";
  renderWinnerDisplay(null, null);

  alert(
    "Grand prize mode ready.\n\nEvery student now has an equal chance of winning, regardless of ticket count."
  );
  updateStats();
});

resetRaffleButton.addEventListener("click", () => {
  if (!originalParticipants.length) return;

  resetPoolsToOriginal();
  raffleWinners = [];
  grandWinners = [];
  raffleWinnersList.innerHTML = "";
  grandWinnersList.innerHTML = "";
  mode = "raffle";
  modeLabel.textContent = "Raffle (weighted by tickets)";
  renderWinnerDisplay(null, null);

  alert("Raffle has been fully reset. All tickets restored.");
  updateStats();
});

// Initial state
toggleControlsLoaded(false);
renderWinnerDisplay(null, null);
updateStats();
