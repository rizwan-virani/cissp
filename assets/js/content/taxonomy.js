/* CISSP :: content/taxonomy.js — CISSP drag-and-drop classification (8 activities). */
window.TAXONOMY = [
  {
    title: "Security Control Types",
    subtitle: "Classify each control by the functional type it represents.",
    instructions: "Drag each chip from the pool into the correct category drop zone, then click Check Answers for instant feedback. Click a chip's x button to return it to the pool.",
    categories: [
      { id: "preventive", label: "Preventive" },
      { id: "detective", label: "Detective" },
      { id: "corrective", label: "Corrective" },
      { id: "deterrent", label: "Deterrent" }
    ],
    items: [
      { text: "Mantrap that blocks tailgating into the data center", cat: "preventive" },
      { text: "Least-privilege access rules on a file share", cat: "preventive" },
      { text: "Firewall ruleset denying inbound traffic by default", cat: "preventive" },
      { text: "Full-disk encryption enforced on all laptops", cat: "preventive" },
      { text: "SIEM alert on repeated failed logon attempts", cat: "detective" },
      { text: "Motion-activated CCTV recording the loading dock", cat: "detective" },
      { text: "File integrity monitoring flagging a changed binary", cat: "detective" },
      { text: "Quarterly access recertification audit", cat: "detective" },
      { text: "Restoring a database from last night's backup", cat: "corrective" },
      { text: "Isolating an infected host and reimaging it", cat: "corrective" },
      { text: "Applying an emergency patch after exploitation", cat: "corrective" },
      { text: "Failing over to a warm site after an outage", cat: "corrective" },
      { text: "'Beware of Dog' and video-surveillance warning signage", cat: "deterrent" },
      { text: "Visible security guard patrolling the lobby", cat: "deterrent" },
      { text: "Warning banner threatening prosecution at logon", cat: "deterrent" },
      { text: "Publicized policy of monitoring all employee activity", cat: "deterrent" }
    ]
  },
  {
    title: "Access Control Models",
    subtitle: "Match each characteristic or scenario to the access control model it describes.",
    instructions: "Drag each chip from the pool into the correct category drop zone, then click Check Answers for instant feedback. Click a chip's x button to return it to the pool.",
    categories: [
      { id: "mac", label: "MAC" },
      { id: "dac", label: "DAC" },
      { id: "rbac", label: "RBAC" },
      { id: "abac", label: "ABAC" }
    ],
    items: [
      { text: "System enforces access using classification labels and clearances", cat: "mac" },
      { text: "Users cannot alter permissions; the system decides centrally", cat: "mac" },
      { text: "Top Secret data is unreadable by a Secret-cleared subject", cat: "mac" },
      { text: "Common in military and multilevel-secure environments", cat: "mac" },
      { text: "The data owner grants other users access at their discretion", cat: "dac" },
      { text: "NTFS file permissions set by the file's creator", cat: "dac" },
      { text: "Access follows an access control list the owner maintains", cat: "dac" },
      { text: "Permissions assigned to a 'Billing Clerk' job function", cat: "rbac" },
      { text: "A new hire inherits access simply by joining the Nurse role", cat: "rbac" },
      { text: "Access is grouped by organizational position, not identity", cat: "rbac" },
      { text: "Rules combine department, time of day, and device posture", cat: "abac" },
      { text: "Policy: allow if user.clearance >= doc.level AND location = HQ", cat: "abac" },
      { text: "Dynamic decisions evaluated from subject, object, and environment attributes", cat: "abac" },
      { text: "Fine-grained authorization driven by XACML policy evaluation", cat: "abac" }
    ]
  },
  {
    title: "OSI Layer Placement",
    subtitle: "Sort each protocol, device, or PDU into the OSI layer where it operates.",
    instructions: "Drag each chip from the pool into the correct category drop zone, then click Check Answers for instant feedback. Click a chip's x button to return it to the pool.",
    categories: [
      { id: "application", label: "Application (L7)" },
      { id: "transport", label: "Transport (L4)" },
      { id: "network", label: "Network (L3)" },
      { id: "datalink", label: "Data Link (L2)" },
      { id: "physical", label: "Physical (L1)" }
    ],
    items: [
      { text: "HTTP web request", cat: "application" },
      { text: "DNS name resolution", cat: "application" },
      { text: "SMTP email delivery", cat: "application" },
      { text: "TCP three-way handshake", cat: "transport" },
      { text: "UDP datagram service", cat: "transport" },
      { text: "Port numbers and segments", cat: "transport" },
      { text: "IP addressing and routing", cat: "network" },
      { text: "A router forwarding packets", cat: "network" },
      { text: "ICMP echo request", cat: "network" },
      { text: "MAC address and frames", cat: "datalink" },
      { text: "A Layer 2 switch's forwarding table", cat: "datalink" },
      { text: "ARP resolving IP to hardware address", cat: "datalink" },
      { text: "Cat 6 copper cabling", cat: "physical" },
      { text: "A hub repeating electrical signals", cat: "physical" },
      { text: "Bit-level voltage and RJ-45 pinouts", cat: "physical" }
    ]
  },
  {
    title: "Cryptography Type",
    subtitle: "Classify each algorithm or use case by the cryptographic primitive it relies on.",
    instructions: "Drag each chip from the pool into the correct category drop zone, then click Check Answers for instant feedback. Click a chip's x button to return it to the pool.",
    categories: [
      { id: "symmetric", label: "Symmetric" },
      { id: "asymmetric", label: "Asymmetric" },
      { id: "hashing", label: "Hashing" },
      { id: "signature", label: "Digital Signature" }
    ],
    items: [
      { text: "AES-256 encrypting a database at rest", cat: "symmetric" },
      { text: "ChaCha20 stream cipher for a VPN tunnel", cat: "symmetric" },
      { text: "3DES protecting a legacy payment link", cat: "symmetric" },
      { text: "A single shared secret key for encrypt and decrypt", cat: "symmetric" },
      { text: "RSA public/private key pair", cat: "asymmetric" },
      { text: "ECC key exchange on a mobile device", cat: "asymmetric" },
      { text: "Diffie-Hellman establishing a session key", cat: "asymmetric" },
      { text: "Encrypting with a recipient's public key", cat: "asymmetric" },
      { text: "SHA-256 producing a fixed-length digest", cat: "hashing" },
      { text: "Verifying a downloaded file's integrity checksum", cat: "hashing" },
      { text: "bcrypt storing a salted password value", cat: "hashing" },
      { text: "A one-way function that cannot be reversed", cat: "hashing" },
      { text: "Signing a contract's hash with the sender's private key", cat: "signature" },
      { text: "Providing nonrepudiation and origin authenticity", cat: "signature" },
      { text: "DSA validating that a message was not altered in transit", cat: "signature" }
    ]
  },
  {
    title: "CIA Triad Mapping",
    subtitle: "Map each control, threat, or goal to the CIA triad pillar it primarily affects.",
    instructions: "Drag each chip from the pool into the correct category drop zone, then click Check Answers for instant feedback. Click a chip's x button to return it to the pool.",
    categories: [
      { id: "confidentiality", label: "Confidentiality" },
      { id: "integrity", label: "Integrity" },
      { id: "availability", label: "Availability" }
    ],
    items: [
      { text: "Encrypting PII so unauthorized parties cannot read it", cat: "confidentiality" },
      { text: "A shoulder-surfing attack exposing a password", cat: "confidentiality" },
      { text: "Enforcing need-to-know on classified documents", cat: "confidentiality" },
      { text: "TLS protecting data in transit from eavesdropping", cat: "confidentiality" },
      { text: "A digital signature detecting record tampering", cat: "integrity" },
      { text: "A hash mismatch revealing an altered configuration file", cat: "integrity" },
      { text: "Version control preventing unauthorized code changes", cat: "integrity" },
      { text: "Input validation stopping SQL injection corruption", cat: "integrity" },
      { text: "A DDoS attack knocking a web service offline", cat: "availability" },
      { text: "Redundant power and a clustered failover node", cat: "availability" },
      { text: "RAID and off-site backups meeting the RTO", cat: "availability" },
      { text: "Ransomware encrypting production files for extortion", cat: "availability" },
      { text: "Load balancing to sustain traffic spikes", cat: "availability" }
    ]
  },
  {
    title: "Risk Treatment Options",
    subtitle: "Classify each decision by the risk treatment strategy it represents.",
    instructions: "Drag each chip from the pool into the correct category drop zone, then click Check Answers for instant feedback. Click a chip's x button to return it to the pool.",
    categories: [
      { id: "mitigate", label: "Mitigate" },
      { id: "transfer", label: "Transfer" },
      { id: "accept", label: "Accept" },
      { id: "avoid", label: "Avoid" }
    ],
    items: [
      { text: "Deploy MFA to reduce account-takeover likelihood", cat: "mitigate" },
      { text: "Patch a critical CVE to shrink the attack surface", cat: "mitigate" },
      { text: "Add a WAF in front of a vulnerable web app", cat: "mitigate" },
      { text: "Encrypt backups to lower breach impact", cat: "mitigate" },
      { text: "Purchase cyber-liability insurance for breach costs", cat: "transfer" },
      { text: "Outsource card processing to a PCI-compliant provider", cat: "transfer" },
      { text: "Contractually shift liability to a managed-service vendor", cat: "transfer" },
      { text: "Sign off on a low residual risk that costs too much to fix", cat: "accept" },
      { text: "Document management approval to run a legacy app as-is", cat: "accept" },
      { text: "Tolerate a minor risk below the risk appetite threshold", cat: "accept" },
      { text: "Cancel a feature whose data-handling risk is too high", cat: "avoid" },
      { text: "Decommission an unpatchable end-of-life server entirely", cat: "avoid" },
      { text: "Decline to enter a market with unacceptable compliance exposure", cat: "avoid" }
    ]
  },
  {
    title: "Incident Response Phase",
    subtitle: "Sort each activity into the incident response phase where it belongs.",
    instructions: "Drag each chip from the pool into the correct category drop zone, then click Check Answers for instant feedback. Click a chip's x button to return it to the pool.",
    categories: [
      { id: "detection", label: "Detection" },
      { id: "response", label: "Response" },
      { id: "mitigation", label: "Mitigation" },
      { id: "recovery", label: "Recovery" },
      { id: "lessons", label: "Lessons Learned" }
    ],
    items: [
      { text: "IDS alerts on anomalous outbound traffic", cat: "detection" },
      { text: "Analyst triages a SIEM event and declares an incident", cat: "detection" },
      { text: "A user reports a suspicious phishing email", cat: "detection" },
      { text: "Activate the CSIRT and assign an incident commander", cat: "response" },
      { text: "Begin evidence collection following chain of custody", cat: "response" },
      { text: "Notify management and legal per the escalation plan", cat: "response" },
      { text: "Isolate the compromised host from the network", cat: "mitigation" },
      { text: "Block the malicious C2 domain at the firewall", cat: "mitigation" },
      { text: "Disable the breached service account", cat: "mitigation" },
      { text: "Reimage the system and restore clean data", cat: "recovery" },
      { text: "Validate systems and return them to production", cat: "recovery" },
      { text: "Monitor closely to confirm the threat is eradicated", cat: "recovery" },
      { text: "Hold a post-incident review to update the playbook", cat: "lessons" },
      { text: "Document root cause and recommend control improvements", cat: "lessons" }
    ]
  },
  {
    title: "Security Models & Properties",
    subtitle: "Match each rule or property to the formal security model it belongs to.",
    instructions: "Drag each chip from the pool into the correct category drop zone, then click Check Answers for instant feedback. Click a chip's x button to return it to the pool.",
    categories: [
      { id: "belllapadula", label: "Bell-LaPadula" },
      { id: "biba", label: "Biba" },
      { id: "clarkwilson", label: "Clark-Wilson" },
      { id: "brewernash", label: "Brewer-Nash" }
    ],
    items: [
      { text: "No read up (simple security property)", cat: "belllapadula" },
      { text: "No write down (star property)", cat: "belllapadula" },
      { text: "Focused on protecting confidentiality via labels", cat: "belllapadula" },
      { text: "No read down (simple integrity axiom)", cat: "biba" },
      { text: "No write up (star integrity axiom)", cat: "biba" },
      { text: "Focused on preventing corruption of higher-integrity data", cat: "biba" },
      { text: "Well-formed transactions preserve data integrity", cat: "clarkwilson" },
      { text: "Separation of duties enforced through the access triple", cat: "clarkwilson" },
      { text: "Subjects act on data only via certified programs", cat: "clarkwilson" },
      { text: "Access changes dynamically to block conflict-of-interest", cat: "brewernash" },
      { text: "Also known as the Chinese Wall model", cat: "brewernash" },
      { text: "Prevents an analyst from advising two competing clients", cat: "brewernash" },
      { text: "Data grouped into conflict-of-interest classes", cat: "brewernash" }
    ]
  }
];
