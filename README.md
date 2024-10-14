==============================
==============================
Start README file
==============================
==============================

OPEN QUESTIONS
- Quiz - how to avoid the counting to be unlimited? and/or only have one point per question.
- Quiz - best way to optimise for mobile
- Footer - footer remains a struggle, does not remain at the bottom

To DO:
- Quiz - clean up the score after pressing "Restart"
- Keywords - add unique keywords for each page (relevant to the quiz)
- Images - add the right images and sizes to the different screen sizes
- Samsung 8 - update pages for smallest devices

# Quizprep - about the page
Welcome to Quizprep. A page that test your knowledge on three of the most sought after fantasy TV shows and movies. In the long term this could be a community let page where quizzes on all types of subjects can be shared and played, but to start the focus lies on the Witcher series, the Lord of the Rings movies (The early 2000 ones still win it for me!) and the Game of Thrones series (might skip the final episodes). The website allows you to play all three and tracks your score as you do it, hopefully helping you learn a few interesting facts on the shows. It also has a contact page through which feedback can be shared, bugs can be reported and new quiz ideas can be shared.

## Business goals
- get users excited about quizzes
- become a collective of quizzes on a large number of topics
- be easy to use and easy to come back to
- mobile focused design for a quick and on the go quiz action
- help users prepare for quiznight (etc.) or use Quizprep for this
- (long term) create a community that is excited about sharing an playing quizzes
- (optional) to make Quizprep profitable, the side bars on each side of the screen could contain advertisements (on mobile this could be added at the bottom of the page or in between quizzes)

## User goals
- enjoy a fun quiz (or two)
- quick, easy pass time activity
- learn something new about your favourite shows (lon gterm: a variety of topics)
- (long term) be an active member of this quiz community
- (long term) play new quizzes every week

# UX experience
As one of the main uses of Quizprep is aimed as quick and easy 'quizzing', the user experience of the pages is focused on the mobile device. Quizprep can absolutely be played on larger devices (and is adapted for it) but the clean layout, purposefully limited details and options, make that a user can get to their favourite quiz experience as soon as with a single click. The layout is adapted for each quiz to also 'set the right scene' when starting a quiz.

The homepage consists of:
- a brief introduction
- a clear button that lists all available quizzes, an 'advertised' quiz (could be a new, updated or in the long term a sponsored quiz)
- a short description of what Quizprep is
- and a few suggested quizzes

The quizpages themselves 'set the scene' through the use of images on the show in the background. Unique and relevant pictures are added for each question and a users knows instantly when their answer is correct or not through an added colorcoding on the border of the quiz area. Correct and incorrect answers are also counted which provides the user a final result at the end of the quiz, stating how many questions were answered correctly and how many were answered incorrectly.

A simple contact page is also available to provide feedback and/or to connect with the creators of Quizprep.

# User stories
In the short term the main user story would be someone looking to play a quiz on their favourite movie/series and finds this on one of the search engines. This could be through the home page or even directly on the quiz itself.

Main use for Quizprep would be for quick quiz fun. It is not expected that users will spend more then 5-10 minutes on the page depending on if they have found already the quiz they want to play. Target group would be anyone with 5 minutes to spare, when and wherever they are. The enjoyment comes from the quick excitement around the quiz topic and eventually the knowledge that Quizprep would be able to provide these quick spells of entertainment in the future through the multitude of quizzes that would be added.

In the long term, a quiz community could be created. Which would get the users coming back on a regular basis. To either play new quizzes or be a part of the quiz creator group. Creating/Suggesting quizzes that get the most users.

# Mobile users
Quizprep was created with a 'mobile first' mindset, before reviewing the websites funcitionality for tablets/desktops. Expecting the main userbase to arrive on the page through their mobile devices. The layout therefor is simple but efficient and pages were created mostly with the 'Samsung Galaxy S20 Ultra' as the main device. From there it has been adapted for larger screens and tested through a Macbook with a 16 inch screen.

Reasoning is two fold:
A - Mobile as a device is used in a much higher frequency then tablets or desktops/laptops
B - Quizprep aimes for quick and often 'on the go' users. Expected therefor is as well that specifically the Quizprep userbase would mostly visit through their mobile device

[screenshots]

# Wireframes
For my wireframes I used the Balsamiq app. First writing out the concept of Quizprep (what is it and what could it be in the future?). After which I wrote out the steps that needed to be taken to successfully create the website, followed by several page designs for the homepage and the quizpages (trying to find specifically the best/fun usage on a mobile device). As research shows that 85% (or some say more) of people is right handed, the current design was chosen to tailor to the masses (e.g. the 'Next' button is on the right of the page).

[screenshot]

When the base was set, I wrote out which steps the quizzes would need to take in Javascript (before attempting to code). Trying to find the logic behind the tool and what it would need to do/track, before even showing the first question.

[screenshot]

There are evidently a few differences between my original wireframe and the end result (e.g. having a slider present on the screen, showcasing the users overall score). This in favour of my current Javascript knowledge. However this does allow for future adaptations to include some of these features

[screenshot]

# Features

## NAV bar
The navigation bar is adaptable for smaller and larger screens. Making use of the "hamburger" menu for mobile and adding the homepage/contact links written out at the top of the page for larger devices. It still allows space for more menu options. Currently the different quizzes are also added for easy navigation while working on the site. However with the 'hidden class' added, they are only visible when desired, not for the users.

[screenshot for mobile and larger screen]

## Quizlist

## 'Advertised' Quiz

## Quiz suggestions

## Contact and Feedback page

## Visuals/Images adapted to the relevant quiz

## (Re)Start button 

## Next button

## Correct/Incorrect visualisation

## Score tracking

## Home button

## Simple consistent layout

## Footer with links to socials

## Future features

### 

# Testing
Testing of the various pages has been an ongoing process. Ensuring that mobile comes first has the benefit that overall the pages are tailored for it and will indeed look most streamlined on mobile. It has however ensured that in some cases the page look different on larger screens.

Testing has been performed on actual laptops and phone screens (Macbook pro & Samsung Galaxy S23).

## HTML validator test

## CSS validator test


## (Un)fixed bugs

## Deployment

The site was deployed to GitHub Pages. The steps to deploy are as follows:

- In the [GitHub repository](https://github.com/MJRidder/Ridder-Muziek-Service), navigate to the Settings tab
- From the source section drop-down menu, select the Main Branch, then click "Save".
- The page will be automatically refreshed with a detailed ribbon display to indicate the successful deployment.

The live link can be found [here](https://mjridder.github.io/Ridder-Muziek-Service/)

### Local Deployment
This project can be cloned or forked in order to make a local copy on your own system.

### Cloning
You can clone the repository by following these steps:

1. Go to the [GitHub repository](https://github.com/MJRidder/Ridder-Muziek-Service)
2. Locate the Code button above the list of files and click it
3. Select if you prefer to clone using HTTPS, SSH, or GitHub CLI and click the copy button to copy the URL to your clipboard
4. Open Git Bash or Terminal
5. Change the current working directory to the one where you want the cloned directory
6. In your IDE Terminal, type the following command to clone my repository:
- git clone https://github.com/MJRidder/Ridder-Muziek-Service
7. Press Enter to create your local clone.
Alternatively, if using Gitpod, you can click below to create your own workspace using this repository.

![Open in Gitpod](./assets/images/Readme%20screenshots/open-in-gitpod.png "Open in Gitpod")

Please note that in order to directly open the project in Gitpod, you need to have the browser extension installed. A tutorial on how to do that can be found [here](https://www.gitpod.io/docs/configure/user-settings/browser-extension).

### Forking
By forking the GitHub Repository, we make a copy of the original repository on our GitHub account to view and/or make changes without affecting the original owner's repository. You can fork this repository by using the following steps:

1. Log in to GitHub and locate the [GitHub repository](https://github.com/MJRidder/Ridder-Muziek-Service)
2. At the top of the Repository (not top of page) just above the "Settings" Button on the menu, locate the "Fork" Button.
3. Once clicked, you should now have a copy of the original repository in your own GitHub account!

## Local VS Deployment
There are no differences between my local and deployed site currently.

# Credits

## Tools Used

| Source | Location | Notes |
| --- | --- | --- |
| [Ezgif](https://ezgif.com/webp-to-jpg) | Example | Example |



## Resources Used

| Source | Location | Notes |
| --- | --- | --- |
| [W3schools](https://www.w3schools.com/) | Example | Example |
| [Medlineplus](https://medlineplus.gov/genetics/understanding/traits/handedness/) | Quizpage | % of righthanded vs. lefthanded users |


Special shout out to my mentor [Sheryl Goldberg](https://github.com/sherylg343) for supporting me in several sessions leading up to the completion of my P1 Portfolio project. I have learned a lot.

## Content/Media Used

| Source | Location | Notes |
| --- | --- | --- |
| [Samen Voorwaarts](https://www.samenvoorwaarts.nl/) | Example | Example |








SOURCES
- https://teamtreehouse.com/community/is-it-a-good-practice-to-use-boxsizing-all-the-time
- https://www.shecodes.io/


IMAGES
- https://variety.com/
- https://cdn.mos.cms.futurecdn.net/
- https://resizing.flixster.com/
- https://pyxis.nymag.com/
- https://imageio.forbes.com/
- https://www.watchmojo.com/
- https://statcdn.fandango.com/
- https://static0.gamerantimages.com/
- https://lirp.cdn-website.com/
- https://www.thephantastic.com/
- https://www.reddit.com/media?url=https%3A%2F%2Fi.redd.it%2Fgkd79981d2ad1.jpeg
- https://oyster.ignimgs.com/
- https://cdn.britannica.com/
- https://static1.srcdn.com/
- https://media.vanityfair.com/
