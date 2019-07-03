## Functional Programming
Simply folder for different implementations of the following functional programming problem.

## The Problem:
Build a webserver with an endpoint that takes as an argument of a Magic The Gathering cardname and returns whether or not that card is a real Magic The Gathering card.

### Requirements:
- Hit an external API to determine if card is a real MTG card.
- After determining if card is real or not, store results in database.
- When a call is made to the endpoint, should always check database first to see if a determination has already been made about whether the card is real or not.
- External API must be based around https://docs.magicthegathering.io/. This includes setting up config for any auth info to use this API.

### Notes:
This is mostly about managing side effects and working with compositions of functions. The external API and Database can be mocked for any implementations. Even if mocked there still must be config.