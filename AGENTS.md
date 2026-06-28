# Synthector Evidence Kit Agent Operating Rules

These rules apply to Codex and other AI coding agents working in this public evidence-kit repository.

## Mission boundary

This repo is a public, synthetic evidence kit. It is not the proprietary Synthector engine and must not become one accidentally.

## Do not include

Never add:

- proprietary engine code;
- detector, fusion, or redaction rule internals;
- production tenant configuration;
- secrets, keys, credentials, real signatures, or private endpoints;
- real PII, customer data, employee data, patient data, financial data, or confidential text;
- private validation corpus content;
- claims that the illustrative verifier proves production accuracy or compliance.

## Allowed content

Safe additions include:

- synthetic sample inputs;
- illustrative minimized outputs;
- metadata-only demo receipt examples;
- offline verifier checks for demo receipt shape and internal consistency;
- bounded documentation explaining what the kit proves and does not prove.

## Claim discipline

Use bounded language:

- `illustrative`, `synthetic`, `demo`, `shape verifier`, `metadata-only`, `example`.

Do not use stronger language unless the repo actually implements it:

- `production verifier`, `cryptographic verification`, `compliance attestation`, `accuracy benchmark`, `certified`, `complete`, `customer-ready`.

## Code discipline

- Keep verifier code small, local, and offline.
- Do not add network calls.
- Do not add dependencies without explicit approval.
- Preserve sample determinism and readability.

## Verification

For verifier or sample-shape changes, run or identify:

```sh
npm test
```

If tests cannot be run, report that clearly.

## Stop conditions

Stop and report if:

- the requested change would expose proprietary or sensitive material;
- a claim exceeds what the public kit proves;
- a dependency or network call seems necessary;
- samples risk resembling real personal data too closely.
