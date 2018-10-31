Feature: Search for cat on the tips and tricks page

@SearchForCat
Scenario: Search for cat
Given I am on the tips and tricks page
When I type "cat" into the searchbar
Then Title should match "Yellow cat" eventually
