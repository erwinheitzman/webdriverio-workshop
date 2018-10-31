Feature: To load the tips and tricks page

@LoadTipsAndTricksPage
Scenario: Load tips and tricks page
Given I am on the tips and tricks page
Then Title should match "Golden Retriever"
