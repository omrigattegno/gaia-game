# The Firebase SDK, served by the site itself

`10.12.0/` holds the three browser builds of the Firebase JavaScript SDK that the game loads
(app, auth, database; the "compat" builds). They are the files of the npm package
`firebase@10.12.0`, unchanged, so no script comes from another site while the game runs.
Copyright Google LLC, under the Apache License 2.0 (`LICENSE`).

| File | SHA-256 |
| --- | --- |
| `firebase-app-compat.js` | `367d0b9aef0a8c08717135c67d4bcc26a5d4a7103e228a1da7c33aedb91e285f` |
| `firebase-auth-compat.js` | `53de4f22563944851e5cbde4d89e930996b00301904adb69767d9e8b814c8247` |
| `firebase-database-compat.js` | `274e3b01a7b86dc52441f9d0980ba765b7df6e5eff6e2d05a5ae62980140eca8` |

To move to another version: `npm pack firebase@<version>`, copy the same three files from the
package into a folder named after the version, update the three `<script>` tags in `index.html`
and the table above, and delete the old folder. `tests/security.js` checks the files against the table.
