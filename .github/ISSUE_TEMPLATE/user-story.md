---
name: User story
about: this template defines a user story
title: ''
labels: ''
assignees: ''

---

> **As a** user
> **I need** to be able to upload a photo of a gift I want to donate
> **So that** other users can see what the item looks like before claiming it
> 
> ### Details and Assumptions
> * Images should be restricted to .jpg and .png formats.
> * Max file size should be 5MB.
> 
> ### Acceptance Criteria
> ```gherkin
> Given a user is on the "Add Gift" page
> When they click "Upload Image" and select a valid .jpg file
> Then the image should be previewed on the screen and successfully saved to the database upon submission
