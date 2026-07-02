/* CISSP :: content/labs.js — CISSP hands-on sandbox labs (20). */
window.LABS = [
  {
    "id": "Lab 01",
    "num": 1,
    "group": "SECURITY & RISK MGMT",
    "title": "Quantitative Risk Assessment",
    "desc": "Work a quantitative risk scenario end to end using the ALE formula. You compute SLE from asset value and exposure factor, derive ALE from ARO, then justify a safeguard against its annualized cost using the risk engine.",
    "objectives": [
      "Calculate Single Loss Expectancy (SLE = Asset Value × Exposure Factor).",
      "Derive Annualized Loss Expectancy (ALE = SLE × ARO).",
      "Justify a safeguard when its annual cost is below the ALE reduction."
    ],
    "console": {
      "host": "cissp-lab01",
      "boot": [
        "[SYS] Quantitative risk sandbox online.",
        "[SYS] Asset loaded: customer database, value $2,000,000."
      ],
      "tasks": [
        { "id": "t1", "label": "Compute SLE for a 25% exposure factor event" },
        { "id": "t2", "label": "Compute ALE given an ARO of 0.5" },
        { "id": "t3", "label": "Run the safeguard cost-benefit analysis" },
        { "id": "t4", "label": "Show the risk register entry" }
      ],
      "configs": [
        {
          "id": "c1",
          "label": "SLE for a $2,000,000 asset at 25% exposure factor",
          "options": ["$2,000,000", "$500,000", "$250,000", "$125,000"],
          "correct": "$500,000",
          "task": "t1"
        },
        {
          "id": "c2",
          "label": "ALE when SLE is $500,000 and ARO is 0.5",
          "options": ["$1,000,000", "$500,000", "$250,000", "$50,000"],
          "correct": "$250,000",
          "task": "t2"
        }
      ],
      "payload": {
        "label": "RUN SAFEGUARD COST-BENEFIT",
        "placeholder": "analyze safeguard --annual-cost 120000",
        "button": "Run",
        "response": "[OUT] ALE before control: $250,000/yr.\n[OUT] ALE after control: $50,000/yr; safeguard cost $120,000/yr.\n[OUT] Net benefit +$80,000/yr: safeguard is cost-justified.",
        "task": "t3"
      },
      "commands": [
        {
          "cmd": "show register",
          "out": "[RISK] asset: customer database ($2M)\n[RISK] SLE $500,000 | ARO 0.5 | ALE $250,000\n[RISK] treatment: mitigate (control cost-justified)",
          "task": "t4"
        },
        { "cmd": "show status", "out": "Risk engine nominal." }
      ]
    }
  },
  {
    "id": "Lab 02",
    "num": 2,
    "group": "SECURITY & RISK MGMT",
    "title": "Categorizing Security Controls",
    "desc": "Sort proposed controls by both functional type and implementation category the way an assessor documents them. You classify a deterrent versus corrective control, tag an administrative control, then confirm the mapping against the control catalog.",
    "objectives": [
      "Distinguish preventive, detective, corrective, deterrent, and compensating control functions.",
      "Categorize controls as administrative, technical, or physical.",
      "Map layered controls into a defense-in-depth catalog."
    ],
    "console": {
      "host": "cissp-lab02",
      "boot": [
        "[SYS] Control categorization sandbox online.",
        "[SYS] Candidate controls staged: 6."
      ],
      "tasks": [
        { "id": "t1", "label": "Classify a warning banner by control function" },
        { "id": "t2", "label": "Classify a security-awareness policy by category" },
        { "id": "t3", "label": "Validate a backup as a corrective control" },
        { "id": "t4", "label": "List the control catalog entries" }
      ],
      "configs": [
        {
          "id": "c1",
          "label": "Functional type of a login warning banner",
          "options": ["Preventive", "Deterrent", "Corrective", "Compensating"],
          "correct": "Deterrent",
          "task": "t1"
        },
        {
          "id": "c2",
          "label": "Category of a written security-awareness policy",
          "options": ["Technical", "Physical", "Administrative", "Compensating"],
          "correct": "Administrative",
          "task": "t2"
        }
      ],
      "payload": {
        "label": "VALIDATE BACKUP CONTROL",
        "placeholder": "classify nightly-backup",
        "button": "Run",
        "response": "[OUT] Nightly backup restores data after an incident.\n[OUT] Function classified as Corrective (technical).\n[OUT] Supports recovery objective; mapping valid.",
        "task": "t3"
      },
      "commands": [
        {
          "cmd": "list controls",
          "out": "[CTL] warning banner -> deterrent (administrative)\n[CTL] firewall -> preventive (technical)\n[CTL] IDS -> detective (technical)\n[CTL] backup -> corrective (technical)\n[CTL] guard -> preventive (physical)",
          "task": "t4"
        },
        { "cmd": "show status", "out": "Control catalog nominal." }
      ]
    }
  },
  {
    "id": "Lab 03",
    "num": 3,
    "group": "SECURITY & RISK MGMT",
    "title": "BIA: Setting RTO and RPO",
    "desc": "Run a business impact analysis for a payment service and set recovery targets that the business can defend. You identify the maximum tolerable downtime, choose an RPO from a data-loss tolerance, then validate the recovery strategy against the BIA engine.",
    "objectives": [
      "Distinguish MTD, RTO, and RPO in a business impact analysis.",
      "Set an RPO from the maximum acceptable data loss.",
      "Confirm the recovery strategy meets the RTO within the MTD."
    ],
    "console": {
      "host": "cissp-lab03",
      "boot": [
        "[SYS] Business impact analysis console online.",
        "[SYS] Critical process loaded: payment authorization."
      ],
      "tasks": [
        { "id": "t1", "label": "Identify the metric bounding total tolerable downtime" },
        { "id": "t2", "label": "Set the RPO for a 15-minute data-loss tolerance" },
        { "id": "t3", "label": "Validate the recovery strategy against the RTO" },
        { "id": "t4", "label": "Show the BIA summary" }
      ],
      "configs": [
        {
          "id": "c1",
          "label": "Metric defining the total time a process can be down",
          "options": ["RPO", "MTD", "ARO", "SLE"],
          "correct": "MTD",
          "task": "t1"
        },
        {
          "id": "c2",
          "label": "RPO when at most 15 minutes of data loss is acceptable",
          "options": ["24 hours", "4 hours", "1 hour", "15 minutes"],
          "correct": "15 minutes",
          "task": "t2"
        }
      ],
      "payload": {
        "label": "VALIDATE RECOVERY STRATEGY",
        "placeholder": "validate strategy --rto 2h --mtd 4h",
        "button": "Run",
        "response": "[OUT] Warm site restores service in ~2h (RTO met).\n[OUT] RTO 2h is within MTD 4h.\n[OUT] Replication every 15 min satisfies the RPO.",
        "task": "t3"
      },
      "commands": [
        {
          "cmd": "show bia",
          "out": "[BIA] process: payment authorization (critical)\n[BIA] MTD 4h | RTO 2h | RPO 15m\n[BIA] strategy: warm site + 15-min replication",
          "task": "t4"
        },
        { "cmd": "show status", "out": "BIA console nominal." }
      ]
    }
  },
  {
    "id": "Lab 04",
    "num": 4,
    "group": "ASSET SECURITY",
    "title": "Data Classification and Labeling",
    "desc": "Classify assets against a corporate scheme and apply the label that drives handling requirements. You assign classifications to a trade secret and a public brochure, apply a label, then confirm handling rules against the classification engine.",
    "objectives": [
      "Assign classification levels based on impact of disclosure.",
      "Apply labels that map to required handling controls.",
      "Confirm handling and marking against a classification policy."
    ],
    "console": {
      "host": "cissp-lab04",
      "boot": [
        "[SYS] Data classification console online.",
        "[SYS] Scheme: Public / Internal / Confidential / Restricted."
      ],
      "tasks": [
        { "id": "t1", "label": "Classify a proprietary product formula" },
        { "id": "t2", "label": "Classify a public marketing brochure" },
        { "id": "t3", "label": "Apply the label and handling policy" },
        { "id": "t4", "label": "Show the classification matrix" }
      ],
      "configs": [
        {
          "id": "c1",
          "label": "Classification for a proprietary trade-secret formula",
          "options": ["Public", "Internal", "Confidential", "Restricted"],
          "correct": "Restricted",
          "task": "t1"
        },
        {
          "id": "c2",
          "label": "Classification for a brochure intended for the public",
          "options": ["Public", "Internal", "Confidential", "Restricted"],
          "correct": "Public",
          "task": "t2"
        }
      ],
      "payload": {
        "label": "APPLY LABEL AND HANDLING",
        "placeholder": "label formula.doc --level Restricted",
        "button": "Run",
        "response": "[OUT] Asset labeled RESTRICTED.\n[OUT] Handling: encrypt at rest and in transit, need-to-know only.\n[OUT] Print/copy restricted; retention policy bound.",
        "task": "t3"
      },
      "commands": [
        {
          "cmd": "show matrix",
          "out": "[CLASS] Public -> no restrictions\n[CLASS] Internal -> employees only\n[CLASS] Confidential -> encrypt, need-to-know\n[CLASS] Restricted -> encrypt + strict need-to-know + audit",
          "task": "t4"
        },
        { "cmd": "show status", "out": "Classification engine nominal." }
      ]
    }
  },
  {
    "id": "Lab 05",
    "num": 5,
    "group": "ASSET SECURITY",
    "title": "Media Sanitization Decision",
    "desc": "Choose the right sanitization method for each medium and disposition using the NIST SP 800-88 model. You select a method for reusable versus retired media, execute a purge, then confirm the sanitization record.",
    "objectives": [
      "Distinguish clear, purge, and destroy per NIST SP 800-88.",
      "Match a sanitization method to the medium and reuse intent.",
      "Produce a defensible sanitization and disposal record."
    ],
    "console": {
      "host": "cissp-lab05",
      "boot": [
        "[SYS] Media sanitization console online.",
        "[SYS] Standard loaded: NIST SP 800-88 Rev.1."
      ],
      "tasks": [
        { "id": "t1", "label": "Pick the method for an SSD leaving the organization" },
        { "id": "t2", "label": "Pick the method for a drive reused internally" },
        { "id": "t3", "label": "Execute sanitization on a decommissioned drive" },
        { "id": "t4", "label": "Show the sanitization decision guide" }
      ],
      "configs": [
        {
          "id": "c1",
          "label": "Method for an SSD that must be destroyed before disposal offsite",
          "options": ["Clear", "Purge", "Destroy", "Reformat"],
          "correct": "Destroy",
          "task": "t1"
        },
        {
          "id": "c2",
          "label": "Method to sanitize a drive staying in-house for reuse at the same level",
          "options": ["Destroy", "Clear", "Degauss", "Encrypt only"],
          "correct": "Clear",
          "task": "t2"
        }
      ],
      "payload": {
        "label": "EXECUTE SANITIZATION",
        "placeholder": "sanitize disk07 --method purge",
        "button": "Run",
        "response": "[OUT] Cryptographic erase issued to disk07 (purge).\n[OUT] Verification pass: no recoverable data.\n[OUT] Certificate of sanitization generated.",
        "task": "t3"
      },
      "commands": [
        {
          "cmd": "show guide",
          "out": "[SAN] Clear -> overwrite, reuse in-house\n[SAN] Purge -> crypto-erase/degauss, reuse across levels\n[SAN] Destroy -> shred/incinerate, disposal offsite\n[SAN] always: verify + document",
          "task": "t4"
        },
        { "cmd": "show status", "out": "Sanitization console nominal." }
      ]
    }
  },
  {
    "id": "Lab 06",
    "num": 6,
    "group": "SECURITY ARCHITECTURE",
    "title": "Applying Security Model Rules",
    "desc": "Enforce access decisions using formal security models. You apply Bell-LaPadula for confidentiality and Biba for integrity, test a write request, then confirm the ruling against the model engine.",
    "objectives": [
      "Apply Bell-LaPadula (no read up, no write down) for confidentiality.",
      "Apply Biba (no write up, no read down) for integrity.",
      "Rule on an access request against the enforced model."
    ],
    "console": {
      "host": "cissp-lab06",
      "boot": [
        "[SYS] Security model engine online.",
        "[SYS] Subject: analyst at CONFIDENTIAL clearance."
      ],
      "tasks": [
        { "id": "t1", "label": "Apply the Bell-LaPadula rule blocking read-up" },
        { "id": "t2", "label": "Apply the Biba rule blocking write-up" },
        { "id": "t3", "label": "Evaluate a write-down request under Bell-LaPadula" },
        { "id": "t4", "label": "Show the model rule reference" }
      ],
      "configs": [
        {
          "id": "c1",
          "label": "Bell-LaPadula property that forbids reading higher classifications",
          "options": ["Simple Security Property (no read up)", "Star Property (no write down)", "Simple Integrity (no read down)", "Star Integrity (no write up)"],
          "correct": "Simple Security Property (no read up)",
          "task": "t1"
        },
        {
          "id": "c2",
          "label": "Biba property that forbids writing to higher integrity",
          "options": ["Simple Integrity (no read down)", "Star Integrity (no write up)", "Simple Security (no read up)", "Star Security (no write down)"],
          "correct": "Star Integrity (no write up)",
          "task": "t2"
        }
      ],
      "payload": {
        "label": "EVALUATE ACCESS REQUEST",
        "placeholder": "evaluate write --from CONFIDENTIAL --to PUBLIC",
        "button": "Run",
        "response": "[OUT] Request: CONFIDENTIAL subject writes to PUBLIC object.\n[OUT] Bell-LaPadula Star Property: no write down.\n[OUT] Write DENIED (would leak confidential data downward).",
        "task": "t3"
      },
      "commands": [
        {
          "cmd": "show models",
          "out": "[MOD] Bell-LaPadula (confidentiality): no read up, no write down\n[MOD] Biba (integrity): no read down, no write up\n[MOD] Clark-Wilson: well-formed transactions + separation of duties",
          "task": "t4"
        },
        { "cmd": "show status", "out": "Model engine nominal." }
      ]
    }
  },
  {
    "id": "Lab 07",
    "num": 7,
    "group": "SECURITY ARCHITECTURE",
    "title": "Selecting a Cryptographic Solution",
    "desc": "Choose cryptographic primitives that satisfy stated security goals. You pick an algorithm for bulk confidentiality and one for non-repudiation, deploy a key exchange, then confirm the choices against the crypto catalog.",
    "objectives": [
      "Select symmetric encryption for bulk data confidentiality.",
      "Select asymmetric signing for non-repudiation and integrity.",
      "Choose a secure key-exchange mechanism for a session."
    ],
    "console": {
      "host": "cissp-lab07",
      "boot": [
        "[SYS] Cryptographic solution lab online.",
        "[SYS] Requirement: protect data at rest and prove sender identity."
      ],
      "tasks": [
        { "id": "t1", "label": "Pick the cipher for fast bulk data encryption" },
        { "id": "t2", "label": "Pick the mechanism providing non-repudiation" },
        { "id": "t3", "label": "Deploy a secure session key exchange" },
        { "id": "t4", "label": "Show the algorithm catalog" }
      ],
      "configs": [
        {
          "id": "c1",
          "label": "Algorithm best for encrypting large volumes at rest",
          "options": ["RSA-2048", "AES-256", "SHA-256", "Diffie-Hellman"],
          "correct": "AES-256",
          "task": "t1"
        },
        {
          "id": "c2",
          "label": "Mechanism that provides non-repudiation of a message",
          "options": ["Symmetric encryption", "Digital signature", "HMAC with a shared key", "Base64 encoding"],
          "correct": "Digital signature",
          "task": "t2"
        }
      ],
      "payload": {
        "label": "DEPLOY KEY EXCHANGE",
        "placeholder": "deploy exchange --method ECDHE",
        "button": "Run",
        "response": "[OUT] Ephemeral ECDHE key agreement negotiated.\n[OUT] Perfect forward secrecy enabled for the session.\n[OUT] Symmetric session key derived; RSA used only to authenticate.",
        "task": "t3"
      },
      "commands": [
        {
          "cmd": "show crypto",
          "out": "[CRY] AES-256 -> symmetric, confidentiality (bulk)\n[CRY] RSA/ECDSA -> asymmetric, signatures + non-repudiation\n[CRY] SHA-256 -> hashing, integrity\n[CRY] ECDHE -> key exchange with forward secrecy",
          "task": "t4"
        },
        { "cmd": "show status", "out": "Crypto catalog nominal." }
      ]
    }
  },
  {
    "id": "Lab 08",
    "num": 8,
    "group": "SECURITY ARCHITECTURE",
    "title": "Designing a Firewall DMZ",
    "desc": "Place hosts and rules in a segmented network so public services stay isolated from internal systems. You decide where a public web server belongs and how internal-to-DMZ traffic is controlled, deploy the ruleset, then confirm the zone map.",
    "objectives": [
      "Place internet-facing services in a screened subnet (DMZ).",
      "Restrict traffic between DMZ, internal, and external zones.",
      "Validate a firewall ruleset against a defense-in-depth design."
    ],
    "console": {
      "host": "cissp-lab08",
      "boot": [
        "[SYS] Network segmentation lab online.",
        "[SYS] Zones defined: external, DMZ, internal."
      ],
      "tasks": [
        { "id": "t1", "label": "Choose the zone for a public web server" },
        { "id": "t2", "label": "Choose the rule for internet-to-internal traffic" },
        { "id": "t3", "label": "Deploy the segmentation ruleset" },
        { "id": "t4", "label": "Show the zone and rule map" }
      ],
      "configs": [
        {
          "id": "c1",
          "label": "Zone for a public-facing web server",
          "options": ["Internal LAN", "DMZ (screened subnet)", "External internet", "Management VLAN"],
          "correct": "DMZ (screened subnet)",
          "task": "t1"
        },
        {
          "id": "c2",
          "label": "Rule for unsolicited internet traffic to the internal LAN",
          "options": ["Allow all", "Deny by default (implicit deny)", "Allow if from DMZ", "Log only, allow"],
          "correct": "Deny by default (implicit deny)",
          "task": "t2"
        }
      ],
      "payload": {
        "label": "DEPLOY RULESET",
        "placeholder": "deploy ruleset dmz-baseline",
        "button": "Run",
        "response": "[OUT] External -> DMZ: allow 443 to web server only.\n[OUT] DMZ -> Internal: allow app tier on defined ports.\n[OUT] External -> Internal: implicit deny. Ruleset active.",
        "task": "t3"
      },
      "commands": [
        {
          "cmd": "show zones",
          "out": "[NET] external -> untrusted internet\n[NET] DMZ -> web/mail (public services)\n[NET] internal -> workstations, databases\n[NET] default action: implicit deny",
          "task": "t4"
        },
        { "cmd": "show status", "out": "Segmentation engine nominal." }
      ]
    }
  },
  {
    "id": "Lab 09",
    "num": 9,
    "group": "COMMUNICATION & NETWORK",
    "title": "Mapping OSI Layers to Secure Protocols",
    "desc": "Match security protocols to the OSI layer they operate at and select the right one for a requirement. You place TLS and IPsec on the model, choose a protocol for a use case, then confirm the layer mapping.",
    "objectives": [
      "Map protocols to the correct OSI layer.",
      "Select a secure protocol for confidentiality in transit.",
      "Distinguish transport-layer from network-layer protection."
    ],
    "console": {
      "host": "cissp-lab09",
      "boot": [
        "[SYS] OSI protocol mapping lab online.",
        "[SYS] Reference model: 7 layers loaded."
      ],
      "tasks": [
        { "id": "t1", "label": "Place TLS at its OSI layer" },
        { "id": "t2", "label": "Place IPsec at its OSI layer" },
        { "id": "t3", "label": "Select a protocol to secure a web session" },
        { "id": "t4", "label": "Show the OSI protocol map" }
      ],
      "configs": [
        {
          "id": "c1",
          "label": "OSI layer at which TLS primarily operates",
          "options": ["Layer 2 (Data Link)", "Layer 3 (Network)", "Layer 4 (Transport)", "Layer 7 (Application)"],
          "correct": "Layer 4 (Transport)",
          "task": "t1"
        },
        {
          "id": "c2",
          "label": "OSI layer at which IPsec operates",
          "options": ["Layer 2 (Data Link)", "Layer 3 (Network)", "Layer 4 (Transport)", "Layer 6 (Presentation)"],
          "correct": "Layer 3 (Network)",
          "task": "t2"
        }
      ],
      "payload": {
        "label": "SELECT WEB SESSION PROTOCOL",
        "placeholder": "select protocol --use https",
        "button": "Run",
        "response": "[OUT] Requirement: encrypt an HTTP session end to end.\n[OUT] HTTPS selected (HTTP over TLS at the transport layer).\n[OUT] Confidentiality and server authentication provided.",
        "task": "t3"
      },
      "commands": [
        {
          "cmd": "show osi",
          "out": "[OSI] L7 application -> HTTP, DNS, S/MIME\n[OSI] L4 transport -> TLS\n[OSI] L3 network -> IPsec\n[OSI] L2 data link -> PPTP, L2TP, 802.1X",
          "task": "t4"
        },
        { "cmd": "show status", "out": "Protocol map nominal." }
      ]
    }
  },
  {
    "id": "Lab 10",
    "num": 10,
    "group": "COMMUNICATION & NETWORK",
    "title": "Configuring a Site-to-Site VPN",
    "desc": "Stand up an IPsec tunnel between two offices with the correct mode and protocol. You choose tunnel mode and an encapsulation that protects confidentiality, bring the tunnel up, then confirm the negotiated parameters.",
    "objectives": [
      "Choose IPsec tunnel mode for gateway-to-gateway traffic.",
      "Select ESP for confidentiality over AH.",
      "Validate a negotiated IPsec security association."
    ],
    "console": {
      "host": "cissp-lab10",
      "boot": [
        "[SYS] VPN configuration lab online.",
        "[SYS] Peers: HQ gateway <-> branch gateway."
      ],
      "tasks": [
        { "id": "t1", "label": "Choose the IPsec mode for gateway-to-gateway" },
        { "id": "t2", "label": "Choose the protocol that encrypts the payload" },
        { "id": "t3", "label": "Bring the tunnel up and negotiate the SA" },
        { "id": "t4", "label": "Show the tunnel status" }
      ],
      "configs": [
        {
          "id": "c1",
          "label": "IPsec mode for a site-to-site gateway tunnel",
          "options": ["Transport mode", "Tunnel mode", "Passive mode", "Promiscuous mode"],
          "correct": "Tunnel mode",
          "task": "t1"
        },
        {
          "id": "c2",
          "label": "IPsec protocol that provides confidentiality (encryption)",
          "options": ["AH (Authentication Header)", "ESP (Encapsulating Security Payload)", "GRE", "PPTP"],
          "correct": "ESP (Encapsulating Security Payload)",
          "task": "t2"
        }
      ],
      "payload": {
        "label": "BRING TUNNEL UP",
        "placeholder": "tunnel up --peer branch-gw",
        "button": "Run",
        "response": "[OUT] IKE phase 1 established (main mode).\n[OUT] IPsec SA up: tunnel mode, ESP, AES-256, SHA-256.\n[OUT] Branch subnet reachable over encrypted tunnel.",
        "task": "t3"
      },
      "commands": [
        {
          "cmd": "show tunnel",
          "out": "[VPN] mode: tunnel | protocol: ESP\n[VPN] cipher: AES-256 | integrity: SHA-256\n[VPN] state: ESTABLISHED (SA active)",
          "task": "t4"
        },
        { "cmd": "show status", "out": "VPN engine nominal." }
      ]
    }
  },
  {
    "id": "Lab 11",
    "num": 11,
    "group": "IAM",
    "title": "Choosing an Access Control Model",
    "desc": "Match access control models to the environment that needs them. You select a model for a military system and one for a dynamic cloud policy, apply the model, then confirm it against the access catalog.",
    "objectives": [
      "Distinguish DAC, MAC, RBAC, and ABAC models.",
      "Select MAC for label-based mandatory enforcement.",
      "Select ABAC for attribute- and context-driven policy."
    ],
    "console": {
      "host": "cissp-lab11",
      "boot": [
        "[SYS] Access control model lab online.",
        "[SYS] Two environments staged: defense system, cloud app."
      ],
      "tasks": [
        { "id": "t1", "label": "Pick the model for mandatory label-based control" },
        { "id": "t2", "label": "Pick the model for attribute-based dynamic policy" },
        { "id": "t3", "label": "Apply the chosen model to the environment" },
        { "id": "t4", "label": "Show the access control model catalog" }
      ],
      "configs": [
        {
          "id": "c1",
          "label": "Model where the system enforces access by security labels",
          "options": ["DAC (discretionary)", "MAC (mandatory)", "RBAC (role-based)", "ABAC (attribute-based)"],
          "correct": "MAC (mandatory)",
          "task": "t1"
        },
        {
          "id": "c2",
          "label": "Model driven by attributes like department, device, and time",
          "options": ["DAC (discretionary)", "MAC (mandatory)", "RBAC (role-based)", "ABAC (attribute-based)"],
          "correct": "ABAC (attribute-based)",
          "task": "t2"
        }
      ],
      "payload": {
        "label": "APPLY ACCESS MODEL",
        "placeholder": "apply model --env cloud-app",
        "button": "Run",
        "response": "[OUT] ABAC policy engine bound to cloud-app.\n[OUT] Rule: allow if role=analyst AND device=managed AND geo=US.\n[OUT] Context-aware authorization active.",
        "task": "t3"
      },
      "commands": [
        {
          "cmd": "list models",
          "out": "[AC] DAC -> owner grants access\n[AC] MAC -> system enforces labels/clearance\n[AC] RBAC -> access by job role\n[AC] ABAC -> access by attributes + context",
          "task": "t4"
        },
        { "cmd": "show status", "out": "Access model engine nominal." }
      ]
    }
  },
  {
    "id": "Lab 12",
    "num": 12,
    "group": "IAM",
    "title": "Tuning Biometric Thresholds",
    "desc": "Calibrate a biometric reader by balancing false accepts against false rejects. You identify the metric a high-security site should minimize and the crossover point, adjust the sensitivity, then confirm the operating point.",
    "objectives": [
      "Define FAR (Type II), FRR (Type I), and CER for biometrics.",
      "Select the metric to minimize for a high-security deployment.",
      "Tune sensitivity to a defensible operating point."
    ],
    "console": {
      "host": "cissp-lab12",
      "boot": [
        "[SYS] Biometric tuning lab online.",
        "[SYS] Reader loaded: fingerprint scanner, default sensitivity."
      ],
      "tasks": [
        { "id": "t1", "label": "Pick the error rate a secure vault must minimize" },
        { "id": "t2", "label": "Identify the metric where FAR equals FRR" },
        { "id": "t3", "label": "Tune the sensitivity for a high-security door" },
        { "id": "t4", "label": "Show the biometric operating point" }
      ],
      "configs": [
        {
          "id": "c1",
          "label": "Error to minimize so unauthorized users are not admitted",
          "options": ["False Rejection Rate (Type I)", "False Acceptance Rate (Type II)", "Crossover Error Rate", "Enrollment time"],
          "correct": "False Acceptance Rate (Type II)",
          "task": "t1"
        },
        {
          "id": "c2",
          "label": "Metric where the FAR and FRR curves intersect",
          "options": ["False Acceptance Rate", "False Rejection Rate", "Crossover Error Rate (CER)", "Throughput rate"],
          "correct": "Crossover Error Rate (CER)",
          "task": "t2"
        }
      ],
      "payload": {
        "label": "TUNE SENSITIVITY",
        "placeholder": "tune sensitivity --target high-security",
        "button": "Run",
        "response": "[OUT] Sensitivity raised: FAR lowered to 0.01%.\n[OUT] FRR rose to 3% (more legitimate retries).\n[OUT] Trade-off accepted for a high-security entry point.",
        "task": "t3"
      },
      "commands": [
        {
          "cmd": "show biometrics",
          "out": "[BIO] FAR (Type II) -> impostor accepted (security risk)\n[BIO] FRR (Type I) -> valid user rejected (usability)\n[BIO] CER -> FAR = FRR (lower is a better reader)",
          "task": "t4"
        },
        { "cmd": "show status", "out": "Biometric engine nominal." }
      ]
    }
  },
  {
    "id": "Lab 13",
    "num": 13,
    "group": "IAM",
    "title": "Tracing a Kerberos SSO Flow",
    "desc": "Walk an authentication through the Kerberos ticketing sequence in a single sign-on domain. You identify which ticket the client requests first and which component issues service tickets, complete the exchange, then confirm the ticket chain.",
    "objectives": [
      "Order the Kerberos AS and TGS exchanges.",
      "Identify the TGT and service ticket roles.",
      "Explain how Kerberos enables single sign-on."
    ],
    "console": {
      "host": "cissp-lab13",
      "boot": [
        "[SYS] Kerberos SSO lab online.",
        "[SYS] KDC reachable: AS + TGS components up."
      ],
      "tasks": [
        { "id": "t1", "label": "Identify the ticket obtained first after login" },
        { "id": "t2", "label": "Identify the component that issues service tickets" },
        { "id": "t3", "label": "Complete the authentication exchange" },
        { "id": "t4", "label": "Show the ticket chain" }
      ],
      "configs": [
        {
          "id": "c1",
          "label": "Ticket the client receives first from the KDC",
          "options": ["Service ticket", "Ticket-Granting Ticket (TGT)", "Session cookie", "SAML assertion"],
          "correct": "Ticket-Granting Ticket (TGT)",
          "task": "t1"
        },
        {
          "id": "c2",
          "label": "KDC component that issues per-service tickets",
          "options": ["Authentication Service (AS)", "Ticket-Granting Service (TGS)", "Certificate Authority", "RADIUS server"],
          "correct": "Ticket-Granting Service (TGS)",
          "task": "t2"
        }
      ],
      "payload": {
        "label": "COMPLETE EXCHANGE",
        "placeholder": "authenticate --user jdoe --service fileshare",
        "button": "Run",
        "response": "[OUT] AS validated credentials, issued TGT.\n[OUT] Client presented TGT to TGS, received fileshare service ticket.\n[OUT] Service ticket accepted; SSO session established.",
        "task": "t3"
      },
      "commands": [
        {
          "cmd": "show tickets",
          "out": "[KRB] step 1: AS-REQ/AS-REP -> TGT issued\n[KRB] step 2: TGS-REQ/TGS-REP -> service ticket issued\n[KRB] step 3: AP-REQ to service -> access granted (SSO)",
          "task": "t4"
        },
        { "cmd": "show status", "out": "KDC nominal." }
      ]
    }
  },
  {
    "id": "Lab 14",
    "num": 14,
    "group": "ASSESSMENT & TESTING",
    "title": "Triaging Vulnerability Scan Results",
    "desc": "Prioritize findings from a credentialed scan so remediation effort goes where risk is highest. You rank findings by exploitability and exposure, filter false positives, then confirm the remediation queue.",
    "objectives": [
      "Prioritize findings by severity, exploitability, and exposure.",
      "Distinguish a true positive from a false positive.",
      "Build a risk-ranked remediation queue."
    ],
    "console": {
      "host": "cissp-lab14",
      "boot": [
        "[SYS] Vulnerability triage console online.",
        "[SYS] Scan imported: 214 findings across 40 hosts."
      ],
      "tasks": [
        { "id": "t1", "label": "Pick the finding to remediate first" },
        { "id": "t2", "label": "Classify a patched service flagged as vulnerable" },
        { "id": "t3", "label": "Run the risk-based prioritization" },
        { "id": "t4", "label": "Show the remediation queue" }
      ],
      "configs": [
        {
          "id": "c1",
          "label": "Finding to prioritize first",
          "options": ["Low CVSS on an isolated host", "Critical CVSS, internet-facing, exploit available", "Informational banner disclosure", "Medium CVSS behind two firewalls"],
          "correct": "Critical CVSS, internet-facing, exploit available",
          "task": "t1"
        },
        {
          "id": "c2",
          "label": "A finding on a service already patched and verified",
          "options": ["Confirmed critical", "False positive", "Zero-day", "Accepted risk"],
          "correct": "False positive",
          "task": "t2"
        }
      ],
      "payload": {
        "label": "RUN PRIORITIZATION",
        "placeholder": "prioritize scan --by risk",
        "button": "Run",
        "response": "[OUT] 214 findings ranked by CVSS x exposure x exploitability.\n[OUT] 6 critical internet-facing issues top the queue.\n[OUT] 18 false positives suppressed after validation.",
        "task": "t3"
      },
      "commands": [
        {
          "cmd": "show queue",
          "out": "[VULN] P1: RCE, internet-facing, exploit in the wild\n[VULN] P2: privilege escalation, internal server\n[VULN] P3: outdated TLS on intranet app\n[VULN] suppressed: 18 validated false positives",
          "task": "t4"
        },
        { "cmd": "show status", "out": "Triage console nominal." }
      ]
    }
  },
  {
    "id": "Lab 15",
    "num": 15,
    "group": "ASSESSMENT & TESTING",
    "title": "Selecting the Right Audit Report",
    "desc": "Pick the assurance report that answers a stakeholder's question about a service provider. You choose between SOC report types and scopes, request the report, then confirm the selection against the report catalog.",
    "objectives": [
      "Distinguish SOC 1, SOC 2, and SOC 3 report purposes.",
      "Distinguish Type I (design) from Type II (operating effectiveness).",
      "Match a report to a stakeholder assurance need."
    ],
    "console": {
      "host": "cissp-lab15",
      "boot": [
        "[SYS] Audit report selector online.",
        "[SYS] Vendor under review: cloud hosting provider."
      ],
      "tasks": [
        { "id": "t1", "label": "Pick the report for security/availability controls" },
        { "id": "t2", "label": "Pick the type proving controls operate over time" },
        { "id": "t3", "label": "Request the appropriate report" },
        { "id": "t4", "label": "Show the audit report catalog" }
      ],
      "configs": [
        {
          "id": "c1",
          "label": "Report covering security, availability, and confidentiality",
          "options": ["SOC 1", "SOC 2", "SOC 3 (public seal only)", "PCI SAQ"],
          "correct": "SOC 2",
          "task": "t1"
        },
        {
          "id": "c2",
          "label": "Report type that tests operating effectiveness over a period",
          "options": ["Type I (design at a point in time)", "Type II (operating over a period)", "Executive summary", "Gap assessment"],
          "correct": "Type II (operating over a period)",
          "task": "t2"
        }
      ],
      "payload": {
        "label": "REQUEST REPORT",
        "placeholder": "request report --type SOC2-TypeII",
        "button": "Run",
        "response": "[OUT] Requested: SOC 2 Type II under NDA.\n[OUT] Covers security, availability, confidentiality over 12 months.\n[OUT] Provides operating-effectiveness assurance for the vendor.",
        "task": "t3"
      },
      "commands": [
        {
          "cmd": "list reports",
          "out": "[SOC] SOC 1 -> financial reporting controls (ICFR)\n[SOC] SOC 2 -> trust services (security, etc.), under NDA\n[SOC] SOC 3 -> public general-use seal\n[SOC] Type I=design | Type II=operating effectiveness",
          "task": "t4"
        },
        { "cmd": "show status", "out": "Report selector nominal." }
      ]
    }
  },
  {
    "id": "Lab 16",
    "num": 16,
    "group": "SECURITY OPERATIONS",
    "title": "Sequencing Incident Response",
    "desc": "Drive a live incident through the response lifecycle in the correct order. You identify the phase that follows detection and the step that removes the threat, execute containment, then confirm the phase tracker.",
    "objectives": [
      "Order the incident response phases (detection, response, mitigation, reporting, recovery, remediation, lessons learned).",
      "Distinguish containment from eradication and recovery.",
      "Preserve evidence while restoring operations."
    ],
    "console": {
      "host": "cissp-lab16",
      "boot": [
        "[SYS] Incident response console online.",
        "[SYS] Alert: ransomware detected on 3 hosts."
      ],
      "tasks": [
        { "id": "t1", "label": "Pick the phase immediately after detection" },
        { "id": "t2", "label": "Pick the step that removes the malware" },
        { "id": "t3", "label": "Execute containment on the affected hosts" },
        { "id": "t4", "label": "Show the response phase tracker" }
      ],
      "configs": [
        {
          "id": "c1",
          "label": "Phase that follows detection to limit the damage",
          "options": ["Recovery", "Containment", "Lessons learned", "Eradication"],
          "correct": "Containment",
          "task": "t1"
        },
        {
          "id": "c2",
          "label": "Step that removes the malware and its persistence",
          "options": ["Containment", "Eradication", "Recovery", "Reporting"],
          "correct": "Eradication",
          "task": "t2"
        }
      ],
      "payload": {
        "label": "EXECUTE CONTAINMENT",
        "placeholder": "contain hosts --isolate",
        "button": "Run",
        "response": "[OUT] 3 hosts isolated from the network.\n[OUT] Volatile evidence and memory captured before shutdown.\n[OUT] Spread halted; ready for eradication and recovery.",
        "task": "t3"
      },
      "commands": [
        {
          "cmd": "show phases",
          "out": "[IR] detection -> containment -> eradication\n[IR] -> recovery -> reporting -> lessons learned\n[IR] preserve chain of custody throughout",
          "task": "t4"
        },
        { "cmd": "show status", "out": "IR console nominal." }
      ]
    }
  },
  {
    "id": "Lab 17",
    "num": 17,
    "group": "SECURITY OPERATIONS",
    "title": "Designing RAID and Backup Recovery",
    "desc": "Build resilience for a storage tier by choosing a RAID level and a backup strategy that meet recovery goals. You select a RAID level that survives a two-disk failure and a backup type for fast restores, run the recovery drill, then confirm the resilience plan.",
    "objectives": [
      "Match RAID levels to fault-tolerance requirements.",
      "Distinguish full, incremental, and differential backups.",
      "Validate a recovery plan against a restore-time goal."
    ],
    "console": {
      "host": "cissp-lab17",
      "boot": [
        "[SYS] Storage resilience lab online.",
        "[SYS] Array: 8 disks, critical database volume."
      ],
      "tasks": [
        { "id": "t1", "label": "Pick the RAID level surviving two simultaneous disk failures" },
        { "id": "t2", "label": "Pick the backup type restored from just two sets" },
        { "id": "t3", "label": "Run the recovery drill" },
        { "id": "t4", "label": "Show the resilience plan" }
      ],
      "configs": [
        {
          "id": "c1",
          "label": "RAID level that tolerates two concurrent disk failures",
          "options": ["RAID 0", "RAID 1", "RAID 5", "RAID 6"],
          "correct": "RAID 6",
          "task": "t1"
        },
        {
          "id": "c2",
          "label": "Backup type restored from the last full plus one set",
          "options": ["Incremental", "Differential", "Full only", "Snapshot chain"],
          "correct": "Differential",
          "task": "t2"
        }
      ],
      "payload": {
        "label": "RUN RECOVERY DRILL",
        "placeholder": "drill restore --from full+differential",
        "button": "Run",
        "response": "[OUT] Simulated dual-disk failure survived by RAID 6.\n[OUT] Restore = last full + latest differential (2 sets).\n[OUT] Volume recovered within the RTO. Drill passed.",
        "task": "t3"
      },
      "commands": [
        {
          "cmd": "show plan",
          "out": "[STOR] RAID 6 -> dual parity, survives 2 disk loss\n[BAK] full weekly + differential nightly\n[BAK] restore path: full + latest differential\n[BAK] offsite copy retained (3-2-1)",
          "task": "t4"
        },
        { "cmd": "show status", "out": "Storage resilience engine nominal." }
      ]
    }
  },
  {
    "id": "Lab 18",
    "num": 18,
    "group": "SECURITY OPERATIONS",
    "title": "Choosing a Disaster Recovery Site",
    "desc": "Select a recovery site that balances recovery speed against cost for a given RTO. You match a site type to an aggressive RTO and to a budget constraint, provision the site, then confirm the DR site comparison.",
    "objectives": [
      "Distinguish hot, warm, and cold recovery sites.",
      "Match a site type to an RTO and cost constraint.",
      "Validate a DR site against the recovery objective."
    ],
    "console": {
      "host": "cissp-lab18",
      "boot": [
        "[SYS] DR site selection console online.",
        "[SYS] Requirement: restore core services quickly at reasonable cost."
      ],
      "tasks": [
        { "id": "t1", "label": "Pick the site meeting a near-zero RTO" },
        { "id": "t2", "label": "Pick the lowest-cost site with the longest RTO" },
        { "id": "t3", "label": "Provision the selected recovery site" },
        { "id": "t4", "label": "Show the DR site comparison" }
      ],
      "configs": [
        {
          "id": "c1",
          "label": "Site type that can take over almost immediately",
          "options": ["Cold site", "Warm site", "Hot site", "Mobile trailer"],
          "correct": "Hot site",
          "task": "t1"
        },
        {
          "id": "c2",
          "label": "Cheapest site, but with the longest recovery time",
          "options": ["Hot site", "Warm site", "Cold site", "Mirrored site"],
          "correct": "Cold site",
          "task": "t2"
        }
      ],
      "payload": {
        "label": "PROVISION SITE",
        "placeholder": "provision site --type warm --rto 8h",
        "button": "Run",
        "response": "[OUT] Warm site provisioned: hardware ready, data restored from backup.\n[OUT] Estimated recovery time ~8 hours (RTO met).\n[OUT] Cost between cold and hot; balanced for the requirement.",
        "task": "t3"
      },
      "commands": [
        {
          "cmd": "show sites",
          "out": "[DR] hot -> fully equipped + live data, minutes RTO, highest cost\n[DR] warm -> hardware ready, restore data, hours RTO, mid cost\n[DR] cold -> space + power only, days RTO, lowest cost",
          "task": "t4"
        },
        { "cmd": "show status", "out": "DR console nominal." }
      ]
    }
  },
  {
    "id": "Lab 19",
    "num": 19,
    "group": "SOFTWARE DEV SECURITY",
    "title": "Identifying and Fixing an OWASP Flaw",
    "desc": "Diagnose an application vulnerability from its symptom and apply the correct fix. You name the flaw behind an unsanitized query and its remediation, deploy the patch, then confirm the secure-coding checklist.",
    "objectives": [
      "Identify common OWASP Top 10 vulnerabilities from symptoms.",
      "Select the correct remediation (e.g., parameterized queries).",
      "Validate a fix against a secure-coding standard."
    ],
    "console": {
      "host": "cissp-lab19",
      "boot": [
        "[SYS] Application security lab online.",
        "[SYS] Finding: user input concatenated directly into a SQL string."
      ],
      "tasks": [
        { "id": "t1", "label": "Name the vulnerability from the concatenated-query symptom" },
        { "id": "t2", "label": "Pick the primary fix for that vulnerability" },
        { "id": "t3", "label": "Deploy the code fix" },
        { "id": "t4", "label": "Show the secure-coding checklist" }
      ],
      "configs": [
        {
          "id": "c1",
          "label": "Vulnerability when input is concatenated into a SQL query",
          "options": ["Cross-site scripting (XSS)", "SQL injection", "Broken access control", "Security misconfiguration"],
          "correct": "SQL injection",
          "task": "t1"
        },
        {
          "id": "c2",
          "label": "Primary remediation for SQL injection",
          "options": ["Client-side validation only", "Parameterized queries (prepared statements)", "Longer passwords", "Disable logging"],
          "correct": "Parameterized queries (prepared statements)",
          "task": "t2"
        }
      ],
      "payload": {
        "label": "DEPLOY CODE FIX",
        "placeholder": "deploy fix --use prepared-statements",
        "button": "Run",
        "response": "[OUT] Query refactored to a parameterized prepared statement.\n[OUT] Input treated as data, never as executable SQL.\n[OUT] Injection test payloads now fail; regression tests pass.",
        "task": "t3"
      },
      "commands": [
        {
          "cmd": "show checklist",
          "out": "[SEC] validate + parameterize all inputs\n[SEC] encode output to prevent XSS\n[SEC] enforce least-privilege DB account\n[SEC] add SAST/DAST to the pipeline",
          "task": "t4"
        },
        { "cmd": "show status", "out": "AppSec lab nominal." }
      ]
    }
  },
  {
    "id": "Lab 20",
    "num": 20,
    "group": "SOFTWARE DEV SECURITY",
    "title": "Placing Controls in a DevSecOps SDLC",
    "desc": "Embed security controls at the right stage of the development lifecycle so defects are caught early. You place threat modeling and automated scanning in the correct phases, wire the pipeline gate, then confirm the SDLC control map.",
    "objectives": [
      "Map security activities to SDLC phases (shift-left).",
      "Place threat modeling in design and scanning in the pipeline.",
      "Validate a security gate in a CI/CD pipeline."
    ],
    "console": {
      "host": "cissp-lab20",
      "boot": [
        "[SYS] DevSecOps pipeline lab online.",
        "[SYS] SDLC phases: requirements, design, build, test, deploy."
      ],
      "tasks": [
        { "id": "t1", "label": "Place threat modeling in its SDLC phase" },
        { "id": "t2", "label": "Place static code scanning in the pipeline" },
        { "id": "t3", "label": "Wire the pipeline security gate" },
        { "id": "t4", "label": "Show the SDLC control map" }
      ],
      "configs": [
        {
          "id": "c1",
          "label": "SDLC phase where threat modeling adds the most value",
          "options": ["Deployment", "Design", "Post-incident", "Decommission"],
          "correct": "Design",
          "task": "t1"
        },
        {
          "id": "c2",
          "label": "Where automated SAST should run in DevSecOps",
          "options": ["Only in production", "In the CI build pipeline (shift-left)", "Once a year manually", "After a breach"],
          "correct": "In the CI build pipeline (shift-left)",
          "task": "t2"
        }
      ],
      "payload": {
        "label": "WIRE SECURITY GATE",
        "placeholder": "wire gate --fail-on high",
        "button": "Run",
        "response": "[OUT] SAST + dependency scan added to the CI pipeline.\n[OUT] Gate fails the build on any high-severity finding.\n[OUT] Security shifted left; defects caught before deploy.",
        "task": "t3"
      },
      "commands": [
        {
          "cmd": "show sdlc",
          "out": "[SDLC] requirements -> security requirements + abuse cases\n[SDLC] design -> threat modeling\n[SDLC] build/test -> SAST, DAST, dependency scan (gate)\n[SDLC] deploy -> IaC scan + monitoring",
          "task": "t4"
        },
        { "cmd": "show status", "out": "DevSecOps pipeline nominal." }
      ]
    }
  }
];
