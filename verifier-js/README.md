# Demo Receipt Verifier

`verify-demo-receipt.mjs` validates the local shape of a sample receipt JSON file.

Run:

```sh
node verifier-js/verify-demo-receipt.mjs sample-receipts/contact-center.receipt.json
```

From the repository root, run:

```sh
npm test
```

The verifier checks:

- Required receipt fields exist.
- `attestation_mode` is `illustrative_demo`.
- `leak_status` is `pass` or `fail`.
- `entities_total` equals the sum of `entities_by_type`.

It does not use network access. It does not verify cryptographic signatures because the included receipts are illustrative demo receipts, not signed production receipts.
