// ─────────────────────────────────────────────────────────────────────────
//  GUEST LIST  (drives the RSVP search + per-person attendance form)
//
//  Each object below is ONE invited party (household). Guests search by any
//  name in the party, pick it, then each named person gets Friday + Saturday
//  Yes/No toggles.
//
//  Fields:
//    label        → what shows in the dropdown (the names on the invitation)
//    members      → every named person who gets their own RSVP row
//    extraGuests  → number of blank "fill in a name" plus-one slots to offer
//                   (0 = none). Only used where the invite said "plus 1"/"+2".
//
//  To edit: fix a spelling, add/remove a name in `members`, or change
//  `extraGuests`. Keep names spelled the way you want them recorded.
// ─────────────────────────────────────────────────────────────────────────

export const parties = [
  { label: 'Jeff Myers & Kellie Myers',        members: ['Jeff Myers', 'Kellie Myers', 'Mikey', 'Danny', 'Kerry', 'Brielle'], extraGuests: 0 },
  { label: 'Dan & Jean Murphy',                members: ['Dan Murphy', 'Jean Murphy'],                    extraGuests: 0 },
  { label: 'Carol Murphy',                     members: ['Carol Murphy'],                                 extraGuests: 1 },
  { label: 'Evelyn Myers',                     members: ['Evelyn Myers'],                                 extraGuests: 2 }, // list said "plus 1 or 2?" → up to 2 optional slots
  { label: 'Steve Myers & Holly Tillman',      members: ['Steve Myers', 'Holly Tillman'],                 extraGuests: 0 },
  { label: 'Kayla Myers',                      members: ['Kayla Myers'],                                  extraGuests: 1 },
  { label: 'Andrew Myers',                     members: ['Andrew Myers'],                                 extraGuests: 1 },
  { label: 'Kelly Heimerdinger & Bob Peterson', members: ['Kelly Heimerdinger', 'Bob Peterson'],          extraGuests: 0 }, // "bob's kids" intentionally not added
  { label: 'Shanon Maloy',                     members: ['Shanon Maloy', 'Dylan', 'Kadence'],             extraGuests: 0 },
  { label: 'Lexie Maloy & Shane Burke',        members: ['Lexie Maloy', 'Shane Burke'],                   extraGuests: 0 },
  { label: 'Grace Maloy & Zach Utley',         members: ['Grace Maloy', 'Zach Utley'],                    extraGuests: 0 },
  { label: 'Toni Bobcook & Kyle Winter',       members: ['Toni Bobcook', 'Kyle Winter'],                  extraGuests: 0 },
  { label: 'Tessa & Brady Reicks',             members: ['Tessa Reicks', 'Brady Reicks'],                 extraGuests: 0 },
  { label: 'Deb & Dave Heimerdinger',          members: ['Deb Heimerdinger', 'Dave Heimerdinger'],        extraGuests: 0 },
  { label: 'Judy Maloy',                       members: ['Judy Maloy'],                                   extraGuests: 0 },
  { label: 'Connie & Ronald Bethany',          members: ['Connie Bethany', 'Ronald Bethany'],             extraGuests: 0 },
  { label: 'Megan & Leeland Bethany',          members: ['Megan Bethany', 'Leeland Bethany'],             extraGuests: 0 },
  { label: 'Anna & Chase Bethany',             members: ['Anna Bethany', 'Chase Bethany'],                extraGuests: 0 },
  { label: 'Danyelle & Shane Bethany',         members: ['Danyelle Bethany', 'Shane Bethany'],            extraGuests: 0 },
  { label: 'Joseph & Danielle Maloy',          members: ['Joseph Maloy', 'Danielle Maloy', 'Morgan Maloy', 'Toni Maloy'], extraGuests: 0 },
  { label: 'Mattie & Alex Kohler',             members: ['Mattie Kohler', 'Alex Kohler'],                 extraGuests: 0 },
  { label: 'Shantel & AJ Maloy',               members: ['Shantel Maloy', 'AJ Maloy'],                    extraGuests: 0 },
  { label: 'Teresa Werner',                    members: ['Teresa Werner', 'Paige Werner'],                extraGuests: 0 },
  { label: 'Chelsey Iverson & Amanda Reiter',  members: ['Chelsey Iverson', 'Amanda Reiter'],             extraGuests: 0 },
  { label: 'Cody & Stephanie Iverson',         members: ['Cody Iverson', 'Stephanie Iverson'],            extraGuests: 0 },
  { label: 'Taylor & Tim Boesen',              members: ['Taylor Boesen', 'Tim Boesen'],                  extraGuests: 0 },
  { label: 'Lauren McCoy & Matthew Sandy',     members: ['Lauren McCoy', 'Matthew Sandy'],                extraGuests: 0 },
  { label: 'Tasha Palacioz & Nick Andersen',   members: ['Tasha Palacioz', 'Nick Andersen'],              extraGuests: 0 },
  { label: 'Alexandra Baltes & Matthew Behrens', members: ['Alexandra Baltes', 'Matthew Behrens'],        extraGuests: 0 },
  { label: 'Mckenna Cox & Jared Uhl',          members: ['Mckenna Cox', 'Jared Uhl'],                     extraGuests: 0 },
  { label: 'Rachel Rullestead',                members: ['Rachel Rullestead'],                            extraGuests: 0 },
  { label: 'Jackson Baumgarten',               members: ['Jackson Baumgarten'],                           extraGuests: 0 },
  { label: 'Erech Hazen',                      members: ['Erech Hazen'],                                  extraGuests: 0 },
  { label: 'Karli Schneider & Chris McAleer',  members: ['Karli Schneider', 'Chris McAleer'],             extraGuests: 0 },
  { label: 'Hayden Dumount',                   members: ['Hayden Dumount'],                                extraGuests: 0 },
  { label: 'Amanda & Chris Hollinger',         members: ['Amanda Hollinger', 'Chris Hollinger'],          extraGuests: 0 },
  { label: 'Cloe & Brock Littler',             members: ['Cloe Littler', 'Brock Littler'],                extraGuests: 0 },
  { label: 'Chelsea & Bryce Littler',          members: ['Chelsea Littler', 'Bryce Littler'],             extraGuests: 0 },
  { label: 'William & Kelsey Clark',           members: ['William Clark', 'Kelsey Clark', 'Tom Clark'],   extraGuests: 0 },
  { label: 'Aiden Lewis',                      members: ['Aiden Lewis'],                                  extraGuests: 1 },
  { label: 'Colby Morehouse & Breana Engelhardt', members: ['Colby Morehouse', 'Breana Engelhardt'],      extraGuests: 0 },
  { label: 'Rachel & Evan Rosonke',            members: ['Rachel Rosonke', 'Evan Rosonke'],               extraGuests: 0 },
  { label: 'Avery Houk & Jack Neff',           members: ['Avery Houk', 'Jack Neff'],                      extraGuests: 0 },
  { label: 'Tyler Wiltse',                     members: ['Tyler Wiltse'],                                 extraGuests: 0 },
  { label: 'Kaleb Scott',                      members: ['Kaleb Scott'],                                  extraGuests: 1 }, // "plus 1 : her name??" → guest fills in the name
  { label: 'Landon Kingkade & Autumn Sona',    members: ['Landon Kingkade', 'Autumn Sona'],               extraGuests: 0 },
  { label: "Nathan O'Donald",                  members: ["Nathan O'Donald"],                              extraGuests: 0 },
  { label: 'Dylan Princl',                     members: ['Dylan Princl'],                                 extraGuests: 0 },
  { label: 'Jacob Burgart',                    members: ['Jacob Burgart'],                                extraGuests: 0 },
  { label: 'Kenzie Swanson',                   members: ['Kenzie Swanson'],                               extraGuests: 0 },
  { label: 'Aly Brocka & Caleb Kaegle',        members: ['Aly Brocka', 'Caleb Kaegle'],                   extraGuests: 0 },
  { label: 'Preston Pickar & Jayden Winter',   members: ['Preston Pickar', 'Jayden Winter'],              extraGuests: 0 },
  { label: 'Austin Bast',                      members: ['Austin Bast'],                                  extraGuests: 0 },
  { label: 'Tanner & Rylee Peterson',          members: ['Tanner Peterson', 'Rylee Peterson'],            extraGuests: 0 },
  { label: 'Autumn Peterson & Connor Bailey',  members: ['Autumn Peterson', 'Connor Bailey'],             extraGuests: 0 },
  { label: 'Sydney Peterson & Issac Kalainoff', members: ['Sydney Peterson', 'Issac Kalainoff'],          extraGuests: 0 },
  { label: 'Trevor & Ethan Peterson',          members: ['Trevor Peterson', 'Ethan Peterson'],            extraGuests: 0 },
];

// Sort alphabetically for a tidier dropdown (comment out to keep manual order)
parties.sort((a, b) => a.label.localeCompare(b.label));
