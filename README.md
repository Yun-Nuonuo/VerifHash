
# VerifHash (VSH) — Development Roadmap

**Document Version:** 2.0  
**Project:** VerifHash  
**Ticker:** VSH  
**Project Type:** Independent Proof-of-Work Blockchain  
**Codebase Origin:** VerusCoin  
**Current Development Status:** Core Development — In Progress

---

## 1. Project Vision

VerifHash aims to become an independently identifiable, transparent, and technically verifiable Proof-of-Work blockchain.

The project is being developed from the VerusCoin codebase, with its own network identity, genesis configuration, monetary design, and development direction.

The primary objectives are:

- Establish an independent blockchain network.
- Implement and verify VSH-specific consensus parameters.
- Maintain transparent development and technical documentation.
- Prioritize security and protocol correctness.
- Build a foundation that can be independently reviewed.

VerifHash is not affiliated with or officially endorsed by the VerusCoin development team.

## 2. Core Protocol Parameters

| Parameter | Current Design |
|---|---:|
| Ticker | VSH |
| Consensus Direction | Proof of Work |
| Initial Block Reward | 25 VSH |
| Target Block Time | 150 seconds |
| Halving Interval | 840,960 blocks |
| Decimal Precision | 8 |
| Theoretical Maximum Supply | 42,048,000 VSH |
| Premine | None |
| Presale | None |

The theoretical supply assumes a geometric halving schedule, with no additional issuance mechanisms. Exact consensus-level emission and rounding behavior must be verified through implementation and testing.

These parameters represent the current design and are subject to technical validation.

## 3. Development Status

| Phase | Description | Status |
|---|---|---|
| Phase 0 | Research and Project Design | In Progress |
| Phase 1 | Source Code Audit | In Progress |
| Phase 2 | Chain Identity and Network Separation | In Progress |
| Phase 3 | Consensus and Tokenomics | In Progress |
| Phase 4 | Genesis Block and Network Parameters | In Progress |
| Phase 5 | Regtest and Consensus Testing | Planned |
| Phase 6 | Multi-Node Testnet | Planned |
| Phase 7 | Security Review and Release Readiness | Planned |
| Phase 8 | Ecosystem and Long-Term Sustainability | Planned |

---

## 4. Development Phases

### Phase 0 — Research and Project Design

Objectives:
- Define project vision and scope.
- Study the upstream codebase and relevant blockchain designs.
- Establish technical development priorities.
- Review licensing and attribution requirements.
- Define the initial monetary and network design.

Status: In Progress

### Phase 1 — Source Code Audit and Fork Analysis

Objectives:
- Map the inherited source code architecture.
- Identify VerusCoin-specific dependencies.
- Review chain initialization and configuration.
- Review existing VSH modifications.
- Establish a reproducible build process.
- Preserve source history and development checkpoints.

Progress:
- Initial architecture mapping completed.
- VSH-specific modifications under review.
- Fork boundary and compatibility analysis ongoing.

Status: In Progress

### Phase 2 — Chain Identity and Network Separation

Objectives:
- Establish VSH chain identity.
- Separate VSH network parameters from upstream defaults.
- Configure network magic bytes and ports.
- Review address and wallet compatibility.
- Verify data-directory and network isolation.
- Audit remaining inherited identity references.

Progress:
- VSHTEST network identity recognized.
- Testnet P2P port: 28770.
- Testnet RPC port: 28771.
- Testnet network magic retrieved successfully.

Full network isolation and compatibility testing remain pending.

Status: In Progress

### Phase 3 — Consensus Design and Tokenomics

Objectives:
- Define the Proof-of-Work implementation.
- Establish block timing and difficulty rules.
- Implement the VSH block reward schedule.
- Implement the halving interval.
- Verify monetary precision and reward calculations.
- Audit coinbase and block reward validation.
- Verify the theoretical maximum supply.

Current design:
- Initial reward: 25 VSH.
- Block interval: 150 seconds.
- Halving interval: 840,960 blocks.
- Decimal precision: 8.
- Theoretical maximum supply: 42,048,000 VSH.

Consensus implementation and emission verification remain ongoing.

Status: In Progress

### Phase 4 — Genesis Block and Network Parameters

Objectives:
- Establish VSH mainnet genesis parameters.
- Construct a separate VSHTEST genesis block.
- Verify genesis hashes and Merkle roots.
- Verify network-specific initialization.
- Confirm network ports and magic bytes.
- Ensure clean database initialization uses the intended genesis block.

Development evidence:

**Mainnet**
- VSH-specific genesis implementation recorded in commit `e9ed580ed`.

**VSHTEST**
- Separate testnet genesis implementation recorded in commit `70131c040`.
- Dedicated testnet nonce: `0x43`.
- Testnet genesis hash:

```text
052b37425e943560fc7c3c5abd3e314bc3e898b5cb8c8a99467a54acc64792c6
```

**Initial testnet smoke test**

- Daemon startup: successful.
- Network name: VSHTEST.
- Testnet flag: true.
- P2P port: 28770.
- RPC port: 28771.
- Network magic: -91382607.
- Reported block reward: 25 VSH.
- Genesis hash retrieval: successful.

These results demonstrate initial testnet initialization and genesis retrieval. They do not yet establish complete consensus correctness, independent proof-of-work verification, or multi-node operation.

Remaining work:
- Verify genesis Merkle roots.
- Independently validate genesis construction.
- Test clean database initialization.
- Verify mainnet and testnet isolation.
- Audit inherited genesis dependencies.
- Preserve reproducible test evidence.

Status: In Progress

### Phase 5 — Regtest and Consensus Testing

Objectives:
- Establish an isolated regtest environment.
- Test block production.
- Validate transactions and blocks.
- Verify mining and proof-of-work validation.
- Test block rewards and halving boundaries.
- Test invalid block rejection.
- Verify restart and database recovery.
- Develop repeatable regression tests.

Status: Planned

### Phase 6 — Multi-Node Testnet

Objectives:
- Operate multiple independent VSH nodes.
- Verify peer connectivity.
- Test block and transaction propagation.
- Verify chain agreement.
- Test synchronization after disconnection.
- Test network isolation.
- Document network performance and limitations.

Status: Planned

### Phase 7 — Security Review and Release Readiness

Objectives:
- Review consensus-critical modifications.
- Audit reward and emission calculations.
- Review RPC and configuration security.
- Test wallet backup and recovery.
- Document build and installation procedures.
- Establish vulnerability reporting procedures.
- Conduct independent security review.
- Define mainnet release criteria.

Status: Planned

### Phase 8 — Ecosystem and Long-Term Sustainability

Objectives:
- Improve wallet and node usability.
- Publish developer documentation.
- Support miners and independent node operators.
- Develop practical ecosystem applications.
- Monitor decentralization and network participation.
- Establish protocol maintenance and upgrade procedures.

Status: Planned

---

## 5. Development Status Definitions

- **Planned:** Work has not started.
- **In Progress:** Work is actively being developed or tested.
- **Completed:** Implementation or task has been completed.
- **Verified:** Acceptance criteria have been supported by recorded test evidence.
- **Blocked:** Work cannot proceed until a dependency or issue is resolved.

A successful build or node startup alone does not qualify an entire development phase as completed.

## 6. Source Code and Attribution

VerifHash is independently developed using the VerusCoin codebase as its starting point.

Original project:
https://github.com/VerusCoin/VerusCoin

The original developers and contributors are acknowledged.

The VerifHash core source repository is currently private during active development.

This roadmap and the public project repository are maintained to provide transparent development updates.

Applicable upstream copyright notices and license obligations must be preserved.

## 7. Release Policy

Testnet functionality does not establish production readiness.

A public mainnet release requires:
- Verified consensus behavior.
- Validated block reward and emission rules.
- Successful mining and block validation tests.
- Multi-node synchronization.
- Security review.
- Documented operational procedures.
- An explicit release-readiness decision.

No mainnet readiness claim will be made solely on the basis of successful genesis initialization.

## 8. Project Resources

- Website: https://vsh.verifhash.workers.dev/
- Public Repository: https://github.com/Yun-Nuonuo/VerifHash
- Upstream Codebase: https://github.com/VerusCoin/VerusCoin

---

**Build Carefully. Verify Independently. Document Transparently.**
