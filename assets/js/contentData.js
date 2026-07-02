/* ============================================================================
   CISSP  ::  contentData.js
   Exam facts, per-domain metadata + objectives, PBQ format definitions,
   curated external resources, the Exam-Mechanics and Career-Guidance readers,
   and the target objects the textbook-dense domain reading modules populate
   (CISSP.reading[1..8], appended from the lazy-loaded content modules).

   This file loads first and establishes the global CISSP namespace consumed
   by quizEngine.js, flashEngine.js, and app.js.

   Authored by Professor Rizwan Virani.
   ========================================================================== */
window.CISSP = window.CISSP || {};

/* SINGLE SOURCE OF TRUTH for every exam figure. The dashboard cards, mock-exam
   engine, scoring, analytics, readiness projection, and history readouts all
   READ from this object — no exam figure is duplicated as a literal elsewhere.

   Note on `maxQuestions`: the live CISSP is a Computerized Adaptive Test (CAT)
   of 100–150 items, so there is no fixed length. `itemsLabel`/`itemsMin`/
   `itemsMax` describe the REAL exam; `maxQuestions` is the length of THIS
   platform's fixed-form practice mock (a transparent approximation of the
   adaptive exam) and is the only figure the mock engine reads. */
CISSP.exam = {
  code: "CISSP",
  name: "CISSP",
  fullName: "Certified Information Systems Security Professional",
  vendor: "ISC2",
  format: "CAT",                 // Computerized Adaptive Testing
  minutes: 180,                  // 3 hours
  itemsMin: 100, itemsMax: 150,
  itemsLabel: "100–150",
  maxQuestions: 125,             // fixed-form practice-mock length (engine reads this)
  scaleLow: 0, scaleHigh: 1000, passing: 700,
  domains: 8,
  launched: "1994",
  body: "ISC2"
};

/* Per-domain metadata. `objectives` mirror the official ISC2 CISSP Exam Outline
   (Detailed Content Outline, effective April 15, 2024). `weight` is the official
   average domain weight; `sectionCount` is the number of dense reading sections
   this platform authors for the domain. */
CISSP.domainMeta = [
  { id: 1, weight: 16, color: "d1", icon: "⚖", title: "Security & Risk Management", sectionCount: 13,
    short: "Security governance, compliance and legal, risk management, business continuity, and security awareness — the managerial foundation of the CISSP.",
    objectives: [
      { id: "1.1", t: "Understand, adhere to, and promote professional ethics" },
      { id: "1.2", t: "Understand and apply security concepts" },
      { id: "1.3", t: "Evaluate and apply security governance principles" },
      { id: "1.4", t: "Understand legal, regulatory, and compliance issues" },
      { id: "1.5", t: "Understand requirements for investigation types" },
      { id: "1.6", t: "Develop, document, and implement security policy, standards, procedures, and guidelines" },
      { id: "1.7", t: "Identify, analyze, assess, prioritize, and implement Business Continuity (BC) requirements" },
      { id: "1.8", t: "Contribute to and enforce personnel security policies and procedures" },
      { id: "1.9", t: "Understand and apply risk management concepts" },
      { id: "1.10", t: "Understand and apply threat modeling concepts and methodologies" },
      { id: "1.11", t: "Apply Supply Chain Risk Management (SCRM) concepts" },
      { id: "1.12", t: "Establish and maintain a security awareness, education, and training program" }
    ] },
  { id: 2, weight: 10, color: "d2", icon: "🗃", title: "Asset Security", sectionCount: 8,
    short: "Classifying and protecting information assets: ownership, the data lifecycle, retention, and data-handling and protection controls across data states.",
    objectives: [
      { id: "2.1", t: "Identify and classify information and assets" },
      { id: "2.2", t: "Establish information and asset handling requirements" },
      { id: "2.3", t: "Provision information and assets securely" },
      { id: "2.4", t: "Manage data lifecycle" },
      { id: "2.5", t: "Ensure appropriate asset retention (EOL, EOS)" },
      { id: "2.6", t: "Determine data security controls and compliance requirements" }
    ] },
  { id: 3, weight: 13, color: "d3", icon: "🏛", title: "Security Architecture & Engineering", sectionCount: 13,
    short: "Secure design principles, security models, cryptography and PKI, and the vulnerabilities of systems from cloud and virtualization to IoT.",
    objectives: [
      { id: "3.1", t: "Research, implement, and manage engineering processes using secure design principles" },
      { id: "3.2", t: "Understand the fundamental concepts of security models" },
      { id: "3.3", t: "Select controls based upon systems security requirements" },
      { id: "3.4", t: "Understand security capabilities of Information Systems (IS)" },
      { id: "3.5", t: "Assess and mitigate the vulnerabilities of security architectures, designs, and solution elements" },
      { id: "3.6", t: "Select and determine cryptographic solutions" },
      { id: "3.7", t: "Understand methods of cryptanalytic attacks" },
      { id: "3.8", t: "Apply security principles to site and facility design" },
      { id: "3.9", t: "Design site and facility security controls" },
      { id: "3.10", t: "Manage the information system lifecycle" }
    ] },
  { id: 4, weight: 13, color: "d4", icon: "🌐", title: "Communication & Network Security", sectionCount: 9,
    short: "Secure network architecture and components: the OSI and TCP/IP models, secure protocols, network attacks, and secure communication channels.",
    objectives: [
      { id: "4.1", t: "Apply secure design principles in network architectures" },
      { id: "4.2", t: "Secure network components" },
      { id: "4.3", t: "Implement secure communication channels according to design" }
    ] },
  { id: 5, weight: 13, color: "d5", icon: "🔑", title: "Identity & Access Management (IAM)", sectionCount: 10,
    short: "Identification, authentication, and authorization: access control models, MFA and biometrics, federation and single sign-on, and the provisioning lifecycle.",
    objectives: [
      { id: "5.1", t: "Control physical and logical access to assets" },
      { id: "5.2", t: "Design identification and authentication strategy" },
      { id: "5.3", t: "Federated identity with a third-party service" },
      { id: "5.4", t: "Implement and manage authorization mechanisms" },
      { id: "5.5", t: "Manage the identity and access provisioning lifecycle" },
      { id: "5.6", t: "Implement authentication systems" }
    ] },
  { id: 6, weight: 12, color: "d6", icon: "🔍", title: "Security Assessment & Testing", sectionCount: 8,
    short: "Assessment and test strategies: vulnerability assessment and penetration testing, log reviews, code testing, internal and external audits, and security metrics.",
    objectives: [
      { id: "6.1", t: "Design and validate assessment, test, and audit strategies" },
      { id: "6.2", t: "Conduct security control testing" },
      { id: "6.3", t: "Collect security process data" },
      { id: "6.4", t: "Analyze test output and generate report" },
      { id: "6.5", t: "Conduct or facilitate security audits" }
    ] },
  { id: 7, weight: 13, color: "d7", icon: "🛡", title: "Security Operations", sectionCount: 15,
    short: "Running security day to day: investigations and forensics, logging and monitoring, incident and change management, recovery strategies, and physical security.",
    objectives: [
      { id: "7.1", t: "Understand and comply with investigations" },
      { id: "7.2", t: "Conduct logging and monitoring activities" },
      { id: "7.3", t: "Perform Configuration Management (CM)" },
      { id: "7.4", t: "Apply foundational security operations concepts" },
      { id: "7.5", t: "Apply resource protection" },
      { id: "7.6", t: "Conduct incident management" },
      { id: "7.7", t: "Operate and maintain detection and preventative measures" },
      { id: "7.8", t: "Implement and support patch and vulnerability management" },
      { id: "7.9", t: "Understand and participate in change management processes" },
      { id: "7.10", t: "Implement recovery strategies" },
      { id: "7.11", t: "Implement Disaster Recovery (DR) processes" },
      { id: "7.12", t: "Test Disaster Recovery Plans (DRP)" },
      { id: "7.13", t: "Participate in Business Continuity (BC) planning and exercises" },
      { id: "7.14", t: "Implement and manage physical security" },
      { id: "7.15", t: "Address personnel safety and security concerns" }
    ] },
  { id: 8, weight: 10, color: "d8", icon: "💻", title: "Software Development Security", sectionCount: 8,
    short: "Security across the SDLC: secure coding, maturity models, application security testing, assessing acquired software, and common software vulnerabilities and defenses.",
    objectives: [
      { id: "8.1", t: "Understand and integrate security in the Software Development Life Cycle (SDLC)" },
      { id: "8.2", t: "Identify and apply security controls in software development ecosystems" },
      { id: "8.3", t: "Assess the effectiveness of software security" },
      { id: "8.4", t: "Assess security impact of acquired software" },
      { id: "8.5", t: "Define and apply secure coding guidelines and standards" }
    ] }
];

/* The five PBQ formats. `domainColor` just drives the badge tint. */
CISSP.pbqFormats = [
  { id: 1, icon: "⚖", domainColor: 1, obj: "1.9", badge: "RISK MANAGEMENT", title: "Risk Treatment & Governance Decisions",
    desc: "Read a risk scenario, then work it field by field — quantify the risk (ALE = SLE × ARO), choose the correct risk-treatment option, map the control category and type, and select the governance artifact that applies.",
    long: "Each scenario gives you an asset, a threat, and loss figures. Work the risk: compute or interpret <b>SLE, ARO, and ALE</b>, decide whether to <b>mitigate, transfer, accept, or avoid</b>, classify the chosen safeguard by <b>category</b> (administrative, technical, physical) and <b>type</b> (preventive, detective, corrective, deterrent, compensating, directive, recovery), and pick the right governance document (policy, standard, procedure, guideline, baseline)." },
  { id: 2, icon: "🗃", domainColor: 2, obj: "2.1 / 2.4", badge: "ASSET CLASSIFICATION", title: "Data Classification, Roles & Handling",
    desc: "Given a data element and a context, set its classification, assign the correct data role (owner, controller, custodian, processor), choose the protection for its data state, and apply the right retention or destruction action.",
    long: "You are the asset-security lead. For each information asset, assign a <b>classification</b> (public, sensitive, confidential, secret, or PII/PHI/PCI), name the accountable <b>data role</b> (owner, controller, custodian, processor, subject), select the correct <b>protection for the data state</b> (at rest, in transit, in use), and choose the correct <b>lifecycle action</b> — retention period, EOL/EOS handling, or media sanitization method (clear, purge, destroy)." },
  { id: 3, icon: "🔐", domainColor: 3, obj: "3.6 / 3.2", badge: "CRYPTO & MODELS", title: "Cryptographic Solution & Security Model Selection",
    desc: "Match the security goal to the correct cryptographic primitive and mode, choose key lengths and management steps, and select the security model or evaluation criterion that enforces the stated policy.",
    long: "Engineer the solution. For each goal — confidentiality, integrity, authentication, or non-repudiation — pick the correct <b>primitive</b> (symmetric cipher, asymmetric key pair, hash, HMAC, digital signature), the right <b>mode/algorithm</b> (AES-GCM, RSA, ECC, SHA-2), and the correct <b>key-management</b> action. Then select the <b>security model</b> (Bell-LaPadula for confidentiality, Biba/Clark-Wilson for integrity) or evaluation criterion that matches the policy." },
  { id: 4, icon: "🔑", domainColor: 5, obj: "5.4 / 5.2", badge: "ACCESS CONTROL", title: "Access Control Model & IAM Configuration",
    desc: "Choose the authorization model that satisfies the requirement, select authentication factors and AAA components, and configure the identity provisioning and federation steps for the scenario.",
    long: "A governance workspace for identity. For each requirement, select the correct <b>authorization model</b> (MAC, DAC, RBAC, ABAC, rule-based, risk-based), classify the <b>authentication factors</b> (something you know/have/are, plus location and behavior) and MFA design, choose the right <b>federation/SSO</b> technology (SAML, OIDC, OAuth 2.0, Kerberos), and order the <b>provisioning lifecycle</b> steps (provisioning, access review, deprovisioning)." },
  { id: 5, icon: "🚨", domainColor: 7, obj: "7.6", badge: "INCIDENT RESPONSE", title: "Incident Response & Operations Sequencing",
    desc: "Order the incident-response phases correctly, choose the right action at each step, preserve evidence under the correct forensic and legal rules, and select the recovery metric or control the scenario demands.",
    long: "Run the incident. Sequence the <b>IR phases</b> (detection, response, mitigation, reporting, recovery, remediation, lessons learned) in order, choose the correct action at each step, apply the right <b>evidence-handling</b> rule (chain of custody, order of volatility, admissibility), and select the correct <b>recovery objective</b> (RTO, RPO, MTD, WRT) or operations control (least privilege, SoD, job rotation) for the situation." }
];

/* Curated free study resources. */
CISSP.resources = [
  { icon: "📄", title: "Official ISC2 CISSP Exam Outline (Detailed Content Outline)", host: "isc2.org",
    url: "https://www.isc2.org/certifications/cissp/cissp-certification-exam-outline",
    desc: "The authoritative blueprint — every domain, objective, and sub-topic ISC2 can test, with the official domain weightings. Download the outline PDF and use it as your master checklist." },
  { icon: "📘", title: "(ISC)² CISSP Official Study Guide (OSG) & Official Practice Tests", host: "isc2.org",
    url: "https://www.isc2.org/certifications/cissp",
    desc: "The Sybex Official Study Guide (Chapple, Stewart, Gibson) and its companion practice-test book are the canonical text pair, mapped chapter-by-chapter to the eight domains." },
  { icon: "📕", title: "CISSP All-in-One Exam Guide (Maymi & Harris)", host: "mheducation.com",
    url: "https://www.mhprofessional.com/",
    desc: "The other classic reference — deep, encyclopedic coverage of every domain. Pair it with the OSG for a second explanation of the hardest architecture and cryptography topics." },
  { icon: "🎥", title: "Destination Certification & MindMap Videos", host: "youtube.com",
    url: "https://www.youtube.com/results?search_query=cissp+mindmap",
    desc: "Free video walkthroughs that teach the CISSP mindset — thinking like a risk-owning manager, not a technician. The MindMap and “Why You Will Pass the CISSP” talks are perennial favorites." },
  { icon: "👥", title: "r/cissp — Community Wiki, Study Plans & “I Passed” Threads", host: "reddit.com/r/cissp",
    url: "https://www.reddit.com/r/cissp/",
    desc: "Crowd-sourced study plans, the famous “Think like a manager” advice, and current exam-experience intel. Read recent pass posts for how the adaptive exam feels and where candidates get stuck." },
  { icon: "📚", title: "NIST Special Publications & ISO/IEC 27001/27002", host: "csrc.nist.gov",
    url: "https://csrc.nist.gov/publications/sp",
    desc: "When a definition must be exact, go to the source. NIST SP 800-series (800-30 risk, 800-37 RMF, 800-53 controls, 800-61 incident response, 800-63 identity) and ISO 27001/27002 underpin the exam's control, risk, and governance vocabulary." }
];

/* ---- Reader: Exam Mechanics card ---- */
CISSP.examMechanics = [
  { heading: "Format: Computerized Adaptive Testing (CAT)", body:
    "<p>The <strong>ISC2 CISSP</strong> English-language exam is delivered as a <strong>Computerized Adaptive Test (CAT)</strong>. Rather than a fixed form, the engine chooses each next question based on how you answered the previous ones: answer correctly and it serves a harder item; miss one and it eases off, continually narrowing its estimate of your ability. As a result the exam length is <strong>variable — between 100 and 150 items</strong> — completed within a <strong>3-hour</strong> appointment. Roughly <strong>25 of the items are unscored pretest questions</strong> ISC2 is trialing for future forms, and you cannot tell them from scored items, so treat every question as if it counts.</p>" +
    "<p>Because it is adaptive, <strong>you cannot skip a question, flag it, or go back</strong>. Once you confirm an answer it is final and the next item is chosen from it. This is the single biggest mental adjustment from CompTIA-style linear exams: there is no review pass, no flag-and-return. You must commit to your best answer and move on.</p>" +
    "<div class='callout exam'><div class='lbl'>Exam tip</div>The CAT can end at <strong>any point from item 100 onward</strong> the moment the engine is confident you are above (or below) the passing standard. Do not read anything into the exam ending at 100 or running to 150 — people pass and fail at both extremes. Keep the same focus on question 100 as on question 1.</div>" },
  { heading: "Scoring: the 700 / 1000 standard", body:
    "<p>CISSP is scored on a scaled range of <strong>0 to 1000</strong>, and the passing standard is <strong>700</strong>. Scaled scoring is not a percentage of questions correct: ISC2 weights items by difficulty and equates across the adaptive path so that no candidate is advantaged or disadvantaged by the particular items they draw. You will not see a numeric score if you pass — a pass simply reports “Pass.” A fail report lists your weakest domains, ranked, to guide re-study.</p>" +
    "<p>Because the exam is pass/fail and adaptive, there is <strong>no target percentage</strong> to aim for. The engine drives you toward roughly a 50% success rate on the items it serves — that is by design and does <em>not</em> mean you are failing. Confidence should come from your <em>preparation</em> and practice-test trends, not from a running sense of how many you are getting right during the real exam.</p>" +
    "<blockquote>This platform’s mock exam reports a scaled score using a transparent linear approximation of the 0–1000 band against the 700 line. Use it as a <em>relative</em> readiness signal — “am I consistently clearing 700 on full-length practice?” — not as a literal prediction of your official adaptive result.</blockquote>" },
  { heading: "Question styles and the CISSP mindset", body:
    "<p>CISSP questions are famously <strong>“best answer”</strong> items. Frequently two, three, or all four options are technically correct — your job is to pick the <em>best</em> one for the scenario, from the perspective of a <strong>risk-owning manager, not a hands-on technician</strong>. This is the defining skill of the exam. When two answers both “work,” the CISSP-correct choice is usually the one that is more strategic, addresses root cause, protects people first, or follows the correct governance sequence.</p>" +
    "<ul><li><strong>Think like a manager.</strong> Prefer policy, risk assessment, and management support over jumping straight to a technical tool. “Determine the risk” beats “install a firewall” when both appear.</li><li><strong>Safety of human life is always the first priority.</strong> Any option that protects people outranks one that protects assets or data.</li><li><strong>Follow the correct order.</strong> Many items test sequence — assess before you remediate, identify before you contain, and get management approval before you act.</li><li><strong>Watch the qualifiers.</strong> Words like <strong>FIRST</strong>, <strong>BEST</strong>, <strong>MOST</strong>, and <strong>LEAST</strong> are decisive — the answer changes entirely depending on which is present.</li></ul>" +
    "<div class='callout'><div class='lbl'>Strategy</div>For every scenario, ask: <em>“What would a responsible risk manager who owns this decision do first?”</em> That framing resolves most “two answers look right” situations.</div>" },
  { heading: "Eligibility, endorsement, and the Associate path", body:
    "<p>To become a full CISSP you need <strong>five years of cumulative, paid work experience</strong> in two or more of the eight domains. A relevant four-year degree or an approved credential from the ISC2 list can waive <strong>one year</strong>. If you pass the exam without the experience, you become an <strong>Associate of ISC2</strong> and have up to <strong>six years</strong> to earn the required experience.</p>" +
    "<p>Passing is not the final step: within nine months you must have your experience <strong>endorsed by an existing ISC2-certified professional</strong> in good standing, who attests to your experience. ISC2 audits a percentage of applications. The exam voucher is <strong>US$749</strong> (pricing varies by region), and there may be funding available for a free voucher — connect with the Program Director or your professor for more information about funding opportunities.</p>" +
    "<div class='callout scenario'><div class='lbl'>Note</div>You must also <strong>attest to the ISC2 Code of Professional Ethics</strong> and, once certified, maintain the credential with <strong>Continuing Professional Education (CPE)</strong> credits — 120 over each three-year cycle — plus the Annual Maintenance Fee.</div>" },
  { heading: "Exam-day logistics", body:
    "<p>The CISSP is delivered at <strong>Pearson VUE test centers</strong> (the CAT English exam is taken in person, not via online proctoring). Bring two acceptable forms of ID; arrive early. You cannot bring notes, phones, or smartwatches into the test room, and you are continuously monitored. A basic on-screen calculator and an erasable note board are provided.</p>" +
    "<p>Pace yourself: with up to 150 items in 180 minutes you have a little over a minute per question on average, but you will not need a review pass (there is none). Read each scenario carefully <em>once</em>, identify the actual ask in the final sentence, apply the manager mindset, commit, and move on. Do not agonize — second-guessing is costly when you cannot return.</p>" +
    "<div class='callout exam'><div class='lbl'>Mindset</div>The CISSP rewards <strong>breadth and judgment</strong>, not deep trivia in any one area. You are being certified as a security <em>leader</em> who understands the whole field — answer every question from that altitude.</div>" }
];

/* ---- Reader: Career Guidance card ---- */
CISSP.careerGuidance = [
  { heading: "Where CISSP sits on the ladder", body:
    "<p><strong>CISSP is the gold-standard, vendor-neutral certification for experienced security professionals.</strong> Administered by <strong>ISC2</strong>, it certifies that you can design, engineer, and manage an organization’s entire security posture — governance and risk, asset protection, architecture, network and identity security, testing, operations, and software security. It is not an entry-level credential; it sits at the <em>senior/management</em> tier, above foundational certs (Security+, SSCP) and alongside or above other advanced credentials (CISM, CCSP, CASP+).</p>" +
    "<p>For hiring managers, CISSP on a résumé is shorthand for “this person can own security decisions and speak the language of risk to the business.” It is one of the most frequently <em>required</em> certifications in senior security job postings, and it is formally approved under the U.S. DoD <strong>8140/8570</strong> framework for several IAT/IAM Level II and III roles.</p>" },
  { heading: "Why a management-level, vendor-neutral cert matters", body:
    "<p>Most senior security hiring tests two things: can you reason about risk across the whole enterprise, and can you translate that into decisions the business will fund. Tool-specific skills age quickly; the <em>judgment</em> — balancing a control’s cost against the risk it reduces, choosing the right governance response, sequencing an incident correctly — is durable and transferable. CISSP certifies that layer explicitly, which is why it travels across industries, clouds, and toolchains.</p>" +
    "<p>The exam’s deliberate “think like a manager” framing is the point: organizations do not want a senior hire who reaches for a firewall before understanding the risk. They want someone who assesses first, aligns security with business goals, and can defend a decision to auditors and executives.</p>" +
    "<div class='callout exam'><div class='lbl'>Why it matters</div>CISSP names the exact skill set senior security roles are hiring for: <strong>enterprise risk judgment</strong> that does not expire when the company changes vendors or migrates to a new cloud.</div>" },
  { heading: "Roles CISSP opens", body:
    "<p>CISSP aligns with a cluster of mid-to-senior roles. It will not, by itself, make you a CISO on day one — but combined with experience it credibly qualifies you for:</p>" +
    "<ul>" +
    "<li><strong>Security Manager / Information Security Manager</strong> — owning policy, risk, and a security program. The whole exam maps to this job.</li>" +
    "<li><strong>Security Architect / Engineer</strong> — designing secure systems, networks, and cryptographic solutions (Domains 3, 4, 5).</li>" +
    "<li><strong>Senior Security Analyst / Consultant</strong> — assessing risk, testing controls, and advising on governance across Domains 1, 6, and 7.</li>" +
    "<li><strong>GRC / Risk / Compliance Lead</strong> — governance, risk management, and compliance work rooted in Domain 1.</li>" +
    "<li><strong>CISO track</strong> — CISSP is a near-universal expectation on the path to a Chief Information Security Officer role.</li>" +
    "</ul>" },
  { heading: "Building the path beyond CISSP", body:
    "<p>Treat CISSP as the anchor of a senior security career, then specialize. A common trajectory: <em>CISSP → a domain concentration or adjacent credential → leadership</em>. ISC2 offers CISSP <strong>concentrations</strong> — ISSAP (architecture), ISSEP (engineering), and ISSMP (management) — that deepen a specific domain. From here, cloud-focused professionals add <strong>CCSP</strong>; management-focused professionals add <strong>CISM</strong>; audit-focused professionals add <strong>CISA</strong>; and offensive-minded practitioners pursue OSCP or GIAC tracks.</p>" +
    "<div class='callout scenario'><div class='lbl'>Practical advice</div>CISSP is as much a <strong>mindset credential</strong> as a knowledge one. Pair it with demonstrable experience — leading a risk assessment, owning an incident, writing a policy — because the endorsement requirement and most senior interviews probe for real decisions you have made, not just facts you have memorized.</div>" }
];

/* Reading content is NOT bundled here. Each domain's dense reading sections live
   in their own module under assets/js/content/domainN.js and are fetched on
   demand by app.js the first time a Domain Study card is opened. This object is
   the shared target those modules populate: CISSP.reading[N] = [ ...sections ]. */
CISSP.reading = CISSP.reading || {};

/* Flashcard decks are likewise lazy-loaded from assets/js/content/flashN.js
   (100 cards per domain) and populate this object: CISSP.flash[N] = [ ...cards ]. */
CISSP.flash = CISSP.flash || {};
