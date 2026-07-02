/* CISSP :: content/pbqs.js — CISSP performance-based question database (30). */
window.CISSP = window.CISSP || {}; CISSP.pbqs = CISSP.pbqs || [];
CISSP.pbqs.push(

  /* ============================================================
     FORMAT 1 — RISK TREATMENT & GOVERNANCE (domain 1, obj 1.9)  PBQ-01..06
     ============================================================ */
  {
    id:"PBQ-01", format:1, domain:1, obj:"1.9",
    title:"Quantify and Treat a Laptop-Theft Risk",
    brief:"A fleet of field laptops holds regulated customer data. You have the loss figures below. Work the quantitative risk, choose the treatment, and classify the safeguard you select.",
    exhibit:"<span class='cy'>ASSET / THREAT</span>\nAsset .......... field laptops with regulated PII\nAsset value .... <span class='hl'>$4,000</span> per laptop (data + hardware exposure)\nThreat ......... theft / loss of a laptop\nExposure factor  <span class='hl'>100%</span> (a lost laptop is a total loss of that asset)\nHistory ........ <span class='hl'>5</span> laptops lost per year\n\n<span class='dim'>SLE = Asset Value x Exposure Factor</span>\n<span class='dim'>ALE = SLE x ARO</span>\n<span class='dim'>Proposed safeguard: full-disk encryption on every laptop.</span>",
    exhibitTitle:"Risk register entry",
    fields:[
      { label:"Single Loss Expectancy (SLE)", hint:"Asset value x exposure factor.", options:["$400","$4,000","$20,000"], answer:1, explain:"SLE = AV ($4,000) x EF (100%) = $4,000 — the loss expected from one theft event. $400 uses a 10% EF that does not match the total-loss scenario; $20,000 is the annualized figure (the ALE), not a single loss." },
      { label:"Annualized Loss Expectancy (ALE)", hint:"SLE x annual rate of occurrence.", options:["$4,000","$20,000","$800"], answer:1, explain:"ALE = SLE ($4,000) x ARO (5 per year) = $20,000 — the expected yearly loss that justifies safeguard spend. $4,000 is a single loss (SLE); $800 divides instead of multiplying." },
      { label:"Best risk-treatment choice given cheap, effective encryption", hint:"Reduce the impact of the risk you keep.", options:["Accept the risk","Avoid by banning field laptops","Mitigate with full-disk encryption"], answer:2, explain:"Full-disk encryption reduces the loss impact (stolen data is unreadable) at low cost, so mitigation is the sound business choice. Accepting ignores a controllable $20,000/yr exposure; avoidance (banning laptops) destroys the business capability rather than managing the risk." },
      { label:"Control CATEGORY of full-disk encryption", hint:"Hardware/software mechanism.", options:["Administrative","Physical","Technical (logical)"], answer:2, explain:"Encryption is a technical/logical control implemented in software/hardware. Administrative controls are policies and procedures; physical controls are locks, guards, and barriers — encryption is none of these." },
      { label:"Control TYPE of encryption in this loss scenario", hint:"It limits damage rather than blocking or detecting the event.", options:["Detective","Deterrent","Compensating / recovery-limiting (preventive of disclosure)"], answer:2, explain:"Encryption cannot stop the physical theft, but it prevents disclosure of the data, acting as a compensating/preventive control against the actual harm. It does not detect the theft (detective) nor discourage a thief who cannot see the encryption (deterrent)." }
    ],
    summary:"SLE = AV x EF = $4,000; ALE = SLE x ARO = $20,000/yr. Mitigate with full-disk encryption — a technical control that prevents data disclosure — because it cuts impact cheaply while preserving the business capability."
  },
  {
    id:"PBQ-02", format:1, domain:1, obj:"1.9",
    title:"Transfer or Retain a Rare Catastrophic Risk",
    brief:"A flood could destroy a data center. The event is rare but catastrophic, and a safeguard would cost more than the risk. Compute the ALE and pick the treatment that fits.",
    exhibit:"<span class='cy'>ASSET / THREAT</span>\nAsset .......... primary data center\nSLE ............ <span class='hl'>$2,000,000</span> per flood event\nARO ............ <span class='hl'>0.05</span> (once every 20 years)\nFlood-defense retrofit ... <span class='hl'>$250,000</span> / year\nCyber/flood insurance .... <span class='hl'>$40,000</span> / year premium\n\n<span class='dim'>ALE = SLE x ARO. Compare safeguard cost to ALE.</span>",
    exhibitTitle:"Business impact figures",
    fields:[
      { label:"Annualized Loss Expectancy", hint:"SLE x ARO.", options:["$40,000","$100,000","$2,000,000"], answer:1, explain:"ALE = $2,000,000 x 0.05 = $100,000/yr. $2,000,000 is a single event loss (SLE), and $40,000 is the insurance premium, not the ALE." },
      { label:"Is the $250,000/yr retrofit cost-justified?", hint:"Compare safeguard cost to ALE.", options:["No — its cost ($250k) exceeds the ALE ($100k)","Yes — always retrofit","Cost is irrelevant to the decision"], answer:0, explain:"A safeguard should not cost more than the risk it removes; $250k/yr to offset a $100k/yr ALE is a net loss, so it is not justified. Cost-benefit is central to CISSP risk decisions, so cost is very relevant." },
      { label:"Most appropriate treatment here", hint:"Rare, catastrophic, third party will price it.", options:["Mitigate with the retrofit","Accept with no action","Transfer via insurance"], answer:2, explain:"Insurance at $40k/yr transfers a low-frequency, high-impact loss for less than the ALE, the classic answer for rare catastrophic risk. Mitigation is over-priced here, and bare acceptance leaves a $2M single-event exposure unfunded." },
      { label:"After transferring, what residual duty remains?", hint:"Insurance does not erase the risk.", options:["None — the insurer owns it all","Delete the data center","Manage residual risk (recovery plan, some loss still uncovered)"], answer:2, explain:"Transfer moves financial liability but leaves residual risk — downtime, deductibles, reputational harm — that still needs a recovery plan. The organization retains accountability even when an insurer is paid; and destroying the asset is avoidance, not the point here." },
      { label:"Governance artifact that sets the ALE threshold for 'transfer vs accept'", hint:"High-level statement of intent.", options:["The risk-management policy (risk appetite/tolerance)","A step-by-step procedure","A hardening baseline"], answer:0, explain:"The risk-management policy defines risk appetite and the thresholds that drive treat/transfer/accept decisions. A procedure lists steps to execute a task, and a baseline is a minimum config standard — neither sets organizational risk tolerance." }
    ],
    summary:"ALE = $100,000/yr, below the $250k retrofit, so mitigation is not cost-justified. Transfer the rare catastrophic loss via a $40k insurance premium, then manage residual risk — the risk-management policy sets the appetite that drives this call."
  },
  {
    id:"PBQ-03", format:1, domain:1, obj:"1.9",
    title:"Compensating Control for an Unpatchable System",
    brief:"A legacy medical device cannot be patched before an audit. You must accept the vulnerability yet still satisfy the requirement. Classify the interim safeguard correctly.",
    exhibit:"<span class='cy'>SITUATION</span>\nSystem ......... legacy imaging device, vendor EOL\nRequirement .... quarterly patching standard\nProblem ........ vendor issues no patches; cannot comply\nInterim plan ... isolate device on a segmented VLAN with strict ACLs\n               plus enhanced monitoring, pending replacement\n\n<span class='dim'>The primary control (patching) is not achievable.</span>",
    exhibitTitle:"Exception request",
    fields:[
      { label:"Control TYPE of the network isolation + ACLs used in place of patching", hint:"It stands in for a required control that cannot be met.", options:["Compensating","Corrective","Deterrent"], answer:0, explain:"When the required control (patching) is infeasible, an alternative that meets the control intent is a compensating control. Corrective controls fix a system after an incident, and deterrent controls discourage would-be attackers — neither describes substituting for an unmet requirement." },
      { label:"Control TYPE of the enhanced monitoring/alerting added alongside it", hint:"It identifies malicious activity as it happens.", options:["Preventive","Detective","Directive"], answer:1, explain:"Monitoring and alerting identify events after they begin, which is a detective control. Preventive controls block the event beforehand, and directive controls tell people what to do (policies/signage)." },
      { label:"Control CATEGORY of the segmented-VLAN isolation", hint:"Enforced by network technology.", options:["Physical","Administrative","Technical"], answer:2, explain:"VLAN segmentation and ACLs are enforced by network devices, making them technical controls. Physical would be a locked cage around the device; administrative would be a rule that says 'do not connect it'." },
      { label:"Correct governance action to run the device out of compliance", hint:"Documented, time-bound, and signed off.", options:["File a formal risk exception/acceptance with an expiry and owner","Silently ignore the standard","Rewrite the standard to require nothing"], answer:0, explain:"A formal, time-bound risk exception documents the accepted risk, the compensating controls, and the owner who signs off — the disciplined governance answer. Silently ignoring the standard is a finding waiting to happen, and gutting the standard removes the control for everyone, not just this exception." },
      { label:"Who is accountable for signing the risk acceptance?", hint:"Accountability sits with the business, not the technician.", options:["The technician who found the issue","The external auditor","The data/system owner (senior management)"], answer:2, explain:"Risk acceptance is a management decision owned by the system/data owner who is accountable for the asset. The technician implements controls but does not own the risk, and the auditor evaluates rather than accepts risk on the org's behalf." }
    ],
    summary:"Patching is infeasible, so segmentation + ACLs act as a compensating (technical) control and monitoring as a detective control, all wrapped in a formal, time-bound risk exception signed by the accountable system owner."
  },
  {
    id:"PBQ-04", format:1, domain:1, obj:"1.9",
    title:"Select the Right Governance Artifact",
    brief:"A security program is being documented. For each requirement, choose the correct governance artifact in the policy hierarchy, and get its enforceability right.",
    exhibit:"<span class='cy'>GOVERNANCE HIERARCHY</span>\nPolicy ...... high-level, mandatory intent from senior mgmt\nStandard .... mandatory specific choice (e.g., approved cipher)\nProcedure ... mandatory step-by-step how-to\nBaseline .... mandatory minimum config for a platform\nGuideline ... <span class='hl'>recommended</span>, optional best practice\n",
    exhibitTitle:"Policy hierarchy",
    fields:[
      { label:"'All company data must be protected commensurate with its classification.'", hint:"High-level mandatory intent.", options:["Guideline","Policy","Procedure"], answer:1, explain:"A broad, mandatory statement of intent from senior management is a policy. A guideline is only recommended, and a procedure gives detailed steps rather than high-level intent." },
      { label:"'Data at rest must be encrypted with AES-256.'", hint:"A mandatory specific technology choice.", options:["Guideline","Standard","Policy"], answer:1, explain:"A mandatory, specific choice (this exact algorithm/strength) is a standard that supports the broader policy. It is not optional (guideline) and is more specific than a high-level policy." },
      { label:"'Step 1: open the console... Step 2: run the key-rotation command...'", hint:"Ordered how-to steps.", options:["Baseline","Procedure","Policy"], answer:1, explain:"Sequential, mandatory how-to steps are a procedure. A baseline is a minimum configuration state (not steps), and a policy states intent, not tasks." },
      { label:"'The minimum hardened configuration every Windows server must meet.'", hint:"Minimum config state for a platform.", options:["Guideline","Baseline","Policy"], answer:1, explain:"A defined minimum secure configuration for a platform is a baseline. A guideline is advisory, and a policy is high-level intent rather than a concrete config state." },
      { label:"'Where feasible, consider enabling additional logging for troubleshooting.'", hint:"Recommended, not mandatory.", options:["Standard","Procedure","Guideline"], answer:2, explain:"Language like 'consider' / 'where feasible' signals a recommended, optional guideline. Standards and procedures are mandatory, so neither fits an advisory recommendation." }
    ],
    summary:"Policy = mandatory high-level intent; standard = mandatory specific choice; procedure = mandatory steps; baseline = mandatory minimum config; guideline = optional recommendation. Match the artifact by scope and enforceability."
  },
  {
    id:"PBQ-05", format:1, domain:1, obj:"1.9",
    title:"Deterrent vs Preventive vs Recovery Controls",
    brief:"A facility is layering physical and administrative controls. Classify each control's category and type so the defense-in-depth story is documented correctly.",
    exhibit:"<span class='cy'>CONTROLS DEPLOYED</span>\nC1: 'Warning: premises under 24/7 CCTV' signage at the gate\nC2: mantrap turnstile that blocks tailgating entry\nC3: security-awareness training required for all staff\nC4: nightly backups restored during a disaster\n",
    exhibitTitle:"Control inventory",
    fields:[
      { label:"C1 (CCTV warning sign) — control TYPE", hint:"Discourages before an act.", options:["Preventive","Deterrent","Corrective"], answer:1, explain:"A warning sign discourages a would-be intruder from acting, which is a deterrent control. It does not physically stop entry (preventive) or fix anything after the fact (corrective)." },
      { label:"C2 (mantrap turnstile) — control TYPE", hint:"Physically stops the event.", options:["Detective","Preventive","Recovery"], answer:1, explain:"A mantrap physically blocks unauthorized/tailgating entry before it happens, a preventive control. It does not merely detect entry, nor restore anything (recovery)." },
      { label:"C3 (security-awareness training) — control CATEGORY and TYPE", hint:"A policy-driven human control that guides behavior.", options:["Technical / detective","Administrative / directive (preventive)","Physical / corrective"], answer:1, explain:"Training is an administrative control that directs and shapes staff behavior to prevent mistakes — administrative/directive. It is not enforced by technology (technical) or by barriers (physical)." },
      { label:"C4 (restoring nightly backups after a disaster) — control TYPE", hint:"Returns operations to normal after an event.", options:["Recovery","Deterrent","Directive"], answer:0, explain:"Restoring from backup returns systems to a working state after an incident, a recovery control. Deterrents discourage attackers and directives instruct people — neither restores service." },
      { label:"Backups themselves (before any incident) best classify as", hint:"They exist to enable restoration; what type?", options:["Deterrent","Recovery / corrective safeguard","Physical"], answer:1, explain:"Backups are a recovery/corrective safeguard whose purpose is to restore data after loss. They neither discourage attackers (deterrent) nor act as a physical barrier." }
    ],
    summary:"Classify by intent: the warning sign deters, the mantrap prevents, awareness training is an administrative/directive preventive control, and restoring backups is a recovery control — the layers together give defense in depth."
  },
  {
    id:"PBQ-06", format:1, domain:1, obj:"1.9",
    title:"Cost-Benefit of a Safeguard",
    brief:"A safeguard reduces how often a loss occurs. Compute the value of the control and decide whether to fund it, then map the governance decision to the right artifact.",
    exhibit:"<span class='cy'>BEFORE SAFEGUARD</span>\nSLE ............ <span class='hl'>$50,000</span>\nARO (before) ... <span class='hl'>4</span> events / year\n\n<span class='cy'>AFTER SAFEGUARD (WAF)</span>\nARO (after) .... <span class='hl'>1</span> event / year\nAnnual cost of the safeguard (ACS) ... <span class='hl'>$60,000</span> / year\n\n<span class='dim'>ALE = SLE x ARO.  Value of control = ALE(before) - ALE(after) - ACS.</span>",
    exhibitTitle:"Safeguard evaluation",
    fields:[
      { label:"ALE BEFORE the safeguard", hint:"$50,000 x 4.", options:["$50,000","$200,000","$150,000"], answer:1, explain:"ALE(before) = $50,000 x 4 = $200,000/yr. $50,000 is a single loss (SLE), and $150,000 skips one of the four events." },
      { label:"ALE AFTER the safeguard", hint:"$50,000 x 1.", options:["$50,000","$0","$60,000"], answer:0, explain:"ALE(after) = $50,000 x 1 = $50,000/yr. $0 wrongly assumes total elimination, and $60,000 is the safeguard's annual cost, not the residual ALE." },
      { label:"Value of the safeguard to the business", hint:"ALE(before) - ALE(after) - ACS.", options:["$90,000 net benefit","$150,000 net benefit","A net loss"], answer:0, explain:"Value = $200,000 - $50,000 - $60,000 = $90,000 net benefit per year, so the control pays for itself. $150,000 forgets to subtract the $60,000 cost, and it is clearly not a net loss." },
      { label:"Given the positive value, the treatment decision is", hint:"Reduce likelihood at a net gain.", options:["Accept the risk unchanged","Avoid the business function","Mitigate — fund the safeguard"], answer:2, explain:"A safeguard delivering $90k/yr of net value should be funded — mitigation. Accepting leaves $150k/yr of reducible loss on the table, and avoidance would abandon a profitable function unnecessarily." },
      { label:"Artifact that records this approved risk decision and residual risk", hint:"A living record of decisions, not a how-to.", options:["A hardening baseline","The risk register / risk-treatment plan","A user guideline"], answer:1, explain:"The risk register (with its treatment plan) records the decision, owner, and residual risk. A baseline defines minimum config, and a guideline offers optional advice — neither tracks risk-treatment decisions." }
    ],
    summary:"ALE drops from $200k to $50k; subtracting the $60k cost leaves $90k/yr of value, so mitigate and fund the safeguard, recording the decision and residual risk in the risk register / treatment plan."
  },

  /* ============================================================
     FORMAT 2 — DATA CLASSIFICATION / ROLES / HANDLING (domain 2, obj 2.1)  PBQ-07..12
     ============================================================ */
  {
    id:"PBQ-07", format:2, domain:2, obj:"2.1",
    title:"Classify Fields by Sensitivity",
    brief:"A new customer table is entering the warehouse. Assign each field the correct classification so downstream handling controls apply.",
    exhibit:"<span class='cy'>FIELD              SAMPLE</span>\nssn               123-45-6789\nmedical_note      'patient hypertensive, on lisinopril'\ncard_pan          4111 1111 1111 1111\npress_release_id  PR-2024-018\n\n<span class='dim'>Scheme: Public &lt; Internal &lt; Confidential/PII &lt; Regulated (PHI/PCI).</span>",
    exhibitTitle:"Field inventory",
    fields:[
      { label:"ssn classification", hint:"Uniquely identifies a person; regulated.", options:["Public","Internal","Sensitive PII (regulated)"], answer:2, explain:"A Social Security Number is sensitive, regulated PII that uniquely identifies an individual. It is clearly not public, and it is more sensitive than ordinary internal data." },
      { label:"medical_note classification", hint:"Health information about an identifiable patient.", options:["Public","PHI (protected health information)","Internal only"], answer:1, explain:"Clinical notes about an identifiable patient are Protected Health Information under HIPAA. Treating them as public or merely internal would ignore the health-privacy regime that governs them." },
      { label:"card_pan classification", hint:"Primary account number of a payment card.", options:["Public","Guideline data","Cardholder data (PCI-regulated)"], answer:2, explain:"A card PAN is cardholder data governed by PCI DSS, requiring strict storage/transmission controls (and truncation/masking). It is neither public nor a governance document category ('guideline data' is not a classification)." },
      { label:"press_release_id classification", hint:"Intended for public release.", options:["Public","Confidential","PHI"], answer:0, explain:"A press-release identifier is meant for public distribution, so it is Public data. It contains no personal (confidential/PII) or health (PHI) content." },
      { label:"Who assigns these classification labels?", hint:"Accountable business role, not IT.", options:["The backup operator","Any end user, ad hoc","The data owner (business), guided by policy"], answer:2, explain:"The data owner is accountable for classifying information per the classification policy. The backup operator is a custodian who protects data but does not set its label, and ad-hoc user labeling produces inconsistent, unenforceable classifications." }
    ],
    summary:"Classify by sensitivity and regulation: SSN = sensitive PII, clinical note = PHI, card PAN = PCI cardholder data, press-release id = Public. The accountable data owner assigns labels per the classification policy."
  },
  {
    id:"PBQ-08", format:2, domain:2, obj:"2.1",
    title:"Assign the Correct Data Role",
    brief:"Under a GDPR-style privacy regime, map each party to its formal data role so accountability and contracts are correct.",
    exhibit:"<span class='cy'>PARTIES</span>\nP1: your company decides why/how customer data is processed\nP2: a SaaS vendor that only processes data on your instructions\nP3: the IT team that stores, backs up, and secures the data\nP4: the individual the personal data is about\n",
    exhibitTitle:"Processing arrangement",
    fields:[
      { label:"P1 (decides purpose and means)", hint:"Sets the 'why' and 'how'.", options:["Data processor","Data controller","Data subject"], answer:1, explain:"The party determining the purposes and means of processing is the data controller and bears primary accountability. A processor only acts on instructions, and the subject is the person the data is about." },
      { label:"P2 (SaaS vendor acting on instructions)", hint:"Processes on behalf of another.", options:["Data processor","Data controller","Data owner"], answer:0, explain:"A vendor that processes personal data solely on the controller's documented instructions is a data processor, bound by a processing agreement/DPA. It is not the controller (it does not decide purpose) and 'data owner' is an internal accountability role, not this external processing role." },
      { label:"P3 (internal IT that stores and secures the data)", hint:"Protects data on the owner's behalf.", options:["Data custodian","Data controller","Data subject"], answer:0, explain:"IT staff who store, back up, and secure data are data custodians executing the owner's protection requirements. They do not decide processing purpose (controller) and are not the individual described (subject)." },
      { label:"P4 (the individual the data describes)", hint:"The person whose data it is.", options:["Data processor","Data subject","Data custodian"], answer:1, explain:"The natural person the personal data relates to is the data subject, holder of privacy rights (access, erasure). A processor handles data for others, and a custodian safeguards it — neither is the individual." },
      { label:"Contract that must bind P1 and P2", hint:"Controller-to-processor agreement.", options:["A guideline memo","No contract is needed","A data-processing agreement (DPA) / contract"], answer:2, explain:"A controller and processor must be bound by a data-processing agreement specifying scope, security, and breach duties. An informal memo is not enforceable, and skipping the contract violates privacy-law obligations." }
    ],
    summary:"Controller decides purpose/means, processor acts on instructions, custodian secures the data, and the subject is the individual — with a data-processing agreement legally binding the controller-processor relationship."
  },
  {
    id:"PBQ-09", format:2, domain:2, obj:"2.1",
    title:"Owner vs Custodian Accountability",
    brief:"A dispute over who is responsible for a data set needs resolving. Assign accountability and responsibility correctly for each task.",
    exhibit:"<span class='cy'>DATA SET: HR payroll (contains PII)</span>\nHR director .... sets rules on who may see payroll, its value\nStorage admin .. runs backups, applies encryption, patches DB\nSecurity team .. defines the required control baseline\nUser (analyst) . reads reports to do the job\n",
    exhibitTitle:"RACI dispute",
    fields:[
      { label:"Accountable for the payroll data (classification, access decisions)", hint:"Owns the asset and its risk.", options:["Storage admin","Data owner (HR director)","End user"], answer:1, explain:"The data owner (the HR director for payroll) is accountable for classification, access approval, and residual risk. The storage admin is a custodian who implements protection, and the end user merely consumes reports." },
      { label:"Responsible for implementing backups and encryption", hint:"Hands-on protection of the data.", options:["Data custodian (storage admin)","Data owner","Data subject"], answer:0, explain:"The custodian implements the owner's protection requirements — backups, encryption, patching. The owner directs but does not perform these tasks, and the subject is the individual the data is about." },
      { label:"Role of the security team's control baseline here", hint:"Standard the custodian must meet.", options:["It is optional advice","It is a mandatory minimum config the custodian implements","It replaces the owner's authority"], answer:1, explain:"A security baseline is a mandatory minimum configuration the custodian must implement; it supports, not supplants, the owner's authority. Baselines are not optional guidelines, and they do not transfer ownership away from the business." },
      { label:"The analyst who only reads reports is a", hint:"Consumes data within granted rights.", options:["Data owner","Data user","Data custodian"], answer:1, explain:"An individual who accesses data to perform assigned duties is a data user, bound by acceptable-use and need-to-know. They neither own the asset nor safeguard it operationally (custodian)." },
      { label:"Can the owner delegate custody but keep accountability?", hint:"Delegate the work, not the answerability.", options:["No — delegating custody transfers accountability","Only auditors can be accountable","Yes — custody can be delegated while accountability stays with the owner"], answer:2, explain:"Custody (the hands-on work) can be delegated, but accountability for the asset remains with the owner — a core governance principle. Accountability does not shift to the custodian, and auditors evaluate controls rather than own the data." }
    ],
    summary:"The owner is accountable (classification, access, risk), the custodian is responsible for hands-on protection, the security baseline is a mandatory minimum the custodian meets, and users consume within their rights — the owner may delegate custody but keeps accountability."
  },
  {
    id:"PBQ-10", format:2, domain:2, obj:"2.1",
    title:"Protect Data in Each State",
    brief:"Sensitive data moves through a pipeline. Place the correct protection for each data state so it is defended end to end.",
    exhibit:"<span class='cy'>DATA STATES IN THE PIPELINE</span>\n(1) client -> API .... data crossing the network (in transit)\n(2) warehouse ....... data stored on disk (at rest)\n(3) analytics compute  data being processed in memory (in use)\n\n<span class='dim'>Goal: protect regulated PII in every state.</span>",
    exhibitTitle:"Data-state map",
    fields:[
      { label:"State (1) data in transit — protection", hint:"Moving across a network.", options:["TLS / encrypted channel","Encryption at rest only","No control needed"], answer:0, explain:"Data crossing a network is protected in transit with TLS to prevent interception. At-rest encryption protects stored data (a different state), and 'no control' exposes PII on the wire." },
      { label:"State (2) data at rest — protection", hint:"Sitting on disk/backup.", options:["Encryption at rest (plus key management)","TLS only","File permissions alone"], answer:0, explain:"Stored data needs encryption at rest so stolen disks/backups are unreadable. TLS only protects data in motion, and permissions alone do not render stolen media unreadable." },
      { label:"State (3) data in use — emerging protection", hint:"Being processed in memory.", options:["Confidential computing / secure enclave (TEE)","Nothing protects data in use","A firewall rule"], answer:0, explain:"Data in use can be protected with confidential computing / trusted execution environments that keep it encrypted even while processed. It is not true that nothing protects it, and a firewall governs network traffic, not in-memory data." },
      { label:"Where should the encryption keys live?", hint:"Separate keys from the data.", options:["In a managed KMS/HSM, separate from the data","Beside the database in plaintext","Hard-coded in the application","In a public repo"], answer:0, explain:"Keys belong in a managed KMS or HSM, segregated from the data they protect and access-controlled. Storing keys with the data, hard-coding them, or publishing them nullifies the encryption entirely." },
      { label:"Do you need all three protections?", hint:"Each state faces a distinct threat.", options:["No, one suffices","Only at-rest matters","Yes — each state faces a different threat, so protect all three"], answer:2, explain:"Transit, at-rest, and in-use protections defend against sniffing, media theft, and memory exposure respectively — all needed for end-to-end assurance. Choosing only one leaves an exploitable gap." }
    ],
    summary:"Protect each state: TLS in transit, encryption at rest, and confidential computing/TEE in use, with keys held in a managed KMS/HSM separate from the data — all three because each state faces a distinct threat."
  },
  {
    id:"PBQ-11", format:2, domain:2, obj:"2.1",
    title:"Choose the Right Media-Sanitization Action",
    brief:"Devices are being retired or repurposed. For each case, pick the NIST SP 800-88 sanitization action (clear, purge, or destroy) that matches sensitivity and reuse intent.",
    exhibit:"<span class='cy'>NIST SP 800-88 SANITIZATION</span>\nClear ..... logical overwrite; defeats simple recovery; reusable\nPurge ..... cryptographic erase / degauss; defeats lab recovery; may be reusable\nDestroy ... shred / incinerate / pulverize; media unusable afterward\n",
    exhibitTitle:"Sanitization decision guide",
    fields:[
      { label:"Low-sensitivity laptop reused INSIDE the same trusted org", hint:"Reused internally; simple recovery risk is acceptable.", options:["Clear","Destroy","Do nothing"], answer:0, explain:"Clearing (a logical overwrite) is sufficient when the device stays within the organization's trust boundary and data sensitivity is low. Destroy needlessly wastes reusable hardware, and doing nothing leaves data recoverable." },
      { label:"SSD holding confidential data being sold to an external buyer", hint:"Leaves the org; SSD wear-leveling defeats simple overwrite.", options:["Clear","Recycle-bin delete","Purge (cryptographic erase)"], answer:2, explain:"An SSD leaving the trust boundary should be purged, e.g., cryptographic erase, which reliably defeats laboratory recovery despite wear-leveling. A simple clear/overwrite can miss remapped cells, and a recycle-bin delete leaves data fully intact." },
      { label:"Drive that stored TOP-SECRET data, no reuse planned", hint:"Highest sensitivity; media reuse not required.", options:["Clear","Purge","Destroy"], answer:2, explain:"For the highest-sensitivity data with no reuse need, destruction (shred/pulverize/incinerate) gives the strongest assurance. Clear and purge preserve usable media but carry more residual risk than physical destruction demands here." },
      { label:"Why is a normal file 'delete' NOT sanitization?", hint:"What delete actually does.", options:["It overwrites every sector","It only removes the pointer; data remains recoverable","It physically destroys the platter"], answer:1, explain:"A standard delete just unlinks the file pointer, leaving the underlying data recoverable until overwritten. It neither overwrites all sectors nor destroys the media, so it fails as sanitization." },
      { label:"After destroying media, what governance step is required?", hint:"Prove it happened.", options:["Nothing further","Record a certificate/log of destruction for the audit trail","Immediately re-buy identical media"], answer:1, explain:"Sanitization must be documented with a certificate/log of destruction to prove chain-of-custody and compliance. Skipping documentation leaves no audit evidence, and re-purchasing hardware is unrelated to proving the disposal." }
    ],
    summary:"Match sanitization to sensitivity and reuse: Clear for internal low-sensitivity reuse, Purge (crypto-erase) for confidential media leaving the org, Destroy for the most sensitive with no reuse — and always log a certificate of destruction (plain delete is not sanitization)."
  },
  {
    id:"PBQ-12", format:2, domain:2, obj:"2.1",
    title:"Retention, Legal Hold, and Disposal",
    brief:"Governance must set retention and disposal for several data types. Choose the defensible action for each, respecting legal and privacy duties.",
    exhibit:"<span class='cy'>DATA TYPE              CONTEXT</span>\ntax_records           statutory retention period applies\nlitigation_email      subject of an active legal hold\nexpired_consent_pii   marketing consent has been withdrawn\ncustomer_backups      contain regulated PII on tape\n",
    exhibitTitle:"Retention & disposal matrix",
    fields:[
      { label:"tax_records action", hint:"Driven by statute, not preference.", options:["Delete right after filing","Retain for the legally required period, then dispose per schedule","Keep forever to be safe"], answer:1, explain:"Records with a statutory retention period must be kept for that period, then disposed per the retention schedule. Early deletion risks legal penalties, and keeping data forever increases breach exposure and cost." },
      { label:"litigation_email under an active legal hold", hint:"Hold overrides the routine schedule.", options:["Delete on the normal schedule","Anonymize it now","Suspend disposal — preserve until the hold is lifted"], answer:2, explain:"A legal hold suspends routine disposal; the data must be preserved intact until counsel releases the hold. Deleting or altering held data risks spoliation sanctions." },
      { label:"expired_consent_pii (consent withdrawn)", hint:"Data minimization / right to erasure.", options:["Keep using it anyway","Delete or anonymize it per the request and minimization principle","Sell it to recover value"], answer:1, explain:"When consent is withdrawn, the data must be deleted or anonymized to honor the request and data-minimization duty. Continuing to use or selling it breaches privacy law and trust." },
      { label:"Disposal method for the PII-bearing backup tapes", hint:"Ensure data is unrecoverable.", options:["Toss them in the trash","Degauss/shred (or crypto-erase) so data is unrecoverable","Reuse without wiping"], answer:1, explain:"PII-bearing tapes must be degaussed/shredded or crypto-erased so data cannot be recovered. Trashing intact media or reusing it unwiped exposes regulated data." },
      { label:"When retention schedule and legal hold conflict, which wins?", hint:"Preservation duty vs routine deletion.", options:["The retention schedule (delete on time)","Whichever IT prefers","The legal hold (preserve)"], answer:2, explain:"A legal hold takes precedence over the routine retention/disposal schedule until released — preservation trumps scheduled deletion. Deferring to the schedule or to IT preference risks spoliation." }
    ],
    summary:"Retain tax records for the statutory period, preserve legally held email (hold overrides the schedule), delete/anonymize PII when consent is withdrawn, and degauss/shred PII backup tapes — the legal hold always wins over routine disposal."
  },

  /* ============================================================
     FORMAT 3 — CRYPTO & SECURITY MODEL (domain 3, obj 3.6)  PBQ-13..18
     ============================================================ */
  {
    id:"PBQ-13", format:3, domain:3, obj:"3.6",
    title:"Match Security Goal to Cryptographic Primitive",
    brief:"For each security goal, choose the cryptographic primitive that delivers it. Get the confidentiality/integrity/authentication/non-repudiation mapping right.",
    exhibit:"<span class='cy'>PRIMITIVES</span>\nSymmetric cipher ... shared secret key, fast bulk encryption\nAsymmetric pair .... public/private key\nHash ............... one-way digest, no key\nHMAC .............. keyed hash (shared key)\nDigital signature .. hash + private-key signing\n",
    exhibitTitle:"Primitive toolbox",
    fields:[
      { label:"Goal: bulk CONFIDENTIALITY of a large file", hint:"Fast, shared-key encryption.", options:["Hash","Symmetric cipher (e.g., AES)","Digital signature"], answer:1, explain:"A symmetric cipher such as AES provides fast bulk confidentiality with a shared key. A hash is one-way (no decryption), and a signature provides authenticity/non-repudiation, not bulk secrecy." },
      { label:"Goal: verify a download was not altered (INTEGRITY, no key)", hint:"One-way digest.", options:["Hash (e.g., SHA-256)","Symmetric cipher","RSA encryption"], answer:0, explain:"A cryptographic hash detects any change to the file by comparing digests — integrity without a key. A cipher provides confidentiality, and encrypting the file does not by itself prove integrity." },
      { label:"Goal: INTEGRITY + AUTHENTICATION of a message between two parties sharing a key", hint:"Keyed hash.", options:["Plain hash","Public key alone","HMAC"], answer:2, explain:"HMAC (a keyed hash) proves both integrity and authenticity to parties who share the secret key. A plain hash offers no authentication (anyone can recompute it), and a bare public key does not itself authenticate a message." },
      { label:"Goal: NON-REPUDIATION so the sender cannot deny signing", hint:"Sign with a private key.", options:["Symmetric encryption","Digital signature","HMAC"], answer:1, explain:"A digital signature (hash signed with the sender's private key) provides non-repudiation because only that private key could have produced it. Symmetric encryption and HMAC use a shared key, so either party could have created them — no non-repudiation." },
      { label:"Why can't HMAC provide non-repudiation?", hint:"Who holds the key?", options:["It is too slow","Both parties share the key, so either could have generated it","It has no integrity property"], answer:1, explain:"Because sender and receiver share the same HMAC key, either could have produced the tag, so it cannot bind the act to one party. HMAC is fast and does provide integrity/authentication — just not non-repudiation." }
    ],
    summary:"Confidentiality -> symmetric cipher, integrity (no key) -> hash, integrity+authentication (shared key) -> HMAC, non-repudiation -> digital signature. Shared-key primitives can't give non-repudiation; only private-key signing can."
  },
  {
    id:"PBQ-14", format:3, domain:3, obj:"3.6",
    title:"Choose the Algorithm and Mode",
    brief:"Engineer a solution. For each requirement, pick the correct algorithm/mode, balancing security, performance, and the goal to be met.",
    exhibit:"<span class='cy'>REQUIREMENTS</span>\nR1: encrypt bulk data AND detect tampering in one operation\nR2: exchange a symmetric key over an untrusted channel\nR3: strong asymmetric security with SMALL keys (mobile)\nR4: modern collision-resistant hashing\n",
    exhibitTitle:"Algorithm selection",
    fields:[
      { label:"R1 (bulk encryption + built-in integrity)", hint:"Authenticated encryption.", options:["AES-ECB","AES-GCM (authenticated encryption)","3DES-CBC"], answer:1, explain:"AES-GCM is authenticated encryption: it provides confidentiality and an integrity/authentication tag in one pass. AES-ECB leaks patterns and has no integrity, and legacy 3DES is slow and offers no built-in authentication." },
      { label:"R2 (exchange a key over an untrusted channel)", hint:"Public-key or key-agreement.", options:["RSA key transport or (EC)DH key agreement","Send the AES key in plaintext","Reuse a hard-coded key"], answer:0, explain:"RSA key transport or Diffie-Hellman/ECDH lets two parties establish a shared secret over an untrusted channel. Sending the key in plaintext exposes it, and hard-coding a key destroys the point of key exchange." },
      { label:"R3 (strong asymmetric security, small keys for mobile)", hint:"Efficient elliptic-curve crypto.", options:["ECC (elliptic-curve)","RSA-4096","DES"], answer:0, explain:"ECC delivers RSA-equivalent strength with far smaller keys, ideal for constrained/mobile devices. RSA-4096 is strong but heavyweight, and DES is obsolete and insecure." },
      { label:"R4 (modern collision-resistant hash)", hint:"Avoid broken hashes.", options:["MD5","SHA-2 (e.g., SHA-256) or SHA-3","SHA-1"], answer:1, explain:"SHA-2/SHA-3 are current collision-resistant hash families. MD5 and SHA-1 are both broken for collision resistance and must not be used for security." },
      { label:"Why is AES-ECB unsuitable for images/structured data?", hint:"Identical blocks -> identical ciphertext.", options:["It is too slow","Identical plaintext blocks yield identical ciphertext, leaking patterns","It cannot use a 256-bit key"], answer:1, explain:"ECB encrypts each block independently, so repeating plaintext produces repeating ciphertext that reveals structure (the classic 'ECB penguin'). It is not a speed or key-size issue; the flaw is pattern leakage." }
    ],
    summary:"Use AES-GCM for authenticated bulk encryption, RSA/ECDH for key exchange, ECC for small-key strength, and SHA-2/SHA-3 for hashing — and avoid AES-ECB, which leaks plaintext patterns."
  },
  {
    id:"PBQ-15", format:3, domain:3, obj:"3.6",
    title:"Key-Management Lifecycle Decisions",
    brief:"A crypto system needs sound key management. For each situation, choose the correct key-management action across the key lifecycle.",
    exhibit:"<span class='cy'>KEY-MANAGEMENT SCENARIOS</span>\nS1: where to store the master signing key\nS2: a private key is suspected compromised\nS3: enable recovery if a single admin is unavailable\nS4: a long-lived key has reached its cryptoperiod\n",
    exhibitTitle:"Key lifecycle",
    fields:[
      { label:"S1 (store the master/root key)", hint:"Tamper-resistant hardware.", options:["In application source code","In a hardware security module (HSM)","In a shared spreadsheet"], answer:1, explain:"Master/root keys belong in a tamper-resistant HSM that generates and guards them without exposing the key material. Source code and spreadsheets expose the key to anyone with read access." },
      { label:"S2 (private key suspected compromised)", hint:"Invalidate it fast.", options:["Keep using it until it expires","Only change the password","Revoke the certificate/key and re-issue"], answer:2, explain:"A suspected-compromised key must be revoked (e.g., via CRL/OCSP) and re-issued immediately to stop misuse. Waiting for expiry leaves a window of abuse, and changing a password does not invalidate the leaked key." },
      { label:"S3 (recovery if one admin is unavailable)", hint:"Split trust, require a quorum.", options:["Give one admin the whole key","Email the key to the team","Use split knowledge / M-of-N key escrow (dual control)"], answer:2, explain:"Split knowledge with an M-of-N scheme lets a quorum recover the key while no single person holds it all (dual control). One admin holding the whole key is a single point of failure/compromise, and emailing it broadcasts the secret." },
      { label:"S4 (key reached its cryptoperiod)", hint:"Replace on schedule.", options:["Extend it indefinitely","Rotate to a new key (and retire the old)","Publish the old key"], answer:1, explain:"Reaching the cryptoperiod calls for key rotation — generate a new key and retire the old one to limit exposure. Indefinite reuse increases risk, and publishing an old key can expose data still protected by it." },
      { label:"Core principle behind split knowledge and dual control", hint:"No one person can act alone.", options:["Least privilege only","Separation of duties / no single point of trust","Availability over confidentiality"], answer:1, explain:"Split knowledge and dual control enforce separation of duties so no single individual can misuse a key. Least privilege is related but broader, and this principle is about trust distribution, not trading away confidentiality for availability." }
    ],
    summary:"Store master keys in an HSM, revoke and re-issue a compromised key, use split knowledge/M-of-N escrow for recoverable dual control, and rotate keys at the end of their cryptoperiod — all rooted in separation of duties."
  },
  {
    id:"PBQ-16", format:3, domain:3, obj:"3.6",
    title:"Select the Security Model for the Policy",
    brief:"A system's policy must be enforced by a formal security model. Match each policy goal to the model whose rules enforce it.",
    exhibit:"<span class='cy'>SECURITY MODELS</span>\nBell-LaPadula .. confidentiality: no read up, no write down\nBiba ........... integrity: no write up, no read down\nClark-Wilson ... integrity via well-formed transactions + SoD\nBrewer-Nash .... conflict-of-interest (Chinese Wall)\n",
    exhibitTitle:"Model reference",
    fields:[
      { label:"Policy: 'a Secret user must not read Top-Secret data' (CONFIDENTIALITY)", hint:"No read up.", options:["Biba","Bell-LaPadula","Clark-Wilson"], answer:1, explain:"Bell-LaPadula enforces confidentiality with the 'no read up' (simple security) property, exactly this policy. Biba is an integrity model, and Clark-Wilson governs transaction integrity, not multilevel secrecy." },
      { label:"Policy: 'low-integrity data must not corrupt high-integrity data' (INTEGRITY)", hint:"No write up.", options:["Biba","Bell-LaPadula","Brewer-Nash"], answer:0, explain:"Biba protects integrity with the '*-integrity' property (no write up), preventing low-integrity subjects from modifying high-integrity objects. Bell-LaPadula addresses confidentiality, and Brewer-Nash addresses conflict of interest." },
      { label:"Policy: 'users change data only through validated transactions, with duties separated'", hint:"Well-formed transactions + SoD.", options:["Clark-Wilson","Bell-LaPadula","Take-Grant"], answer:0, explain:"Clark-Wilson enforces integrity via well-formed transactions and separation of duties (subjects act only through certified programs). Bell-LaPadula is confidentiality, and Take-Grant models rights propagation, not transaction integrity." },
      { label:"Policy: 'a consultant who saw Client A's data must not access competitor Client B's'", hint:"Conflict of interest.", options:["Biba","Bell-LaPadula","Brewer-Nash (Chinese Wall)"], answer:2, explain:"Brewer-Nash (the Chinese Wall model) dynamically blocks access that would create a conflict of interest, exactly this consultancy scenario. Biba and Bell-LaPadula address integrity and confidentiality levels, not conflict of interest." },
      { label:"Bell-LaPadula's *-property (star property) states", hint:"About writing.", options:["No write down (a subject can't write to a lower level)","No read up","No duties separated"], answer:0, explain:"The Bell-LaPadula *-property is 'no write down,' preventing a high-level subject from leaking data to a lower level. 'No read up' is the simple security property, and separation of duties belongs to Clark-Wilson." }
    ],
    summary:"Confidentiality (no read up / no write down) -> Bell-LaPadula; integrity (no write up) -> Biba; validated transactions + SoD -> Clark-Wilson; conflict of interest -> Brewer-Nash. Bell-LaPadula's *-property is 'no write down.'"
  },
  {
    id:"PBQ-17", format:3, domain:3, obj:"3.6",
    title:"Build a Secure Message Exchange",
    brief:"Two parties need a message that is confidential, tamper-evident, and provably from the sender. Assemble the primitives in the right order and roles.",
    exhibit:"<span class='cy'>REQUIREMENT</span>\nAlice sends Bob a message that is:\n  - confidential (only Bob can read it)\n  - integrity-protected and authentic\n  - non-repudiable (Alice cannot deny sending it)\n<span class='dim'>Available: AES session key, Alice's/Bob's RSA key pairs, SHA-256.</span>",
    exhibitTitle:"Hybrid cryptosystem",
    fields:[
      { label:"Encrypt the message body for CONFIDENTIALITY", hint:"Fast bulk cipher with a session key.", options:["Encrypt with AES using a random session key","Encrypt with Alice's private key","Hash the message"], answer:0, explain:"Encrypt the bulk message with a fast AES session key for confidentiality (a hybrid scheme). Encrypting with Alice's private key provides no secrecy (anyone with her public key can read it), and hashing does not conceal content." },
      { label:"Deliver the AES session key to Bob securely", hint:"Wrap it for the recipient only.", options:["Encrypt the session key with Bob's PUBLIC key","Encrypt it with Alice's public key","Send it in the clear"], answer:0, explain:"Wrapping the session key with Bob's public key means only Bob's private key can unwrap it. Using Alice's public key would let only Alice decrypt, and clear-text transmission exposes the key." },
      { label:"Provide NON-REPUDIATION of origin", hint:"Sign the digest with a private key.", options:["Sign the message hash with Alice's PRIVATE key","HMAC it with the session key","Encrypt with Bob's public key"], answer:0, explain:"Alice signs the SHA-256 digest with her private key so only she could have produced the signature — non-repudiation. An HMAC uses a shared key (no non-repudiation), and encrypting with Bob's key gives confidentiality, not origin proof." },
      { label:"Bob verifies the signature using", hint:"The signer's public key.", options:["Alice's PUBLIC key","Bob's private key","The AES session key"], answer:0, explain:"Bob verifies Alice's signature with Alice's public key, confirming authenticity and integrity. His own private key decrypts the session key (a different step), and the AES key plays no role in signature verification." },
      { label:"Why sign the HASH rather than the whole message?", hint:"Efficiency and fixed size.", options:["Signing the full message is impossible","Hashing yields a small fixed-size digest, so signing is fast and still binds the content","Hashes are secret keys"], answer:1, explain:"Public-key signing is slow, so you sign the compact fixed-size digest, which still uniquely binds the message content. Signing the full message is possible but inefficient, and a hash is a public digest, not a secret key." }
    ],
    summary:"Hybrid scheme: AES session key for confidentiality, wrap that key with Bob's public key, and sign the SHA-256 digest with Alice's private key (verified by Bob with her public key) for integrity and non-repudiation."
  },
  {
    id:"PBQ-18", format:3, domain:3, obj:"3.6",
    title:"PKI Trust and Certificate Validation",
    brief:"A TLS client must validate a server certificate. Choose the correct PKI component or action for each validation step.",
    exhibit:"<span class='cy'>PKI COMPONENTS</span>\nCA ...... issues and signs certificates (root of trust)\nRA ...... verifies identity before issuance\nCRL ..... list of revoked certificates\nOCSP .... online revocation status responder\n<span class='dim'>Client checks a server cert during the TLS handshake.</span>",
    exhibitTitle:"Certificate validation",
    fields:[
      { label:"What binds a public key to an identity and vouches for it?", hint:"Signs the certificate.", options:["The Certificate Authority (CA)","The end user","A firewall"], answer:0, explain:"The CA signs the certificate, binding a public key to a verified identity and serving as the trust anchor. The end user does not vouch for their own cert, and a firewall plays no PKI role." },
      { label:"To confirm the cert has not been revoked, the client checks", hint:"Revocation status.", options:["A CRL or an OCSP response","The certificate's expiry date only","The server's uptime"], answer:0, explain:"Revocation is verified via a CRL or an OCSP responder, independent of the expiry date. A non-expired cert can still be revoked, and uptime is irrelevant to trust." },
      { label:"How does the client establish trust in the CA?", hint:"Pre-installed anchors.", options:["It trusts any CA automatically","The CA's root certificate is in the client's trusted root store","It phones the server admin"], answer:1, explain:"Trust flows from a root CA certificate pre-installed in the client's trusted root store, validating the chain up to it. Clients do not trust arbitrary CAs, and manual admin contact is not part of automated validation." },
      { label:"Advantage of OCSP over downloading a full CRL", hint:"Real-time, single-cert query.", options:["OCSP checks one cert's status in real time instead of pulling a large list","OCSP needs no network","CRLs are always more current"], answer:0, explain:"OCSP queries the status of a single certificate in real time, avoiding the overhead of downloading and parsing a large CRL. OCSP does use the network, and it is generally fresher than a periodically published CRL." },
      { label:"If the certificate chain does not lead to a trusted root, the client should", hint:"Fail safe.", options:["Proceed anyway","Reject the connection (untrusted chain)","Install the unknown cert as trusted automatically"], answer:1, explain:"An untrusted chain must cause the connection to be rejected (fail-safe) rather than proceeding. Continuing or auto-trusting an unknown certificate would defeat the entire PKI trust model and enable MITM." }
    ],
    summary:"The CA signs certs as the trust anchor, revocation is checked via CRL/OCSP, trust flows from a root in the client's trust store, OCSP gives real-time single-cert status, and an untrusted chain must fail safe (reject)."
  },

  /* ============================================================
     FORMAT 4 — ACCESS CONTROL & IAM (domain 5, obj 5.4)  PBQ-19..24
     ============================================================ */
  {
    id:"PBQ-19", format:4, domain:5, obj:"5.4",
    title:"Choose the Authorization Model",
    brief:"Different environments demand different access-control models. For each requirement, pick the authorization model that best fits.",
    exhibit:"<span class='cy'>AUTHORIZATION MODELS</span>\nMAC .... system-enforced labels/clearances (non-discretionary)\nDAC .... owner grants access at discretion\nRBAC ... permissions via job roles\nABAC ... policy over attributes (user, resource, context)\nRule-based  ACLs/rules applied to all (e.g., firewall)\n",
    exhibitTitle:"Model selection",
    fields:[
      { label:"Military system: access strictly by clearance vs classification, users cannot override", hint:"Label-based, non-discretionary.", options:["DAC","MAC (mandatory)","RBAC"], answer:1, explain:"MAC enforces access by system-assigned labels and clearances that users cannot alter — the classic multilevel-security answer. DAC lets owners decide (too permissive here), and RBAC keys on job roles, not clearance labels." },
      { label:"Large enterprise: grant access by job function (accountant, nurse, teller)", hint:"Permissions bundled by role.", options:["RBAC","MAC","Rule-based only"], answer:0, explain:"RBAC assigns permissions to roles and users to roles, scaling cleanly for job-function access. MAC is label-driven (overkill for typical enterprise), and pure rule-based access does not model job roles." },
      { label:"Access depends on user dept AND device posture AND time of day", hint:"Multi-attribute, context-aware policy.", options:["DAC","ABAC (attribute-based)","MAC"], answer:1, explain:"ABAC evaluates policies over many attributes — user, resource, and environment/context — ideal for rich conditional rules. DAC and MAC cannot express fine-grained multi-attribute, context-aware conditions." },
      { label:"A file owner personally decides who can read their file", hint:"Owner discretion.", options:["MAC","DAC (discretionary)","ABAC"], answer:1, explain:"DAC lets the resource owner grant/deny access at their discretion (e.g., NTFS/POSIX permissions). MAC removes owner discretion, and ABAC decides via policy attributes rather than owner choice." },
      { label:"Why is MAC considered 'non-discretionary'?", hint:"Who controls the decision?", options:["Because owners freely share access","Because the system enforces labels and users cannot override them","Because there are no rules"], answer:1, explain:"MAC is non-discretionary because access is dictated by system-enforced labels/clearances, not by the object owner's choice. Owner-driven sharing is DAC, and MAC is highly rule-bound, not rule-less." }
    ],
    summary:"MAC for label/clearance-enforced multilevel security, RBAC for job-function access at scale, ABAC for multi-attribute context-aware policy, and DAC for owner-discretion sharing — MAC is non-discretionary because the system, not the owner, decides."
  },
  {
    id:"PBQ-20", format:4, domain:5, obj:"5.4",
    title:"Design Multi-Factor Authentication",
    brief:"An MFA rollout must combine genuinely different factors. Classify each authenticator and judge whether combinations are true MFA.",
    exhibit:"<span class='cy'>AUTHENTICATION FACTORS</span>\nType 1 — something you KNOW (password, PIN)\nType 2 — something you HAVE (token, smart card, phone)\nType 3 — something you ARE (biometric)\nPlus: somewhere you are (location), something you do (behavior)\n",
    exhibitTitle:"Factor taxonomy",
    fields:[
      { label:"A hardware TOTP token is which factor?", hint:"A physical possession.", options:["Something you know","Something you have","Something you are"], answer:1, explain:"A hardware token you must possess is a Type 2 'something you have' factor. It is not knowledge (Type 1) or a biometric trait (Type 3)." },
      { label:"A fingerprint is which factor?", hint:"A physical trait.", options:["Something you have","Something you are","Somewhere you are"], answer:1, explain:"A fingerprint is a biometric, Type 3 'something you are.' It is not a possessed object (have) or a location factor." },
      { label:"Is 'password + security question' true MFA?", hint:"Count the distinct factor TYPES.", options:["Yes, two factors","No — both are 'something you know' (single factor)","Only if the question is long"], answer:1, explain:"A password and a security question are both Type 1 'something you know,' so together they are single-factor, not MFA. True MFA requires two DIFFERENT factor types; question length is irrelevant." },
      { label:"Which pairing IS genuine MFA?", hint:"Two different types.", options:["Password + smartphone push (have)","PIN + password","Two different passwords"], answer:0, explain:"A password (know) plus a smartphone push (have) combines two different factor types — genuine MFA. PIN+password and two passwords are both 'know,' so they remain single-factor." },
      { label:"Impossible-travel geofencing (login from two continents in 5 min) uses", hint:"Where you are.", options:["Something you are","Somewhere you are (location factor / context)","Something you have"], answer:1, explain:"Geofencing/impossible-travel checks use the 'somewhere you are' location context. It is not a biometric (are) or a possessed token (have)." }
    ],
    summary:"Token = have, fingerprint = are, and combining two of the SAME type (password + question) is still single-factor; real MFA mixes different types (password + push). Location adds a 'somewhere you are' context factor."
  },
  {
    id:"PBQ-21", format:4, domain:5, obj:"5.4",
    title:"Pick the Federation / SSO Technology",
    brief:"An identity architect must choose the right federation or SSO protocol for each use case. Match the technology to what it actually does.",
    exhibit:"<span class='cy'>PROTOCOLS</span>\nSAML 2.0 .. XML assertions, enterprise web SSO\nOIDC ...... identity layer on OAuth 2.0 (ID token/JWT)\nOAuth 2.0 . delegated AUTHORIZATION (access, not identity)\nKerberos .. ticket-based SSO inside a domain (AD)\n",
    exhibitTitle:"Protocol selection",
    fields:[
      { label:"Enterprise web SSO to a SaaS app using XML assertions", hint:"Classic enterprise federation.", options:["SAML 2.0","Kerberos","OAuth 2.0"], answer:0, explain:"SAML 2.0 exchanges XML assertions for enterprise web SSO to SaaS apps. Kerberos is for intra-domain SSO, and OAuth 2.0 handles delegated authorization, not federated web-SSO assertions." },
      { label:"Modern mobile app needs USER IDENTITY on top of OAuth", hint:"Identity layer, ID token/JWT.", options:["OIDC (OpenID Connect)","SAML","Kerberos"], answer:0, explain:"OpenID Connect adds an identity layer (the ID token/JWT) on top of OAuth 2.0, ideal for modern app authentication. Plain SAML is heavier/XML-based, and Kerberos is domain-bound." },
      { label:"App must access your Google photos on your behalf WITHOUT your password", hint:"Delegated authorization only.", options:["OAuth 2.0","OIDC identity token","Kerberos ticket"], answer:0, explain:"OAuth 2.0 delegates authorization (a scoped access token) so an app acts on your behalf without your credentials. OIDC would additionally assert who you are (not required here), and Kerberos does not apply to third-party web APIs." },
      { label:"Windows Active Directory single sign-on within the domain", hint:"Ticket-granting tickets.", options:["SAML","OAuth","Kerberos"], answer:2, explain:"Kerberos provides ticket-based SSO inside an AD domain using TGTs/service tickets. SAML and OAuth are web-federation/authorization protocols, not the native AD domain SSO mechanism." },
      { label:"Key distinction: OAuth 2.0 vs OIDC", hint:"Authorization vs authentication.", options:["They are identical","OAuth = authorization (access); OIDC adds authentication (identity)","OIDC replaced SAML entirely"], answer:1, explain:"OAuth 2.0 grants delegated authorization, while OIDC layers authentication (proving who the user is) on top. They are not identical, and OIDC has not universally replaced SAML in the enterprise." }
    ],
    summary:"SAML for enterprise XML web SSO, OIDC for modern identity on OAuth, OAuth 2.0 for delegated authorization without sharing credentials, and Kerberos for AD domain SSO — OAuth is authorization, OIDC adds authentication."
  },
  {
    id:"PBQ-22", format:4, domain:5, obj:"5.4",
    title:"Order the Identity Provisioning Lifecycle",
    brief:"An identity governance program must handle the full joiner-mover-leaver lifecycle. Choose the correct action at each stage.",
    exhibit:"<span class='cy'>IDENTITY LIFECYCLE</span>\nProvisioning -> access changes on role change -> periodic review -> deprovisioning\n<span class='dim'>Principles: least privilege, need-to-know, timely revocation.</span>",
    exhibitTitle:"Joiner-mover-leaver",
    fields:[
      { label:"New hire (joiner): what access should be granted?", hint:"Least privilege from day one.", options:["Full admin so they aren't blocked","Copy a random colleague's access","Only what the role requires (least privilege), often via a role template"], answer:2, explain:"Provision the minimum access the role requires (least privilege), ideally from a role/birthright template. Granting full admin over-provisions, and cloning a colleague propagates access creep and errors." },
      { label:"Employee transfers to a new department (mover)", hint:"Avoid accumulating old rights.", options:["Remove access no longer needed and grant the new role's access","Keep old access and add new (accumulate)","Do nothing until they complain"], answer:0, explain:"On transfer, revoke access the old role no longer needs and grant the new role's access to prevent privilege creep. Accumulating rights violates least privilege, and delaying leaves excess entitlements active." },
      { label:"Periodic control to catch access creep", hint:"Recertify entitlements.", options:["Access review / recertification (attestation)","One-time onboarding only","Password rotation alone"], answer:0, explain:"Regular access reviews/recertification have managers attest that entitlements are still warranted, catching creep. Onboarding is a one-time event, and password rotation does not validate what access a user holds." },
      { label:"Employee is terminated (leaver): priority action", hint:"Timeliness matters most.", options:["Deactivate/deprovision accounts promptly (ideally automated on HR trigger)","Wait 30 days in case they return","Just change their password later"], answer:0, explain:"Prompt (ideally automated) deprovisioning on the HR termination trigger closes the biggest insider-threat gap. Waiting or merely changing a password later leaves active pathways for a former employee." },
      { label:"Automating provisioning/deprovisioning from an authoritative HR source is called", hint:"HR as the source of truth.", options:["Manual ticketing","Identity lifecycle automation (HR-driven / SCIM provisioning)","Shadow IT"], answer:1, explain:"Driving accounts from an authoritative HR source (e.g., via SCIM/IGA) is identity lifecycle automation, ensuring timely, consistent changes. Manual ticketing is slow and error-prone, and shadow IT is unmanaged, unauthorized provisioning." }
    ],
    summary:"Provision least-privilege access for joiners, swap (not stack) entitlements for movers, recertify via periodic access reviews, and promptly deprovision leavers — best automated from an authoritative HR source (IGA/SCIM)."
  },
  {
    id:"PBQ-23", format:4, domain:5, obj:"5.4",
    title:"Least Privilege and Separation of Duties",
    brief:"Design access for a finance system so no one can commit fraud alone. Apply least privilege, separation of duties, and related controls.",
    exhibit:"<span class='cy'>FINANCE SYSTEM ROLES</span>\nRequester ... creates a payment request\nApprover .... approves the payment\nPayer ....... releases the funds\nAuditor ..... reviews the trail after the fact\n",
    exhibitTitle:"Payment workflow",
    fields:[
      { label:"Fundamental principle so one person can't both request AND approve a payment", hint:"Split a sensitive process across people.", options:["Separation of duties (SoD)","Least privilege","Single sign-on"], answer:0, explain:"Separation of duties splits a sensitive transaction so collusion is required for fraud — no single person can both request and approve. Least privilege limits scope but does not by itself split a workflow, and SSO is an authentication convenience, not a fraud control." },
      { label:"Grant each role only the permissions its task needs", hint:"Minimum necessary rights.", options:["Least privilege","Defense in depth","Implicit allow"], answer:0, explain:"Least privilege gives each role only the rights required for its function, shrinking the attack surface. Defense in depth is about layered controls, and implicit-allow is the opposite of least privilege." },
      { label:"A single super-user account can do all four steps. Fix?", hint:"Break the god account.", options:["Keep it for convenience","Split duties across separate accounts/roles and remove the all-in-one account","Share its password with the team"], answer:1, explain:"A single account able to perform every step defeats SoD; split the functions across distinct roles and eliminate the god account. Keeping it or sharing its password compounds the risk." },
      { label:"Control that rotates staff to expose collusion/fraud over time", hint:"Move people through duties.", options:["Job rotation","Mandatory vacation only","Implicit trust"], answer:0, explain:"Job rotation moves personnel through duties so long-running fraud is harder to conceal (mandatory vacation is a complementary detective control). Implicit trust is not a control at all." },
      { label:"The auditor's access should be", hint:"Verify without altering.", options:["Full write to payments","The same as the payer","Read-only to logs/records, with their own access logged"], answer:2, explain:"Auditors need read-only access to records/logs, with their own activity logged, so they verify integrity without the power to change it. Granting write or payer-equivalent rights would undermine the independence of the audit." }
    ],
    summary:"Split the request/approve/pay steps via separation of duties, give each role least privilege, remove any all-in-one super-user, add job rotation to surface collusion, and keep the auditor read-only with logged access."
  },
  {
    id:"PBQ-24", format:4, domain:5, obj:"5.4",
    title:"Identity Proofing and Session Management",
    brief:"Tune authentication and session controls for a public-facing app. Choose the correct action at each decision point.",
    exhibit:"<span class='cy'>SCENARIOS</span>\nA login shows anomalous risk (new device, odd geo)\nA privileged admin session sits idle\nUsers enroll a self-service password reset\nA federated login must confirm 'who the user is'\n",
    exhibitTitle:"AuthN & session controls",
    fields:[
      { label:"Anomalous, high-risk login (new device + odd location)", hint:"Adjust assurance to the risk.", options:["Allow silently","Step-up / adaptive (risk-based) authentication — prompt for MFA","Block all logins forever"], answer:1, explain:"Risk-based (adaptive) authentication raises assurance — e.g., a step-up MFA prompt — when signals look risky, without punishing normal logins. Allowing silently ignores the risk, and permanently blocking everyone destroys availability." },
      { label:"Idle privileged session control", hint:"Limit exposure of an unattended session.", options:["No timeout — keep admins logged in","Automatic session timeout / re-authentication after inactivity","One eternal token"], answer:1, explain:"Idle sessions, especially privileged ones, should time out and require re-authentication to limit hijack/unattended-console exposure. Eternal sessions/tokens leave a standing window for abuse." },
      { label:"Weakness of knowledge-based self-service reset (secret questions)", hint:"Answers are often discoverable.", options:["It is unbreakable","KBA answers are often guessable/OSINT-discoverable; prefer verified MFA-based reset","It requires no user input"], answer:1, explain:"Knowledge-based answers (mother's maiden name, first pet) are frequently found via OSINT/social engineering, so a verified MFA-based reset is stronger. KBA is far from unbreakable and still requires user input." },
      { label:"Federated login must assert IDENTITY (who the user is)", hint:"Authentication assertion, not just access.", options:["OAuth access token alone","A firewall rule","An OIDC ID token / SAML authentication assertion"], answer:2, explain:"Proving who the user is requires an authentication assertion — an OIDC ID token or SAML assertion. An OAuth access token conveys authorization (scope), not verified identity, and a firewall rule is unrelated." },
      { label:"Best practice for storing user passwords at rest", hint:"Slow, salted one-way hashing.", options:["Reversible encryption","Salted, slow one-way hashing (bcrypt/scrypt/Argon2)","Plaintext for easy reset"], answer:1, explain:"Store passwords as salted hashes using a slow, memory-hard algorithm (bcrypt/scrypt/Argon2) so leaks resist cracking. Reversible encryption risks key compromise exposing all passwords, and plaintext is an immediate breach." }
    ],
    summary:"Use risk-based step-up MFA for anomalous logins, time out idle privileged sessions, prefer MFA-verified resets over guessable KBA, assert identity with an OIDC/SAML token (not a bare OAuth token), and store passwords as salted slow hashes."
  },

  /* ============================================================
     FORMAT 5 — INCIDENT RESPONSE & OPERATIONS (domain 7, obj 7.6)  PBQ-25..30
     ============================================================ */
  {
    id:"PBQ-25", format:5, domain:7, obj:"7.6",
    title:"Sequence the Incident-Response Phases",
    brief:"A ransomware alert has fired. Put the incident-response phases in the correct order and choose the right action for each.",
    exhibit:"<span class='cy'>IR PHASES (ISC2 order)</span>\nDetection -> Response -> Mitigation -> Reporting -> Recovery -> Remediation -> Lessons Learned\n<span class='dim'>An EDR alert flags encryption activity spreading across hosts.</span>",
    exhibitTitle:"IR playbook",
    fields:[
      { label:"First phase when the EDR alert fires", hint:"Recognize and validate the event.", options:["Recovery","Detection (identify/validate the incident)","Lessons learned"], answer:1, explain:"The lifecycle begins with detection — recognizing and validating that an incident is occurring. Recovery and lessons learned are late-stage phases that cannot precede detection." },
      { label:"Immediately after confirming the incident (Response), the priority is to", hint:"Stop the spread.", options:["Contain/isolate affected hosts to limit spread","Wipe everything at once","Publish a press release"], answer:0, explain:"During response/mitigation the priority is containment — isolating affected hosts to stop lateral spread before more damage occurs. Mass wiping destroys evidence and may be premature, and external comms come later under a defined reporting process." },
      { label:"Restoring clean systems from known-good backups belongs to", hint:"Return to operation.", options:["Detection","Deterrence","Recovery"], answer:2, explain:"Rebuilding/restoring from known-good backups is the recovery phase, returning systems to normal operation. Detection identifies the incident, and 'deterrence' is a control type, not an IR phase." },
      { label:"Eradicating the root cause (patch the entry vector, remove persistence) is", hint:"Fix why it happened.", options:["Remediation","Reporting","Detection"], answer:0, explain:"Remediation eradicates the root cause — closing the exploited vulnerability and removing persistence — so it cannot recur. Reporting notifies stakeholders, and detection is the opening phase." },
      { label:"Final phase that feeds improvements back into the program", hint:"Post-incident review.", options:["Detection","Lessons learned (post-incident review)","Mitigation"], answer:1, explain:"The lessons-learned phase reviews the response and feeds improvements back into controls and the playbook. Detection and mitigation are earlier operational phases, not the closing review." }
    ],
    summary:"Follow the order Detection -> Response -> Mitigation (contain) -> Reporting -> Recovery (restore from clean backups) -> Remediation (eradicate root cause) -> Lessons Learned, which feeds improvements back into the program."
  },
  {
    id:"PBQ-26", format:5, domain:7, obj:"7.6",
    title:"Preserve Digital Evidence Correctly",
    brief:"An incident may lead to prosecution. Handle the evidence so it remains admissible. Choose the correct forensic action at each step.",
    exhibit:"<span class='cy'>EVIDENCE HANDLING</span>\nOrder of volatility: CPU/cache -> RAM -> network state -> disk -> backups/archives\nGoals: admissibility, integrity, unbroken chain of custody\n",
    exhibitTitle:"Forensic procedure",
    fields:[
      { label:"On a live compromised host, collect evidence in what order?", hint:"Most volatile first.", options:["Disk image first, then RAM","Most volatile first (RAM/memory) before powering down","Whatever is easiest"], answer:1, explain:"Follow the order of volatility — capture the most volatile data (RAM, running state) before it is lost at shutdown, then disk. Imaging disk first (or an arbitrary order) loses volatile artifacts like keys and live connections." },
      { label:"Documenting who handled the evidence, when, and why is called", hint:"An unbroken custody record.", options:["Chain of custody","Order of volatility","Data classification"], answer:0, explain:"Chain of custody is the documented, unbroken record of everyone who handled the evidence and every transfer, essential for admissibility. Order of volatility governs collection sequence, and classification labels data sensitivity — neither tracks custody." },
      { label:"To prove the evidence image was not altered, you", hint:"Cryptographic fingerprint.", options:["Trust that no one changed it","Hash the image (and re-verify the hash matches later)","Encrypt it and lose the key"], answer:1, explain:"Computing a cryptographic hash at acquisition and re-verifying it later proves the image is unaltered (integrity). Merely trusting it provides no proof, and losing an encryption key would make the evidence unusable." },
      { label:"To analyze the disk without altering the original, use", hint:"Prevent writes to the source.", options:["The live original drive directly","Any spare laptop, editing freely","A write-blocker and work on a verified forensic copy"], answer:2, explain:"A hardware/software write-blocker prevents changes to the source, and analysis is performed on a hash-verified forensic copy. Working on the original or editing freely alters evidence and destroys admissibility." },
      { label:"Overarching goal these steps support", hint:"Usable in court.", options:["Faster reboots","Admissibility / evidentiary integrity in court","Marketing metrics"], answer:1, explain:"Volatility order, chain of custody, hashing, and write-blocking all serve admissibility — keeping evidence legally usable and its integrity provable. They are unrelated to reboot speed or marketing." }
    ],
    summary:"Collect most-volatile-first, maintain an unbroken chain of custody, hash images to prove integrity, and use a write-blocker on a verified forensic copy — all to preserve admissibility in court."
  },
  {
    id:"PBQ-27", format:5, domain:7, obj:"7.6",
    title:"Choose the Right Recovery Objective",
    brief:"A BCP/DR plan must set the correct recovery metric for each requirement. Match the business need to RTO, RPO, MTD, or WRT.",
    exhibit:"<span class='cy'>RECOVERY METRICS</span>\nRPO .. max acceptable DATA loss (time back to last good copy)\nRTO .. target time to RESTORE service after outage\nMTD .. max tolerable downtime before unacceptable harm\nWRT .. work-recovery time to verify/validate after restore\n<span class='dim'>Note: RTO + WRT must fit within the MTD.</span>",
    exhibitTitle:"BCP/DR objectives",
    fields:[
      { label:"'We can lose at most 15 minutes of transactions.' Which metric?", hint:"Acceptable data loss.", options:["RTO","RPO (recovery point objective)","MTD"], answer:1, explain:"RPO caps acceptable data loss — 15 minutes drives backup/replication frequency. RTO is about restore time, and MTD is total tolerable downtime, not data-loss tolerance." },
      { label:"'Service must be back within 4 hours of an outage.' Which metric?", hint:"Time to restore.", options:["RTO (recovery time objective)","RPO","WRT"], answer:0, explain:"RTO is the target time to restore the service after an outage. RPO measures data loss, and WRT is the post-restore validation window, not the restore target itself." },
      { label:"'Beyond 24 hours down, the business fails.' Which metric?", hint:"Absolute downtime ceiling.", options:["MTD (maximum tolerable downtime)","RPO","WRT"], answer:0, explain:"MTD is the maximum tolerable downtime before unacceptable/existential harm — the hard ceiling RTO+WRT must fit under. RPO is data loss, and WRT is only the validation portion." },
      { label:"Time to validate/verify data and resume normal work after restore", hint:"Post-restore verification.", options:["RPO","MTD","WRT (work recovery time)"], answer:2, explain:"WRT covers verifying integrity and resuming normal operations after the technical restore. RPO addresses data loss, and MTD is the overall downtime ceiling." },
      { label:"Correct relationship among the metrics", hint:"They must fit together.", options:["RTO + WRT must be <= MTD","RPO must equal RTO","MTD is always the smallest"], answer:0, explain:"Recovery must fit the ceiling: RTO + WRT must be less than or equal to the MTD, or the business suffers unacceptable harm. RPO and RTO measure different things (not equal), and MTD is the largest bound, not the smallest." }
    ],
    summary:"RPO = tolerable data loss, RTO = time to restore, MTD = maximum tolerable downtime, WRT = post-restore validation time — and RTO + WRT must fit within the MTD."
  },
  {
    id:"PBQ-28", format:5, domain:7, obj:"7.6",
    title:"Select the Right Recovery Site",
    brief:"DR planning must match a recovery-site strategy to each requirement, balancing recovery speed against cost.",
    exhibit:"<span class='cy'>RECOVERY SITE OPTIONS</span>\nHot site .... fully equipped, near-real-time; fastest, costliest\nWarm site ... hardware ready, data must be loaded; moderate\nCold site ... space/power only; cheapest, slowest\nCloud/DRaaS  on-demand recovery, pay-as-you-go\n",
    exhibitTitle:"Site strategy",
    fields:[
      { label:"A very low RTO (minutes) for a critical trading system needs", hint:"Fastest failover.", options:["Cold site","Hot site","No DR at all"], answer:1, explain:"A near-zero RTO demands a hot site with systems live and data current for near-immediate failover. A cold site takes days to stand up, and having no DR fails the requirement outright." },
      { label:"A tight budget with an acceptable RTO of several days suits", hint:"Cheapest, slowest.", options:["Hot site","Cold site","Two hot sites"], answer:1, explain:"When days of downtime are tolerable and cost is the driver, a cold site (space/power only) is the economical fit. A hot site (or two) is far costlier than a multi-day RTO warrants." },
      { label:"Middle ground: hardware pre-staged but data restored at failover", hint:"Between hot and cold.", options:["Cold site","Warm site","Mirror site only"], answer:1, explain:"A warm site has hardware and connectivity ready, needing only recent data loaded — a balanced cost/speed option. A cold site lacks the pre-staged hardware, and a full mirror is effectively a hot site." },
      { label:"Why must DR plans be tested regularly?", hint:"Untested plans fail when needed.", options:["Testing is optional paperwork","Untested plans fail in a real disaster; testing validates RTO/RPO and finds gaps","Testing guarantees zero downtime"], answer:1, explain:"Regular tests (tabletop, parallel, full-interruption) validate that the plan actually meets RTO/RPO and surface gaps before a real event. Testing is not optional, and it improves — but never guarantees — outcomes." },
      { label:"A key advantage of cloud/DRaaS recovery", hint:"Elastic, pay-as-you-go.", options:["It removes the need for any plan","On-demand, elastic capacity billed as used, avoiding an idle second data center","It is always the cheapest for every workload"], answer:1, explain:"Cloud/DRaaS offers elastic, pay-as-you-go recovery capacity without maintaining an idle physical site. It still requires a tested plan, and it is not universally the cheapest for every workload/data-egress profile." }
    ],
    summary:"Match the site to the RTO/budget: hot site for near-instant recovery, cold site for cheap multi-day recovery, warm site for the middle ground, and cloud/DRaaS for elastic pay-as-you-go — and always test the plan."
  },
  {
    id:"PBQ-29", format:5, domain:7, obj:"7.6",
    title:"Operational Controls for Insider Risk",
    brief:"Security operations must reduce insider fraud and error. Match each operational control to what it accomplishes.",
    exhibit:"<span class='cy'>OPERATIONAL CONTROLS</span>\nLeast privilege .... minimum access needed for the job\nSeparation of duties  split sensitive tasks across people\nJob rotation ....... rotate staff through roles\nMandatory vacation . force time off to surface hidden fraud\n",
    exhibitTitle:"Ops control catalog",
    fields:[
      { label:"Ensure no single admin can both create and approve a change", hint:"Split the sensitive process.", options:["Least privilege","Separation of duties","Single sign-on"], answer:1, explain:"Separation of duties splits a sensitive process so collusion is needed to abuse it — no one person creates and approves. Least privilege limits scope but does not split the workflow, and SSO is an authentication convenience." },
      { label:"Give a service account only the exact rights its task needs", hint:"Minimum necessary access.", options:["Least privilege","Job rotation","Mandatory vacation"], answer:0, explain:"Least privilege grants only the access a task requires, shrinking the blast radius if the account is abused. Rotation and mandatory vacation are personnel controls, not scoping of an account's rights." },
      { label:"Detect long-running fraud by forcing staff to take leave", hint:"Someone else covers the role.", options:["Mandatory vacation","Least privilege","Implicit trust"], answer:0, explain:"Mandatory vacation forces a break so a substitute may notice concealed fraud that requires the perpetrator's continuous presence. Least privilege limits access but does not surface ongoing schemes, and implicit trust is not a control." },
      { label:"Rotating employees through duties over time helps by", hint:"Cross-check and reduce reliance on one person.", options:["Making collusion/fraud harder to sustain and reducing single-person dependence","Increasing single points of failure","Granting everyone admin"], answer:0, explain:"Job rotation makes sustained fraud harder to hide and reduces dependence on any single individual (also aiding cross-training). It reduces, not increases, single points of failure and has nothing to do with granting admin." },
      { label:"Applying overlapping controls (SoD + least privilege + monitoring) is", hint:"Layered protection.", options:["Defense in depth","A single point of failure","Security through obscurity"], answer:0, explain:"Layering multiple, overlapping controls is defense in depth, so one control's failure does not collapse security. It is the opposite of a single point of failure, and it is not mere obscurity." }
    ],
    summary:"Use separation of duties to split sensitive tasks, least privilege to scope access, mandatory vacation and job rotation to surface hidden fraud and reduce single-person dependence — layered together as defense in depth."
  },
  {
    id:"PBQ-30", format:5, domain:7, obj:"7.6",
    title:"Detection, Logging, and Breach Reporting",
    brief:"A security operations center must run detection and reporting correctly. Choose the right tool or action for each requirement.",
    exhibit:"<span class='cy'>SOC CAPABILITIES</span>\nSIEM ..... central log aggregation, correlation, alerting\nIDS ...... detects intrusions (alerts only)\nIPS ...... detects AND blocks inline\nSOAR ..... automated playbook response/orchestration\n",
    exhibitTitle:"SOC tooling & duties",
    fields:[
      { label:"Aggregate and correlate logs from many sources to spot patterns", hint:"Central correlation engine.", options:["A single host's local log","SIEM (correlation across sources)","A printed checklist"], answer:1, explain:"A SIEM centralizes and correlates logs across systems to surface patterns a single log cannot reveal. One host's local log lacks cross-source context, and a checklist does no correlation." },
      { label:"Difference between IDS and IPS", hint:"Alert vs block.", options:["They are identical","IDS only alerts; IPS can block malicious traffic inline","IPS only alerts, IDS blocks"], answer:1, explain:"An IDS detects and alerts, while an IPS sits inline and can actively block malicious traffic. They are not identical, and the roles are not reversed — IPS is the one that blocks." },
      { label:"Automate a repeatable containment playbook (e.g., isolate host, open ticket)", hint:"Orchestrate the response.", options:["SOAR (security orchestration & automated response)","A manual phone tree","Disabling all logging"], answer:0, explain:"SOAR executes automated, orchestrated playbooks to speed and standardize response. A manual phone tree is slow and inconsistent, and disabling logging would blind the SOC." },
      { label:"After confirming a breach of regulated personal data, you must", hint:"Legal/regulatory duty.", options:["Keep it secret to avoid embarrassment","Delete the logs","Report/notify per legal and regulatory timelines (e.g., regulators, affected individuals)"], answer:2, explain:"Confirmed breaches of regulated personal data trigger mandatory notification to regulators and affected individuals within legal timelines. Concealment violates the law, and deleting logs destroys evidence and compounds liability." },
      { label:"Protect log integrity so an attacker can't erase their tracks", hint:"Tamper-evident storage.", options:["Store logs only on the compromised host","Forward to a secure, append-only/immutable central log store","Turn logging off during incidents"], answer:1, explain:"Forwarding logs to a secure, append-only/immutable store (e.g., a hardened SIEM) preserves them even if a host is compromised. Keeping logs only on the victim host lets attackers wipe them, and disabling logging removes the audit trail entirely." }
    ],
    summary:"Use a SIEM to correlate logs, know IDS alerts while IPS blocks inline, apply SOAR to automate containment, meet mandatory breach-notification timelines for regulated data, and forward logs to an immutable central store to protect their integrity."
  }

);
