# Application Tracker
Having browsed the subreddit [/r/cscareerquestions](https://reddit.com/r/cscareerquestions) for quite a while, I have noticed a new trend in threads where folks post the data pertaining to their job hunt (ex: a graph showing 100 applications submitted, 20 callbacks, 15 rejections, 5 interviews, 1 offer, etc). I thought it'd be neat to make a new tool that can be used to track this information, so software engineers can keep track of what sort of work they are applying for, where they are applying, and what resume they are applying with. The goal for the initial rollout is for this to serve as a clean and full-featured application tracker, and then expand into a sort of A/B tester for resumes where users can track which resumes are garnering more responses.
Hopefully, folks won't remain unemployed for too long, but I'd like to eventually expand this application to anonymize user resume information and then compare submitted resumes to job rejections and interview offers to look for meta trends.

## Getting Started
This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app), so you can anticpate being able to use all of the regular CRA and React functionality.

You can go here to get the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

You can run the application using "npm run start" from the terminal. Once running, the interface allows for three primary actions: importing a new job applied for, logging a new interview, and logging a job offer/ rejection. As of this writing (1/2/2020), the application is not yet wired up to a DB, so all data is not persistent.

The general flow for a user would be **Import a newly applied for job**, once they get some sort of response **Log the interview and or rejection**, if they received an interview, **Log the overall result**.

## Contributing
I'd be happy to have some folks help on this project! Official contributing rules TBD.

## Authors
**Nick Rodriguez** - *Initial work* [github](https://github.com/nickgrod)