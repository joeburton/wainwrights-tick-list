# Wainwrights Tick List

Delete Fell

```
mutation DeleteFell {
  deleteFell(id:"6273b4a2bb2aa2e1f09b7e9b")
}
```

Delete Bulk

```
mutation DeleteBulk {
  deleteBulk(region: "TNF")
}
```

Get Fells

```
query GetFells {
  getFells {
    id
    name
    region
    metres
    feet
    latitude
    longitude
    climbed
    notes
    date
  }
}
```

Add Fell

```
mutation AddFell($name: String, $region: String, $metres: Int, $feet: Int, $latitude: String, $longitude: String, $climbed: Boolean, $notes: String,  $date: Date) {
  addFell(name: $name, region: $region, metres: $metres, feet: $feet, latitude: $latitude, longitude: $longitude, climbed: $climbed, notes: $notes, date: $date) {
    id
    name
    region
    metres
    feet
    latitude
    longitude
    climbed
    notes
    date
  }
}

Payload
{
 "name": "Skiddaw",
  "region": "TNF",
  "metres": 931,
  "feet": 3054,
  "latitude": "54.651408",
  "longitude": "-3.147798",
  "climbed": false,
  "date": 1647877693290,
  "notes": ""
}

```

Add Many Fells

```
mutation AddManyFells {
  addManyFells(input: [{name: "Skiddaw",
region: "TNF",
metres: 931,
feet: 3054,
latitude: "54.651408",
longitude: "-3.147798",
climbed: false,
date: 1647877693290,
notes: ""}, {
      name: "Blencathra",
      region: "TNF",
      metres: 868,
      feet: 2848,
      latitude: "",
      longitude: "",
      climbed: false,
      date: 1647877693290,
      notes: ""
    }]) {
    name
    region
    metres
    feet
    latitude
    longitude
    climbed
    notes
    date
  }
}
```
