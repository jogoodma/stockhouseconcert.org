# Performer Overrides Example

The refactored data structure now supports song-specific performers using the `performerOverrides` property.

## How to Use

Add `performerOverrides` to any song in the jazz1, jazz2, or jazz3 ensembles:

```json
"jazz1": {
  "title": "Hampton Ensemble Jazz Band",
  "director": "Natalie Boeyink",
  "performers": {
    "trumpet": [
      { "name": "Griffin Loudermilk", "gradYear": null },
      { "name": "Alex Akers", "gradYear": 2006 },
      { "name": "Joshua Griesemer", "gradYear": 2025 }
    ],
    "saxophone": [
      { "name": "Bob Hershberger", "gradYear": 1996 }
    ]
  },
  "songs": [
    {
      "title": "Back Home Again in Indiana",
      "composer": "Dominic Spera",
      "arranger": null,
      "performerOverrides": {
        "trumpet": [
          { "name": "Alex Akers", "gradYear": 2006 },
          { "name": "Joshua Griesemer", "gradYear": 2025 }
        ]
      }
    }
  ]
}
```

## How It Works

- **Base performers**: Listed at the ensemble level, represents all possible performers
- **performerOverrides**: Optional property on individual songs
- **Merging**: When a song has overrides:
  - Instruments specified in overrides use ONLY those performers
  - Instruments NOT in overrides use the base performers
  - A "View Performers" button appears under the song to show the specific lineup

## Example Result

For the song above:
- Trumpet section: Alex Akers, Joshua Griesemer (from override)
- Saxophone section: Bob Hershberger (from base performers)
