# Attestation Model

The receipts in this repository are illustrative demo receipts. They are JSON metadata examples with a fixed demo mode:

- `attestation_mode`: `illustrative_demo`
- `ruleset_version`: `demo-static-v0`

Each receipt records:

- A demo receipt version.
- A pass or fail leak status.
- Total entity count.
- Entity counts by placeholder type.
- Demo input and output hash fields.
- An issuance timestamp.
- Notes describing the receipt boundary.

The local verifier checks that required fields are present, that the attestation mode is the expected demo mode, that leak status is either `pass` or `fail`, and that `entities_total` matches the sum of `entities_by_type`.

These receipts are not JWS objects, cryptographic signatures, production attestations, or evidence of a live production request. They are included to show the public receipt shape and a minimal local validation path.
