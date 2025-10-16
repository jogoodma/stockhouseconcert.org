# Performer Overrides Example

The refactored data structure now supports song-specific performers using the `performerOverrides` property for jazz ensembles.

## Visual Layout

- **All Ensembles**: Use a tabbed interface to switch between Program and Performers views
- **Performers Tab**: Displays all performers who play in the ensemble (merged from base + all song overrides)
- **Jazz 3 (Tutti Encore)**: Simple song list only, no performers displayed

## How to Use

Add `performerOverrides` to any song in the jazz1 or jazz2 ensembles:

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
      { "name": "Bob Hershberger", "gradYear": 1996 },
      { "name": "Chris Billings", "gradYear": 2017 }
    ]
  },
  "songs": [
    {
      "title": "Back Home Again in Indiana",
      "composer": "Dominic Spera",
      "arranger": null
    },
    {
      "title": "Orange Colored Sky",
      "composer": "Milton DeLugg and Willie Stein",
      "arranger": "Roger Holmes",
      "performerOverrides": {
        "saxophone": [
          { "name": "Chris Billings", "gradYear": 2017 }
        ]
      }
    }
  ]
}
```

## How It Works

- **Base performers**: Listed at the ensemble level, represents the default/most common performers
- **performerOverrides**: Optional property on individual songs to specify different performers for that song
- **Performers Tab**: Shows a merged list of ALL unique performers across all songs:
  - Starts with base performers
  - Adds any additional performers from song overrides (avoiding duplicates)
  - Result: Complete roster of everyone who plays in the ensemble

## Example Result

For the ensemble above, the Performers tab would show:
- Trumpet: Griffin Loudermilk, Alex Akers, Joshua Griesemer (all from base)
- Saxophone: Bob Hershberger, Chris Billings (all from base)

Even if Chris Billings only plays on one song with an override, they still appear in the merged list.

## Benefits

- **Minimal duplication**: Common performers listed once in base
- **Flexibility**: Song-specific variations supported via overrides
- **Complete roster**: Performers tab shows everyone who plays in the ensemble
- **Clean UI**: Consistent tabbed interface across all ensembles
