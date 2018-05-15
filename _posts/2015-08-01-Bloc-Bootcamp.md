---
layout: post
title:  "Bloc Bootcamp"
date:   2015-08-01 16:23:06 -0800
categories: projects
featured-img: blocCover
---
# Bloc Bootcamp
I learned to code by attending an online bootcamp at [Bloc.io](https://www.bloc.io){:target="_blank"}. I did the iOS track, which is no longer available. At the time, they taught us Objective-C and paired us with experienced mentors which you have Skype meetings with twice a week. I think it was a great experience, meeting with my mentor, a senior iOS developer in Mountain View, was the best part. I grew a lot being able to ask him questions and build a foundation of not just what is possible but what is best practice. We became friends and still keep in contact nearly 3 years later.
On the downside, I think an onsite bootcamp could be better and necessary to learn more advanced topics. Also I wish they had done more to teach algorithms and data structures, which are necessary for job interviews. That was an unexpected and unhappy surprise when I started my job hunt, and Bloc only barely mentioned them the last week of the course.
Below you will find some summaries of projects I built at the bootcamp.

## Bloc Notes - Bloc Course Work
### Summary
[Bloc Notes](https://github.com/MadeByDouglas/BlocNotes){:target="_blank"} is a simple note taking app that uses Core Data for persistence. It simply needed to save and edit notes, and list them as well as provide a search feature. It was the first project I built, and the main skills I learned were Core Data, UITableView, UIActivityViewController, iOS 8 Extensions, UISearchController, UIDataDetectorTypes and integration with iCloud.
### Explanation
The Bloc iOS Development program is divided into two main phases: Foundation and Projects. After completing the many tutorials in Foundation, it's time to build things on your own. You chose from a selection of projects, and build the apps yourself without sample code. Bloc Notes is designed to introduce you to Core Data and other associated APIs.
### Problem
The app needed to be built from scratch and is outlined in steps how to build it. Essentially, each step highlights a particular item from iOS that a developer should learn, and by building Bloc Notes you learn them experientially.
The problems were laid out in essentially the following order:
1. Core Data
2. UITableView
3. UIActivityViewController
4. iOS 8 Extensions
5. UISearchController
6. UIDataDetectorTypes
7. Adding iCloud to Core Data
### Solution
I will briefly talk about each topic and how I solved it. In The next section, I will dive in to a few sections in more detail.
Core Data: Apple provides a good portion of the functionality I required via their boiler plate code when you select “Use Core Data” when creating the project. I made a few modifications to make it easier to work with.
1. Move relevant Core Data code out of AppDelegate and create new Class named “CoreDataManager” or something similar. Use this class as a singleton in the app to create, delete, and save changes to entities.
2. Ensure my URL for the store was name correctly, particularly later when I use App Groups for the Extension
3. I created a handy public method that handles the edge cases of saving content to my notes (such as if there are no changes, or the note is blank, etc) and I call this instead of just `[save context]`
#### UITableView
The main trick with this is making sure you have the necessary methods defined as it mentions in Apples Reference. For example, `- (NSInteger)tableView:(UITableView *)tableView numberOfRowsInSection:(NSInteger)section {`
and `- (UITableViewCell *)tableView:(UITableView *)tableView cellForRowAtIndexPath:(NSIndexPath *)indexPath {`
Finally, then make sure the `dequeueReusableCellWithIdentifier` matches what you want, typically what its called in the storyboard.
#### UIActivityViewController
Relatively straight forward as Apple handles the view controller being pushed and dismissed, so just follow the Apple Reference or look for examples online.
#### iOS 8 Extensions
The trickiest part of this was creating the App Group in your Developer account and learning all the syntax and making sure you’re flipping the switches you think you are. Once it’s set up and your Core Data is changed to reflect it setting up the VC is not too bad, I reuse my Core Data save method to create a new note from the extension.
#### UISearchController
This was the first part where I got stuck for several days. There are two trains of thought in how to solve this that I found from looking at places like Stack Overflow and Apple’s Reference and other Developer Documentation. The first is using an if statement to detect “search mode” and then repopulating your UITableViewController with the search content instead of the regular content. The other is creating a second UITableViewController class that is sent to the View when the search functionality is desired. After spending days trying to get the first to work I switched to the other and rewrote everything, following an Apple tutorial and it works just as its intended to now.
#### UIDataDetectorTypes
The actual implementation is quite straight forward, but surrounding this is making sure your text has a “edit mode” toggle as UIDataDetectorTypes doesn’t work while the user is typing. A useful blog that was recommended by Bloc helped clear this up.
#### Adding iCloud to Core Data
This one was tough, really tough. The end implementation is relatively simple, and it all circles around receiving the proper NSNotifications that Apple sends and changing the `NSPersistantStore` in Core Data to be a “Ubiquitous” PersistentStore, but even that all the names are so confusing. And getting to that point was tedious as many walkthroughs online detail the old iOS 6 method and separating that advice from the current iOS 7 method was difficult. After watching Apple’s lectures on both from WWDC 12 and 13 I was even more confused. It took many Stack Overflow posts and examples just looking at iOS 7 (and newer) to at least get a grasp at what was going on.
### Results
Different steps required more time and more revision than others. I was particularly stuck for a while on the `UISearchController` section and the iCloud section. Those were the most difficult challenges.
#### UISearchController
Once I created a new subclass of `UITableViewController` I named `ResultsTableViewController`, things became much clearer, if not easier. At the very least what I was doing made sense to me as I followed the Apple tutorial, and I believe it is a more robust solution than just using one TableVC even if I had got that method to work. What’s nice about having two TableVCs is I don't worry about populating my main one with wrong data, the only VC that will have the changing search data is my new VC, the initial one stays the same. So, this implicitly means even if the search is broken, it wont break other parts of the app, namely just viewing all of my notes in a TableView.
#### Integrating iCloud
I only did a basic implementation, and have not written code for edge cases, it simply turns iCloud on as soon as the app is run. It doesn’t sync properly, and sometimes create duplicates. I am not sure if this is a bug going from the simulator in Xcode 7 beta to my iPhone running iOS 9 beta, but unfortunately time constraints prevented me from continuing to investigate. Suffice to stay, it creates a Ubiquitous store, but the execution is still not usable.
### Conclusion
All of these problems have been solved except the iCloud integration. It still does not update regularly, and creates duplicates. I am not sure if this is a bug with the simulator on Xcode 7.
When Xcode 7 and iOS 9 are fully released and both my IDE and devices can be updated, I intend to revisit this and get it working properly. In addition, some refactoring of the code could probably be done to make things more readable. This project wasn’t the most fun, but I enjoy what I’ve learned from it. It gives me a foundation to build on. For example, I could use Core Data to build something much more interesting that requires a database and I am much more comfortable implementing UITableVCs with Search feature which can be useful in just about any App you might want to make.

## Blong - Bloc Course Work
### Summary
[Blong](https://github.com/MadeByDouglas/Blong){:target="_blank"} is a basic replica of the classic arcade game “Pong” that runs on iOS. This was my second project and it needed to track score, have an AI opponent to play against, and enable a “slingshot mode” that lets you start a round by flinging the ball “Angry Birds style” instead of it just starting by itself. The main skills I learned were UIKit Dynamics, UIViews, UIPanGestureRecognizer, and other associated general UI and UIKit APIs.
### Explanation
After completing Bloc Notes, I began Blong. Blong could be made using Apple’s SpriteKit API, but this project was made specifically to teach the student UIKit Dynamics. So, most of the project was understanding the various things you can do with UIKit Dynamics, such as Gravity, Collision, Snap, Attachment, and Push behaviors.
### Problem
The app needed to be built with UIKit Dynamics. Once you understand how to use the UIDynamicAnimator and basically just attach different effects to your items, it’s much less cerebral than other programming challenges I’ve experienced and comes down to trial and error. You read the documentation to understand how each affect can be tweaked, and then apply the force to your item. I will briefly explain how I solved the following problems to create the desired affect for a pong like game.
- Moving your paddle
- Have the ball bounce
- Moving the AI paddle
- Slingshot
- Tracking Score
### Solution
Moving your paddle: I used a `UIPanGesutreRecognizer` as there is only one thing to move, so the user can pan anywhere on the screen. I only adjust the x axis so the paddle moves side to side as its supposed to.
#### Having the ball bounce
I read some tutorials online and used some of their clever suggestions to get the ball and paddles acting properly. The first is to set the density of the paddles to something very high, so that they don't move when the ball hits them. Otherwise you have to create a boundary along the long edges of the phone as walls, but leave the top and bottom open as goals, I did this using `addBoundaryWithIdentifier`.
#### Moving the AI paddle
This was tricky for me, as I could easily make the AI paddle follow the ball using KVO and then a variety of methods, but then the AI would never lose. It would move the paddle perfectly all the time. So, after tying different solutions I came across a Pong app someone was making for a different platform entirely but basically they would push the paddle either left or right depending on where the ball was in relation to it. I mimicked this behavior using the UIPushBehavior and modify the force of the push and friction of the paddle to simulate different difficulty levels.
#### Slingshot
After the computer scores, the user gets to “fling” the ball at his opponent instead of it just starting at a random direction. I basically just put the ball in the middle with an invisible box around it, the user cannot move it outside that because my pan gesture tracks the distance between the finger and this box and won’t let the ball outside it. Once the user let’s go, i create another Push Behavior with a vector the opposite of the balls origin and its current location when it is let go, this makes it seem to “slingshot” back across the point of origin and in the opposite direction.
#### Tracking Score
This one seemed simple enough, inside the KVO have it track the balls position and flag if it goes past the paddle. I couldn't just say off screen, because you wouldn’t know who scored. Where it got tricky was the KVO would iterate over itself several times and depending on the speed of the ball it might trigger itself more than once. This created a less than desirable affect of certain “goals” being worth several points in an erratic nature. My Bloc mentor mentioned that I could just turn off the KVO once it’s triggered the point, and that did the trick.
### Results
The results are basically what I intended. Getting the AI to move and building the slingshot were my two biggest challenges, although tracking the score was surprisingly difficult until I was told how to disable KVO. It took lots of trial and error and reading ways to create an AI that is good but not perfect. My final results are not exactly how I would like them, I probably could tweak the Push Behavior constants to make the AI respond a little sooner, right now, even on “Medium” difficulty, because of his great density, it takes him a while to speed up and then he can shoot past the ball. I am particularly proud of the slingshot, because I was able to implement the algorithm with no outside help. I planned and executed the combination of UIPanGesture with UIPushBehavior and a UIView serving as an invisible bounding box simulating the end of a rubber band and the max stretch you could get. The push behavior properly adapts to the direction and force based on how and where you “stretch” the ball.
### Conclusion
All of the solutions solve their intended problems well enough, with perhaps the AI being tweaked some more to get him more competitive. There are many features I would like to add, to make it a more complete game. The first would be having the ball respond differently depending on where on the paddle it is hit. This is how the real Pong works, and adds a lot of skill to the game, as you can change the direction of the ball. Currently, it will just go based on its initial velocity and you can’t change that. There is also a lot of refactoring that could be done, right now all the code is in one VC and there are many things that could be subclassed to prevent duplicate lines. I liked the visual nature of this project, and intend to use what I’ve learned to combine various UIKit Dynamic Behaviors to create interactive UI elements. You can really make some interesting windows and animation effects using these tools.
