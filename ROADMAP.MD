VERIFHASH (VSH)

MASTER DEVELOPMENT ROADMAP v1.0

Project Name: VerifHash
Ticker: VSH
Project Type: Independent Proof-of-Work Cryptocurrency
Codebase Origin: VerusCoin source code fork
Development Approach: Research, architecture review, implementation, testing, verification, and independent security assessment
Roadmap Status: Master Draft — Pending Formal Approval
Current Development Stage: Phase 1.2 — Fork Boundary Analysis

---

1. PROJECT VISION AND CORE PRINCIPLES

1.1 Project Vision

VerifHash aims to become a serious, independently identifiable Proof-of-Work cryptocurrency built on a technically sound, transparent, verifiable, and maintainable foundation.

The project prioritizes protocol correctness, security, transparent development, independent verification, and long-term sustainability over rapid feature releases or unsupported marketing claims.

The long-term ambition is to establish a cryptocurrency with a credible technical foundation, meaningful utility, sustainable development, and an ecosystem capable of growing beyond its initial implementation.

1.2 Core Principles

1. Security First — Consensus correctness and protection of users take priority over development speed.
2. Transparency by Design — Source code, design decisions, dependencies, testing procedures, and known limitations must be documented.
3. Verifiability — Technical claims must be supported by source code, specifications, reproducible tests, or other appropriate evidence.
4. Explicit Fork Boundaries — Inherited components must be understood and reviewed before they are modified or replaced.
5. Consensus Integrity — Monetary rules, block validation, network identity, and chain-selection behavior must be internally consistent.
6. Evidence-Based Progress — A phase is complete only when its acceptance criteria are supported by documented evidence.
7. Independent Review — Critical components must be prepared for external scrutiny and independent security assessment.
8. Long-Term Maintainability — The codebase must remain understandable, testable, upgradeable, and supportable.
9. Honest Communication — Planned features, implemented features, tested features, and independently audited features must never be presented as equivalent.
10. Controlled Expansion — New features must not compromise the correctness or security of the core protocol.

1.3 Project Scope

The project is divided into three development layers:

- Core Foundation: Source code, network identity, consensus, monetary rules, genesis, and node behavior.
- Verification and Security: Testing, reproducibility, documentation, independent review, and release readiness.
- Ecosystem and Sustainability: Real utility, developer participation, infrastructure resilience, adoption, and long-term maintenance.

The initial priority is to establish the core foundation before expanding the ecosystem.

PHASE 0 — RESEARCH, VISION & DESIGN REQUIREMENTS

0.1 Project Objectives

- Define the primary purpose of VerifHash.
- Identify the real problems the project intends to solve.
- Distinguish initial release objectives from long-term ambitions.
- Document the technical and operational boundaries of the project.

0.2 Technical and Competitive Research

- Study VerusCoin, Monero, and other relevant cryptocurrency projects.
- Compare consensus, mining, security, monetary design, privacy, utility, and maintenance approaches.
- Identify relevant lessons, limitations, and trade-offs.
- Avoid assuming that copying an existing feature will reproduce its security or success.

0.3 VerifHash Differentiation

- Define what makes VSH technically or functionally distinct.
- Identify claims that can be demonstrated through implementation.
- Distinguish genuine protocol-level differences from branding or configuration changes.
- Document the justification for each major design decision.

0.4 Target Users and Use Cases

- Identify intended users and developers.
- Define realistic usage scenarios.
- Determine how the project could provide value beyond speculative trading.
- Establish measurable indicators of usefulness and adoption.

0.5 Threat Model and Security Requirements

- Identify assets, trust assumptions, and potential attackers.
- Analyze threats to consensus, networking, wallets, mining, and infrastructure.
- Document expected security properties and known limitations.
- Define the security requirements that later phases must verify.

0.6 Minimum Viable Protocol

- Define the minimum feature set required for an initial testable network.
- Separate essential consensus functionality from optional features.
- Defer complex additions until their requirements and risks are understood.
- Establish explicit conditions for beginning testnet and considering mainnet.

0.7 Licensing and Source Attribution

- Verify the upstream license and applicable obligations.
- Review licenses for bundled and external dependencies.
- Document required notices, attribution, and source-distribution obligations.
- Verify compliance before distributing source code or binaries.

0.8 Initial Design Decision Register

- Record unresolved decisions about PoW, block timing, difficulty adjustment, rewards, and supply.
- Document alternatives and their advantages, disadvantages, and risks.
- Mark provisional parameters as proposals rather than finalized specifications.
- Record the evidence required to approve each decision.

Acceptance criteria: Project objectives, scope, threat model, research findings, licensing requirements, and unresolved design decisions are documented. No consensus parameter is considered final without review.

PHASE 1 — SOURCE CODE AUDIT & FORK BOUNDARY ANALYSIS

1.1 Source Code Architecture Mapping

- Map the source directory structure and build system.
- Identify the daemon entry point and startup sequence.
- Map network selection and chain-parameter initialization.
- Identify genesis construction and validation.
- Locate transaction and block validation logic.
- Locate block rewards, supply calculations, consensus parameters, and block-index initialization.
- Document the relationship between major subsystems.

Acceptance criteria: Initial architecture mapping is documented. This does not constitute a complete source code audit.

1.2 Fork Boundary Analysis

- Identify components that can be retained from the upstream codebase.
- Identify components requiring modification, replacement, or removal.
- Map dependencies on VerusCoin- and Komodo-specific functionality.
- Distinguish chain identity changes from consensus changes.
- Identify inherited assumptions that may not apply to VSH.
- Document technical rationale, dependencies, and unresolved risks.

Acceptance criteria: A reviewed component inventory identifies what to retain, modify, replace, or investigate further.

1.3 Existing Changes Review

- Review all existing source modifications.
- Inspect untracked files and backups without deleting them prematurely.
- Verify existing network-selection changes and their expected behavior.
- Inspect configuration-loading order and conflicting parameter handling.
- Record unresolved issues and configuration risks.

Acceptance criteria: Existing modifications are understood, preserved where necessary, and documented.

1.4 Reproducible Build Verification

- Record source revision, build configuration, operating system, compiler, and dependencies.
- Verify the build procedure using documented commands.
- Preserve build logs and results.
- Investigate build failures and resource constraints.
- Distinguish a successful build from a verified reproducible build.

Acceptance criteria: The build succeeds from a documented source revision and configuration. Any stronger reproducibility claim must have separate evidence.

1.5 Baseline and Recovery Procedure

- Establish a documented source baseline.
- Preserve and account for all existing modifications.
- Define a safe backup and recovery procedure.
- Establish Git checkpoints before risky changes.
- Verify that the baseline can be restored.

Acceptance criteria: The source baseline and recovery procedure are documented and verified.

Phase 1 acceptance criteria: The inherited architecture, existing modifications, build process, and fork boundaries are sufficiently understood to support controlled implementation.

PHASE 2 — CHAIN IDENTITY & NETWORK SEPARATION

2.1 Chain Identity

- Define the VerifHash name and VSH ticker.
- Map chain identity parameters and their initialization paths.
- Distinguish chain identity from network mode and asset-chain configuration.
- Identify parameters that affect compatibility and chain recognition.

2.2 Address and Key Encoding

- Identify address prefixes and encoding inherited from upstream.
- Review private-key and extended-key formats where applicable.
- Review coin type and derivation-path implications.
- Verify address-format compatibility and network separation.
- Document supported wallet functionality and limitations.

2.3 Network Magic Bytes and Ports

- Identify P2P message-start bytes and default network ports.
- Identify RPC port configuration.
- Verify consistency across network initialization paths.
- Test the rejection of messages from incompatible networks.

2.4 Wallet Compatibility Parameters

- Identify wallet-related network parameters.
- Review address generation, key encoding, and derivation behavior.
- Test wallet creation, import/export, and recovery where supported.
- Document compatibility limitations and potential conflicts.

2.5 Data Directory and Configuration Isolation

- Map data-directory selection and configuration loading.
- Verify separation of databases, wallets, and configuration files.
- Test isolation between supported network modes.
- Check the effects of command-line arguments and configuration files.

2.6 Upstream Identity Dependency Audit

- Search for remaining VerusCoin and Komodo identity references.
- Classify references as retain, modify, replace, or investigate.
- Verify actual usage before making changes.
- Distinguish cosmetic references from behavior-affecting dependencies.

2.7 Network Mode Isolation

- Review mainnet, testnet, and regtest parameter selection.
- Verify genesis, magic bytes, ports, and data directories.
- Test conflicting configurations and invalid network selections.
- Verify that each mode selects the intended parameters.

Phase 2 acceptance criteria: Chain identity and network parameters are documented, internally consistent, and verified through isolation tests.

PHASE 3 — CONSENSUS DESIGN & TOKENOMICS

3.1 Proof-of-Work Algorithm

- Verify the actual PoW algorithm implemented in the source.
- Map hashing, mining, and proof-of-work validation paths.
- Review implementation dependencies and mining compatibility.
- Evaluate security assumptions and potential mining centralization.
- Ensure the documented algorithm matches the implementation.

3.2 Block Time Target

- Evaluate the proposed 150-second block target.
- Map target spacing, timestamp rules, and related consensus parameters.
- Assess implications for confirmation times and network behavior.

3.3 Difficulty Adjustment

- Identify the inherited difficulty-adjustment algorithm.
- Review adjustment intervals, limits, and timestamp-related risks.
- Evaluate behavior during substantial hash-rate changes.
- Define tests for sudden increases, decreases, and unstable mining participation.

3.4 Initial Block Reward

- Evaluate the proposed initial reward of 50 VSH.
- Map all reward-calculation paths and special cases.
- Verify reward units and monetary precision.
- Ensure reward rules are enforced by consensus validation.

3.5 Halving Schedule

- Evaluate the proposed interval of 420,000 blocks.
- Define reward behavior at halving boundaries.
- Verify the schedule against block heights.
- Test integer arithmetic, rounding, and late emission periods.

3.6 Emission Schedule and Supply Calculation

- Calculate cumulative issuance across reward eras.
- Account for integer arithmetic, rounding, and special issuance rules.
- Determine whether the intended supply limit is mathematically enforced.
- Identify any exceptional issuance mechanisms.
- Compare the theoretical schedule with the implemented rules.

3.7 Monetary Units and Rounding

- Define the smallest monetary unit and decimal precision.
- Review integer rounding and reward calculations.
- Verify that rounding cannot introduce unintended issuance.
- Test monetary boundaries and overflow-sensitive operations.

3.8 Coinbase and Reward Validation

- Review coinbase reward validation and transaction fees.
- Test rejection of excessive block rewards.
- Identify all consensus-enforced issuance limits.
- Review special cases inherited from upstream.

3.9 Complete Reward and Supply Audit

- Map all reward and supply calculation paths.
- Review inherited special cases and asset-chain behavior.
- Compare independent calculations against node results.
- Document the complete emission formula and assumptions.

Phase 3 acceptance criteria: Consensus rules and tokenomics are explicitly specified, mathematically reviewed, and covered by a test plan. The implemented behavior must match the approved specification.

Proposed parameters — not finalized

- Initial block reward: 50 VSH
- Target block interval: 150 seconds
- Halving interval: 420,000 blocks
- Intended total supply: approximately 42,000,000 VSH

These are provisional design targets. The actual emission rules must be calculated and verified before any maximum-supply claim is published.

PHASE 4 — GENESIS BLOCK & NETWORK PARAMETERS

4.1 Genesis Parameter Specification

- Define genesis timestamp, coinbase data, version, nonce, and difficulty parameters as applicable.
- Document genesis requirements for each network mode.
- Ensure the specification matches the finalized consensus design.

4.2 Genesis Block Construction

- Implement or adapt genesis construction according to the finalized specification.
- Record all inputs and make the result reproducible.
- Document any scripts or tools used to generate the genesis block.

4.3 Genesis Hash and Merkle Root Verification

- Verify the resulting genesis hash and Merkle root.
- Validate proof-of-work requirements.
- Compare results against independent calculations.
- Record the expected values and verification procedure.

4.4 Network Identity Verification

- Verify that the genesis block matches the selected network parameters.
- Confirm that startup selects the intended parameters.
- Test clean initialization and invalid-parameter handling.

4.5 Port and Data Isolation Verification

- Verify network ports, magic bytes, configuration, and data directories.
- Check for conflicts between network modes.
- Confirm that fresh nodes initialize the intended chain.

4.6 Upstream Genesis Independence

- Identify and review inherited genesis references.
- Verify initialization from a clean database.
- Ensure the intended VSH genesis is used consistently.
- Document all differences from upstream genesis parameters.

Phase 4 acceptance criteria: Genesis construction and network parameters are consistent with the finalized consensus specification and independently verifiable.

PHASE 5 — REGTEST & CONSENSUS TESTING

5.1 Local Node Setup

- Run the node in an isolated regtest environment.
- Record configuration and startup logs.
- Document the exact commands needed to reproduce the environment.

5.2 Block Production

- Generate blocks and verify heights, hashes, and indexing.
- Check state persistence and expected block progression.

5.3 Transaction and Block Validation

- Test valid transactions and blocks.
- Test invalid structures and consensus violations.
- Verify rejection behavior and state consistency.

5.4 Reward Verification

- Test rewards at selected block heights.
- Compare actual results with independent calculations.
- Verify reward and fee handling.

5.5 Halving Boundary Tests

- Test the last block before halving and the first block of the next reward era.
- Verify the reward at every relevant boundary.
- Test rounding and small-reward behavior.

5.6 Invalid Data Rejection

- Test excessive coinbase rewards and invalid blocks.
- Test proof-of-work and other relevant consensus violations.
- Verify invalid data is rejected without corrupting chain state.

5.7 Restart and Database Recovery

- Restart the node and verify persisted state.
- Test controlled recovery scenarios.
- Inspect block-index and database consistency.

5.8 Regtest Isolation

- Verify separation from other network databases, ports, and configurations.
- Confirm that regtest settings cannot silently select another network.

5.9 Automated Test Coverage

- Automate repeatable consensus tests where practical.
- Preserve test inputs, expected results, and failure logs.
- Add regression tests for every fixed consensus defect.

Phase 5 acceptance criteria: Documented automated and manual tests pass, including negative tests for invalid consensus data. Test coverage and known gaps are recorded.

PHASE 6 — MULTI-NODE TESTNET

6.1 Multi-Node Environment

- Configure at least two independent testnet nodes.
- Use separate data directories and documented configurations.
- Record software versions and network parameters.

6.2 Peer Connectivity and Block Propagation

- Verify peer connections and block propagation.
- Compare block hashes and chain heights.
- Test disconnections and reconnections.

6.3 Transaction Propagation

- Verify transaction propagation between nodes.
- Test inclusion in blocks.
- Verify consistent handling of valid and invalid transactions.

6.4 Chain Agreement and Reorganization

- Test chain selection and recovery from competing valid chains.
- Verify consistent validation across nodes.
- Inspect reorganizations and state recovery.

6.5 Reconnection and Synchronization

- Disconnect a node, allow it to fall behind, and verify synchronization after reconnection.
- Confirm that nodes converge on the expected chain.

6.6 Network Isolation

- Test invalid or conflicting network configurations.
- Verify that VSH nodes do not mix with the upstream network.
- Inspect peer and seed-node configuration.

6.7 Test Results and Bug Tracking

- Preserve logs and reproducible test cases.
- Classify defects by severity.
- Retest after fixes and maintain a record of unresolved issues.

Phase 6 acceptance criteria: Multiple nodes communicate, synchronize, and validate the same chain under documented test scenarios. Known critical network defects must be resolved before proceeding.

PHASE 7 — SECURITY AUDIT & RELEASE READINESS

7.1 Transaction and Block Validation Audit

- Review transaction, block, contextual, and coinbase validation.
- Test invalid cases and regression scenarios.
- Review consensus-critical code changes and inherited assumptions.

7.2 Reward and Emission Audit

- Recalculate the emission schedule and supply.
- Verify reward limits, rounding, and special cases.
- Compare the specification, implementation, and test results.

7.3 RPC and Configuration Security

- Review RPC authentication and network exposure.
- Protect credentials and configuration files.
- Review process permissions and risky configuration options.
- Document recommended secure configurations.

7.4 Wallet Backup and Recovery

- Verify wallet backup and recovery procedures.
- Document compatibility limitations.
- Ensure private keys and recovery phrases are never exposed in public reports or logs.

7.5 Build and Installation Documentation

- Document dependencies, build steps, installation, and node operation.
- Record release versions and artifact-verification procedures.
- Provide sufficient information for others to inspect and build the source.

7.6 Release and Operational Procedures

- Define versioning and source-publication procedures.
- Prepare monitoring, incident response, backup, and update procedures.
- Document vulnerability reporting and handling.
- Define criteria for blocking or withdrawing a release.

7.7 Independent Security Review

- Define the scope of an external review.
- Prepare source code, specifications, threat models, and test evidence.
- Record findings, severity, remediation, and retest results.
- Clearly distinguish internal review from independent audit.
- Publish audit results when appropriate and safe.

7.8 Vulnerability Disclosure and Response

- Establish a vulnerability-reporting channel.
- Define triage, remediation, verification, and disclosure procedures.
- Document affected versions and mitigation steps.
- Maintain a record of resolved and outstanding security issues.

7.9 Mining and Infrastructure Risk Review

- Assess hash-rate concentration and mining dependencies.
- Review dependence on pools, seed nodes, DNS, hosting, and external services.
- Identify infrastructure single points of failure.
- Document resilience and recovery strategies.

7.10 Critical Bug Resolution

- Inventory identified defects.
- Prioritize consensus, security, and data-loss issues.
- Resolve critical issues and run regression tests.
- Explicitly document residual risks and release decisions.

7.11 Release Readiness Decision

- Verify that required tests and documentation are available.
- Review outstanding defects and security findings.
- Record the decision to proceed, delay, or reject a release.
- Require a separate mainnet-readiness decision and risk assessment.

Phase 7 acceptance criteria: Testing and operational procedures are documented, known critical issues are resolved, remaining risks are explicitly recorded, and independent audit claims are supported by actual reports. Passing this phase does not guarantee the absence of unknown vulnerabilities.

PHASE 8 — ECOSYSTEM & LONG-TERM SUSTAINABILITY

8.1 Wallet and User Experience

- Provide clear wallet and node usage instructions.
- Improve usability without compromising security.
- Document compatibility and recovery limitations.

8.2 Documentation and Developer Support

- Maintain technical documentation and user guides.
- Provide node, mining, contribution, and troubleshooting instructions.
- Keep documentation aligned with released software.

8.3 Real Utility and VerifHash Integration

- Define practical use cases supported by the VSH protocol or its applications.
- If document or hash verification is a primary use case, specify the data flow, proof mechanism, verification process, and limitations.
- Determine what data is stored on-chain and what remains off-chain.
- Consider privacy, permanence, revocation, and transaction-cost implications.
- Test the utility independently from branding and promotional claims.

8.4 Node, Miner, Developer, and Community Participation

- Make it easier to run nodes and participate in mining.
- Document contribution guidelines and code-review procedures.
- Establish a process for reporting issues and proposing changes.
- Measure participation using available, verifiable evidence.

8.5 Decentralization Monitoring

- Monitor hash-rate distribution and mining concentration.
- Evaluate dependence on specific operators and infrastructure.
- Document measurement methods, uncertainty, and limitations.

8.6 Adoption and Utility Metrics

- Track relevant network activity, verifiable node participation, utility usage, and developer contributions.
- Avoid using market price or market capitalization as the sole measure of success.
- Distinguish measured adoption from estimates and promotional claims.

8.7 Protocol Upgrades and Long-Term Maintenance

- Establish a documented protocol-change process.
- Review compatibility and consensus risks before upgrades.
- Maintain version histories and technical decision records.
- Define maintenance responsibilities and upgrade procedures.

Phase 8 acceptance criteria: The project has documented maintenance processes, useful and verifiable applications, active technical documentation, and measurable indicators of ecosystem sustainability.

DEVELOPMENT GOVERNANCE

The following requirements apply to every phase.

A. Evidence-Based Completion

No phase is complete merely because its checklist has been written or its code compiles. Completion requires evidence appropriate to the phase, such as reviewed code, specifications, logs, test results, or audit reports.

B. Change Management

- Use Git to track meaningful source changes.
- Preserve existing work before risky modifications.
- Document the reason for consensus-critical changes.
- Require regression testing after relevant modifications.

C. Technical Decision Records

For significant decisions, record:

- The problem being addressed.
- The alternatives considered.
- The chosen approach and rationale.
- Security and compatibility implications.
- Tests or evidence supporting the decision.
- Known limitations and future review requirements.

D. Testing and Verification

- Record the environment and commands used.
- Preserve test inputs, expected outputs, and actual results.
- Automate repeatable tests where practical.
- Track failed tests and unresolved defects.
- Reopen a completed phase when later evidence invalidates its conclusions.

E. Security and Disclosure

- Do not conceal critical defects to meet a release schedule.
- Do not expose private keys, credentials, or sensitive recovery data.
- Document security limitations and unresolved findings.
- Distinguish internal testing, external review, and independent security audits.

F. Status Definitions

- Planned: Work has not started.
- In Progress: Work is underway.
- Blocked: Work cannot proceed until a dependency or issue is resolved.
- Passed: Acceptance criteria are supported by recorded evidence.
- Needs Rework: New findings invalidate previous conclusions or require further changes.

G. Release Policy

Testnet success does not establish production security. Mainnet launch requires a separate readiness assessment, review of outstanding risks, and an explicit release decision.

CURRENT PROJECT STATUS

- Phase 0 — Research, Vision & Design Requirements: Needs Formalization
- Phase 1.1 — Source Code Architecture Mapping: Completed for Initial Scope
- Phase 1.2 — Fork Boundary Analysis: Current Active Task
- Phase 1.3 — Existing Changes Review: Pending Verification
- Phase 1.4 — Reproducible Build Verification: Pending Formal Verification
- Phase 1.5 — Baseline and Recovery Procedure: Pending Formal Verification
- Phase 2 — Chain Identity & Network Separation: Planned
- Phase 3 — Consensus Design & Tokenomics: Proposed, Not Finalized
- Phase 4 — Genesis Block & Network Parameters: Planned
- Phase 5 — Regtest & Consensus Testing: Planned
- Phase 6 — Multi-Node Testnet: Planned
- Phase 7 — Security Audit & Release Readiness: Planned
- Phase 8 — Ecosystem & Long-Term Sustainability: Planned

These statuses describe the initial project record and must be updated when new evidence becomes available.

FINAL OBJECTIVE

VerifHash aims to establish a cryptocurrency whose source code, network behavior, consensus rules, monetary issuance, testing procedures, and security limitations can be independently inspected and evaluated.

The objective is not simply to create a working cryptocurrency or imitate an established project. It is to develop a technically credible, transparent, verifiable, and maintainable foundation that can support long-term utility and ecosystem growth.

Every major claim must be supported by appropriate evidence.

Build carefully. Verify independently. Document transparently. Expand responsibly.
